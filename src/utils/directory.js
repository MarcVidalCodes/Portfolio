import React from 'react';
import Home from '../components/Home';
import About from '../components/About';
import Contact from '../components/Contact';
import Dice from '../components/projects/Dice';
import WhatsNext from '../components/WhatsNext'
import Timeline from '../components/Timeline';
import Terra from '../components/projects/TerraSphere'
import HTH from '../components/projects/hth';
import TagRoyale from '../components/projects/TagRoyale';
import ReferenceLetters from '../components/letterofrec'; 

const about = { name: 'About', type: 'file', extension: 'js', component: <About /> }
const home = { name: 'Home', type: 'file', extension: 'js', component: <Home /> }
const contact = { name: 'Contact', type: 'file', extension: 'md', component: <Contact /> }
const dice = { name: 'Dice', type: 'file', extension: 'jsx', component: <Dice /> }
const terra = { name: 'TerraSphere', type: 'file', extension: 'jsx', component: <Terra /> }
const whatsnext = { name: 'MyProjects', type: 'file', extension: 'css', component: <WhatsNext /> }
const timeline = { name: 'Experience', type: 'file', extension: 'html', component: <Timeline /> }
const hth = { name: 'RelaxEDai', type: 'file', extension: 'jsx', component: <HTH /> }
const cu = { name: 'TagRoyale', type: 'file', extension: 'jsx', component: <TagRoyale /> }
const rec = { name: 'READ', type: 'file', extension: 'pdf', component: <ReferenceLetters /> } 

const directory = [{
  name: 'marc_vidal_portfolio',
  type: 'folder',
  children: [
    home,
    about,
    rec,
    timeline,
    whatsnext,
    {
      name: 'projects',
      type: 'folder',
      children: [
        cu,
        hth,
        terra,
        dice
      ] 
    },
    contact,
  ]
}];

export {
  whatsnext,
  about,
  hth,
  rec,
  home,
  contact,
  terra,
  directory,
  dice,
  timeline,
  cu
};