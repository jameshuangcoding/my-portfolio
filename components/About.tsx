const About = () => {
  return (
    <section
      id='about'
      className='flex flex-wrap mb-16 scroll-mt-16 md:mb- 24 lg:mb-36 lg:scroll-mt-32'
    >
      <div className='mb-4 lg:sr-only'>
        <h2 className='text-lg font-bold uppercase lg:sr-only'>about</h2>
      </div>
      <p className='mb-4'>
        I enjoy tackling complex problems and building large scale applications
        to make people&apos;s lives better and simpler, including my own.
      </p>
      <p className='mb-4'>
        In my free time, you can catch me paddling in a{' '}
        <a href='https://www.dchracing.com/' className='hover:text-red-500 '>
          dragon boat
        </a>
        , playing pickleball at the courts, or snowboarding in the mountains.
      </p>
      <p></p>
    </section>
  );
};

export default About;
