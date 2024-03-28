import Link from 'next/link';
import { experiences } from '../utils/experiences';
import Tag from './Tag';

const Experience = () => {
  return (
    <section
      id='experience'
      className='mb-16 scroll-mt-16 md:mb- 24 lg:mb-36 lg:scroll-mt-32'
    >
      <div className='mb-4 lg:sr-only'>
        <h2 className='text-lg font-bold uppercase lg:sr-only'>experience</h2>
      </div>
      <div>
        {experiences.map((experience, index) => (
          <div key={index}>
            <div className='flex justify-between'>
              <Link href={experience.link}>
                <h3 className='font-bold hover:text-cadet-grey'>{experience.company}
                </h3>
              </Link>
              <p>{experience.time}</p>
            </div>
            <p className='mb-2'>{experience.position}</p>
            <p className='mb-4'>{experience.description}</p>
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
