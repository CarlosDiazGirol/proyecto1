import { header, footer } from './templates/template.js';
import darkMode from './utils/darkMode.js';
import getSkills from './utils/skillsList.js';
import menu from './utils/menu.js';

// Cargar templates de header y footer
const siteHeader = document.querySelector('header');
const siteFooter = document.querySelector('footer');

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

