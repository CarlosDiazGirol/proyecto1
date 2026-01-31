const menu = () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');
  const darkModeToggle = document.querySelector('.dark-mode-toggle');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      // Toggle clase activa en hamburguesa
      hamburger.classList.toggle('active');
      
      // Toggle clase activa en menú de navegación
      navLinks.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace (mejor UX en mobile)
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
};

export default menu; 