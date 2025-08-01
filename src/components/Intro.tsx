import styled from 'styled-components';
import Typewriter from 'typewriter-effect';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 64px;
  margin-bottom: 20px;
`;

function Intro() {
  return (
    <Container>
      <Title>Dariusz Berer, Frontend Developer</Title>
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
    </Container>
  );
}

export default Intro;
