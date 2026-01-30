const header = `
<div class="header-content">
  <div class="site-logo">
    <a href="./index.html">
      <img src="https://res.cloudinary.com/dataimages/image/upload/v1768570952/Data-CV/datalogo_fffq2x.png" alt="Imagen logo de portada de El Data">
    </a>
  </div>

  <div id="header-menu" class="header-menu">
    <nav class="header-nav">
      <a href="./aboutme.html" target="_self">About</a>
      <a href="./index.html#skills" target="_self">Skills</a>
      <a href="./index.html#cheatsheets">Cheatsheets</a>
      <a href="./recursos.html" target="_self">Recursos</a>
      <a href="./contacto.html" target="_self">Contacto</a>
    </nav>
    <button id="site-theme-mode" class="site-theme-mode">
      <div id="theme-icon"></div>
    </button>
    <div class="weather"></div>
  </div>
  <div id="ham" class="ham">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
`

const footer = `
<nav class="footer-nav">
  <a href="https://github.com/CarlosDiazGirol" target="_blank">GitHub</a>
  <a href="https://www.linkedin.com/in/carlosdiazgirol/" target="_blank">Linkedin</a>
  <a href="/" target="_self">Home</a>
  <a href="./aboutme.html" target="_self">About</a>
  <a href="./contacto.html" target="_self">Contacto</a>
</nav>
<p>Hecho con <span class="heart">❤︎</span> by <a href="https://www.linkedin.com/in/carlosdiazgirol/" target="_blank">DATA</a></p>
`

export {
  header,
  footer
}
