import React from 'react';
import Project from '../portfolio/Project';
import ProjectText from '../portfolio/ProjectText';
import ProjectPreview from '../portfolio/ProjectPreview';
import cu1 from '../../assets/images/portfolio/cu1.jpg';
import cu2 from '../../assets/images/portfolio/cu2.jpg';
import cu3 from '../../assets/images/portfolio/cu3.jpg';
import cu4 from '../../assets/images/portfolio/cu4.jpg';
import cu5 from '../../assets/images/portfolio/cu5.jpg';
import cu6 from '../../assets/images/portfolio/cu6.jpg';

function TagRoyale() {
    return (
        <Project>
            <ProjectText
                title="TagRoyale"
                technologies="React Native, TypeScript, Express, Socket.io WebSockets, Geolocation API, React Navigation"
                description={`TagRoyale is a location-based mobile game that transforms traditional tag into an immersive battle royale experience. Players join a virtual lobby, enter a designated play area, and compete in real-time using their smartphones as tracking devices. The app uses GPS to monitor player positions, automatically detects when a "tag" occurs based on proximity, and provides real-time updates on game status.

Features include real-time player tracking on an interactive map, geographical facts about the playing location powered by Wolfram Alpha, automated tag detection using geolocation, in-game timer, a shrinking safezone/boundary, multiplayer gameplay, and customizable game settings.

My team and I won best crossover hack at CuHacking, where I primarily worked on backend development. I developed a real-time location-based multiplayer system using Socket.io WebSockets with automatic reconnection handling and optimized location updates at 2-second intervals. I also built fault-tolerant networking with aggressive reconnection strategies and host migration to maintain game integrity even when players disconnect.`}
                devpostLink="https://devpost.com/software/tag-royale"
                githubLink="https://github.com/MarcVidalCodes/CuHackking"
            />
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                <ProjectPreview src={cu1} width="100%" />
                <ProjectPreview src={cu2} width="40%" />
                <ProjectPreview src={cu3} width="40%" />
                <ProjectPreview src={cu4} width="40%" />
                <ProjectPreview src={cu5} width="40%" />
                <ProjectPreview src={cu6} width="40%" />
            </div>
        </Project>
    );
}

export default TagRoyale;