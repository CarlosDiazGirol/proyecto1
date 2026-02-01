import skillsData from "../data/skills.js";

const getSkills = () => {
  const skillsContainer = document.getElementById('skills-container');
  
  if (!skillsContainer) return;
  
  // Filtrar solo las skills dominadas
  const ninjaSkills = skillsData.filter(skill => skill.state === "dominada");
  
  const skillsHTML = ninjaSkills.map(skill => `
    <article class="skill-card">
      <div class="skill-icon">
        <img src="${skill.icon}" alt="${skill.name}" width="48" height="48">
      </div>
      <h3>${skill.name}</h3>
      <p class="skill-level">${skill.level}</p>
      <p class="skill-description">${skill.description}</p>
      <div class="skill-tags">
        ${skill.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    </article>
  `).join('');
  
  skillsContainer.innerHTML = skillsHTML;
};

export default getSkills;