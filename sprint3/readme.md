# Sprint 3 - Página About Me

## Objetivo
Crear una página profesional "About Me" con experiencia laboral, educación y valores personales, manteniendo el diseño establecido en Sprint 2.

## Estructura de Carpetas
```
sprint3/
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── contacto.html
├── about.html
└── readme.md
```

## Nuevas Características del Sprint 3

### Nueva Página: about.html
- **Página About Me completa** con información profesional detallada
- Navegación actualizada en todas las páginas apuntando a `about.html`
- Estructura semántica con secciones diferenciadas

### Secciones Implementadas

#### Biografía Personal
- **Layout Flexbox** con imagen (polaroid) a la izquierda y contenido a la derecha
- Foto con efecto **marco polaroid**:
  - Fondo blanco simulando papel fotográfico
  - Padding superior, lateral y extra en la parte inferior
  - Sombra para efecto 3D
  - Texto "DATA" en la parte inferior con diseño especial
- Información personal:
  - Nombre completo
  - Título profesional
  - Descripción detallada
  - Botones de acción (GitHub, LinkedIn, Contacto)

#### Diseño del Texto Polaroid
- Texto "DATA" en mayúsculas
- **Gradiente de colores** (azul → rojo → naranja)
- Letra tamaño extra grande
- Espaciado amplio entre letras (12px)
- Rotación ligera (-2deg) para efecto natural
- Fuente en negrita (black weight)

#### Experiencia Profesional
- Lista de experiencias laborales
- **Cards de experiencia** con:
  - Borde izquierdo azul (4px)
  - Título del puesto
  - Empresa destacada en color azul
  - Fechas de inicio y fin
  - Descripción del rol
  - Lista de responsabilidades y logros
- Sin efectos hover (diseño limpio y profesional)

#### Educación
- Lista de formación académica y bootcamps
- **Cards de educación** con:
  - Estructura similar a experiencia
  - Título del programa
  - Institución educativa
  - Lista de tecnologías y contenidos aprendidos
- Sin efectos hover

#### Valores Personales
- Grid flexible de valores
- **Cards de valores** con:
  - Layout de 2 columnas en desktop
  - Borde gris claro
  - Título del valor en color azul
  - Descripción del principio
  - Diseño minimalista
- Sin efectos hover

### Estilos CSS Añadidos

#### Polaroid Frame
```css
.about-photo {
  background-color: white;
  padding: var(--spacing-md);
  padding-bottom: var(--spacing-2xl);
  box-shadow: var(--shadow-md);
  border-radius: var(--radius-sm);
}

.polaroid-caption {
  gradient: azul → rojo → naranja
  letter-spacing: 12px
  transform: rotate(-2deg)
}
```

#### Cards System
```css
.experience-card,
.education-card {
  background-color: white
  border-left: 4px solid azul
  padding: var(--spacing-xl)
  border-radius: var(--radius-lg)
}

.value-card {
  flex layout (50% en desktop)
  min-width: 300px
  border: 1px solid gris claro
}
```

### Responsive Design

#### Desktop (992px+)
- Biografía: foto polaroid a la izquierda, info a la derecha
- Valores: 2 columnas

#### Tablet (768px - 991px)
- Biografía: foto arriba, info abajo (columna)
- Foto polaroid centrada con max-width 400px
- Valores: 1 columna

#### Mobile (< 768px)
- Tipografía reducida
- Botones en columna (100% ancho)
- Todo apilado verticalmente

## Mejoras Respecto al Sprint 2

1. **Nueva página About completa** con navegación integrada
2. **Efecto polaroid** en la imagen con texto decorativo "DATA"
3. **Sistema de cards** para experiencia, educación y valores
4. **Layout flexible** que se adapta a diferentes pantallas
5. **Diseño limpio** sin hover effects en las cards de contenido
6. **Gradiente de texto** personalizado para el caption de la polaroid
7. **Responsive total** con breakpoints optimizados

## Diferencias Clave con Sprint 2

- **Sin efectos hover** en cards de experiencia/educación/valores (diseño profesional y limpio)
- **Polaroid frame** único para la foto del about
- **Texto decorativo con gradiente** en caption de polaroid
- **Layout bio** con flexbox (foto + info horizontal en desktop)

## Paleta de Colores (Mantenida)
```css
--primary: #2c3e50     /* Azul oscuro elegante */
--secondary: #e74c3c   /* Rojo vibrante */
--accent: #3498db      /* Azul brillante */
--highlight: #f39c12   /* Naranja dorado */
```

## Próximos Pasos (Sprint 4)
En el siguiente sprint se añadirá:
- Funcionalidad JavaScript interactiva
- Posible integración de skills dinámicos
- Mejoras en la navegación

## Tecnologías Utilizadas
- HTML5 semántico
- CSS3 con variables personalizadas (heredadas de Sprint 2)
- Google Fonts (Roboto)
- Flexbox para todos los layouts
- Gradientes CSS
- Text clipping para efectos de texto
- Transform y rotate para diseño polaroid
- Media Queries responsive

---

**Nota**: Este sprint mantiene la coherencia visual con Sprint 2 y añade una página About profesional con diseño polaroid único y sistema de cards limpio sin hover effects.
