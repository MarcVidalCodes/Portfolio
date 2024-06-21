import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Dice from '../components/projects/Dice';
import Ecommerce from '../components/projects/Ecommerce';
import Resume from '../components/Resume';
import Outfit from '../components/projects/OutfitForecast';
import WhatsNext from '../components/WhatsNext'
import Timeline from '../components/Timeline';
import Notes from '../components/projects/Notes';
import Finance from '../components/projects/Finance'

const about = { name: 'About', type: 'file', extension: 'js', component: <About /> }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home /> }
const contact = { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> }
const dice = { name: 'Dice', type: 'file', extension: 'js', component: <Dice /> }
const ecom = { name: 'Ecommerce', type: 'file', extension: 'js', component: <Ecommerce /> }
const notes = { name: 'Notes', type: 'file', extension: 'js', component: <Notes /> }
const resume = { name: 'Resume', type: 'file', extension: 'txt', component: <Resume /> }
const outfit = { name: 'OutfitForecast', type: 'file', extension: 'js', component: <Outfit /> }
const whatsnext = { name: 'ProjectsHome', type: 'file', extension: 'html', component: <WhatsNext /> }
const timeline = { name: 'MyTimeline', type: 'file', extension: 'js', component: <Timeline /> }
const finance = { name: 'FinanceTracker', type: 'file', extension: 'js', component: <Finance /> }

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
        finance,
        outfit,
        notes,
        ecom,
          dice
      ] 
    },
    resume,
    contact,
  ]
}];

export {
  whatsnext,
  outfit,
  about,
  finance,
  notes,
  home,
  contact,
  directory,
  dice,
  resume,
  ecom,
  timeline
};
