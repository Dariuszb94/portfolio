import { Intro, Skills, Contact } from './components/layout';
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
      <Contact />
    </>
  );
}

export default App;
