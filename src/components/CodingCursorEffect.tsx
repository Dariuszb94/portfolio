import React, { useEffect, useRef, useState, useCallback } from 'react';
import { colors } from '../utils/colors';

interface Particle {
  id: number;
  x: number;
  y: number;
  char: string;
  opacity: number;
  size: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  color: string;
}

const CodingCursorEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const [isTouch, setIsTouch] = useState(false);

  // Coding-related characters and symbols
  const codeChars = React.useMemo(
    () => [
      '{',
      '}',
      '[',
      ']',
      '(',
      ')',
      '<',
      '>',
      '=',
      '+',
      '-',
      '*',
      '/',
      '%',
      '&',
      '|',
      '!',
      '?',
      ';',
      ':',
      '.',
      ',',
      "'",
      '"',
      '$',
      '#',
      '@',
      '~',
      '^',
      '_',
      '\\',
      '0',
      '1',
      'x',
      'y',
      'z',
      'i',
      'j',
      'k',
    ],
    []
  );

  const keywords = React.useMemo(
    () => [
      'const',
      'let',
      'var',
      'function',
      'return',
      'if',
      'else',
      'for',
      'while',
      'class',
      'import',
      'export',
      'async',
      'await',
    ],
    []
  );

  const colorPalette = React.useMemo(
    () => [
      colors.accent.primary, // Electric Blue (#97c0ee)
      colors.accent.secondary, // Soft Cyan (#7DD3FC)
      colors.accent.tertiary, // Lavender (#A78BFA)
      colors.text.primary, // Pure White (#FFFFFF)
      colors.text.secondary, // Light Gray (#E2E8F0)
      colors.utils.primaryAccent60.replace('0.6', '1'), // Bright primary accent
      colors.utils.secondaryAccent40.replace('0.4', '1'), // Bright secondary accent
      '#B4D4FF', // Light blue variation
      '#C7D2FE', // Light purple variation
      '#DBEAFE', // Very light blue
    ],
    []
  );

  const createParticle = useCallback(
    (x: number, y: number, isKeyword: boolean = false): Particle => {
      const char = isKeyword
        ? keywords[Math.floor(Math.random() * keywords.length)]
        : codeChars[Math.floor(Math.random() * codeChars.length)];

      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 2 + 1;
      const life = isKeyword ? 120 : 60;

      return {
        id: Math.random(),
        x,
        y,
        char,
        opacity: 0.8, // Reduced initial opacity
        size: isKeyword ? Math.random() * 8 + 14 : Math.random() * 6 + 10, // Smaller size
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        maxLife: life,
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
      };
    },
    [codeChars, keywords, colorPalette]
  );

  const updateCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isTouch) return;

      // Use more precise cursor positioning
      mouseRef.current = { x: e.pageX, y: e.pageY };

      // Create particles on mouse movement
      if (Math.random() < 0.4) {
        particlesRef.current.push(createParticle(e.pageX, e.pageY));
      }

      // Occasionally create keyword particles
      if (Math.random() < 0.08) {
        particlesRef.current.push(createParticle(e.pageX, e.pageY, true));
      }
    },
    [createParticle, isTouch]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      // Don't prevent default to allow scrolling
      setIsTouch(true);

      const touch = e.touches[0];
      if (touch) {
        mouseRef.current = { x: touch.clientX, y: touch.clientY };

        // Reduce particle creation frequency to avoid interference with scrolling
        if (Math.random() < 0.2) {
          particlesRef.current.push(
            createParticle(touch.clientX, touch.clientY)
          );
        }

        // Less frequent keyword particles on touch
        if (Math.random() < 0.05) {
          particlesRef.current.push(
            createParticle(touch.clientX, touch.clientY, true)
          );
        }
      }
    },
    [createParticle]
  );

  const handleClick = useCallback(
    (e: MouseEvent) => {
      // Create burst of particles on click
      for (let i = 0; i < 8; i++) {
        particlesRef.current.push(createParticle(e.pageX, e.pageY));
      }
      // Add a keyword particle
      particlesRef.current.push(createParticle(e.pageX, e.pageY, true));
    },
    [createParticle]
  );

  const handleTouchStart = useCallback(
    (e: TouchEvent) => {
      setIsTouch(true);
      const touch = e.touches[0];
      if (touch) {
        // Create burst of particles on touch
        for (let i = 0; i < 6; i++) {
          particlesRef.current.push(
            createParticle(touch.clientX, touch.clientY)
          );
        }
        particlesRef.current.push(
          createParticle(touch.clientX, touch.clientY, true)
        );
      }
    },
    [createParticle]
  );

  const animate = useCallback(
    (currentTime: number) => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;

      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Clear canvas with slight trail effect using app's background color
      ctx.fillStyle = 'rgba(11, 20, 38, 0.05)'; // matches colors.background.primary with transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current = particlesRef.current.filter((particle) => {
        // Update particle
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= deltaTime / 16; // Normalize for 60fps
        particle.opacity = particle.life / particle.maxLife;

        // Add slight gravity
        particle.vy += 0.05;

        // Fade and shrink
        particle.size *= 0.998;

        // Draw particle
        if (particle.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = particle.opacity * 0.6; // Reduced overall opacity
          ctx.font = `${particle.size}px 'Fira Code', 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', monospace`; // Removed bold
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';

          // Subtle glow effect
          // Main text with minimal glow
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = particle.size * 0.4;
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.opacity * 0.8;
          ctx.fillText(particle.char, particle.x, particle.y);

          // Very subtle bright core
          ctx.shadowBlur = particle.size * 0.1;
          ctx.fillStyle = '#ffffff';
          ctx.globalAlpha = particle.opacity * 0.3;
          ctx.fillText(particle.char, particle.x, particle.y);

          ctx.restore();
        }

        return particle.life > 0 && particle.opacity > 0.01;
      });

      animationRef.current = requestAnimationFrame(animate);
    },
    [isTouch]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    updateCanvas();

    // Mouse events
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    // Touch events - allow passive scrolling
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    });

    // Window resize
    window.addEventListener('resize', updateCanvas);

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('resize', updateCanvas);

      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    updateCanvas,
    handleMouseMove,
    handleClick,
    handleTouchMove,
    handleTouchStart,
    animate,
  ]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        mixBlendMode: 'screen',
      }}
    />
  );
};

export default CodingCursorEffect;
