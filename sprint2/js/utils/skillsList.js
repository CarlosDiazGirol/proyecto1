import skillsData from "../data/skills.js";
const skills = document.getElementById('skillsList')

const ninjaSkills = skillsData.filter(skill => skill.state = "dominada")

const getSkills = () => {
  const results = ninjaSkills.map(skill => {
    const template = `
      <li>
      <div>
        <img src="${skill.icon}" alt="${skill.name}">
      </div>
        <h3>${skill.name}</h3>
      </li>
    `
    return template 
  })
  results.push(`<li><a href="./aboutme.html">+</a></li>`)
  skills && (skills.innerHTML = results.join("")) 
}

export default getSkills