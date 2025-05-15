import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Dice from '../components/projects/Dice';
import WhatsNext from '../components/WhatsNext'
import Timeline from '../components/Timeline';
import CIBC from '../components/projects/CIBC';
import Terra from '../components/projects/TerraSphere'
import Ecom from '../components/projects/Ecommerce'
import Skill from '../components/Skills'
import HTH from '../components/projects/hth';
import TagRoyale from '../components/projects/TagRoyale';


const about = { name: 'About', type: 'file', extension: 'js', component: <About /> }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home /> }
const contact = { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> }
const dice = { name: 'Dice', type: 'file', extension: 'jsx', component: <Dice /> }
const ecom = { name: 'Ecommerce', type: 'file', extension: 'jsx', component: <Ecom /> }
const cibc = { name: 'ParentBanking', type: 'file', extension: 'jsx', component: <CIBC /> }
const terra = { name: 'TerraSphere', type: 'file', extension: 'jsx', component: <Terra /> }
const whatsnext = { name: 'MyProjects', type: 'file', extension: 'css', component: <WhatsNext /> }
const timeline = { name: 'Experience', type: 'file', extension: 'html', component: <Timeline /> }
const skills = {name: 'Skills', type:'file', extension: 'txt', component: <Skill /> }
const hth = { name: 'RelaxEDai', type: 'file', extension: 'jsx', component: <HTH /> }
const cu = { name: 'TagRoyale', type: 'file', extension: 'jsx', component: <TagRoyale /> }

const directory = [{
  name: 'marc_vidal_portfolio',
  type: 'folder',
  children: [
    home,
    about,
    timeline,
    whatsnext,
    skills,
    {
      name: 'projects',
      type: 'folder',
      children: [
        cu,
        hth,
        terra,
        cibc,
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
  cibc,
  hth,
  home,
  contact,
  terra,
  directory,
  dice,
  ecom,
  timeline,
  skills,
  cu
};