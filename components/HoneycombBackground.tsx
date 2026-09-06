'use client';

import React, { useEffect, useRef } from 'react';

interface HexCell {
  cx: number;
  cy: number;
  r: number;
  row: number;
  col: number;
  ambientPulse: number;
  pulseSpeed: number;
  targetPulse: number;
  glowColor: string;
}

export default function HoneycombBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse tracking
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 220,
    };

    let cells: HexCell[] = [];
    const hexRadius = 32; // Size of each hexagon
    const hexWidth = Math.sqrt(3) * hexRadius;
    const hexVertDist = hexRadius * 1.5;

    const brandOrange = '#F58220';
    const brandTeal = '#3D99A6';
    const brandDarkTeal = '#13363B';

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-generate grid
      cells = [];
      const cols = Math.ceil(width / hexWidth) + 2;
      const rows = Math.ceil(height / hexVertDist) + 2;

      for (let r = -1; r < rows; r++) {
        const isOffset = Math.abs(r) % 2 === 1;
        const xOffset = isOffset ? hexWidth / 2 : 0;

        for (let c = -1; c < cols; c++) {
          const cx = c * hexWidth + xOffset;
          const cy = r * hexVertDist;

          cells.push({
            cx,
            cy,
            r: hexRadius,
            row: r,
            col: c,
            ambientPulse: 0,
            pulseSpeed: 0.006 + Math.random() * 0.012,
            targetPulse: 0,
            glowColor: Math.random() > 0.35 ? brandOrange : brandTeal,
          });
        }
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Draw single hexagon path
    const drawHexagon = (cx: number, cy: number, r: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const x = cx + r * Math.cos(angle);
        const y = cy + r * Math.sin(angle);
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.closePath();
    };

    // Ambient random trigger loop
    let lastPulseTime = 0;

    const render = (time: number) => {
      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      ctx.clearRect(0, 0, width, height);

      // Trigger random ambient pulses
      if (time - lastPulseTime > 300) {
        lastPulseTime = time;
        // Trigger 2-3 random cells
        for (let i = 0; i < 3; i++) {
          const randomIndex = Math.floor(Math.random() * cells.length);
          if (cells[randomIndex] && cells[randomIndex].targetPulse <= 0.05) {
            cells[randomIndex].targetPulse = 0.5 + Math.random() * 0.5;
          }
        }
      }

      // Draw hex cells
      for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];

        // Animate ambient pulse value
        if (cell.ambientPulse < cell.targetPulse) {
          cell.ambientPulse += cell.pulseSpeed;
          if (cell.ambientPulse >= cell.targetPulse) {
            cell.targetPulse = 0;
          }
        } else if (cell.ambientPulse > 0) {
          cell.ambientPulse -= cell.pulseSpeed * 0.6;
          if (cell.ambientPulse < 0) cell.ambientPulse = 0;
        }

        // Distance to mouse
        const dx = mouse.x - cell.cx;
        const dy = mouse.y - cell.cy;
        const distSq = dx * dx + dy * dy;
        const maxDistSq = mouse.radius * mouse.radius;

        let mouseFactor = 0;
        if (distSq < maxDistSq) {
          const dist = Math.sqrt(distSq);
          mouseFactor = Math.pow(1 - dist / mouse.radius, 2);
        }

        const totalGlow = Math.min(1, mouseFactor * 0.85 + cell.ambientPulse * 0.6);

        // Draw Cell Outline
        drawHexagon(cell.cx, cell.cy, cell.r - 0.5);

        if (totalGlow > 0.01) {
          // Highlighted state
          ctx.strokeStyle = totalGlow > 0.4 ? brandOrange : brandTeal;
          ctx.lineWidth = 1 + totalGlow * 1.5;
          ctx.globalAlpha = 0.15 + totalGlow * 0.45;
          ctx.stroke();

          // Soft inner glow fill for highly reactive cells
          ctx.fillStyle = totalGlow > 0.3 ? brandOrange : brandTeal;
          ctx.globalAlpha = totalGlow * 0.12;
          ctx.fill();
        } else {
          // Default subtle background grid line
          ctx.strokeStyle = brandDarkTeal;
          ctx.lineWidth = 1;
          ctx.globalAlpha = 0.12;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[-1]"
      aria-hidden="true"
    />
  );
}
