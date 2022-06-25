import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'BudgetTracker',
      description: 'PWA',
      link: "https://zacks-budget-tracker.herokuapp.com/",
      repo: "https://github.com/yks2728/Zacks-Innovative-Budget-Tracker"
    },
    {
      name: 'MyHealthChart',
      description: 'Full Stack',
      link: "https://myhealth-chart.herokuapp.com/",
      repo: "https://github.com/Jaswal1p/my-health-chart"
    },
    {
      name: 'PasswordGenerator',
      description: 'JavaScript',
      link: "https://yks2728.github.io/Password-Generator/",
      repo: "https://github.com/yks2728/Password-Generator"
    },
    {
      name: 'ScreenTitleScanner',
      description: 'HTML/CSS/Javacript/API',
      link: "https://yks2728.github.io/Screen-Title-Scanner/",
      repo: "https://github.com/yks2728/Screen-Title-Scanner"
    },
    {
      name: 'TmdbMovieSearch',
      description: 'React/JavaScript/CSS/MongoDB',
      link: "https://stunning-mas-green-jas.herokuapp.com/",
      repo: "https://github.com/Jaswal1p/stunning-mas-green-jas"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
