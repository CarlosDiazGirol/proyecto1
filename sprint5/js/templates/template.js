const header = `
  <nav>
    <a href="index.html" class="logo"><strong>CD</strong></a>
    <ul class="nav-links">
      <li><a href="about.html">About</a></li>
      <li><a href="index.html#skills">Skills</a></li>
      <li><a href="index.html#cheatsheets">Cheatsheets</a></li>
      <li><a href="recursos.html">Recursos</a></li>
      <li><a href="contacto.html">Contacto</a></li>
    </ul>
    <button class="dark-mode-toggle" id="darkModeToggle" aria-label="Cambiar modo oscuro">
      <svg class="sun-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg class="moon-icon" style="display: none;" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>
    <div class="hamburger" id="hamburger">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </nav>
`;

const footer = `
  <nav class="footer-nav">
    <a href="https://github.com/CarlosDiazGirol" target="_blank">GitHub</a>
    <a href="https://www.linkedin.com/in/carlosdiazgirol/" target="_blank">LinkedIn</a>
    <a href="index.html">Home</a>
    <a href="about.html">About</a>
    <a href="contacto.html">Contacto</a>
  </nav>
  <p>Hecho con <span class="heart">❤</span> por Data</p>
  <p>&copy; 2026 Carlos Díaz Girol - Fullstack Developer & Tech Educator</p>
`;

export {
  header,
  footer
};
