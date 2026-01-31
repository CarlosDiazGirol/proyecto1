# Sprint 5 - Cheatsheets y Recursos

## Objetivo
Crear páginas de cheatsheets con navegación sticky y una página de recursos con sistema de pestañas, manteniendo toda la funcionalidad del Sprint 4 y añadiendo contenido educativo.

## Estructura de Carpetas
```
sprint5/
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   ├── main.js
│   ├── templates/
│   │   └── template.js
│   ├── utils/
│   │   ├── darkMode.js
│   │   ├── menu.js
│   │   ├── skillsList.js
│   │   ├── cheatsheetsList.js
│   │   └── resourcesGenerator.js.js
│   └── data/
│       ├── skills.js
│       ├── cheatsheets.js
│       └── resources.js
├── index.html
├── about.html
├── contacto.html
├── recursos.html
├── cheatsheet-html.html
├── cheatsheet-css.html
├── cheatsheet-js.html
└── readme.md
```

## Nuevas Características del Sprint 5

### 1. Páginas de Cheatsheets
- **3 cheatsheets completos**: HTML5, CSS3 y JavaScript
- Cada cheatsheet incluye:
  - Hero section con badge y descripción
  - Navegación sticky con enlaces a secciones
  - Cards organizadas por temas
  - Bloques de código con ejemplos
  - Listas de mejores prácticas
  
#### Navegación Sticky
- **Position sticky** debajo del header (top: 72px)
- Enlaces a todas las secciones del cheatsheet
- Scroll suave a cada sección con `scroll-margin-top`
- **Oculta en mobile** (< 768px) para ahorrar espacio de pantalla
- Diseño horizontal con flex-wrap para adaptarse
- Hover con color accent para mejor UX

#### Estructura de Contenido
- Secciones bien organizadas con IDs únicos
- Cards con fondo blanco y sombras sutiles
- Bloques de código con fondo gris y borde accent
- Listas con bullets personalizados (▸)
- Notas y descripciones en cursiva

### 2. Sección Cheatsheets en Index
- Nueva sección en página principal
- Cards dinámicas generadas desde `cheatsheets.js`
- Grid responsive con enlaces a cada cheatsheet
- Iconos de Simple Icons para cada tecnología
- Botón "Ver CheatSheet" con estilo accent

### 3. Página de Recursos (recursos.html)
- Sistema de **pestañas/tabs** completamente funcional
- 6 categorías de recursos:
  1. Documentación Oficial (MDN, W3C, Can I Use, DevDocs, FormSubmit)
  2. Aprendizaje (freeCodeCamp, JavaScript.info, CSS-Tricks, Web.dev, Frontend Masters)
  3. Herramientas (VS Code, GitHub, CodePen, Figma, Netlify)
  4. Accesibilidad (WCAG, WebAIM, WAVE, Axe DevTools)
  5. Blogs & Comunidades (Smashing Magazine, A List Apart, Dev.to, Stack Overflow, Frontend Focus)
  6. Inspiración & Design (Awwwards, Dribbble, Behance, Coolors, Google Fonts)

#### Sistema de Tabs
- Tabs horizontales con flex-wrap responsive
- Tab activa con fondo accent y color blanco
- Resto de tabs con bordes y hover effect
- Cambio de contenido con animación fade-in
- Solo un panel visible a la vez (display: none/block)
- Event listeners para cambiar tabs al hacer click

#### Cards de Recursos
- Grid responsive (2 columnas en desktop, 1 en mobile)
- Cada card es un enlace externo con `target="_blank"`
- Título y descripción del recurso
- Borde izquierdo accent que cambia a secondary en hover
- Efecto de elevación (translateY) en hover
- Enlaces con `rel="noopener noreferrer"` por seguridad

### 4. Actualizaciones en Template
- Enlaces de navegación actualizados:
  - Cheatsheets apunta a `index.html#cheatsheets`
  - Recursos apunta a `recursos.html`
- Menú completamente funcional en todas las páginas

## Implementación Técnica

### HTML

#### Cheatsheets
```html
<nav class="cheatsheet-nav" id="cheatsheetNav">
  <a href="#estructura">Estructura</a>
  <a href="#meta">Meta</a>
  <!-- más enlaces... -->
</nav>

<section class="cheatsheet-hero">
  <span class="cs-badge">Cheat Sheet</span>
  <h1>HTML</h1>
  <p>Guía rápida...</p>
</section>

<section class="cheatsheet-content">
  <article class="cs-card" id="estructura">
    <h2>Estructura básica</h2>
    <div class="cs-code">
      <pre><code><!-- código aquí --></code></pre>
    </div>
  </article>
</section>
```

#### Recursos
```html
<section class="resources-section section">
  <h1>Recursos</h1>
  <p class="section-subtitle">Links curados...</p>
  <!-- Tabs generadas dinámicamente desde JS -->
</section>
```

### CSS

#### Navegación Sticky
```css
.cheatsheet-nav {
  position: sticky;
  top: 72px;
  background-color: var(--white);
  z-index: 100;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .cheatsheet-nav {
    display: none;
  }
}
```

#### Tabs de Recursos
```css
.tab-btn {
  background-color: transparent;
  border: 2px solid var(--light-gray);
  transition: all var(--transition-normal);
}

.tab-btn.active {
  background-color: var(--accent);
  border-color: var(--accent);
  color: var(--white);
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
  animation: fadeIn 0.3s ease-in;
}
```

### JavaScript Modular

#### main.js
```javascript
import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import getSkills from './utils/skillsList.js';
import menu from './utils/menu.js';
import getCheatsheets from './utils/cheatsheetsList.js';
import { getResources } from './utils/resourcesGenerator.js.js';

// Cargar templates
document.querySelector('header').innerHTML = header;
document.querySelector('footer').innerHTML = footer;

// Inicializar funcionalidades
darkMode();
menu();
getSkills();
getCheatsheets();
getResources();
```

#### cheatsheetsList.js
Genera cards dinámicas para la sección de cheatsheets en index:
```javascript
const html = cheatsheets.map(cs => `
  <article class="cheatsheet-card">
    <img src="${cs.icon}" alt="${cs.name}">
    <h3>${cs.name}</h3>
    <p>Guía rápida de referencia</p>
    <a href="${cs.link}" class="btn-primary">Ver CheatSheet</a>
  </article>
`).join('');
```

#### resourcesGenerator.js.js
Genera sistema de tabs completo:
1. Crea botones de tabs desde array de categorías
2. Crea paneles con grid de cards para cada categoría
3. Añade event listeners para cambiar tabs
4. Primera tab activa por defecto

## Responsive Design

### Desktop (> 768px)
- Navegación sticky visible en cheatsheets
- Cards de recursos en 2 columnas
- Tabs en una sola línea horizontal
- Menú completo sin hamburguesa

### Tablet (576px - 768px)
- Navegación sticky OCULTA en cheatsheets
- Cards de recursos en 2 columnas
- Tabs con flex-wrap
- Menú hamburguesa funcional

### Mobile (< 576px)
- Sin navegación sticky (más espacio vertical)
- Cards de recursos en 1 columna
- Tabs apiladas verticalmente
- Todo optimizado para pantallas pequeñas

## Datos

### cheatsheets.js
```javascript
const cheatsheets = [
  {
    name: "HTML5",
    icon: "https://cdn.simpleicons.org/html5/E34F26",
    link: "/cheatsheet-html.html"
  },
  // CSS3 y JavaScript...
];
```

### resources.js
```javascript
const resources = [
  {
    category: "Documentación Oficial",
    items: [
      {
        title: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        note: "La referencia definitiva..."
      }
    ]
  }
];
```

## Modo Oscuro

### Cheatsheets
- Navegación sticky con fondo oscuro (#1e1e1e)
- Cards con fondo #1e1e1e y borde #3a3a3a
- Bloques de código con fondo #2a2a2a
- Texto de código claro (#e0e0e0)

### Recursos
- Tabs con bordes oscuros
- Tab activa mantiene accent (igual que modo claro)
- Cards con fondo #1e1e1e
- Hover y efectos funcionan igual

## Mejoras Respecto al Sprint 4

1. **Contenido educativo** con 3 cheatsheets completos
2. **Navegación sticky responsive** que se oculta en mobile
3. **Sistema de tabs funcional** con animaciones
4. **Página de recursos curados** por categorías
5. **Sección cheatsheets dinámica** en index
6. **Mejor estructura de navegación** con enlaces actualizados
7. **UX optimizada** con scroll-margin y animaciones fade

## Paleta de Colores (Mantenida)
```css
--primary: #2c3e50
--secondary: #e74c3c
--accent: #3498db
--highlight: #f39c12
```

## Proximos Pasos (Sprint 6)
En el siguiente sprint se podría añadir:
- Filtro de búsqueda en recursos
- Favoritos con localStorage
- Más cheatsheets (React, Node, Git)
- Sistema de comentarios
- Compartir en redes sociales

## Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con position sticky
- JavaScript ES6+ (módulos, template strings, arrow functions, event listeners)
- LocalStorage API (modo oscuro heredado)
- Flexbox para layouts
- Animaciones CSS (fadeIn, translateY)
- Media Queries responsive
- Simple Icons para iconos de tecnologías

---

**Nota**: Este sprint añade contenido educativo valioso manteniendo toda la funcionalidad del Sprint 4. El sticky nav mejora la navegación en cheatsheets, y el sistema de tabs organiza recursos de forma eficiente. El diseño es responsive y accesible.
