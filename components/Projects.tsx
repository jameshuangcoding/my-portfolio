import Link from 'next/link';
import { projects } from '../utils/projects';
import Tag from './Tag';

const Projects = () => {
  return (
    <section
      id='projects'
      className='text-md mb-16 scroll-mt-16 md:mb- 24 lg:mb-36 lg:scroll-mt-32'
    >
      <div className='mb-4 lg:sr-only'>
        <h2 className='text-lg font-bold uppercase lg:sr-only'>projects</h2>
      </div>
      <div>
        {projects.map((project, index) => (
          <div key={index} className='mb-6'>
            <div className='flex justify-between'>
              <Link href={project.link}>
                <h3 className='font-bold hover:text-cadet-grey'>{project.title}</h3>
              </Link>
            </div>
            <p className='mb-4'>{project.description}</p>
            <ul className='flex flex-wrap gap-2 mt-2'>
              {project.technologiesUsed.map((tech, index) => (
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

export default Projects;
