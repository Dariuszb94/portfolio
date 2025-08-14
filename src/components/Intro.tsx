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
  position: relative;
  animation: flashyEntrance 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  transform: scale(0) rotateY(180deg);
  opacity: 0;
  background: linear-gradient(
    45deg,
    ${colors.accent.primary},
    #ff6b6b,
    #4ecdc4,
    ${colors.accent.primary}
  );
  background-size: 400% 400%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  filter: drop-shadow(0 0 20px rgba(100, 255, 218, 0.3));

  @keyframes flashyEntrance {
    0% {
      transform: scale(0) rotateY(180deg) translateY(-100px);
      opacity: 0;
      filter: blur(20px) drop-shadow(0 0 0px rgba(100, 255, 218, 0));
      background-position: 0% 50%;
    }

    30% {
      transform: scale(1.2) rotateY(0deg) translateY(0px);
      opacity: 0.7;
      filter: blur(5px) drop-shadow(0 0 30px rgba(100, 255, 218, 0.8));
      background-position: 100% 50%;
    }

    50% {
      transform: scale(0.9) rotateY(0deg) translateY(0px);
      opacity: 0.9;
      filter: blur(2px) drop-shadow(0 0 40px rgba(255, 107, 107, 0.6));
      background-position: 200% 50%;
    }

    70% {
      transform: scale(1.05) rotateY(0deg) translateY(0px);
      opacity: 1;
      filter: blur(0px) drop-shadow(0 0 25px rgba(78, 205, 196, 0.7));
      background-position: 300% 50%;
    }

    100% {
      transform: scale(1) rotateY(0deg) translateY(0px);
      opacity: 1;
      filter: blur(0px) drop-shadow(0 0 20px rgba(100, 255, 218, 0.3));
      background-position: 400% 50%;
      -webkit-text-fill-color: white;
      color: white;
    }
  }

  /* Add a continuous subtle glow animation after entrance */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    animation: subtleGlow 3s ease-in-out infinite alternate;
    z-index: -1;
    filter: blur(15px);
    opacity: 0.6;
  }

  @keyframes subtleGlow {
    from {
      transform: scale(0.98);
      opacity: 0.4;
    }
    to {
      transform: scale(1.02);
      opacity: 0.7;
    }
  }
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
  opacity: 0;
  font-weight: 600;
  text-align: center;
  position: relative;
  color: ${colors.accent.primary};
  transform: translateX(-100px) rotateX(90deg);
  animation: subtitleEntrance 2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s forwards;
  will-change: transform, opacity, filter;

  @keyframes subtitleEntrance {
    0% {
      transform: translateX(-100px) rotateX(90deg) scale(0.8);
      opacity: 0;
      filter: blur(15px) brightness(0.3);
    }

    40% {
      transform: translateX(10px) rotateX(0deg) scale(1.1);
      opacity: 0.7;
      filter: blur(3px) brightness(1.2);
    }

    70% {
      transform: translateX(-5px) rotateX(0deg) scale(0.95);
      opacity: 0.85;
      filter: blur(1px) brightness(1.1);
    }

    100% {
      transform: translateX(0) rotateX(0deg) scale(1);
      opacity: 0.9;
      filter: blur(0px) brightness(1);
    }
  }

  /* Subtle glow effect synchronized with title */
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: ${colors.accent.primary};
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    opacity: 0;
    z-index: -1;
    animation: subtitleGlow 2.5s ease-in-out 1.5s infinite alternate;
    filter: blur(20px);
  }

  @keyframes subtitleGlow {
    0% {
      transform: translate(-50%, -50%) scale(0.8);
      opacity: 0.1;
    }
    100% {
      transform: translate(-50%, -50%) scale(1.2);
      opacity: 0.3;
    }
  }
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
