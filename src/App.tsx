import { Intro, Contact } from './components/layout';
import { StaticParticlesBackground, CodingCursorEffect } from './components/effects';

function App() {
  return (
    <>
      <StaticParticlesBackground />
      <CodingCursorEffect />
      <Intro />
      <Contact />
    </>
  );
}

export default App;
