import Link from 'next/link';
import Navbar from './Navbar';

const Info = () => {
  return (
    <nav>
      <h1 className='font-bold text-5xl'>
        <Link href='/'>James Huang</Link>
      </h1>
      <h2 className='text-2xl mt-2'>Software Engineer</h2>
      <Navbar />
    </nav>
  );
};

export default Info;
