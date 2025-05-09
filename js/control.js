document.addEventListener('DOMContentLoaded', () => {
  const controlOrb = document.getElementById('controlOrb');
  const controlPanel = document.getElementById('controlPanel');
  const toggleImagesBtn = document.getElementById('toggleImages');
  const clearBookmarksBtn = document.getElementById('clearBookmarks');
  const orbIcon = controlOrb.querySelector('.orb-icon');
  let imagesVisible = localStorage.getItem('imagesVisible') === 'true'; // Ensure boolean value
  let isPanelOpen = false;

  // Update images visibility
  function updateImagesVisibility() {
    // Target all images in slider and cards-grid
    const images = document.querySelectorAll('.slider .resource-card img.card-media, .cards-grid .resource-card img.card-media');
    images.forEach(img => {
      img.style.display = imagesVisible ? 'block' : 'none';
      img.style.opacity = imagesVisible ? '1' : '0'; // Smooth transition
    });
    toggleImagesBtn.textContent = imagesVisible ? 'Hide Images' : 'Show Images';
    controlOrb.style.background = imagesVisible
      ? 'linear-gradient(135deg, #4db6ac, #81c784)'
      : 'linear-gradient(135deg, #e57373, #f06292)';
    // Save to localStorage
    localStorage.setItem('imagesVisible', imagesVisible);

		// Fire custom event to notify resources.js
	  const event = new CustomEvent('imagesVisibilityChanged', { detail: { imagesVisible } });
	  document.dispatchEvent(event);
  }

  // Toggle control panel
  controlOrb.addEventListener('click', () => {
    isPanelOpen = !isPanelOpen;
    controlPanel.style.display = isPanelOpen ? 'block' : 'none';
    orbIcon.className = isPanelOpen ? 'fas fa-times orb-icon' : 'fas fa-star orb-icon';
		// orbIcon.className = isPanelOpen ? 'fas fa-cog orb-icon' : 'fas fa-sun orb-icon';
    controlOrb.classList.toggle('active', isPanelOpen);
  });

  // Toggle images visibility
  toggleImagesBtn.addEventListener('click', () => {
    imagesVisible = !imagesVisible;
    updateImagesVisibility();
  });

  // Clear bookmarks
  clearBookmarksBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all bookmarks?')) {
      localStorage.removeItem('bookmarks');
      alert('Bookmarks cleared!');
      // Update slider and cards
      document.querySelectorAll('.bookmark-btn.bookmarked').forEach(btn => {
        btn.classList.remove('bookmarked');
      });
			// Dispatch custom event
	    const event = new CustomEvent('bookmarksChanged', { detail: { bookmarks: {} } });
	    document.dispatchEvent(event);
      // Apply explode animation
      controlPanel.style.animation = 'explode 0.5s ease forwards';
      setTimeout(() => {
        controlPanel.style.animation = '';
        isPanelOpen = false;
        controlPanel.style.display = 'none';
        orbIcon.className = 'fas fa-star orb-icon';
        controlOrb.classList.remove('active');
      }, 500);
    }
  });

  // Initialize visibility on load
  updateImagesVisibility();
});
