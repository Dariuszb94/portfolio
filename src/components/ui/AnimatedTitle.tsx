import styled from 'styled-components';
import { colors } from '../../utils/colors';

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

interface AnimatedTitleProps {
  children: React.ReactNode;
}

function AnimatedTitle({ children }: AnimatedTitleProps) {
  return <Title>{children}</Title>;
}

export default AnimatedTitle;
