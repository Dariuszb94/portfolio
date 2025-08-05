import styled from 'styled-components';
import Typewriter from 'typewriter-effect';
import type { TypewriterClass } from 'typewriter-effect';
import { useMemo } from 'react';
import { colors } from '../utils/colors';

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
  font-size: clamp(3rem, 8vw, 4rem);
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
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: 3rem;
  opacity: 0.9;
  font-weight: 600;
  text-align: center;
  color: ${colors.accent.primary};
`;

// Memoized typewriter options to prevent recreating on each render
const typewriterOptions = {
  autoStart: true,
  delay: 20,
  deleteSpeed: 0.1,
};

function Intro() {
  // Memoize typewriter initialization function
  const typewriterInit = useMemo(
    () => (typewriter: TypewriterClass) => {
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
    },
    []
  );

  return (
    <Container>
      <Title>Dariusz Berer</Title>
      <Subtitle>Frontend Developer</Subtitle>
      <TypewriterContainer>
        <Typewriter options={typewriterOptions} onInit={typewriterInit} />
      </TypewriterContainer>
    </Container>
  );
}

export default Intro;
