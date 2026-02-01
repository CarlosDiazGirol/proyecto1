# Sprint 6 - Weather Widget & Proyectos en Progreso

## Objetivo
Integrar un widget de clima en tiempo real con WeatherAPI.com, añadir la sección de proyectos en progreso con enlaces a GitHub y demo, e implementar un formulario funcional con FormSubmit.co, manteniendo toda la funcionalidad del Sprint 5 y optimizando el comportamiento responsive.

## Características Principales

### Nuevas del Sprint 6
- ✅ **Weather Widget** con geolocalización y WeatherAPI.com
- ✅ **Sección Proyectos** con enlaces a GitHub y demo en vivo
- ✅ **Formulario funcional** con FormSubmit.co (sin backend)
- ✅ **Menú responsive optimizado** con reducción progresiva
- ✅ **Widget reposicionable** con CSS (un solo elemento DOM)

### Heredadas de Sprints Anteriores
- ✅ Header y footer reutilizables (template.js)
- ✅ Dark mode con persistencia (localStorage)
- ✅ Menú hamburguesa lateral desde derecha
- ✅ Skills dinámicas con iconos
- ✅ 3 Cheatsheets completos (HTML, CSS, JS) con sticky nav
- ✅ Página de recursos con sistema de tabs
- ✅ Diseño responsive y accesible

## Estructura de Carpetas

```
sprint6/
├── css/
│   ├── reset.css                    # Normalización de estilos
│   └── styles.css                   # 1564 líneas de estilos completos
├── js/
│   ├── main.js                      # Entry point, inicializa módulos
│   ├── templates/
│   │   └── template.js              # Header (con weather) + Footer
│   ├── utils/
│   │   ├── darkMode.js              # Toggle dark/light mode
│   │   ├── menu.js                  # Menú hamburguesa lateral
│   │   ├── skillsList.js            # Renderizado de skills
│   │   ├── cheatsheetsList.js       # Renderizado de cheatsheets
│   │   ├── resourcesGenerator.js    # Sistema de tabs
│   │   └── weather.js               # ⭐ Weather Widget (NUEVO)
│   └── data/
│       ├── skills.js                # 15 skills con iconos
│       ├── cheatsheets.js           # 3 cheatsheets
│       └── resources.js             # 6 categorías, 29 recursos
├── index.html                       # Página principal
├── about.html                       # Sobre mí con polaroid
├── contacto.html                    # ⭐ Formulario con FormSubmit.co
├── recursos.html                    # Recursos con tabs
├── cheatsheet-html.html             # Cheatsheet HTML5
├── cheatsheet-css.html              # Cheatsheet CSS3
├── cheatsheet-js.html               # Cheatsheet JavaScript
└── readme.md                        # Esta documentación
```

## Weather Widget - Implementación Detallada

### Características
- **API**: WeatherAPI.com (https://api.weatherapi.com/v1/current.json)
- **Geolocalización**: `navigator.geolocation.getCurrentPosition()`
- **Datos mostrados**: 
  - Icono del clima (32x32px)
  - Temperatura en °C
  - Nombre de la ciudad
- **Idioma**: Español (`lang=es`)
- **Diseño**: Vertical (icono+temp arriba, ciudad abajo)
- **Performance**: Un solo elemento DOM reposicionado con CSS

### Posicionamiento Responsive

#### Desktop (> 992px)
```css
.weather-item {
  position: absolute;
  right: 180px;
  top: 50%;
  transform: translateY(-50%);
}
```
- Centrado verticalmente en el header
- Posicionado después del logo

#### Tablets (768px - 992px)
```css
.weather-item {
  display: none; /* Oculto para evitar superposiciones */
}
```

#### Mobile (< 768px)
```css
.weather-item {
  display: block;
  position: static;
  /* Dentro del menú desplegable */
}
```
- Primera posición en el menú lateral
- Con padding y border-bottom

### Código JavaScript (weather.js)

```javascript
const API_KEY = '19a6b94fcd794219b51114930241007'
const API_URL = 'https://api.weatherapi.com/v1/current.json'

const getWeather = () => {
  const weatherContainer = document.querySelector('.weather')
  
  if (!weatherContainer) return

  navigator.geolocation.getCurrentPosition(
    async (position) => {
      try {
        const { latitude, longitude } = position.coords
        const response = await fetch(
          `${API_URL}?key=${API_KEY}&q=${latitude},${longitude}&lang=es`
        )
        
        if (!response.ok) throw new Error('Error al obtener el clima')
        
        const data = await response.json()
        const city = data.location.name
        const temp = Math.round(data.current.temp_c)
        const icon = data.current.condition.icon
        const condition = data.current.condition.text
        
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
    (error) => {
      console.error('Error de geolocalización:', error)
      weatherContainer.innerHTML = ''
    }
  )
}

export default getWeather
```

### HTML Generado

```html
<div class="weather-widget">
  <div class="weather-top">
    <img src="https://cdn.weatherapi.com/weather/64x64/day/116.png" 
         alt="Parcialmente nublado" 
         class="weather-icon">
    <span class="weather-temp">15°C</span>
  </div>
  <span class="weather-city">Madrid</span>
</div>
```

## 📱 Optimización Responsive del Menú

### Reducción Progresiva del Nav

El menú de navegación se adapta gradualmente para dar espacio al weather widget:

```css
/* 1100px: Primera reducción */
@media (max-width: 1100px) {
  .nav-links {
    flex: 0.6;
    gap: var(--spacing-md);
  }
}

/* 992px: Mayor compresión + oculta weather */
@media (max-width: 992px) {
  .weather-item {
    display: none;
  }
  .nav-links {
    flex: 0.4;
    gap: var(--spacing-md);
  }
}

/* 880px: Máxima compresión antes del hamburger */
@media (max-width: 880px) {
  .nav-links {
    flex: 0.3;
    gap: var(--spacing-sm);
  }
}

/* 768px: Menú hamburguesa */
@media (max-width: 768px) {
  .hamburger {
    display: flex;
  }
  .nav-links {
    position: fixed;
    right: -250px;
    width: 250px;
    height: auto;
    max-height: calc(100vh - 72px);
    overflow-y: auto;
  }
}
```

### Menú Móvil Optimizado
- **height: auto** en lugar de 100vh
- **max-height** para evitar scroll innecesario
- **Padding reducido**: `var(--spacing-md)` top/bottom
- **Items alineados izquierda** para mejor UX
- **overflow-y: auto** solo si es necesario

## Sección Proyectos en Progreso

### Estructura HTML

```html
<section class="section">
  <h2>Proyectos en Progreso</h2>
  <div class="projects-container">
    <article class="project-card">
      <h3>CV-Portfolio-DATA</h3>
      <p>Portfolio personal con integración de APIs, dark mode y diseño responsive. 
         Proyecto desarrollado con HTML5, CSS3 y JavaScript vanilla usando arquitectura modular.</p>
      
      <div class="project-tech">
        <span class="tag">HTML5</span>
        <span class="tag">CSS3</span>
        <span class="tag">JavaScript</span>
        <span class="tag">WeatherAPI</span>
      </div>
      
      <div class="project-links">
        <a href="https://github.com/CarlosDiazGirol/CV-Portfolio-DATA" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn btn-primary">
          Ver en GitHub
        </a>
        <a href="https://carlosdiazgirol.github.io/proyecto1/" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="btn btn-secondary">
          Ver Demo
        </a>
      </div>
    </article>
  </div>
</section>
```

### Estilos CSS

```css
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-lg);
}

.project-card {
  background-color: var(--white);
  padding: var(--spacing-xl);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  flex: 1 1 300px;
  max-width: 500px;
  transition: transform var(--transition-base), box-shadow var(--transition-base);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
}

.project-tech .tag {
  background-color: var(--grey-light);
  color: var(--grey-dark);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-weight: var(--font-medium);
}

.project-links {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}
```

### Características
- **Hover effect**: Elevación con `translateY(-4px)` y sombra aumentada
- **Tags con fondo gris**: Coherente con el resto del diseño
- **Botones flexbox**: Se adaptan en mobile
- **Alineación izquierda**: No centrado
- **Links externos seguros**: `rel="noopener noreferrer"`

## Formulario de Contacto con FormSubmit.co

### Implementación

```html
<form class="contact-form" 
      action="https://formsubmit.co/carlos@thebridge.tech" 
      method="POST">
  
  <!-- Configuración FormSubmit -->
  <input type="hidden" name="_subject" value="Nuevo mensaje desde CV Portfolio">
  <input type="hidden" name="_captcha" value="false">
  <input type="hidden" name="_template" value="table">
  
  <!-- Campos del formulario -->
  <div class="form-group">
    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="name" placeholder="Tu nombre" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" placeholder="tu@email.com" required>
  </div>
  
  <div class="form-group">
    <label for="asunto">Asunto</label>
    <input type="text" id="asunto" name="asunto" placeholder="Asunto del mensaje" required>
  </div>
  
  <div class="form-group">
    <label for="mensaje">Mensaje</label>
    <textarea id="mensaje" name="message" rows="6" 
              placeholder="Escribe tu mensaje aquí..." required></textarea>
  </div>
  
  <button type="submit" class="btn-submit">Enviar mensaje</button>
</form>
```

### Características FormSubmit.co
- **Sin backend propio**: FormSubmit gestiona los emails
- **Configuración con campos hidden**:
  - `_subject`: Asunto del email recibido
  - `_captcha`: false (sin captcha para mejor UX)
  - `_template`: table (formato de tabla en el email)
- **Primera vez**: Requiere confirmación por email
- **Nombres estándar**: `name`, `email`, `message`
- **Seguridad**: No expone credenciales del servidor

## Diseño y Estilos

### Variables CSS

```css
:root {
  /* Colores */
  --primary: #2c3e50;
  --secondary: #e74c3c;
  --accent: #3498db;
  --highlight: #f39c12;
  --white: #ffffff;
  --grey-light: #ecf0f1;
  --grey: #95a5a6;
  --grey-dark: #34495e;
  
  /* Tipografía */
  --fs-xs: 0.75rem;
  --fs-sm: 0.875rem;
  --fs-md: 1rem;
  --fs-lg: 1.125rem;
  --fs-xl: 1.25rem;
  --fs-2xl: 1.5rem;
  --fs-3xl: 1.875rem;
  --fs-4xl: 2.25rem;
  --fs-5xl: 3rem;
  
  --font-light: 300;
  --font-regular: 400;
  --font-medium: 500;
  --font-bold: 700;
  --font-black: 900;
  
  /* Espaciado */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  --spacing-2xl: 3rem;
  
  /* Bordes y Sombras */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.12);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
  
  /* Transiciones */
  --transition-base: 0.3s ease;
  --transition-fast: 0.15s ease;
}
```

### Modo Oscuro

```css
body.dark-mode {
  background-color: #121212;
  color: #e0e0e0;
}

body.dark-mode header {
  background-color: #1e1e1e;
  border-bottom-color: #333;
}

body.dark-mode .weather-widget {
  background-color: rgba(52, 152, 219, 0.2);
}

body.dark-mode .skill-card,
body.dark-mode .project-card,
body.dark-mode .cheatsheet-card {
  background-color: #2a2a2a;
  border-color: #3a3a3a;
}

body.dark-mode footer {
  background-color: #1a1a1a;
  color: #ffffff;
}
```

## JavaScript Modular

### main.js - Entry Point

```javascript
import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import getSkills from './utils/skillsList.js';
import menu from './utils/menu.js';
import getCheatsheets from './utils/cheatsheetsList.js';
import { getResources } from './utils/resourcesGenerator.js';
import getWeather from './utils/weather.js';

// Cargar templates de header y footer
const siteHeader = document.querySelector('#site-header');
const siteFooter = document.querySelector('#site-footer');

if (siteHeader) {
  siteHeader.innerHTML = header;
}

if (siteFooter) {
  siteFooter.innerHTML = footer;
}

// Inicializar funcionalidades
darkMode();
menu();
getSkills();
getCheatsheets();
getResources();
getWeather(); // ⭐ NUEVO en Sprint 6
```

## Responsive Design - Breakpoints

### Desktop Large (> 1100px)
- Weather widget visible en header
- Nav-links con flex: 1 y gap largo
- Menú completo sin hamburguesa
- Grid de 3-4 columnas en skills

### Desktop Medium (992px - 1100px)
- Weather widget visible
- Nav-links con flex: 0.6
- Gap reducido a spacing-md

### Desktop Small (880px - 992px)
- Weather widget OCULTO
- Nav-links con flex: 0.4
- Preparación para mobile

### Tablet (768px - 880px)
- Weather widget OCULTO
- Nav-links con flex: 0.3
- Gap mínimo (spacing-sm)

### Mobile (< 768px)
- **Menú hamburguesa activo**
- Weather widget en menú lateral (primera posición)
- Nav-links en sidebar derecha
- Grid de 1-2 columnas
- Sticky nav de cheatsheets OCULTO
- Tabs verticales en recursos

## Cómo Ejecutar

### Opción 1: Live Server (VS Code)
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. "Open with Live Server"

### Opción 2: Python HTTP Server
```bash
cd sprint6
python3 -m http.server 8080
# Abrir http://localhost:8080
```

### Opción 3: Node.js http-server
```bash
npm install -g http-server
cd sprint6
http-server -p 8080
```

### Primera Vez
1. **Permisos de geolocalización**: El navegador pedirá permiso
2. **FormSubmit confirmación**: Primer envío requiere confirmar email
3. **Dark mode**: Preferencia guardada en localStorage

## 🛠️ Tecnologías Utilizadas

### Frontend
- **HTML5**: Semántico y accesible
- **CSS3**: Variables, Flexbox, Grid, Animations
- **JavaScript ES6+**: Modules, Async/Await, Arrow Functions, Template Literals

### APIs y Servicios
- **WeatherAPI.com**: Clima en tiempo real
- **Geolocation API**: Ubicación del usuario
- **LocalStorage API**: Persistencia dark mode
- **FormSubmit.co**: Formularios sin backend
- **Simple Icons CDN**: Iconos de tecnologías

### Herramientas de Desarrollo
- **VS Code**: Editor de código
- **Live Server**: Servidor de desarrollo
- **Git**: Control de versiones
- **GitHub Pages**: Hosting estático

### Fuentes y Recursos
- **Google Fonts**: Roboto (300, 400, 500, 700, 900)
- **Cloudinary**: Hosting de imágenes
- **Simple Icons**: Iconos SVG de tecnologías

## Métricas del Proyecto

- **Líneas de CSS**: ~1564 líneas
- **Archivos HTML**: 7 páginas
- **Módulos JS**: 10 archivos
- **Skills mostradas**: 15
- **Cheatsheets**: 3 completos
- **Categorías de recursos**: 6
- **Total recursos**: 29
- **Breakpoints responsive**: 4 principales
- **Tiempo de carga**: < 2s (con caché)

## Características Técnicas Destacadas

### Performance
- **Un solo elemento weather**: Reposicionado con CSS, no duplicado
- **Lazy loading**: Datos cargados solo cuando se necesitan
- **CSS eficiente**: Variables y transitions optimizadas
- **Módulos ES6**: Code splitting natural

### Accesibilidad
- **Semántica HTML5**: `<nav>`, `<section>`, `<article>`
- **ARIA labels**: En botones sin texto visible
- **Contraste adecuado**: WCAG AA en modo claro y oscuro
- **Navegación por teclado**: Todos los elementos interactivos accesibles
- **Alt text**: En todas las imágenes

### SEO
- **Meta tags apropiados**: Charset, viewport, description
- **Títulos únicos**: En cada página
- **Estructura semántica**: Headers jerárquicos (h1, h2, h3)
- **Enlaces externos seguros**: `rel="noopener noreferrer"`

### Seguridad
- **FormSubmit.co**: Sin exponer credenciales
- **Enlaces externos**: Con `rel="noopener noreferrer"`
- **Sin eval()**: Código seguro sin ejecución dinámica
- **HTTPS**: WeatherAPI y todos los recursos externos

## Próximos Pasos (Sprint 7)

Posibles mejoras para futuros sprints:
- [ ] Animaciones avanzadas con GSAP
- [ ] Filtro de búsqueda en recursos
- [ ] Blog con artículos dinámicos
- [ ] Modo offline con Service Workers
- [ ] Internacionalización (i18n)
- [ ] Tests unitarios con Jest
- [ ] Analytics con Google Analytics
- [ ] Compartir en redes sociales
- [ ] Más cheatsheets (React, Node, Git)
- [ ] Sistema de comentarios

## Notas del Desarrollador

### Decisiones de Diseño
- **Weather en nav-links**: Para evitar duplicar elemento DOM y simplificar JavaScript
- **FormSubmit.co**: Evita complejidad de backend propio
- **Flex progresivo**: Mejor UX en reducción de pantalla que cambio abrupto
- **Tags grises**: Coherencia visual con resto de cards
- **Height auto en menú**: Evita scroll innecesario en mobile

### Retos Superados
- Centrado vertical del weather widget con position absolute
- Reposicionamiento del weather sin duplicar elemento
- Reducción progresiva del nav sin romper layout
- FormSubmit.co configuración correcta
- Animaciones suaves en dark mode

### Lecciones Aprendidas
- Position absolute requiere transform para centrado vertical perfecto
- Un solo elemento DOM es más eficiente que dos con display: none/block
- Flex con valores decimales (0.6, 0.4) permite transiciones graduales
- FormSubmit.co requiere nombres específicos (name, email, message)
- max-height previene scroll innecesario mejor que height fijo

---

**Desarrollado con ❤️ por Carlos Díaz Girol (DATA)**

Portfolio: https://carlosdiazgirol.github.io/proyecto1/  
GitHub: https://github.com/CarlosDiazGirol  
LinkedIn: https://www.linkedin.com/in/carlosdiazgirol/


