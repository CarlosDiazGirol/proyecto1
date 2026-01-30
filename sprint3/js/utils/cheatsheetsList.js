import cheatsheets from "../data/cheatsheets.js";
const cheatsheetsList = document.getElementById('cheatsheetsList')


const getCheatsheets = () => {
  const results = cheatsheets.map(cs => {
    const template = `
      <li>
      <a href="${cs.link}">
        <div>
          <img src="${cs.icon}" alt="${cs.name}">
        </div>
        <h3>CheatSheet <span>${cs.name}</span></h3>
      </a>
      </li>
    `
    return template 
  })
  cheatsheetsList && (cheatsheetsList.innerHTML = results.join("")) 
}

export default getCheatsheets