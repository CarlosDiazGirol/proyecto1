# Sprint 4 - JavaScript Interactivo y Templates

## Objetivo
Añadir funcionalidad JavaScript al proyecto para hacer el sitio dinámico e interactivo, implementando templates reutilizables, modo oscuro, skills dinámicas y menú hamburguesa funcional.

## Estructura de Carpetas
```
sprint4/
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
│   │   └── skillsList.js
│   └── data/
│       └── skills.js
├── index.html
├── about.html
├── contacto.html
└── readme.md
```

## Nuevas Características del Sprint 4

### 1. Templates JavaScript (template.js)
- **Header y Footer dinámicos** generados desde JavaScript
- Evita repetición de código HTML en todas las páginas
- Exporta constantes `header` y `footer` con template strings
- Iconos SVG para modo oscuro integrados en el template
- Navegación con enlaces actualizados (About, Skills con ancla)

### 2. Modo Oscuro (darkMode.js)
- **Toggle button** con iconos SVG (sol/luna) en el header
- Clase `dark-mode` añadida al body al activar
- **LocalStorage** para persistir preferencia del usuario
- Cambio de iconos dinámico (sol visible en modo claro, luna en modo oscuro)
- Estilos CSS completos para modo oscuro:
  - Fondo oscuro (#121212)
  - Textos claros (#e0e0e0)
  - Cards con fondo #2a2a2a
  - Header y footer adaptados
  - Polaroid mantiene fondo blanco siempre

### 3. Skills Dinámicas (skillsList.js)
- **Generación dinámica** de cards desde datos en `skills.js`
- Filtra solo skills con `state: "dominada"`
- Renderiza 15 skills en grid responsive:
  - 4 columnas en desktop
  - 2 columnas en tablet
  - 1 columna en mobile
- Información mostrada:
  - Icono de la tecnología
  - Nombre de la skill
  - Nivel (avanzado, intermedio, básico)
  - Descripción breve
  - Tags con tecnologías relacionadas
- Sin efectos hover (diseño limpio)

### 4. Menú Hamburguesa Funcional (menu.js)
- **Toggle JavaScript** para abrir/cerrar menú en mobile
- Animación de hamburguesa a X:
  - Primera línea rota 45deg
  - Segunda línea desaparece (opacity: 0)
  - Tercera línea rota -45deg
- Menú desplegable desde arriba con animación suave
- Aparece detrás del header con `translateY`
- Cierre automático al hacer click en un enlace
- Botón modo oscuro visible en el menú responsive

### 5. Sistema de Módulos ES6
- Uso de `import/export` en JavaScript
- Script con `type="module"` en HTML
- Estructura modular y organizada:
  - templates/ para componentes HTML
  - utils/ para funcionalidades
  - data/ para datos estáticos
- main.js como punto de entrada que orquesta todo

## Implementación Técnica

### HTML
- Header y footer vacíos (se llenan con JavaScript)
- Script con `type="module"` para usar imports
- Contenedor `#skills-container` para renderizar skills dinámicamente
- Navegación con ancla `#skills` para scroll automático

### CSS
- Estilos para modo oscuro con selector `body.dark-mode`
- Cards de skills responsive con Flexbox
- Menú mobile con transiciones:
  - `transform: translateY(-100%)` por defecto
  - `transform: translateY(0)` cuando está activo
  - Transición de opacity para efecto suave
- Z-index apropiados para header (1000) y menú (999)
- SVG icons con `display: block/none` según estado

### JavaScript Modular

#### main.js
```javascript
import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import getSkills from './utils/skillsList.js';
import menu from './utils/menu.js';

// Cargar templates
document.querySelector('header').innerHTML = header;
document.querySelector('footer').innerHTML = footer;

// Inicializar funcionalidades
darkMode();
menu();
getSkills();
```

#### Funciones Clave
- **darkMode()**: Gestiona toggle, localStorage y cambio de iconos
- **menu()**: Toggle hamburguesa y cierre al click en enlaces
- **getSkills()**: Filtra, mapea y renderiza skills desde data

## Responsive Design

### Desktop (> 768px)
- Menú horizontal completo visible
- Botón modo oscuro visible a la derecha
- Skills en 4 columnas
- Hamburguesa oculta

### Tablet (576px - 768px)
- Menú hamburguesa visible
- Botón modo oscuro en la barra superior
- Skills en 2 columnas
- Menú desplegable desde arriba

### Mobile (< 576px)
- Skills en 1 columna
- Menú hamburguesa funcional
- Botón modo oscuro centrado
- Todo apilado verticalmente

## Mejoras Respecto al Sprint 3

1. **JavaScript funcional** en lugar de solo HTML/CSS estático
2. **Templates reutilizables** eliminan duplicación de código
3. **Modo oscuro completo** con persistencia en localStorage
4. **Skills dinámicas** desde archivo de datos
5. **Menú hamburguesa interactivo** con animaciones
6. **Sistema modular ES6** con imports/exports
7. **Mejor UX** con animaciones suaves y estados persistentes

## Datos en skills.js

Cada skill incluye:
```javascript
{
  name: "HTML5",
  icon: "https://cdn.simpleicons.org/html5/E34F26",
  state: "dominada",
  level: "avanzado",
  description: "Descripción de la tecnología",
  tags: ["Tag1", "Tag2", "Tag3"]
}
```

## Paleta de Colores (Mantenida)
```css
--primary: #2c3e50
--secondary: #e74c3c
--accent: #3498db
--highlight: #f39c12
```

## Proximos Pasos (Sprint 5)
En el siguiente sprint se podría añadir:
- Validación de formulario con JavaScript
- Fetch API para datos externos
- Filtrado dinámico de skills
- Animaciones scroll reveal

## Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript ES6+ (módulos, template strings, arrow functions)
- LocalStorage API
- Flexbox para layouts
- SVG para iconos
- Media Queries responsive

---

**Nota**: Este sprint añade toda la interactividad JavaScript necesaria manteniendo la coherencia visual del Sprint 3. El código es modular, mantenible y escalable.
