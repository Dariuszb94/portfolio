import styled from 'styled-components';
import { colors } from '../../utils/colors';

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

interface AnimatedSubtitleProps {
  children: React.ReactNode;
}

function AnimatedSubtitle({ children }: AnimatedSubtitleProps) {
  return <Subtitle>{children}</Subtitle>;
}

export default AnimatedSubtitle;
