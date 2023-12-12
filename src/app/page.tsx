import { useTypingEffect } from '../../components/hooks/useTypingEffect';
import LeftContainer from '../../containers/LeftContainer';
import RightContainer from '../../containers/RightContainer';

export default function Home() {
  // const intro = useTypingEffect('hey, my name is', 75);
  // const name = useTypingEffect('james huang', 75);
  // const title = useTypingEffect("i'm a software engineer", 85);

  return (
    <div className='lg:flex lg:justify-between lg:gap-4'>
      <LeftContainer />
      <RightContainer />
    </div>
  );
}
