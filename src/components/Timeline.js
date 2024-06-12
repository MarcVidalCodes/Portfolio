import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Computer Science Student</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Ottawa, ON</h4>
        <p style={{ color: 'black' }}>Machine learning and artificial intelligence stream</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Jan 2021 - July 2023"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title" style={{ color: 'black' }}>Lifeguard/Swim Instructor</h3>
        <h4 className="vertical-timeline-element-subtitle" style={{ color: 'black' }}>Stouffville, ON</h4>
        <p style={{ color: 'black' }}>Led a guard team of 3 as a head lifeguard and taught successful high level lifesaving classes.</p>
      </VerticalTimelineElement>

    </VerticalTimeline>
  );
}

export default Timeline;
