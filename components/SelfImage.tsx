import Image from 'next/image';

const SelfImage = () => {
  return (
    <Image
      className='hidden lg:mb-36 lg:block'
      src='/james.jpeg'
      alt='Picture of James'
      width={600}
      height={400}
    />
  );
};

export default SelfImage;
