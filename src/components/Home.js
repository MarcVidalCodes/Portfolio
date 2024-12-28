import React from 'react';
import Section from './Section';
import Text from './Text';
import { about, contact, whatsnext, skills, timeline } from '../utils/directory';
import LineBreak from './LineBreak';
import TabLink from './TabLink';

function Home() {
  return (
    <div className="flex flex-col pt-8 pb-8 sm:pt-12 sm:pb-12 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24 xl:pt-32 xl:pb-32">
    <div className="text-center ">
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
          Navigate my portfolio by clicking the menu button and exploring through the various content tabs!
        </Text>
        <Text>Better Experience on Desktop!</Text>
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
          <TabLink tab={timeline} className="text-link font-normal">Experience</TabLink>
          <span className="ml-5">~/my_experience</span>
        </div>
        <div>
          <TabLink tab={skills} className="text-link font-normal">Technologies</TabLink>
          <span className="ml-5">~/my_skills</span>
        </div>
        <div>
          <TabLink tab={whatsnext} className="text-link font-normal">Projects</TabLink>
          <span className="ml-5">~/see_my_projects</span>
        </div>
        <div>
          <TabLink tab={contact} className="text-link font-normal">Contact</TabLink>
          <span className="ml-5">~/lets_chat</span>
        </div>
      </Section>
    </div>
    </div>
  )
}

export default Home;
