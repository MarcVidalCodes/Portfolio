import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import Link from './Link';
import { finance,outfit,notes,ecom,dice} from '../utils/directory'
import TabLink from './TabLink';

function WhatsNext() {
  return (
    <div>
      <Section>
        <MarkdownHeader headingLevel="1" text="About" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>Here are some quick links to my projects: </Text>
        <div>
          <TabLink tab={finance} className="text-link font-normal">Finance Tracker</TabLink>
          <span className="ml-5">~/Flutter App</span>
        </div>
        <div>
          <TabLink tab={outfit} className="text-link font-normal">Outfit Forecast</TabLink>
          <span className="ml-5">~/Inspire your fit</span>
        </div>
        <div>
          <TabLink tab={notes} className="text-link font-normal">Notes App</TabLink>
          <span className="ml-5">~/React App</span>
        </div>
        <div>
          <TabLink tab={ecom} className="text-link font-normal">Ecommerce Store</TabLink>
          <span className="ml-5">~/Java App</span>
        </div>
        <div>
          <TabLink tab={dice} className="text-link font-normal">Dice</TabLink>
          <span className="ml-5">~/Made with Arduino</span>
        </div>

      </Section>


      <Section>
        <MarkdownHeader headingLevel="1" text="Future Projects" className="text-3xl md:text-5xl" />
        <LineBreak />
        <Text>
        I always strive to learn and create new things, here are projects im working on! 
        </Text>
      </Section>

      <Section>
        <h2 className="text-2xl font-bold mb-3">
          SniffSwipes: Tinder for pups looking to make friends
        </h2>
        <h3 className="text-1x mb-3">
          Currently working on a Tinder-like app for dogs to set up playdates. I am creating this app using React Native Expo, Tailwind CSS and Firebase. 
        </h3>
      </Section>
      <Section>
        <h2 className="text-2xl font-bold mb-3">
          BeSuccessful
        </h2>
        <h3 className="text-1x mb-3">
          A social media app inspired by BeReal where users snap photos of what they are doing and get a score based on how productive their activity is. Users can compete with 
          friends on a leaderboard. I aim to publish this on the app store. 
        </h3>
      </Section>
    </div>
  )
}

export default WhatsNext;
