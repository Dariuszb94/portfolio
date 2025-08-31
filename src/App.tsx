import { Intro, Skills, Projects, Contact } from './components/layout';
import {
  StaticParticlesBackground,
  CodingCursorEffect,
} from './components/effects';

function App() {
  return (
    <>
      <StaticParticlesBackground />
      <CodingCursorEffect />
      <Intro />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
