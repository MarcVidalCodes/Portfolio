import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import outfit from '../../assets/images/portfolio/outfit.png';
import outfit2 from '../../assets/images/portfolio/outfit2.png';
import outfit3 from '../../assets/images/portfolio/outfit3.png';

function OutfitForecast() {
  return (
    <Project>
      <ProjectText
        title="Ecommerce Electronic Store"
        technologies="HTML, CSS, Javascript"
        description="An outfit recommendation website that provides users with outfit inspirations, designs, and themes based on the weather in their location."
        githubLink="https://github.com/MarcVidalCodes/Outfit-Forecast"
      />
      <ProjectPreview src={outfit2} alt="Outfit Forecast" />
      <ProjectPreview src={outfit} alt="Outfit Forecast" />
      <ProjectPreview src={outfit3} alt="Outfit Forecast" />
    </Project>
  );
}

export default OutfitForecast;
