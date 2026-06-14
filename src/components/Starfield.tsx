import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  increasing: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
}

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStars: ShootingStar[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const density = 0.0005; // Stars per pixel
      const totalStars = Math.floor(canvas.width * canvas.height * density);

      for (let i = 0; i < totalStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          twinkleSpeed: Math.random() * 0.015 + 0.005,
          increasing: Math.random() > 0.5,
        });
      }
    };

    const createShootingStar = () => {
      // Spawn shooting star from top-right region
      const startX = Math.random() * canvas.width * 0.8 + canvas.width * 0.2;
      const startY = Math.random() * canvas.height * 0.4;
      // Angle diagonally down and to the left
      const angle = Math.PI * 0.8 + Math.random() * 0.1; // ~145 deg
      const speed = Math.random() * 8 + 6;

      shootingStars.push({
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: Math.random() * 80 + 50,
        speed: speed,
        opacity: 1,
        active: true,
      });
    };

    const updateAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // 1. Draw Twinkling Stars
      stars.forEach((star) => {
        if (star.increasing) {
          star.opacity += star.twinkleSpeed;
          if (star.opacity >= 1) star.increasing = false;
        } else {
          star.opacity -= star.twinkleSpeed;
          if (star.opacity <= 0.2) star.increasing = true;
        }

        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Update and Draw Shooting Stars
      if (Math.random() < 0.008 && shootingStars.length < 3) {
        createShootingStar();
      }

      shootingStars = shootingStars.filter((ss) => ss.active);

      shootingStars.forEach((ss) => {
        ss.x += ss.dx;
        ss.y += ss.dy;
        ss.opacity -= 0.012; // Slow fade out

        if (ss.opacity <= 0 || ss.x < 0 || ss.y > canvas.height) {
          ss.active = false;
          return;
        }

        // Draw shooting star trail using gradient
        const grad = ctx.createLinearGradient(
          ss.x,
          ss.y,
          ss.x - ss.dx * (ss.length / ss.speed),
          ss.y - ss.dy * (ss.length / ss.speed)
        );
        grad.addColorStop(0, `rgba(255, 255, 255, ${ss.opacity})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(
          ss.x - ss.dx * (ss.length / ss.speed),
          ss.y - ss.dy * (ss.length / ss.speed)
        );
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(updateAndDraw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    updateAndDraw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-[-1] bg-[#030014]"
    />
  );
};

export default Starfield;
