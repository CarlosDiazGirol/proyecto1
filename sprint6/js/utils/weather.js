const API_KEY = '19a6b94fcd794219b51114930241007'
const API_URL = 'https://api.weatherapi.com/v1/current.json'

const getWeather = () => {
  const weatherContainer = document.querySelector('.weather')
  
  if (!weatherContainer) return

  // Obtener la ubicación del usuario con callbacks
  navigator.geolocation.getCurrentPosition(
    // Success callback
    async (position) => {
      try {
        const { latitude, longitude } = position.coords
        
        // Hacer petición a la API del clima
        const response = await fetch(
          `${API_URL}?key=${API_KEY}&q=${latitude},${longitude}&lang=es`
        )
        
        if (!response.ok) throw new Error('Error al obtener el clima')
        
        const data = await response.json()
        
        // Extraer los datos necesarios
        const city = data.location.name
        const temp = Math.round(data.current.temp_c)
        const icon = data.current.condition.icon
        const condition = data.current.condition.text
        
        // Renderizar el clima en el DOM
        weatherContainer.innerHTML = `
          <div class="weather-widget">
            <div class="weather-top">
              <img src="https:${icon}" alt="${condition}" class="weather-icon">
              <span class="weather-temp">${temp}°C</span>
            </div>
            <span class="weather-city">${city}</span>
          </div>
        `
      } catch (error) {
        console.error('Error obteniendo el clima:', error)
        weatherContainer.innerHTML = ''
      }
    },
    // Error callback
    (error) => {
      console.error('Error de geolocalización:', error)
      weatherContainer.innerHTML = ''
    }
  )
}

export default getWeather
