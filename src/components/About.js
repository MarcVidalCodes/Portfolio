import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import MarkdownButton from './MarkdownButton';
import Comment from './Comment';
import {contact } from '../utils/directory'
import TabLink from './TabLink';

function About() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Hi! My name is Marc Vidal. I am a full stack software engineer, currently pursuing my Bachelor of Science in Computer Science from Carleton University, with my stream being in artificial intelligence and machine learning. </Text>
        <Text>This portfolio website is inspired by my favourite code editor, Visual Studio Code and created with React.js. </Text>
        <Text>
        <span className="font-bold text-pink">Interests/Hobbies: </span> 
        Playing basketball, sports cars, strategy games, collecting action figures, and swimming. I also love going on walks with my dog, Hershey!</Text>
        <Text>To reach out, see <TabLink className="font-bold text-yellow" tab={contact}>Contact.md</TabLink>.</Text>
      </Section>



      <Section>
        <MarkdownHeader headingLevel="2" text="Coursework" className="text-xl md:text-3xl" />
        <LineBreak />
        <Text>
          <span className="font-bold text-pink">COMP1405, Intro To Computer Science I:</span> 12.0/12.0 (A+)
        </Text>
        <Text>
          <span className="font-bold text-pink">COMP1406, Intro To Computer Science II:</span> 12.0/12.0 (A+)
        </Text>
        <Text>
          <span className="font-bold text-pink">COMP1805, Discrete Structures I:</span> 11.0/12.0 (A)
        </Text>
        <Text>
          <span className="font-bold text-pink">MATH1104, Linear Algebra for Engineering and Science:</span> 12.0/12.0 (A+)
        </Text>
        
      </Section>
    </div>
  )
}

export default About;
