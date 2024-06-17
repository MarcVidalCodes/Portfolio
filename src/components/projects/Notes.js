import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import notes from '../../assets/images/portfolio/note.png';

function Ecommerce() {
  return (
    <Project>
      <ProjectText
        title="Notes App"
        technologies="React.js, Node.js, CSS"
        description="A simple notes app that allows users to add and delete notes. Completing this project taught me how to skillfully use 
        React props and components"
        githubLink="https://github.com/MarcVidalCodes/Notes-App"
      />
      <ProjectPreview src={notes} alt="Notes App" />
    </Project>
  );
}

export default Ecommerce;
