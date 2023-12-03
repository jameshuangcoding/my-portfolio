import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex flex-col p-4'>
      <h1>
        <Link href='/'>home</Link>
      </h1>
      <h1>
        <Link href='/about'>about</Link>
      </h1>
      <h1>
        <Link href='/skills'>skills</Link>
      </h1>
      <h1>
        <Link href='/experience'>experience</Link>
      </h1>
      <h1>
        <Link href='/projects'>projects</Link>
      </h1>
    </div>
  );
};

export default Navbar;
