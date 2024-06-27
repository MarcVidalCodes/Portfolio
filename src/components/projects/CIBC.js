import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import cibc1 from '../../assets/images/portfolio/cibc1.png';
import cibc2 from '../../assets/images/portfolio/cibc2.png';
import cibc3 from '../../assets/images/portfolio/cibc3.png';
import cibc4 from '../../assets/images/portfolio/cibc4.png';
import cibc5 from '../../assets/images/portfolio/cibc5.png';


function Dice() {
  return (
    <Project>
      <ProjectText
        title="IVEY MBA CIBC Parent Portal Banking App"
        technologies="React.js, MongoDB, Express.js, Node.js"
        description="A react project developed for an MBA consulting team at Western University, Ivey School of Business. A portal that allows parents to 
        monitor and control their childrens spending. Parents can choose to give their children allowance and even set an allowance frequency. 
        Parents can monitor their finances through AI financial insights. Lastly, parents are able to view a full history of their childrens finances on the 
        activity tracker on the dashboard."
      />
      <ProjectPreview src={cibc1} alt="cibc" />
      <ProjectPreview src={cibc2} alt="cibc" />
      <ProjectPreview src={cibc3} alt="cibc" />
      <ProjectPreview src={cibc4} alt="cibc" />
      <ProjectPreview src={cibc5} alt="cibc" />
    </Project>
  );
}

export default Dice;
