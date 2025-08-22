import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const arrowBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  z-index: 10;
`;

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${float} 4s ease-in-out infinite;
  
  &:hover {
    animation-play-state: paused;
  }
`;

const ArrowButton = styled.button`
  background: linear-gradient(
    135deg, 
    rgba(30, 30, 40, 0.9) 0%, 
    rgba(40, 40, 50, 0.85) 50%,
    rgba(50, 50, 60, 0.9) 100%
  );
  background-size: 200% 200%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.4),
    0 0 20px rgba(255, 255, 255, 0.05),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmer} 3s infinite;
    border-radius: inherit;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${ripple} 2s infinite;
  }

  &:hover {
    transform: scale(1.15) translateY(-5px);
    box-shadow: 
      0 15px 50px rgba(0, 0, 0, 0.6),
      0 0 40px rgba(255, 255, 255, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    background-position: 100% 0;
  }

  &:active {
    transform: scale(1.05) translateY(-2px);
  }
`;

const ArrowSvg = styled.svg`
  color: rgba(255, 255, 255, 0.8);
  width: 28px;
  height: 28px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  animation: ${arrowBounce} 2.5s infinite;
  z-index: 2;
  position: relative;
`;

const OuterRing = styled.div`
  position: absolute;
  top: -10px;
  left: -10px;
  width: 90px;
  height: 90px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(100, 100, 110, 0.3), rgba(80, 80, 90, 0.3)) border-box;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  animation: ${pulse} 3s ease-in-out infinite;
  opacity: 0.4;
`;

const InnerGlow = styled.div`
  position: absolute;
  top: -5px;
  left: -5px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.05) 0%,
    transparent 70%
  );
  animation: ${pulse} 2s ease-in-out infinite reverse;
`;

const SpinningRing = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  width: 100px;
  height: 100px;
  border: 1px solid transparent;
  border-top: 1px solid rgba(150, 150, 160, 0.4);
  border-right: 1px solid rgba(120, 120, 130, 0.4);
  border-radius: 50%;
  animation: ${rotate} 6s linear infinite;
  opacity: 0.3;
`;

const ParticleEffect = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: rgba(200, 200, 210, 0.6);
  border-radius: 50%;
  opacity: 0;
  
  ${ArrowButton}:hover + & {
    opacity: 1;
    animation: ${ripple} 1s ease-out infinite;
  }
  
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.4s; }
  &:nth-child(4) { animation-delay: 0.6s; }
`;

interface AnimatedScrollArrowProps {
  targetId: string;
}

const AnimatedScrollArrow: React.FC<AnimatedScrollArrowProps> = ({
  targetId
}) => {
  const handleClick = () => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <Container onClick={handleClick}>
      <ArrowContainer>
        <SpinningRing />
        <OuterRing />
        <InnerGlow />
        <ArrowButton>
          <ArrowSvg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </ArrowSvg>
        </ArrowButton>
        <ParticleEffect />
        <ParticleEffect />
        <ParticleEffect />
        <ParticleEffect />
      </ArrowContainer>
    </Container>
  );
};

export default AnimatedScrollArrow;
