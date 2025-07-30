import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div>
      <h1 style={{ fontSize: '64px', marginBottom: '20px' }}>
        Dariusz Berer, Frontend Developer
      </h1>

      <Typewriter
        options={{
          autoStart: true,
          delay: 20,
          deleteSpeed: 1,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(
              '<h2>I build web apps with clean code and creative design. My focus is innovative solutions and smooth performance.</h2>'
            )
            .pauseFor(1000)
            .deleteAll()
            .typeString(
              "<h2>I just make nice things for the web. Let's create something amazing and push what's possible online! 🚀 </h2>"
            )
            .start();
        }}
      />
    </div>
  );
}

export default App;
