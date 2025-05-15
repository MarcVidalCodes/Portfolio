import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import TabLink from './TabLink';
import { terra, ecom as ecomTab, dice, cibc, hth, cu } from '../utils/directory';
import hth1 from '../assets/images/portfolio/hth1.jpeg';
import ter1 from '../assets/images/portfolio/ter1.png';
import cibc1 from '../assets/images/portfolio/cibc1.png';
import ecomImage from '../assets/images/portfolio/ecom.png';
import diceImage from '../assets/images/portfolio/dice.png';
import uavImage from '../assets/images/portfolio/bbuav1.png';
import cu1 from '../assets/images/portfolio/cu1.jpg';

function WhatsNext() {
  const projects = [
    {
      image: uavImage,
      title: 'Blackbird UAV Website',
      description: 'Website created for BlackBirdUAV to garner sponsorship attention. Worked on home page, vehicle page, teams page, website navigation, and mobile support',
      techStack: [
        { name: '#HTML', color: 'bg-blue' },
        { name: '#CSS', color: 'bg-purple' },
        { name: '#JavaScript', color: 'bg-yellow' },
        { name: '#React', color: 'bg-blue' }
      ],
      link: 'https://dev.blackbirduav.ca'
    },
    {
      tab: cu,
      image: cu1,
      title: 'TagRoyale',
      description: 'A location-based mobile game that transforms traditional tag into an immersive battle royale experience. Won best crossover hack at CuHacking.',
      techStack: [
        { name: '#React Native', color: 'bg-blue' },
        { name: '#TypeScript', color: 'bg-blue' },
        { name: '#Express', color: 'bg-purple' },
        { name: '#Socket.io', color: 'bg-red' },
        { name: '#WebSockets', color: 'bg-green' },
        { name: '#Geolocation API', color: 'bg-yellow' },
        { name: '#React Navigation', color: 'bg-blue' }
      ]
    },
    {
      tab: hth,
      image: hth1,
      title: 'RelaxED AI',
      description: 'Second place in best hardware hack at Hack the Hill II! Our project, RelaxED AI, was inspired by our experiences as STEM students constantly juggling busy schedules, often leading to academic stress.',
      techStack: [
        { name: '#React', color: 'bg-blue' },
        { name: '#Typescript', color: 'bg-red' },
        { name: '#MongoDB', color: 'bg-green' },
        { name: '#Express.js', color: 'bg-orange' },
        { name: '#Node.js', color: 'bg-green' },
        { name: '#Python', color: 'bg-yellow' },
        { name: '#C', color: 'bg-blue' },
        { name: '#CMake', color: 'bg-white' },
        { name: '#OpenAI', color: 'bg-purple' },
        { name: '#Bluetooth', color: 'bg-blue' },
        { name: '#OpenAI API', color: 'bg-purple' }
      ]
    },
    {
      tab: terra,
      image: ter1,
      title: 'TerraSphere',
      description: 'A project submitted to Terrahacks. TerraSphere encourages users to live an eco-friendly and sustainable lifestyle by rewarding users with points when they take photos of eco-friendly activities.',
      techStack: [
        { name: '#React Native', color: 'bg-blue' },
        { name: '#Redux Toolkit', color: 'bg-purple' },
        { name: '#OPENAI Camera Vision API', color: 'bg-green' },
        { name: '#Google Maps API', color: 'bg-red' },
        { name: '#Tailwind CSS', color: 'bg-white' }
      ]
    },
    {
      tab: cibc,
      image: cibc1,
      title: 'CIBC Parent Portal',
      description: 'A react project developed for an MBA consulting team at Western University, Ivey School of Business. A portal that allows parents to monitor and control their childrens spending.',
      techStack: [
        { name: '#React.js', color: 'bg-blue' },
        { name: '#MongoDB', color: 'bg-green' },
        { name: '#Express.js', color: 'bg-purple' },
        { name: '#Node.js', color: 'bg-green' }
      ]
    },
    {
      tab: ecomTab,
      image: ecomImage,
      title: 'Ecommerce Store',
      description: 'Simple ecommerce electronics store that is centered around the principles of object oriented programming and the model-view-controller architecture.',
      techStack: [
        { name: '#Java', color: 'bg-white' },
        { name: '#OOP', color: 'bg-orange' },
        { name: '#Model-View-Controller Architecture', color: 'bg-red' }
      ]
    },
    {
      tab: dice,
      image: diceImage,
      title: 'Dice',
      description: 'Die created with Arduino, various electrical components, and 3d parts. Wave hand over infrared sensor to start rolling sequence.',
      techStack: [
        { name: '#Arduino', color: 'bg-blue' }
      ]
    }
  ];

  return (
    <div className="p-20 items-center max-w-6xl mx-auto">
      <Section>
        <MarkdownHeader headingLevel="1" text="Projects Home" className="text-2xl md:text-5xl font-bold text-center mb-6 text-white" />
        <LineBreak />
        <Text className="text-lg text-center mb-4 text-gray-300">Here are some quick links to my projects:</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg bg-dark-600 transform transition-transform hover:scale-105">
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap mb-4">
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className={`rounded-full px-2 py-1 text-xs mr-2 mb-2 ${tech.color} text-black`}>{tech.name}</span>
                ))}
              </div>
              {project.link ? (
                <a href={project.link} className="text-link font-normal text-pink-500" target="_blank" rel="noopener noreferrer">Blackbird UAV Website</a>
              ) : (
                <TabLink tab={project.tab} className="text-link font-normal text-pink-500">Read More</TabLink>
              )}
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

export default WhatsNext;