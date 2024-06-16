import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import ecom from '../../assets/images/portfolio/ecom.png';

function Ecommerce() {
  return (
    <Project>
      <ProjectText
        title="Ecommerce Electronic Store"
        technologies="Java, OOP, Model-View-Controller Architecture"
        description="Simple ecommerce electronics store that is centered around the principles of object oriented programming 
        and the model-view-controller architecture with features including cart management, inventory tracking, revenue per sale, and sales completion."
      />
      <ProjectPreview src={ecom} alt="Ecommerce Store" />
    </Project>
  );
}

export default Ecommerce;
