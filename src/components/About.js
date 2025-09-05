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
        <Text>Hi! My name is Marc Vidal. I am a full stack software engineer, currently working as a <span className="font-bold text-green-400">Software Developer at JSI</span> on the Technical Program Management team.</Text>
        <Text>I am passionate about learning and driven by results!</Text>
        
        <MarkdownHeader headingLevel="2" text="Background" className="text-2xl md:text-3xl mt-6" />
        <Text>I'm pursuing my Bachelor of Science in Computer Science from Carleton University, with a specialization in artificial intelligence and machine learning. I'm particularly interested in developing innovative solutions that leverage both frontend and backend technologies.</Text>
        
        <MarkdownHeader headingLevel="2" text="About This Site" className="text-2xl md:text-3xl mt-6" />
        <Text>This portfolio website is inspired by my favourite code editor, Visual Studio Code, and was built using React.js and Tailwind CSS. Feel free to explore the "project files" in the sidebar to learn more about my work!</Text>
        
        
        <MarkdownHeader headingLevel="2" text="Interests & Hobbies" className="text-2xl md:text-3xl mt-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Text><span className="font-bold text-pink-400">🏀 Sports:</span> Playing basketball, swimming, and staying active</Text>
            <Text><span className="font-bold text-yellow-400">💻 Currently:</span> learning Golang and DevOps</Text>
          </div>
          <div>
            <Text><span className="font-bold text-blue-400">🎮 Games:</span> Strategy games, League of Legends, TFT</Text>
            <Text><span className="font-bold text-purple-400">🐕 Pets:</span> Going on walks with my dog, Hershey!</Text>
          </div>
        </div>
        
        <MarkdownHeader headingLevel="2" text="Let's Connect" className="text-2xl md:text-3xl mt-6" />
        <Text>I'm always open to discussing new projects, opportunities, or just chatting about technology. Feel free to reach out!</Text>
        <div className="mt-4">
          <TabLink className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors" tab={contact}>Contact Me →</TabLink>
        </div>
      </Section>
    </div>
  )
}

export default About;