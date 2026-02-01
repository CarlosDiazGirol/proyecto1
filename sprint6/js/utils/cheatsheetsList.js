import cheatsheets from "../data/cheatsheets.js";

const getCheatsheets = () => {
  const container = document.getElementById('cheatsheets-container');
  
  if (!container) return;

  const html = cheatsheets.map(cs => `
    <a href=".${cs.link}" class="cheatsheet-card">
      <div class="cheatsheet-icon-wrapper">
        <img src="${cs.icon}" alt="${cs.name}" class="cheatsheet-icon">
      </div>
      <h3>${cs.name}</h3>
      <p>Guía rápida de referencia</p>
    </a>
  `).join('');

  container.innerHTML = html;
}

export default getCheatsheets