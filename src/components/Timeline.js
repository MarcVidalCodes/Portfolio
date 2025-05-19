import React, { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import webdevcert from '../assets/images/webdevcert.jpg';
import ter1 from '../assets/images/portfolio/ter1.png';
import TabLink from './TabLink';
import { terra, hth, cu } from '../utils/directory';
import hth1 from '../assets/images/portfolio/hth1.jpeg';
import uav from '../assets/images/portfolio/bbuav1.png';
import cu1 from '../assets/images/portfolio/cu1.jpg';

function Timeline() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Incoming June 2025 - August 2025"
        iconStyle={{ background: 'red', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>Incoming June 2025 - August 2025</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Software Developer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <TabLink
            tab="https://www.decisivedge.com"
            className="text-link font-normal text-blue-100"
          >
            at DecisiveEdge
          </TabLink>
        </h4>
        <p style={{ color: 'black' }}>
          Assisting in the development, testing, and maintenance of software applications using .NET Framework, C#, ASP.NET, SQL Server, Angular, and MongoDB. Collaborating with senior developers to design scalable solutions and troubleshoot issues. Gaining hands-on experience in a fast-paced, collaborative environment.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="March 2025"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>March 2025</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>TagRoyale</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Carleton University, Ottawa</h4>
        <p style={{ color: 'black' }}>Project submitted to CuHacking</p>
        <p style={{ color: 'black' }}>Won best crossover hack at CuHacking! Developed a location-based mobile game that transforms traditional tag into an immersive battle royale experience.</p>
        <p style={{ color: 'black' }}>
          Check out the <TabLink tab="https://devpost.com/software/tag-royale" className="text-link font-normal text-blue-500">DevPost</TabLink>!
        </p>
        <p style={{ color: 'black' }}>
          Or, open the <TabLink tab={cu} className="text-link font-normal text-blue-500">Project</TabLink>!
        </p>
        <img src={cu1} alt="TagRoyale" style={{ border: '2px solid black', marginTop: '30px' }} />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2024 - January 2025"
        iconStyle={{ background: 'pink', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>September 2024 - May 2025</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Web Developer</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Blackbird UAV</h4>
        <p style={{ color: 'black' }}>Worked on home page, vehicles page, teams page, website navigation, and mobile support</p>
        <p style={{ color: 'black' }}>
          Check it out: <TabLink tab="https://dev.blackbirduav.ca" className="text-link font-normal text-blue-500">BlackBirdUAV Website</TabLink>
        </p>
        <img src={uav} alt="uav" style={{ border: '2px solid black', marginTop: '30px' }} />
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2024"
        iconStyle={{ background: 'orange', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>September 2024</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>RelaxED AI</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>UOttawa, Ottawa</h4>
        <p style={{ color: 'black' }}>Project submitted to Hack the Hill</p>
        <p style={{ color: 'black' }}>Won my second hackathon! 2nd place in Best Hardware Hack! </p>
        <p style={{ color: 'black' }}>
          Check out the <TabLink tab="https://devpost.com/software/relaxed-ai?ref_content=user-portfolio&ref_feature=in_progress" className="text-link font-normal text-blue-500">DevPost</TabLink>!
        </p>
        <p style={{ color: 'black' }}>
          Or, open the <TabLink tab={hth} className="text-link font-normal text-blue-500">Project</TabLink>!
        </p>
        <img src={hth1} alt="hth" style={{ border: '2px solid black', marginTop: '30px' }} />
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="August 2024"
        iconStyle={{ background: 'rgb(138, 90, 250)', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>August 2024</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>TerraSphere</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>TMU, Toronto</h4>
        <p style={{ color: 'black' }}>Project submitted to TerraHacks</p>
        <p style={{ color: 'black' }}>"Even LeBron didn't win his first season". Although I did not win my first hackathon, I am very proud of what my team and I have achieved. I was able to successfully lead my team to complete a polished and fully functional app.</p>
        <p style={{ color: 'black' }}>
          Check out the <TabLink tab="https://devpost.com/software/terrasphere?ref_content=user-portfolio&ref_feature=in_progress" className="text-link font-normal text-blue-500">DevPost</TabLink>!
        </p>
        <p style={{ color: 'black' }}>
          Or, open the <TabLink tab={terra} className="text-link font-normal text-blue-500">Project</TabLink>!
        </p>
        <img src={ter1} alt="TerraSphere Preview" style={{ border: '2px solid black', marginTop: '30px' }} />
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="January 2024 - June 2024"
        iconStyle={{ background: 'rgb(71, 181, 85)', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>January 2024 - June 2024</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Web Development Bootcamp</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Udemy - ONLINE</h4>
        <p style={{ color: 'black' }}>Course Taught by Dr Angela Yu</p>
        <p style={{ color: 'black' }}>Topics include: HTML/CSS, Javascript, React, Express, Node, API's, Authentication, REST, Web Design, 
          Databases, Version Control, etc.
        </p>
        <img src={webdevcert} alt="Resume" style={{ border: '2px solid black', marginTop: '30px' }} />
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2023 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>September 2023 - present</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Computer Science Student</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Carleton University, Ottawa, ON</h4>
        <p style={{ color: 'black' }}>Machine learning and artificial intelligence stream</p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2021 - July 2023"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        {isMobile && <p className="timeline-date" style={{ color: 'black' }}>Jan 2021 - July 2023</p>}
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Lifeguard/Swim Instructor</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Stouffville, ON</h4>
        <p style={{ color: 'black' }}>Led a guard team of 3 as a head lifeguard and taught successful high level lifesaving classes.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;