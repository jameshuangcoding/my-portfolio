import Link from 'next/link';
import Navbar from './Navbar';

const Info = () => {
  return (
    <nav>
      <h1 className='font-bold text-5xl'>
        <Link href='/'>james huang</Link>
      </h1>
      <h2 className='text-2xl mt-2'>software engineer</h2>
      <h3 className='text-xl mt-1'>based in new york</h3>
      <Navbar />
    </nav>
  );
};

export default Info;
