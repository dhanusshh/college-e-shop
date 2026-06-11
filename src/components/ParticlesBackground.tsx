import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        fullScreen: false,

        particles: {
          number: {
            value: 70,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 3,
          },

          links: {
            enable: true,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;