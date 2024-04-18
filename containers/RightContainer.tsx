import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import SelfImage from "../components/SelfImage";
import Skills from "../components/Skills";

const RightContainer = () => {
  return (
    <main className='lg:w-1/2 lg:py-24 lg:px-4 pt-24'>
        {/* <SelfImage /> */}
        <About />
        {/* <Skills /> */}
        <Experience />
        <Projects />
    </main>
  );
};

export default RightContainer;
