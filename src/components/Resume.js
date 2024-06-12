import React from 'react';
import Section from './Section';
import Text from './Text';
import LineBreak from './LineBreak';
import ResumePDF from '../assets/documents/Resume.pdf';
import ResumePic from '../assets/images/resume.png';
import MarkdownButton from './MarkdownButton';

function Resume() {
  return (
    <div>
      <Section>
        <h1 className="text-5xl mb-3">
          Resume
        </h1>
        <LineBreak />
      </Section>

      <Section>
        <Text>
          Click the link below to download my resume.
        </Text>
      </Section>

      <Section>
        <MarkdownButton as="a" href={ResumePDF} target="_blank" rel="noreferrer">
          [Download Resume]
        </MarkdownButton>
      </Section>
      <img src={ResumePic} alt="Resume" className="resume-image" />
    </div>
  );
}

export default Resume;
