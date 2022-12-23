import { useCallback } from 'react';
import { Particles } from 'react-particles';
import { loadLinksPreset } from 'tsparticles-preset-links';

export const ParticleBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <Particles
      width="500px"
      height="500px"
      id="tsparticles"
      init={particlesInit}
      options={{
        preset: 'links',

        fullScreen: { enable: true, zIndex: -1 },

        background: {
          color: {
            value: '#14213D',
          },
        },

        particles: {
          color: {
            value: '#fff',
          },
          links: {
            color: '#fca311ff',
            distance: 180,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 90,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.8,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
