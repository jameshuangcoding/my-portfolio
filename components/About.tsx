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
        Hey, I’m James, and I’m a software engineer who is passionate about
        building applications to make people’s lives better and simpler. Most
        recently, I have been developing software for the open source community.
      </p>
      <p className='mb-4'>
        When I’m not at the computer, I’m usually{' '}
        <a
          href='https://www.instagram.com/letjamezcook/'
          id='about-links'
        >
          cooking
        </a>
        , rock climbing or running in preparation for the upcoming marathon.
        Depending on the season, you can also find me snowboarding, playing
        handball or pickleball at the park, paddling in a{' '}
        <a href='https://www.dchracing.com/' id='about-links'>
          dragon boat
        </a>
        , or helping out my lion dance team.
      </p>
    </section>
  );
};

export default About;
