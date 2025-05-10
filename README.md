# Educational Resources Web App

A progressive web application (PWA) designed to aggregate and organize educational resources with a modern, user-friendly interface. The app features a carousel for browsing resources, bookmarking functionality, search, category/tag filtering, dark/light mode, and offline support.

## Table of Contents

- Features
- Technologies Used
- Installation
- Usage
- Project Structure
- Contributing
- License

## Features

- **Resource Carousel**: Displays categorized educational resources with smooth animations powered by GSAP.
- **Bookmarking System**: Save and manage favorite resources using localStorage.
- **Search Functionality**: Fuzzy search across resources using Fuse.js.
- **Category & Tag Filtering**: Filter resources by categories (e.g., programming, AI tools) and tags.
- **Dark/Light Mode**: Toggle between themes with persistent user preferences.
- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.
- **Offline Support**: Basic offline functionality with a custom offline page.
- **Network Status Detection**: Displays online/offline status.
- **Export Bookmarks**: Export bookmarks as an organized HTML file.

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Libraries/Frameworks**:
  - Tailwind CSS: Styling
  - GSAP: Animations
  - Fuse.js: Fuzzy search
  - Font Awesome: Icons
- **Storage**: localStorage for bookmarks and user preferences
- **PWA**: Service Worker for offline support

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/rebhi-2002/FutureHub.git
   ```

2. Navigate to the project directory:

   ```bash
   cd FutureHub
   ```

3. Serve the project using one of these methods:

  - **Option 1: Using a local server** (recommended for full functionality, e.g., PWA features):
    ```bash
    npx serve
    ```
    This will serve the project on a local server (typically at `http://localhost:3000`).

  - **Option 2: Open directly in the browser** (for simple HTML viewing):
    Navigate to the `FutureHub` folder and double-click `index.html` to open it in your default web browser. Note: Some features (e.g., service worker for offline support) may require a local server.

## Usage

- Open the app in a browser to browse educational resources.
- Use the carousel to navigate through featured resources.
- Bookmark resources by clicking the bookmark icon on cards.
- Filter resources by category or tags using the filter bar.
- Search for resources using the search input.
- Toggle between dark/light mode via the theme toggle.
- Export bookmarks as an HTML file from the hero section.
- Test offline functionality by disabling your network connection.

## Project Structure

```
File Explorer/
├─ FutureHub/
│  ├─ assets/
│  │  └─ images/
│  │     └─ profile-placeholder.jpg
│  ├─ js/
│  │  ├─ carousel.js       # Carousel functionality
│  │  ├─ control.js        # Control panel features
│  │  ├─ scripts.js        # Main script integration
│  │  ├─ resources.json    # Resource data
│  │  └─ data.js
│  ├─ css/
│  │  └─ styles.css        # Main styles
│  ├─ pages/
│  │  ├─ bookmarks.html    # Bookmarks page
│  │  └─ offline.html      # Offline fallback
│  ├─ index.html           # Main page
│  └─ README.md            # Project documentation
├─ ...
│
```

## Contributing

We welcome contributions! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request with a detailed description of your changes.

Please ensure your code follows the project's coding standards and includes appropriate comments.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
