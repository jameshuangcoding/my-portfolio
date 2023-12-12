import { links } from '../utils/links';
import Link from 'next/link';

const Buttons = () => {
  return (
    <ul className='flex gap-2 my-2'>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path} className='text-2xl'>
            {link.icon}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Buttons;
