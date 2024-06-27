import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Dice from '../components/projects/Dice';
import Ecommerce from '../components/projects/Ecommerce';
import Outfit from '../components/projects/OutfitForecast';
import WhatsNext from '../components/WhatsNext'
import Timeline from '../components/Timeline';
import CIBC from '../components/projects/CIBC';
import Finance from '../components/projects/Finance'

const about = { name: 'About', type: 'file', extension: 'js', component: <About /> }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home /> }
const contact = { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> }
const dice = { name: 'Dice', type: 'file', extension: 'jsx', component: <Dice /> }
const ecom = { name: 'Ecommerce', type: 'file', extension: 'jsx', component: <Ecommerce /> }
const cibc = { name: 'ParentBanking', type: 'file', extension: 'jsx', component: <CIBC /> }
const outfit = { name: 'OutfitForecast', type: 'file', extension: 'jsx', component: <Outfit /> }
const whatsnext = { name: 'ProjectsHome', type: 'file', extension: 'html', component: <WhatsNext /> }
const timeline = { name: 'MyTimeline', type: 'file', extension: 'js', component: <Timeline /> }
const finance = { name: 'FinanceTracker', type: 'file', extension: 'jsx', component: <Finance /> }

const directory = [{
  name: 'marc_vidal_portfolio',
  type: 'folder',
  children: [
    home,
    about,
    timeline,
    {
      name: 'projects',
      type: 'folder',
      children: [
        whatsnext,
        cibc,
        finance,
        outfit,
        ecom,
          dice
      ] 
    },
    contact,
  ]
}];

export {
  whatsnext,
  outfit,
  about,
  finance,
  cibc,
  home,
  contact,
  directory,
  dice,
  ecom,
  timeline
};
