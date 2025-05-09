/**
 * scripts.js - Main JavaScript for FutureHub
 * Handles navigation, search, bookmarks, theme toggling, and YouTube API integration
 */

/**
 * Hamburger Menu Toggle
 */
function initHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

/**
 * Close Menu on Link Click and Update Active Link
 */
function initNavLinks() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const hamburger = document.querySelector('.hamburger');
      const navMenu = document.querySelector('.nav-menu');
      if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      }
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
}

/**
 * Theme Persistence and Toggle
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;

  // Apply saved theme on load
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    themeToggle.querySelector('i')?.classList.replace('fa-moon', 'fa-sun');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-moon');
      icon.classList.toggle('fa-sun');
    }
  });
}

/**
 * GSAP Animations for Hero Section
 */
function initHeroAnimations() {
  gsap.from('.hero h1', { opacity: 0, y: 50, duration: 1, ease: 'power3.out' });
  gsap.from('.hero p', { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: 'power3.out' });
}

/**
 * Initialize Search with Fuse.js
 */
function initSearch() {
  const allResources = window.resources ? [
    ...window.resources.youtube || [],
    ...window.resources.books || [],
    ...window.resources.references || [],
    ...window.resources.images || [],
    ...window.resources.tools || [],
    ...window.resources.devTools || []
  ] : [];

  let fuse;
  if (typeof Fuse !== 'undefined') {
    fuse = new Fuse(allResources, {
      keys: [
        { name: 'title', weight: 0.5 },
        { name: 'description', weight: 0.3 },
        { name: 'category', weight: 0.1 },
        { name: 'year', weight: 0.05 },
        { name: 'rating', weight: 0.05 }
      ],
      threshold: 0.2,
      includeScore: true,
      ignoreLocation: true,
      useExtendedSearch: true
    });
  } else {
    console.warn('Fuse.js is not loaded. Search functionality is disabled.');
    return;
  }

  const searchCache = new Map();
  const searchInput = document.getElementById('resource-search');
  const suggestions = document.querySelector('.search-suggestions');
  const clearButton = document.querySelector('.clear-search');

  if (!searchInput || !suggestions || !clearButton) return;

  searchInput.addEventListener('input', debounce(e => {
    const query = e.target.value.trim().replace(/[\u0617-\u061A\u064B-\u065F]/g, '').replace(/[\u0622\u0623\u0625]/g, 'ا');
    clearButton.style.display = query ? 'block' : 'none';
    suggestions.innerHTML = '';

    if (query.length < 2) {
      suggestions.classList.remove('active');
      document.querySelectorAll('.resource-card').forEach(card => card.style.display = 'block');
      return;
    }

    try {
      let results = searchCache.get(query) || fuse.search(query).slice(0, 5);
      searchCache.set(query, results);

      if (!results.length) {
        suggestions.innerHTML = '<li>No results found</li>';
        suggestions.classList.add('active');
        return;
      }

      results.forEach(result => {
        const li = document.createElement('li');
        const title = result.item.title.replace(
          new RegExp(query, 'gi'),
          match => `<span class="highlight">${match}</span>`
        );
        li.innerHTML = `
          <div class="suggestion-item">
            <img src="${result.item.thumbnail || 'https://placehold.co/600x300/FFF/F00?font=Raleway&text=No+Image'}" alt="${result.item.title}" class="suggestion-thumbnail">
            <span>${title}</span>
          </div>
        `;
        li.tabIndex = 0;
        li.addEventListener('click', () => {
          searchInput.value = result.item.title;
          suggestions.classList.remove('active');
          filterCardsByTitle(result.item.title);
        });
        suggestions.appendChild(li);
      });

      suggestions.classList.add('active');
      filterCardsByTitle(query);
    } catch (error) {
      console.error('Search error:', error);
      showNotification('An error occurred while searching. Please try again.');
    }
  }, 300));

  document.addEventListener('click', e => {
    if (!searchInput.contains(e.target) && !suggestions.contains(e.target)) {
      suggestions.classList.remove('active');
    }
  });
}

/**
 * Filter Cards by Title or Description
 */
function filterCardsByTitle(query) {
  document.querySelectorAll('.resource-card').forEach(card => {
    const title = card.querySelector('h4')?.textContent.toLowerCase() || '';
    const description = card.querySelector('p')?.textContent.toLowerCase() || '';
    card.style.display = title.includes(query.toLowerCase()) || description.includes(query.toLowerCase()) ? 'block' : 'none';
  });
}

/**
 * Debounce Utility
 */
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Initialize Bookmarks
 */
function initBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || {};
  const bookmarkButtons = document.querySelectorAll('.bookmark-btn');

  bookmarkButtons.forEach(btn => {
    const card = btn.closest('.resource-card');
    if (!card) return;
    const id = card.dataset.id;
    if (!id) return;

    btn.classList.toggle('bookmarked', !!bookmarks[id]);
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    newBtn.addEventListener('click', () => {
      const isBookmarked = newBtn.classList.contains('bookmarked');
      newBtn.classList.toggle('bookmarked');

      if (!isBookmarked) {
        bookmarks[id] = true;
        showNotification(`Added "${card.querySelector('h4').textContent}" to bookmarks`);
        // gsap.to(newBtn, { scale: 1.2, duration: 0.1, ease: 'power2.out', yoyo: true, repeat: 1 });
      } else {
        delete bookmarks[id];
        showNotification(`Removed "${card.querySelector('h4').textContent}" from bookmarks`);
        // gsap.to(newBtn, { scale: 1, duration: 0.2, ease: 'power2.out' });
      }

      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      document.querySelectorAll(`.resource-card[data-id="${id}"] .bookmark-btn`).forEach(otherBtn => {
        otherBtn.classList.toggle('bookmarked', !isBookmarked);
      });

      document.dispatchEvent(new CustomEvent('bookmarksChanged', { detail: { bookmarks } }));
    });
  });
}

/**
 * Notification System
 */
function showNotification(message, type = 'online') {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  if (type === 'offline') notification.classList.add('offline');
  notification.innerHTML = `<i class="fas fa-${type === 'online' ? 'check-circle' : 'exclamation-circle'} mr-2"></i> ${message}`;
  document.body.appendChild(notification);

  // gsap.fromTo(notification, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' });
  setTimeout(() => {
    gsap.to(notification, {
      // opacity: 0,
      // y: -50,
      // duration: 0.5,
      ease: 'power2.in',
      onComplete: () => notification.remove()
    });
  }, 3000);
}

/**
 * Add Icons to Category Filter
 */
function initCategoryFilterIcons() {
  const iconMap = {
    'all': '🌐',
    'programming': '💻',
    'arabic-programming': '🇸🇦',
    'code-editors': '🖥️',
    'design': '🎨',
    'free-images': '🖼️',
    'premium-images': '🏞️',
    'english-learning': '📖',
    'arabic-education': '📚',
    'education': '🎓',
    'tools': '🔧',
    'ai-tools': '🤖',
    'api-tools': '🔗',
    'chrome-extensions': '🌐',
    'ai-websites': '🧠',
    'productivity': '📅',
    'content-creation': '✍️',
    'trading': '💹',
    'references': '📜'
  };

  document.querySelectorAll('#category-filter option').forEach(option => {
    const value = option.value;
    if (iconMap[value]) {
      option.textContent = `${iconMap[value]} ${option.textContent}`;
      option.setAttribute('data-icon', value);
    }
  });
}

/**
 * Move Search Button for Responsive Design
 */
function initSearchButtonPosition() {
  const voiceSearchContainer = document.querySelector('.voice-search-container');
  const searchButton = document.querySelector('.search-button');
  if (!voiceSearchContainer || !searchButton) return;

  const mediaQuery = window.matchMedia('(max-width: 768px)');

  function handleScreenSize(e) {
    if (e.matches) {
      voiceSearchContainer.appendChild(searchButton);
    } else {
      voiceSearchContainer.parentNode.insertBefore(searchButton, voiceSearchContainer.nextSibling);
    }
  }

  handleScreenSize(mediaQuery);
  mediaQuery.addEventListener('change', handleScreenSize);
}

/**
 * Initialize Export/Import Bookmarks
 */
function initBookmarkExportImport() {
  const exportBtn = document.getElementById('exportBookmarksBtn');
  const importInput = document.getElementById('importBookmarksInput');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      if (typeof exportBookmarks === 'function') {
        exportBookmarks();
      } else {
        showNotification('Export functionality is not available.', 'offline');
      }
    });
  }

  if (importInput) {
    importInput.addEventListener('change', event => {
      if (typeof importBookmarks === 'function') {
        importBookmarks(event);
      } else {
        showNotification('Import functionality is not available.', 'offline');
      }
    });
  }
}

/**
 * Placeholder for YouTube Channel Image Fetching
 * Add your API key and channel IDs in resources.js
 */
async function fetchYouTubeChannelImages() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your YouTube Data API key
  const channels = window.resources?.youtube || []; // Assumes channel IDs in resources.js
  const youtubeGrid = document.getElementById('youtube-grid');

  if (!apiKey || !channels.length || !youtubeGrid) return;

  for (const channel of channels) {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channel.id}&key=${apiKey}`
      );
      const data = await response.json();
      const imgUrl = data.items[0]?.snippet.thumbnails.high.url;
      if (imgUrl) {
        const card = youtubeGrid.querySelector(`.resource-card[data-id="${channel.id}"]`);
        if (card) {
          const img = card.querySelector('img');
          if (img) img.src = imgUrl;
        }
      }
    } catch (error) {
      console.error(`Failed to fetch image for channel ${channel.id}:`, error);
      showNotification('Failed to load some YouTube channel images.', 'offline');
    }
  }
}

/**
 * Network Status Handling
 */
function initNetworkStatus() {
  function handleNetworkStatus(event) {
    if (!navigator.onLine) {
      if (!window.location.pathname.includes('offline.html')) {
        localStorage.setItem('lastPage', window.location.pathname);
      }
      showNotification('You are offline. Some features may be unavailable.', 'offline');
      if (!window.location.pathname.includes('offline.html')) {
        setTimeout(() => {
          if (!navigator.onLine) window.location.href = 'offline.html';
        }, 3000);
      }
    } else if (event.type === 'online') {
      showNotification('You are back online!');
      if (window.location.pathname.includes('offline.html')) {
        const lastPage = localStorage.getItem('lastPage') || 'index.html';
        if (!lastPage.includes('offline.html')) {
          setTimeout(() => window.location.href = lastPage, 2000);
        }
      }
    }
  }

  const debouncedHandleNetworkStatus = debounce(handleNetworkStatus, 1000);
  window.addEventListener('offline', debouncedHandleNetworkStatus);
  window.addEventListener('online', debouncedHandleNetworkStatus);

  if (!navigator.onLine) debouncedHandleNetworkStatus({ type: 'offline' });
}

/**
 * Initialize All Features
 */
document.addEventListener('DOMContentLoaded', () => {
  initHamburgerMenu();
  initNavLinks();
  initThemeToggle();
  initHeroAnimations();
  initSearch();
  initBookmarks();
  initCategoryFilterIcons();
  initSearchButtonPosition();
  initBookmarkExportImport();
  initNetworkStatus();
  // fetchYouTubeChannelImages(); // Uncomment after adding API key and channel IDs
});

// Notification Styles
const style = document.createElement('style');
style.textContent = `
  .notification {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: var(--accent-gradient);
    color: var(--bg-primary);
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 10px var(--shadow-glow);
    z-index: 1000;
  }
`;
// document.head.appendChild(style);
