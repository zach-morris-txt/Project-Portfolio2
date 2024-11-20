import '../App.css';
import projectDataArray from '../assets/project-data.js'


function ProjCol() {
  return (
    <div className="projCol">
      <div class="projColContent">
        <div class="projNav">
          <h2>Projects</h2>
          <div class="navButtons">
            <button class="navButton">Freelance</button>
            <button class="navButton">Personal</button>
            <button class="navButton">Planned</button>
            <button class="navButton">Study</button>
          </div>
        </div>
        <div class="projCards">
          {projectDataArray.map((project, index) => (
            <div class="projCard">
              <p key={index}>{project.name}</p>
              <p key={index}>{project.img}</p>
              <p key={index}>{project.description}</p>
              <p key={index}>{project.link1}</p>
              <p key={index}>{project.link2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjCol;