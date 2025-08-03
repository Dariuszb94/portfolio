import { Suspense, useState, useEffect } from 'react';
import ErrorBoundary from './ErrorBoundary';
import { colors, hslRanges } from '../utils/colors';

function InteractiveParticles() {
  // Performance optimization: delay 3D background loading
  const [shouldLoad3D, setShouldLoad3D] = useState(false);

  useEffect(() => {
    // Use requestIdleCallback to defer 3D loading until the browser is idle
    // This ensures critical content renders first
    const deferLoad = () => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(
          () => {
            // Additional delay to ensure LCP is fully complete
            setTimeout(() => setShouldLoad3D(true), 300); // Slightly longer delay for performance
          },
          { timeout: 2000 }
        );
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          setTimeout(() => setShouldLoad3D(true), 300);
        }, 800); // Reduced fallback time
      }
    };

    // Wait for the next frame to ensure DOM is painted
    requestAnimationFrame(() => {
      requestAnimationFrame(deferLoad);
    });
  }, []);

  return (
    <>
      {shouldLoad3D && (
        <ErrorBoundary>
          <Suspense fallback={null}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'auto', // Enable mouse events for interaction
                zIndex: -1,
              }}
            >
              <canvas
                ref={(canvas) => {
                  if (!canvas) return;
                  const ctx = canvas.getContext('2d');
                  if (!ctx) return;

                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;

                  const particles: Array<{
                    x: number;
                    y: number;
                    vx: number;
                    vy: number;
                    size: number;
                    originalSize: number;
                    hue: number;
                  }> = [];

                  // Mouse position tracking
                  const mouse = { x: 0, y: 0, isMoving: false };
                  let mouseTimeout: number;
                  let animationId: number;

                  // 3D rotation state
                  const rotation = { x: 0, y: 0, targetX: 0, targetY: 0 };
                  const maxTilt = 15; // Maximum tilt angle in degrees

                  // Performance controls
                  const maxInteractionDistance = 180;
                  const maxConnectionDistance = 120;
                  let frameCount = 0;
                  const skipFrames = 1; // Render every 2nd frame for 30fps

                  // Create fewer particles for better performance
                  for (let i = 0; i < 40; i++) {
                    const size = Math.random() * 2.5 + 1.5; // Slightly smaller particles
                    particles.push({
                      x: Math.random() * canvas.width,
                      y: Math.random() * canvas.height,
                      vx: (Math.random() - 0.5) * 0.2, // Slower movement
                      vy: (Math.random() - 0.5) * 0.2,
                      size,
                      originalSize: size,
                      hue:
                        Math.random() *
                          (hslRanges.primaryParticles.hueMax -
                            hslRanges.primaryParticles.hueMin) +
                        hslRanges.primaryParticles.hueMin,
                    });
                  }

                  // Optimized Mouse/Touch move handler with throttling
                  let lastInteractionTime = 0;
                  const throttleMs = 16; // ~60fps max

                  const handleInteraction = (
                    clientX: number,
                    clientY: number
                  ) => {
                    const now = performance.now();
                    if (now - lastInteractionTime < throttleMs) return;
                    lastInteractionTime = now;

                    const rect = canvas.getBoundingClientRect();
                    mouse.x = clientX - rect.left;
                    mouse.y = clientY - rect.top;
                    mouse.isMoving = true;

                    // Calculate 3D rotation based on mouse position
                    const centerX = canvas.width / 2;
                    const centerY = canvas.height / 2;
                    const normalizedX = (mouse.x - centerX) / centerX; // -1 to 1
                    const normalizedY = (mouse.y - centerY) / centerY; // -1 to 1

                    rotation.targetY = normalizedX * maxTilt; // Horizontal mouse movement = Y rotation
                    rotation.targetX = -normalizedY * maxTilt; // Vertical mouse movement = X rotation (inverted)

                    clearTimeout(mouseTimeout);
                    mouseTimeout = setTimeout(() => {
                      mouse.isMoving = false;
                      // Return to center when mouse stops moving
                      rotation.targetX = 0;
                      rotation.targetY = 0;
                    }, 200);
                  };

                  const handleMouseMove = (e: MouseEvent) => {
                    handleInteraction(e.clientX, e.clientY);
                  };

                  const handleTouchMove = (e: TouchEvent) => {
                    e.preventDefault(); // Prevent scrolling
                    if (e.touches.length > 0) {
                      const touch = e.touches[0];
                      handleInteraction(touch.clientX, touch.clientY);
                    }
                  };

                  const handleTouchStart = (e: TouchEvent) => {
                    if (e.touches.length > 0) {
                      const touch = e.touches[0];
                      handleInteraction(touch.clientX, touch.clientY);
                    }
                  };

                  // Also listen on the parent div for better coverage
                  const parentDiv = canvas.parentElement;
                  if (parentDiv) {
                    parentDiv.addEventListener('mousemove', handleMouseMove);
                    parentDiv.addEventListener('touchmove', handleTouchMove, {
                      passive: false,
                    });
                    parentDiv.addEventListener('touchstart', handleTouchStart);
                  }
                  canvas.addEventListener('mousemove', handleMouseMove);
                  canvas.addEventListener('touchmove', handleTouchMove, {
                    passive: false,
                  });
                  canvas.addEventListener('touchstart', handleTouchStart);

                  function animate() {
                    if (!ctx || !canvas) return;

                    // Frame skipping for performance
                    frameCount++;
                    if (frameCount % (skipFrames + 1) !== 0) {
                      animationId = requestAnimationFrame(animate);
                      return;
                    }

                    // Smooth 3D rotation interpolation
                    const rotationLerpFactor = 0.36; // Adjust for smoother/faster rotation
                    rotation.x +=
                      (rotation.targetX - rotation.x) * rotationLerpFactor;
                    rotation.y +=
                      (rotation.targetY - rotation.y) * rotationLerpFactor;

                    // Apply 3D transform to the canvas
                    canvas.style.transform = `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;

                    ctx.clearRect(0, 0, canvas.width, canvas.height);

                    // Pre-calculate commonly used values
                    const mouseX = mouse.x;
                    const mouseY = mouse.y;

                    particles.forEach((particle, i) => {
                      // Optimized distance calculation
                      const dx = mouseX - particle.x;
                      const dy = mouseY - particle.y;
                      const distanceSquared = dx * dx + dy * dy; // Avoid sqrt when possible
                      const maxDistanceSquared =
                        maxInteractionDistance * maxInteractionDistance;

                      if (distanceSquared < maxDistanceSquared) {
                        const distance = Math.sqrt(distanceSquared); // Only calculate sqrt when needed
                        const force =
                          (maxInteractionDistance - distance) /
                          maxInteractionDistance;
                        const angle = Math.atan2(dy, dx);
                        particle.vx -= Math.cos(angle) * force * 0.06; // Reduced force for smoother animation
                        particle.vy -= Math.sin(angle) * force * 0.06;

                        particle.size =
                          particle.originalSize * (1 + force * 1.2);
                        particle.hue = particle.hue + force * 1.5; // Reduced hue shift
                      } else {
                        particle.size +=
                          (particle.originalSize - particle.size) * 0.08;
                        particle.hue +=
                          (Math.random() *
                            (hslRanges.primaryParticles.hueMax -
                              hslRanges.primaryParticles.hueMin) +
                            hslRanges.primaryParticles.hueMin -
                            particle.hue) *
                          0.005;
                      }

                      // Optimized damping and movement
                      particle.vx *= 0.96;
                      particle.vy *= 0.96;
                      particle.x += particle.vx;
                      particle.y += particle.vy;

                      // Efficient edge wrapping
                      if (particle.x < 0) particle.x = canvas.width;
                      else if (particle.x > canvas.width) particle.x = 0;
                      if (particle.y < 0) particle.y = canvas.height;
                      else if (particle.y > canvas.height) particle.y = 0;

                      // Optimized particle rendering
                      ctx.beginPath();
                      ctx.arc(
                        particle.x,
                        particle.y,
                        particle.size,
                        0,
                        Math.PI * 2
                      );

                      // Simplified color calculation
                      const isNearMouse = distanceSquared < maxDistanceSquared;
                      const alpha = isNearMouse ? 0.9 : 0.6;
                      const saturation = isNearMouse ? 90 : 70;
                      const lightness = isNearMouse ? 70 : 50;

                      ctx.fillStyle = `hsla(${Math.floor(
                        particle.hue
                      )}, ${saturation}%, ${lightness}%, ${alpha})`;
                      ctx.fill();

                      // Optimized connections - only check nearby particles
                      const maxConnectionDistanceSquared =
                        maxConnectionDistance * maxConnectionDistance;
                      for (let j = i + 1; j < particles.length; j++) {
                        const otherParticle = particles[j];
                        const cdx = particle.x - otherParticle.x;
                        const cdy = particle.y - otherParticle.y;
                        const connectionDistanceSquared = cdx * cdx + cdy * cdy;

                        if (
                          connectionDistanceSquared <
                          maxConnectionDistanceSquared
                        ) {
                          const connectionDistance = Math.sqrt(
                            connectionDistanceSquared
                          );

                          ctx.beginPath();
                          ctx.moveTo(particle.x, particle.y);
                          ctx.lineTo(otherParticle.x, otherParticle.y);

                          // Simplified connection opacity calculation
                          const baseOpacity =
                            0.1 *
                            (1 - connectionDistance / maxConnectionDistance);
                          const isEitherNearMouse =
                            (mouseX - particle.x) ** 2 +
                              (mouseY - particle.y) ** 2 <
                              maxDistanceSquared ||
                            (mouseX - otherParticle.x) ** 2 +
                              (mouseY - otherParticle.y) ** 2 <
                              maxDistanceSquared;

                          const finalOpacity =
                            baseOpacity * (isEitherNearMouse ? 2.5 : 1);

                          ctx.strokeStyle = `${colors.utils.primaryAccent60.replace(
                            '0.6',
                            `${Math.min(finalOpacity, 0.6)}`
                          )}`;
                          ctx.lineWidth = isEitherNearMouse ? 1.3 : 1;
                          ctx.stroke();
                        }
                      }
                    });

                    animationId = requestAnimationFrame(animate);
                  }

                  animate();

                  // Handle resize with performance optimization
                  const handleResize = () => {
                    if (!canvas) return;
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;

                    // Redistribute particles after resize
                    particles.forEach((particle) => {
                      if (particle.x > canvas.width)
                        particle.x = Math.random() * canvas.width;
                      if (particle.y > canvas.height)
                        particle.y = Math.random() * canvas.height;
                    });
                  };

                  window.addEventListener('resize', handleResize);

                  // Cleanup function with animation frame cancellation
                  return () => {
                    if (animationId) {
                      cancelAnimationFrame(animationId);
                    }
                    // Reset canvas transform
                    if (canvas) {
                      canvas.style.transform = '';
                    }
                    window.removeEventListener('resize', handleResize);
                    canvas.removeEventListener('mousemove', handleMouseMove);
                    canvas.removeEventListener('touchmove', handleTouchMove);
                    canvas.removeEventListener('touchstart', handleTouchStart);
                    if (parentDiv) {
                      parentDiv.removeEventListener(
                        'mousemove',
                        handleMouseMove
                      );
                      parentDiv.removeEventListener(
                        'touchmove',
                        handleTouchMove
                      );
                      parentDiv.removeEventListener(
                        'touchstart',
                        handleTouchStart
                      );
                    }
                    clearTimeout(mouseTimeout);
                  };
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  cursor: 'pointer', // More intuitive cursor
                  touchAction: 'none', // Prevent default touch behaviors
                  transformOrigin: 'center center', // Ensure rotation happens from center
                  transformStyle: 'preserve-3d', // Enable 3D transforms
                }}
              />
            </div>
          </Suspense>
        </ErrorBoundary>
      )}
    </>
  );
}

export default InteractiveParticles;
