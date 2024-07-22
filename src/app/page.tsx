import LeftContainer from '../../containers/LeftContainer';
import RightContainer from '../../containers/RightContainer';

export default function Home() {
  return (
    <div className='lg:flex lg:justify-between lg:gap-4'>
      <LeftContainer />
      <RightContainer />
    </div>
  );
}
