import React from 'react';
import { skills } from '../utils/skills';

const Skills = () => {
  const { languages, frameworks, tools } = skills;

  return (
    <section
      id='skills'
      className='mb-16 scroll-mt-16 md:mb- 24 lg:mb-36 lg:scroll-mt-32'
    >
      <div className='mb-4 lg:sr-only'>
        <h2 className='text-lg font-bold uppercase lg:sr-only'>skills</h2>
      </div>
      <div className='flex justify-between'>
        <span className='flex flex-col'>
          <h3 className='font-bold'>Languages</h3>
          <ul>
            {languages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </span>
        <span className='flex flex-col'>
        <h3 className='font-bold'>Libraries &</h3>
          <h3 className='font-bold'>Frameworks</h3>
          <ul>
            {frameworks.map((framework, index) => (
              <li key={index}>{framework}</li>
            ))}
          </ul>
        </span>
        <span className='flex flex-col'>
          <h3 className='font-bold'>Tools</h3>
          <ul>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
        </span>
      </div>
    </section>
  );
};

export default Skills;
