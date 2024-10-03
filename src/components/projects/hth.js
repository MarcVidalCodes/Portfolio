import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import hth1 from '../../assets/images/portfolio/hth1.jpeg';
import hth2 from '../../assets/images/portfolio/hth2.jpeg';
import hth3 from '../../assets/images/portfolio/hth3.jpeg';
import hth4 from '../../assets/images/portfolio/hth4.jpeg';
import hth5 from '../../assets/images/portfolio/hth5.jpg';
import hth7 from '../../assets/images/portfolio/hth7.jpg';
import hth8 from '../../assets/images/portfolio/hth8.jpg';
import hth9 from '../../assets/images/portfolio/hth9.jpg';

function HTH() {
    return (
        <Project>
            <ProjectText
                title="RelaxED AI"
                technologies="React, Typescript, MongoDB, Express.js, Node.js, Python, C, CMake, OpenAI, Bluetooth, OpenAI API"
                description={`Second place in best hardware hack at Hack the Hill II! Our project, RelaxED AI, was inspired by our experiences as STEM students constantly juggling busy schedules, often leading to academic stress. RelaxED AI directly helps students manage that stress by tracking stress-related metrics and providing a fine-tuned AI chatbot to offer guidance on managing and reducing stress.

In terms of my contributions, I led the web app side of the project. I helped on all parts of the web app and delegated tasks. I mainly worked on the backend side of the project, making and creating the API calls to OpenAI API and MongoDB cloud. I created the user registration functionality which hashes user passwords and assigns auth tokens for utmost security. I worked in the python file to fetch the data from the hardware to send to the cloud database. I also fine tuned the AI, as well.`}
                devpostLink="https://devpost.com/software/relaxed-ai?ref_content=user-portfolio&ref_feature=in_progress"
                githubLink="https://github.com/MarcVidalCodes/HTH-RelaxEDAI"
            />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <ProjectPreview src={hth7} width="100%" />
                <ProjectPreview src={hth8} width="100%" />
                <ProjectPreview src={hth9} width="100%" />
                <ProjectPreview src={hth5} width="30%" />
                <ProjectPreview src={hth2} width="60%" />
                <ProjectPreview src={hth3} width="50%" />
            </div>
        </Project>
    );
}

export default HTH;
