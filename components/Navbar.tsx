import Link from 'next/link';
import { navLinks } from '../utils/navlinks';

const Navbar = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='text-lg mt-10 w-max'>
        {navLinks.map((navLink, index) => (
          <li key={index}>
            <Link href={navLink.path}>{navLink.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
