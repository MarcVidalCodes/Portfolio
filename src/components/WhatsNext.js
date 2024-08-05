import React from 'react';
import MarkdownHeader from './MarkdownHeader';
import LineBreak from './LineBreak';
import Section from './Section';
import Text from './Text';
import Link from './Link';
import { finance, terra, ecom, dice, cibc } from '../utils/directory';
import TabLink from './TabLink';

function WhatsNext() {
  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="p-6 rounded-lg shadow-lg bg-dark-600 md:w-2/3">
          <Section>
            <MarkdownHeader headingLevel="1" text="Projects Home" className="text-2xl md:text-5xl font-bold text-center mb-6 text-white" />
            <LineBreak />
            <Text className="text-lg text-center mb-4 text-gray-300">Here are some quick links to my projects:</Text>
            <div className="flex items-center justify-between bg-dark-500 p-4 rounded-lg shadow-md">
                <TabLink tab={terra} className="text-link font-normal text-pink-500">TerraSphere</TabLink>
                <span className="ml-5 text-gray-400">~/Submitted to TerraHacks</span>
              </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-dark-500 p-4 rounded-lg shadow-md">
                <TabLink tab={cibc} className="text-link font-normal text-pink-500">CIBC Parent Portal</TabLink>
                <span className="ml-5 text-gray-400">~/Developed for MBA consulting team</span>
              </div>
              <div className="flex items-center justify-between bg-dark-500 p-4 rounded-lg shadow-md">
                <TabLink tab={finance} className="text-link font-normal text-pink-500">Finance Tracker</TabLink>
                <span className="ml-5 text-gray-400">~/Flutter App</span>
              </div>
              <div className="flex items-center justify-between bg-dark-500 p-4 rounded-lg shadow-md">
                <TabLink tab={ecom} className="text-link font-normal text-pink-500">Ecommerce Store</TabLink>
                <span className="ml-5 text-gray-400">~/Java Project</span>
              </div>
              <div className="flex items-center justify-between bg-dark-500 p-4 rounded-lg shadow-md">
                <TabLink tab={dice} className="text-link font-normal text-pink-500">Dice</TabLink>
                <span className="ml-5 text-gray-400">~/Made with Arduino</span>
              </div>
            </div>
          </Section>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-dark-600 flex justify-center items-center mt-6 md:mt-0 md:ml-6" style={{ maxWidth: '900px' }}>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=MarcVidalCodes&layout=compact&theme=dark" alt="Most Used Languages" className="rounded-lg shadow-md w-full" />
        </div>
      </div>
    </div>
  );
}

export default WhatsNext;

