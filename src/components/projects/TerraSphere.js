import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import ter1 from '../../assets/images/portfolio/ter1.png';
import ter2 from '../../assets/images/portfolio/ter2.jpeg';
import ter3 from '../../assets/images/portfolio/ter3.PNG';
import ter4 from '../../assets/images/portfolio/ter4.jpeg';
import ter5 from '../../assets/images/portfolio/ter5.jpeg';
import ter6 from '../../assets/images/portfolio/ter6.jpeg';
import ter7 from '../../assets/images/portfolio/ter7.jpeg';

function TerraSphere() {
    return (
        <Project>
            <ProjectText
                title="TerraSphere"
                technologies="React Native, Redux Toolkit, OPENAI Camera Vision API, Google Maps API, Tailwind CSS"
                description={`A project submitted to Terrahacks. TerraSphere encourages users to live an eco-friendly and sustainable lifestyle by rewarding users with points when they take photos of eco-friendly activities. Gain a streak when snapping pics multiple days in a row, which multiplies your score, further incentivizing users to be sustainable every day. Redeem points for cool eco-related rewards!
                
In terms of my contributions, I led the team on this project. I was able to lead the team to finishing a polished and fully functional app. I personally worked on all parts of the project, helping on every screen in the application. I worked on both API calls as well as well as the points and streak system. I implemented openAI's computer vision seamlessly into our project, creating custom prompts to achieve the point system. I worked with redux toolkit to easily set global state of variables with the Google Maps API. Lastly, I worked on the overall structure of the app as well.`}
                devpostLink="https://devpost.com/software/terrasphere?ref_content=user-portfolio&ref_feature=in_progress"
                githubLink="https://github.com/MarcVidalCodes/CIBCParentWebApp.git"
                youtubeLink="https://www.youtube.com/watch?v=CMnOMxY9jDQ"
            />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <ProjectPreview src={ter1} width="100%" />
                <ProjectPreview src={ter4} width="40%" />
                <ProjectPreview src={ter3} width="40%" />
                <ProjectPreview src={ter2} width="40%" />
                <ProjectPreview src={ter5} width="40%" />
                <ProjectPreview src={ter7} width="40%" />
                <ProjectPreview src={ter6} width="40%" />
            </div>
        </Project>
    );
}

export default TerraSphere;
