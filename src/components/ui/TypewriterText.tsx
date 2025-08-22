import Typewriter from 'typewriter-effect';
import type { TypewriterClass } from 'typewriter-effect';
import { useMemo } from 'react';
import styled from 'styled-components';

const TypewriterContainer = styled.div`
  font-size: 1.25rem;
  line-height: 1.6;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding-bottom: 48px;

  span {
    font-size: inherit;
    font-weight: 300;
  }
`;

// Memoized typewriter options to prevent recreating on each render
const typewriterOptions = {
  autoStart: true,
  delay: 20,
  deleteSpeed: 0.1,
};

function TypewriterText() {
  // Memoize typewriter initialization function
  const typewriterInit = useMemo(
    () => (typewriter: TypewriterClass) => {
      typewriter
        .typeString(
          '<span>I build web apps with clean code, focusing on performance and innovation. </span>'
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
    <TypewriterContainer>
      <Typewriter options={typewriterOptions} onInit={typewriterInit} />
    </TypewriterContainer>
  );
}

export default TypewriterText;
