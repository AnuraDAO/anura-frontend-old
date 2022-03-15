
import Particles from 'react-tsparticles'

const ParticlesComponent = () => {
    return   <Particles
    id="tsparticles"
    options={{
        fpsLimit: 120,
        particles: {
            color: {
                value: '#09A858',
            },
            collisions: {
                enable: true,
            },
            move: {
                direction: 'none',
                enable: true,
                random: false,
                speed: 0.5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 10,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: 'circle',
            },
            size: {
                random: true,
                value: 6,
                animation: {
                    count: 5,
                    enable: true,
                    sync: true,
                    speed: 2,
                    destroy: 'none',
                    startValue: 'random',
                },
            },
        },
        detectRetina: true,
    }}
/>
}

export default ParticlesComponent;