# Portfolio Personal - CV & Portfolio de Carlos Díaz Girol (DATA)

## Descripción del Proyecto

Portfolio personal profesional desarrollado con HTML5, CSS3 y JavaScript vanilla (sin frameworks). Proyecto modular y escalable que muestra habilidades técnicas, proyectos, recursos educativos y permite contacto directo. Incluye integración con API de clima en tiempo real y un sistema de dark mode persistente.

**Demo en vivo:** https://carlosdiazgirol.github.io/proyecto1/

## Características Destacadas

### Weather Widget
Widget de clima en tiempo real integrado en el header que obtiene la ubicación del usuario mediante geolocalización y muestra temperatura actual, icono del clima y ciudad desde WeatherAPI.com. Diseño responsive que se reposiciona automáticamente: visible en desktop después del logo, oculto en tablets, y dentro del menú móvil en smartphones.

### Diseño Responsive Avanzado
Interfaz completamente adaptable con 4 breakpoints principales (1100px, 992px, 880px, 768px) que garantizan una experiencia óptima en cualquier dispositivo. El menú de navegación se reduce progresivamente antes de transformarse en hamburguesa lateral, evitando cambios abruptos.

### Dark Mode Persistente
Sistema de modo oscuro con toggle sun/moon que guarda la preferencia del usuario en localStorage. Paleta de colores cuidadosamente seleccionada para garantizar contraste adecuado (WCAG AA) en ambos modos.

### Contenido Educativo
Tres cheatsheets completos (HTML5, CSS3, JavaScript) con navegación sticky que facilita el acceso rápido a diferentes secciones. Página de recursos curados organizada en 6 categorías mediante sistema de tabs con 29 enlaces a documentación, herramientas y comunidades.

###  Formulario Funcional
Form Estructura del Sitio

### Páginas Principales

**index.html** - Página de inicio  
Presenta el perfil profesional con imagen y biografía. Sección de skills técnicas renderizadas dinámicamente con iconos de Simple Icons. Proyectos en progreso con enlaces a GitHub y demo. Sección de cheatsheets generada desde datos.

**about.html** - Sobre Mí  
Información detallada del profesional con foto tipo polaroid. Secciones de experiencia laboral, formación académica y valores personales. Diseño con cards organizadas visualmente.

**contacto.html** - Formulario de Contacto  
Formulario funcional integrado con FormSubmit.co. Campos para nombre, email, asunto y mensaje. Validación HTML5 y envío directo sin backend propio.

**recursos.html** - Recursos Curados  
Colección de 29 recursos organizados en 6 categorías mediante sistema de tabs interactivo. Categorías: Documentación Oficial, Aprendizaje, Herramientas, Accesibilidad, Blogs & Comunidades, Inspiración & Design.

**cheatsheet-html.html / cheatsheet-css.html / cheatsheet-js.html** - Guías Rápidas  
Tres cheatsheets completos con navegación sticky (oculta en mobile). Estructura organizada por secciones con ejemplos y mejores prácticas.

### Organización del Código

**CSS**: Sistema de diseño con variables CSS para colores, tipografía, espaciado y transiciones. Reset CSS para normalización. Más de 1500 líneas de estilos responsive.

**JavaScript Modular**:
- `templates/` - Header y footer reutilizables
- `utils/` - Funcionalidades independientes (darkMode, menu, weather, renderizadores)
- `data/` - Datos centralizados (skills, cheatsheets, recursos)
- `main.js` - Punto de entrada que orquesta todos los módulos recursos.html                    # Recursos con tabs
├── cheatsheet-html.html             # Cheatsheet HTML5
├── cheatsheet-css.html              # Cheatsheet CSS3
├── cheatsheet-js.html               # Cheatsheet JavaScript
└── readme.md                        # Esta documentación

## Weather Widget - Implementación Detallada

### Características
- *Aspectos Técnicos Destacados

### Sistema de Diseño con Variables CSS
Toda la interfaz está construida sobre un sistema de diseño consistente usando variables CSS. Paleta de colores definida con primary, secondary, accent y highlight. Escalas tipográficas (xs a 5xl), espaciados estandarizados y shadows reutilizables. Esto facilita el mantenimiento y garantiza coherencia visual.

### Responsive Design con Breakpoints Progresivos
Cuatro breakpoints principales (1100px, 992px, 880px, 768px) que permiten una transición suave entre dispositivos. El menú de navegación reduce su espacio progresivamente mediante valores de flex (1 → 0.6 → 0.4 → 0.3) antes de convertirse en hamburguesa, evitando cambios bruscos.

### Weather Widget Reposicionable
Solución técnica elegante: un solo elemento DOM que cambia de posición mediante CSS según el viewport. En desktop usa position absolute centrado verticalmente, se oculta en tablets para evitar superposiciones, y reaparece en mobile dentro del menú lateral. Optimiza performance al no duplicar elementos ni realizar múltiples llamadas a la API.

### Menú Hamburguesa Lateral Optimizado
Menú que se desliza desde la derecha usando la propiedad CSS `right` en lugar de transforms, mejorando el rendimiento. Incluye altura automática con max-height para evitar scroll innecesario en móviles, padding reducido y alineación izquierda para mejor UX.

### Arquitectura JavaScript Modular
Código organizado en módulos ES6 con imports/exports. Separación clara: templates para estructura HTML reutilizable, utils para funcionalidades independientes, data para información centralizada. Main.js orquesta la inicialización sin conocer detalles de implementación.

### Renderizado Dinámico
Skills, cheatsheets y recursos se generan dinámicamente desde arrays de datos usando template literals y map. Facilita la actualización de contenido sin modificar HTML. Sistema de tabs en recursos que cambia paneles mediante event listeners y clases CSS.

### Navegación Sticky Inteligente
Los cheatsheets incluyen navegación sticky que permanece visible al hacer scroll en desktop pero se oculta automáticamente en mobile para maximizar espacio vertical. Scroll suave a secciones con scroll-margin-top ajustado.

### Integración API Externa
Conexión con WeatherAPI.com usando Geolocation API para obtener coordenadas del usuario y Fetch API con async/await para peticiones. Manejo de errores tanto en geolocalización como en respuesta de API. Datos en español configurados mediante parámetro lang=es.

### Opción 1: Live Server (VS Code)
1. Instalar extensión "Live Server"
2. Click derecho en `index.html`
3. "Open with Live Server"

### Primera Vez
1. **Permisos de geolocalización**: El navegador pedirá permiso
2. **FormSubmit confirmación**: Primer envío requiere confirmar email
3. **Dark mode**: Preferencia guardada en localStorage

## Tecnologías Utilizadas

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

## 📈 Métricas del Proyecto

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
- **CSS eficiente**: Variables y transitions optimizadas
- **Módulos ES6**: Code splitting natural

### Accesibilidad
- **Semántica HTML5**: `<nav>`, `<section>`, `<article>`
- **ARIA labels**: En botones sin texto visible
- **Contraste adecuado**: WCAG AA en modo claro y oscuro
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

## 🔮 Próximos Pasos (Sprint 7)

Posibles mejoras para futuros sprints:
- [ ] Filtro de búsqueda en recursos
- [ ] Blog con artículos dinámicos
- [ ] Analytics con Google Analytics
- [ ] Compartir en redes sociales
- [ ] Más cheatsheets (React, Node, Git)

## 📝 Notas del Desarrollador

### Decisiones de Diseño
- **Weather en nav-links**: Para evitar duplicar elemento DOM y simplificar JavaScript
- **FormSubmit.co**: Evita complejidad de backend propio
- **Flex progresivo**: Mejor UX en reducción de pantalla que cambio abrupto
- **Height auto en menú**: Evita scroll innecesario en mobile

### Retos Superados
- Centrado vertical del weather widget con position absolute
- Reposicionamiento del weather sin duplicar elemento
- Reducción progresiva del nav sin romper layout
- FormSubmit.co configuración correcta
- Animaciones suaves en dark mode

---

**Desarrollado con ❤️ por Carlos Díaz Girol (DATA)**

Portfolio: https://carlosdiazgirol.github.io/proyecto1/  
GitHub: https://github.com/CarlosDiazGirol  
LinkedIn: https://www.linkedin.com/in/carlosdiazgirol/
