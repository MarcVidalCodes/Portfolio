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
        <MarkdownHeader headingLevel="1" text="Projects Home" className="text-3xl md:text-5xl" />
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


    </div>
  )
}

export default WhatsNext;
