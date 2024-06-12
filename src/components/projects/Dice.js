import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import dice from '../../assets/images/portfolio/dice.png';
import dice2 from '../../assets/images/portfolio/dice2.jpeg';

function Dice() {
  return (
    <Project>
      <ProjectText
        title="Dice"
        technologies="Arduino"
        description="Die created with Arduino, various electrical components, and 3d parts. Wave hand over infrared sensor to start rolling sequence."
        githubLink="https://github.com/MarcVidalCodes/Arduino-Dice"
      />
      <ProjectPreview src={dice} alt="dice" />
      <ProjectPreview src={dice2} alt="inside dice" />
    </Project>
  );
}

export default Dice;
