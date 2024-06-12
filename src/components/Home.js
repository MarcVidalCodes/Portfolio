import React from 'react';
import Section from './Section';
import Text from './Text';
import { about, contact } from '../utils/directory'
import LineBreak from './LineBreak';
import TabLink from './TabLink';
import Link from './Link';
import ResumePDF from '../assets/documents/Resume.pdf';
import MarkdownButton from './MarkdownButton';

function Home() {
  return (
    <div>
      <Section>
        <h1 className="text-5xl mb-3">
          Hi! I'm <span className="text-pink">Marc</span>!
        </h1>
        <h2 className='text-3xl'>
          Aspiring Software Engineer
          <span className="animate-blink">|</span>
        </h2>
        <LineBreak />
      </Section>

      <Section>
        <Text>
          Navigate my portfolio by clicking the menu button and navigating through various content tabs. t
        </Text>
      </Section>

      <Section>
        <MarkdownButton as="a" href={ResumePDF} target="_blank" rel="noreferrer">
          [Download Resume]
        </MarkdownButton>
      </Section>
      
      <Section className="space-y-2">
        <h3 className="text-2xl font-bold mb-3">
          Helpful Links
        </h3>
        <div>
          <TabLink tab={about} className="text-link font-normal">About</TabLink>
          <span className="ml-5">~/background_information</span>
        </div>
        <div>
          <TabLink tab={contact} className="text-link font-normal">Contact</TabLink>
          <span className="ml-5">~/lets_chat</span>
        </div>
      </Section>
    </div>
  )
}

export default Home;
