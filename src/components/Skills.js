import React from 'react';
import Section from './Section';
import MarkdownHeader from './MarkdownHeader';
import Text from './Text';
import LineBreak from './LineBreak';

import { ReactComponent as JavaScriptIcon } from '../assets/images/skills/JSIcon.svg'; // Import SVG as a React component
import { ReactComponent as HTMLIcon } from '../assets/images/skills/HTMLIcon.svg';
import { ReactComponent as CSSIcon } from '../assets/images/skills/CSSIcon.svg';
import { ReactComponent as NodeIcon } from '../assets/images/skills/NodeIcon.svg';
import { ReactComponent as ReactIcon } from '../assets/images/skills/ReactIcon.svg';
import { ReactComponent as TailwindIcon } from '../assets/images/skills/TailwindIcon.svg';
import { ReactComponent as CPlusIcon } from '../assets/images/skills/cplusIcon.svg';
import { ReactComponent as ExpressIcon } from '../assets/images/skills/expressIcon.svg';
import { ReactComponent as FlutterIcon } from '../assets/images/skills/flutterIcon.svg';
import { ReactComponent as JavaIcon } from '../assets/images/skills/javaIcon.svg';
import { ReactComponent as MongoIcon } from '../assets/images/skills/MongoIcon.svg';
import { ReactComponent as PythonIcon } from '../assets/images/skills/pythonIcon.svg';
import { ReactComponent as SqliteIcon } from '../assets/images/skills/sqlite.svg';
import { ReactComponent as Typescript } from '../assets/images/skills/typescript.svg';
import { ReactComponent as Git } from '../assets/images/skills/git.svg';

function Skills() {
  return (
    <div className="flex flex-col items-center">
      <Section className="text-center">
        <MarkdownHeader headingLevel="1" text="Technologies" className="text-3xl md:text-5xl" />
        <LineBreak />
        
        <Section className="mt-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">HTML</div>
              <HTMLIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                HTML
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">CSS</div>
              <CSSIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                CSS
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">JavaScript</div>
              <JavaScriptIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                JavaScript
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">TypeScript</div>
              <Typescript className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                TypeScript
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">Node.js</div>
              <NodeIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                Node.js
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">MongoDB</div>
              <MongoIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                MongoDB
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">React/React Native</div>
              <ReactIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                React
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">Tailwind CSS</div>
              <TailwindIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                Tailwind CSS
              </div>
            </div>
            {/* <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">C++</div>
              <CPlusIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                C++
              </div>
            </div> */}
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">Express.js</div>
              <ExpressIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                Express.js
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">Flutter</div>
              <FlutterIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                Flutter
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">Java</div>
              <JavaIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                Java
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">Python</div>
              <PythonIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                Python
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">SQLite</div>
              <SqliteIcon className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                SQLite
              </div>
            </div>
            <div className="relative group text-center flex flex-col items-center">
              <div className="mb-2">Git</div>
              <Git className="w-32 h-32 rounded-md" />
              <div className="absolute inset-0 flex items-center justify-center text-white bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md">
                Git
              </div>
            </div>
          </div>
        </Section>
      </Section>
    </div>
  );
}

export default Skills;
