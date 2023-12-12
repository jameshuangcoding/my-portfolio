import Link from 'next/link';
import { experiences } from '../utils/experiences';
import Tag from './Tag';

const Experience = () => {
  return (
    <section
      id='experience'
      className='text-md mb-16 scroll-mt-16 md:mb- 24 lg:mb-36 lg:scroll-mt-32'
    >
      <div>
        {experiences.map((experience, index) => (
          <div key={index}>
            <div className='flex justify-between'>
              <Link href={experience.link}>
                <h3 className='font-bold'>{experience.company}</h3>
              </Link>
              <p>{experience.time}</p>
            </div>
            <p>{experience.position}</p>
            <ul className='flex flex-wrap gap-2 mt-2'>
              {experience.technologiesUsed.map((tech, index) => (
                <li key={index}>
                  <Tag techName={tech} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
