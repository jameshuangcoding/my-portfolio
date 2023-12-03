import Link from 'next/link';
import { links } from '../utils/links';

const Info = () => {
  return (
    <div className='flex flex-col'>
      <span className='font-bold text-4xl'>james huang</span>
      <span className='text-xl'>software engineer</span>
      <span className='text-lg'>based in new york</span>
      <span className='flex gap-2 mt-2'>
        {links.map((link, index) => (
          <Link key={index} href={link.path} className='text-2xl'>
            {link.icon}
          </Link>
        ))}
      </span>
    </div>
  );
};

export default Info;
