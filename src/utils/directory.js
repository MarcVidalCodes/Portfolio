import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Dice from '../components/projects/Dice';
import WhatsNext from '../components/WhatsNext'
import Timeline from '../components/Timeline';
import CIBC from '../components/projects/CIBC';
import Finance from '../components/projects/Finance'
import Terra from '../components/projects/TerraSphere'
import Ecom from '../components/projects/Ecommerce'
import Skill from '../components/Skills'


const about = { name: 'About', type: 'file', extension: 'js', component: <About /> }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home /> }
const contact = { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> }
const dice = { name: 'Dice', type: 'file', extension: 'jsx', component: <Dice /> }
const ecom = { name: 'Ecommerce', type: 'file', extension: 'jsx', component: <Ecom /> }
const cibc = { name: 'ParentBanking', type: 'file', extension: 'jsx', component: <CIBC /> }
const terra = { name: 'TerraSphere', type: 'file', extension: 'jsx', component: <Terra /> }
const whatsnext = { name: 'ProjectsHome', type: 'file', extension: 'html', component: <WhatsNext /> }
const timeline = { name: 'MyTimeline', type: 'file', extension: 'js', component: <Timeline /> }
const finance = { name: 'FinanceTracker', type: 'file', extension: 'jsx', component: <Finance /> }
const skills = {name: 'Skills', type:'file', extension: 'js', component: <Skill /> }

const directory = [{
  name: 'marc_vidal_portfolio',
  type: 'folder',
  children: [
    home,
    about,
    skills,
    timeline,
    {
      name: 'projects',
      type: 'folder',
      children: [
        whatsnext,
        terra,
        cibc,
        finance,
        ecom,
          dice
      ] 
    },
    contact,
  ]
}];

export {
  whatsnext,
  about,
  finance,
  cibc,
  home,
  contact,
  terra,
  directory,
  dice,
  ecom,
  timeline,
  skills
};
