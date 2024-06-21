import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import finance1 from '../../assets/images/portfolio/finance1.png';
import finance2 from '../../assets/images/portfolio/finance2.png';
import finance3 from '../../assets/images/portfolio/finance3.png';
import finance4 from '../../assets/images/portfolio/finance4.png';

function Ecommerce() {
  return (
    <Project>
      <ProjectText
        title="Personal Finance App"
        technologies="Flutter, SQLite, CRUD Functionality, OOP"
        description="Personal finance tracker app that allows the user to add, delete, and edit transactions such as 
        income and expenses. The user can then further categorize these transactions into different categories. Transactions
        are organized by date and can be visualized using a bar graph."
        githubLink="https://github.com/MarcVidalCodes/FinanceTracker"
      />
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
        <ProjectPreview src={finance1} width="40%"/>
        <ProjectPreview src={finance2} width="40%"/>
        <ProjectPreview src={finance3} width="40%"/>
        <ProjectPreview src={finance4} width="40%"/>
      </div>
    </Project>
  );
}

export default Ecommerce;
