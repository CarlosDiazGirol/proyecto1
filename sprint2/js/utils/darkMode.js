const darkMode = () => {
  const siteThemeMode = document.getElementById('site-theme-mode')
  const themeIcon = document.getElementById('theme-icon')
  const siteContainer = document.querySelector('.site-container')
  const aboutmeInfo = document.querySelector('.aboutme-info')
  
  // Deshabilitar transiciones temporalmente para que inicialmente no tenga el efecto de fadein si tiene elgido el dark mode
  siteContainer.style.transition = 'none'
  aboutmeInfo && (aboutmeInfo.style.transition = 'none')
  
  const savedTheme = localStorage.getItem('theme')
  const isDarkMode = savedTheme === 'dark'
  
  // Estado inicial
  if (isDarkMode) {
    siteContainer.classList.add('dark')
    themeIcon.innerText = '💡'
  } else {
    themeIcon.innerText = '🌙'
  }

  // Reactivar transiciones después de aplicar el estado inicial para que sí funcione la transición al pulsar el botón
  setTimeout(() => {
    siteContainer.style.transition = ''
    aboutmeInfo && (aboutmeInfo.style.transition = '')
  }, 0)

  siteThemeMode.addEventListener('click', () => {
    const isDark = siteContainer.classList.toggle('dark')
    themeIcon.innerText = isDark ? '💡' : '🌙' 
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  })
}

export default darkMode