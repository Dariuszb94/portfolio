import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import { lazy, Suspense } from 'react';
import ErrorBoundary from './ErrorBoundary';

// Lazy load the ParticlesBackground component to reduce initial bundle size
const ParticlesBackground = lazy(() => import('./ParticlesBackground'));

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
  color: white;
  position: relative;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 2rem;
  text-align: center;
  font-weight: 700;
`;

const TypewriterContainer = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;

  span {
    font-size: inherit;
    font-weight: 300;
  }
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 300;
  text-align: center;
`;

function Intro() {
  return (
    <Container>
      <ErrorBoundary>
        <Suspense
          fallback={
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
              }}
            />
          }
        >
          <ParticlesBackground />
        </Suspense>
      </ErrorBoundary>
      <Title>Dariusz Berer</Title>
      <Subtitle>Frontend Developer</Subtitle>
      <TypewriterContainer>
        <Typewriter
          options={{
            autoStart: true,
            delay: 20,
            deleteSpeed: 0.1,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<span>I build web apps with clean code and creative design, focusing on performance and innovation. </span>'
              )
              .pauseFor(500)
              .changeDelay(30)
              .typeString(
                '<span>I am committed to delivering exceptional digital solutions</span>'
              )
              .pauseFor(1000)
              .deleteChars(56)
              .changeDelay(18)
              .typeString(
                "<span>just make nice things for the web, let's create something amazing together!</span>"
              )
              .start();
          }}
        />
      </TypewriterContainer>
    </Container>
  );
}

export default Intro;
