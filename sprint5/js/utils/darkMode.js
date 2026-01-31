const darkMode = () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  
  if (!darkModeToggle) return;
  
  // Deshabilitar transiciones temporalmente para evitar flash al cargar
  body.style.transition = 'none';
  
  // Obtener tema guardado en localStorage
  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark';
  
  // Función para actualizar icono
  const updateIcon = (isDark) => {
    const sunIcon = darkModeToggle.querySelector('.sun-icon');
    const moonIcon = darkModeToggle.querySelector('.moon-icon');
    
    if (sunIcon && moonIcon) {
      sunIcon.style.display = isDark ? 'none' : 'block';
      moonIcon.style.display = isDark ? 'block' : 'none';
    }
  };
  
  // Estado inicial
  if (isDarkMode) {
    body.classList.add('dark-mode');
    updateIcon(true);
  }
  
  // Reactivar transiciones después de aplicar el estado inicial
  setTimeout(() => {
    body.style.transition = '';
  }, 0);
  
  // Event listener para el toggle
  darkModeToggle.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark-mode');
    updateIcon(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
};

export default darkMode;