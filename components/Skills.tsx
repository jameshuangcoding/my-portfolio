import React from 'react';
import { skills } from '../utils/skills';

const Skills = () => {
  const { languages, frameworks, tools } = skills;

  return (
    <section id='skills' className='flex justify-between mb-16 scroll-mt-16 md:mb- 24 lg:mb-36 lg:scroll-mt-32'>
      <span className='flex flex-col'>
        <h3 className='font-bold'>languages</h3>
        <ul>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </span>
      <span className='flex flex-col'>
        <h3 className='font-bold'>frameworks</h3>
        <ul>
          {frameworks.map((framework, index) => (
            <li key={index}>{framework}</li>
          ))}
        </ul>
      </span>
      <span className='flex flex-col'>
        <h3 className='font-bold'>tools</h3>
        <ul>
          {tools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </span>
    </section>
  );
};

export default Skills;
