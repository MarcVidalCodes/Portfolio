import React from 'react';
import SourceControlIcon from './icons/SourceControlIcon';
import ErrorIcon from './icons/ErrorIcon';
import BellIcon from './icons/BellIcon';
import WarningIcon from './icons/WarningIcon';
import CheckIcon from './icons/CheckIcon';

const Footer = () => (
  <>
    <div className="h-0.5 bg-gray-600"></div>
    <footer className="bg-dark-700 text-white flex items-center justify-between px-4 py-2 h-8 hidden md:flex">
      <div className="flex items-center">
        <a
          href="https://github.com/MarcVidalCodes/Portfolio"
          target="_blank"
          rel="noreferrer noopener"
          className="text-blue-400 no-underline flex items-center"
        >
          <SourceControlIcon className="mr-2" />
          <p className="m-0 text-white">main</p>
        </a>
        <ErrorIcon className="ml-4" />
        <p className="m-0 ml-2 text-white">0</p>
        <WarningIcon className="ml-2" />
        <p className="m-0 ml-2 text-white">0</p>
      </div>
      <div className="flex items-center">
        <p className="m-0 mr-4 text-white hidden sm:block">Powered by React.js</p>
        <CheckIcon className="mr-4 hidden sm:block" />
        <p className="m-0 mr-4 text-white hidden sm:block">Prettier</p>
        <BellIcon />
      </div>
    </footer>
  </>
);

export default Footer;
