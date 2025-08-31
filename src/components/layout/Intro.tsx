import styled from 'styled-components';
import AnimatedTitle from '../ui/AnimatedTitle';
import AnimatedSubtitle from '../ui/AnimatedSubtitle';
import TypewriterText from '../ui/TypewriterText';
import AnimatedScrollArrow from '../ui/AnimatedScrollArrow';

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

function Intro() {
  return (
    <Container>
      <AnimatedTitle>Dariusz Berer</AnimatedTitle>
      <AnimatedSubtitle>Frontend Developer</AnimatedSubtitle>
      <TypewriterText />
      <AnimatedScrollArrow targetId='projects' />
    </Container>
  );
}

export default Intro;
