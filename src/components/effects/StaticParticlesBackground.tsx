import styled, { keyframes } from 'styled-components';
import { memo } from 'react';
import { colors } from '../../utils/colors';

const float = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-10px) rotate(180deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  background: ${colors.gradients.primary};
  animation: ${fadeIn} 0.5s ease-out;
  overflow: hidden;
`;

const FloatingElement = styled.div<{
  delay: number;
  size: number;
  left: number;
  top: number;
}>`
  position: absolute;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border: 1px solid ${colors.utils.primaryAccent30};
  border-radius: 50%;
  animation: ${float} ${(props) => 3 + props.delay}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  opacity: 0.6;
`;

const CodeSymbol = styled.div<{ delay: number; left: number; top: number }>`
  position: absolute;
  left: ${(props) => props.left}%;
  top: ${(props) => props.top}%;
  color: ${colors.utils.secondaryAccent40};
  font-size: 24px;
  font-family: 'Courier New', monospace;
  animation: ${float} ${(props) => 4 + props.delay}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  user-select: none;
`;

// Lightweight CSS-only background as fallback
const StaticParticlesBackground = memo(function StaticParticlesBackground() {
  const elements = [
    { size: 20, left: 10, top: 20, delay: 0 },
    { size: 15, left: 80, top: 30, delay: 0.5 },
    { size: 25, left: 20, top: 70, delay: 1 },
    { size: 18, left: 70, top: 80, delay: 1.5 },
    { size: 22, left: 50, top: 10, delay: 2 },
  ];

  const codeSymbols = [
    { symbol: '<div>', left: 15, top: 40, delay: 0.2 },
    { symbol: 'CSS', left: 85, top: 60, delay: 0.8 },
    { symbol: 'JS', left: 75, top: 15, delay: 1.8 },
    { symbol: 'TS', left: 40, top: 25, delay: 2.2 },
    { symbol: '<JSX>', left: 60, top: 75, delay: 2.6 },
    { symbol: '[]', left: 90, top: 40, delay: 3.0 },
    { symbol: '()', left: 25, top: 60, delay: 3.4 },
  ];

  return (
    <Container>
      {elements.map((element, index) => (
        <FloatingElement
          key={`element-${index}`}
          size={element.size}
          left={element.left}
          top={element.top}
          delay={element.delay}
        />
      ))}
      {codeSymbols.map((symbol, index) => (
        <CodeSymbol
          key={`symbol-${index}`}
          left={symbol.left}
          top={symbol.top}
          delay={symbol.delay}
        >
          {symbol.symbol}
        </CodeSymbol>
      ))}
    </Container>
  );
});

export default StaticParticlesBackground;
