import Buttons from '../components/Buttons';
import Info from '../components/Info';

const LeftContainer = () => {
  return (
    <header className='sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:px-4'>
      <Info />
      <Buttons />
    </header>
  );
};

export default LeftContainer;
