# Sprint 2 - Diseño CSS y Estilos

## Objetivo
Aplicar estilos CSS profesionales al proyecto, implementando un sistema de diseño con variables CSS, tipografía Roboto y animaciones.

## Estructura de Carpetas
```
sprint2/
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── contacto.html
└── readme.md
```

## Nuevas Características del Sprint 2

### Sistema de Diseño CSS
- **Variables CSS** implementadas con:
  - Paleta de colores personalizada (azul oscuro, rojo vibrante, naranja dorado)
  - Escalas de tamaños de fuente responsive
  - Sistema de espaciado consistente
  - Tiempos de transición estandarizados
  - Breakpoints para diseño responsive
  - Sombras y bordes redondeados

### Tipografía
- **Google Fonts - Roboto** integrado
- Pesos de fuente: 300, 400, 500, 700, 900
- Jerarquía tipográfica clara
- Line-height optimizado para legibilidad

### Estilos Implementados

#### Header & Navegación
- Header sticky con sombra
- Logo con efecto hover
- Enlaces con subrayado animado
- Transiciones suaves

#### Hero Section
- Layout flexible con imagen arriba y texto abajo
- Imagen grande centrada
- Tipografía impactante y jerarquizada
- 3 botones de acción (LinkedIn, GitHub, Contacto)
- Espaciado consistente

#### Skills
- Layout flexible y adaptativo
- Cards con efecto hover (elevación y cambio de color)
- Transiciones suaves
- Responsive design

#### Proyectos
- Layout flexible multi-columna
- Cards con sombras y efectos hover
- Listas con bullets personalizados
- Diseño escalable

#### Cheatsheets
- Cards con gradientes
- Efectos de transformación al hover
- Diseño visual atractivo

#### Formulario de Contacto
- Título y subtítulo fuera del formulario
- Estructura consistente para todas las secciones
- Container sin sombras
- Inputs con estados focus
- Botón con gradiente
- Validación visual

#### Footer
- Fondo oscuro contrastante
- Navegación centralizada
- **Animación heartbeat en el corazón ❤**
- Texto: "Hecho con ❤ por Carlos Díaz Girol"

### Animaciones
- **@keyframes heartbeat** - Latido del corazón en footer
- Transiciones en todos los elementos interactivos
- Efectos hover suaves

### Responsive Design
- **Mobile First approach**
- Breakpoints:
  - 576px (móvil)
  - 768px (tablet)
  - 992px (desktop)
- Layout flexible con Flexbox
- Tipografía escalable
- Navegación responsive
- Botones adaptables a diferentes pantallas

## Paleta de Colores
```css
--primary: #2c3e50     /* Azul oscuro elegante */
--secondary: #e74c3c   /* Rojo vibrante */
--accent: #3498db      /* Azul brillante */
--highlight: #f39c12   /* Naranja dorado */
--success: #27ae60     /* Verde */
```

## Mejoras Respecto al Sprint 1
1. Sistema completo de variables CSS
2. Tipografía profesional con Roboto
3. Diseño visual atractivo y moderno
4. Interactividad con efectos hover
5. Animaciones personalizadas
6. Diseño 100% responsive
7. Footer personalizado con animación

## Próximos Pasos (Sprint 3)
En el siguiente sprint se añadirá:
- JavaScript para interactividad
- Validación de formulario
- Efectos dinámicos adicionales

## Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas
- Google Fonts (Roboto)
- Flexbox para layouts
- Media Queries
- Animaciones CSS
- Botones con enlaces externos (target="_blank")

---

**Nota**: Este sprint se enfoca exclusivamente en el diseño visual. La funcionalidad JavaScript se implementará en sprints posteriores.
