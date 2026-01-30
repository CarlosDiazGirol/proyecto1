# Sprint 1 - Estructura HTML Básica

## Objetivo
Crear la estructura HTML básica del proyecto con dos páginas (Home y Contacto) utilizando etiquetas semánticas.

## Estructura de Carpetas
```
sprint1/
├── css/
│   ├── reset.css
│   └── styles.css
├── js/
│   └── main.js
├── index.html
├── contacto.html
└── readme.md
```

## Requisitos

### Páginas HTML
-  **index.html** - Página principal con información personal
-  **contacto.html** - Página con formulario de contacto

### Navegación
- Header replicado en ambas páginas
- Logo con iniciales "CD" que enlaza a index.html
- Menú de navegación con enlaces a:
  - About (sin funcionalidad aún)
  - Skills (sin funcionalidad aún)
  - Cheatsheets (sin funcionalidad aún)
  - Recursos (sin funcionalidad aún)
  - **Contacto** (funcional)

### Contenido Index.html
- Imagen personal desde Cloudinary
- Nombre: Carlos Díaz Girol
- Título profesional: Fullstack Developer & Tech Educator
- Descripción personal detallada

### Formulario de Contacto
- Campo Nombre (input type="text", required)
- Campo Email (input type="email", required)
- Campo Asunto (input type="text", required)
- Campo Mensaje (textarea, required)
- Botón de enviar
- Todos los labels asociados correctamente con atributos `for` e `id`
- Todos los campos son obligatorios (atributo `required`)

### Elementos Técnicos
- Uso de etiquetas semánticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Favicon desde Cloudinary
- Enlaces a archivos CSS y JS
- Estructura limpia y ordenada

## Próximos Pasos (Sprint 2)
En el siguiente sprint se añadirán:
- Estilos CSS para dar formato al diseño
- Layout responsive
- Mejoras visuales en la navegación y formulario

## Notas
- El formulario está configurado para enviar a FormSubmit (carlos@thebridge.tech)
- Las imágenes están alojadas en Cloudinary
- Los estilos CSS están vacíos en este sprint (solo estructura HTML)