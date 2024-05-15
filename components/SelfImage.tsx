import Image from 'next/image';

const SelfImage = () => {
  return (
    <Image
      className='hidden lg:block'
      src='/james_smile.jpeg'
      alt='Picture of James'
      width={200}
      height={100}
    />
  );
};

export default SelfImage;
