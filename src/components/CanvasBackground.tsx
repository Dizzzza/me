'use client';

import { useEffect, useRef } from 'react';

/**
 * Matrix-rain + perspective-grid backdrop, ported from the original
 * Claude Design canvas logic (support.js Component.componentDidMount).
 */
export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cyan = '34,231,214';
    const pink = '255,45,149';
    const gold = '182,130,53';
    const glyphs = 'アカサタナハマヤラワ0123456789ABCDEFΣΔΞ<>/\\{}[]';

    let w = 0;
    let h = 0;
    let t = 0;
    let raf = 0;
    let cols: { x: number; y: number; v: number; len: number }[] = [];
    let dots: { x: number; y: number; s: number; v: number; c: string }[] = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const step = 18;
      const n = Math.ceil(w / step);
      cols = Array.from({ length: n }, (_, i) => ({
        x: i * step + 4,
        y: Math.random() * -h,
        v: 0.6 + Math.random() * 1.9,
        len: 6 + Math.floor(Math.random() * 16),
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 60; i++) {
      dots.push({
        x: Math.random(),
        y: Math.random(),
        s: 0.5 + Math.random() * 1.7,
        v: 0.00008 + Math.random() * 0.00026,
        c: Math.random() < 0.55 ? cyan : Math.random() < 0.6 ? pink : gold,
      });
    }

    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);
      const horizon = h * 0.56;

      ctx.font = '13px "JetBrains Mono", monospace';
      ctx.textBaseline = 'top';
      for (const col of cols) {
        col.y += col.v;
        if (col.y - col.len * 15 > horizon) {
          col.y = -Math.random() * 300;
          col.v = 0.6 + Math.random() * 1.9;
        }
        for (let k = 0; k < col.len; k++) {
          const y = col.y - k * 15;
          if (y < -15 || y > horizon) continue;
          const a = (1 - k / col.len) * 0.4 * (1 - y / horizon);
          ctx.fillStyle =
            k === 0
              ? `rgba(200,255,250,${(a + 0.35).toFixed(3)})`
              : `rgba(${cyan},${a.toFixed(3)})`;
          ctx.fillText(
            glyphs[(k * 7 + Math.floor(col.x + t * 0.06)) % glyphs.length],
            col.x,
            y
          );
        }
      }

      ctx.lineWidth = 1;
      for (let i = -14; i <= 14; i++) {
        const x = w / 2 + i * (w / 12);
        ctx.strokeStyle = `rgba(${i % 2 ? cyan : pink},0.1)`;
        ctx.beginPath();
        ctx.moveTo(w / 2, horizon);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let i = 0; i < 18; i++) {
        const p = ((i + ((t * 0.0025) % 1)) / 18);
        const y = horizon + (h - horizon) * p * p;
        ctx.strokeStyle = `rgba(${cyan},${(0.03 + p * 0.15).toFixed(3)})`;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      const g = ctx.createLinearGradient(0, horizon - 70, 0, horizon + 4);
      g.addColorStop(0, `rgba(${pink},0)`);
      g.addColorStop(1, `rgba(${pink},0.2)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, horizon - 70, w, 70);
      ctx.strokeStyle = `rgba(${cyan},0.4)`;
      ctx.beginPath();
      ctx.moveTo(0, horizon);
      ctx.lineTo(w, horizon);
      ctx.stroke();

      for (const d of dots) {
        d.y -= d.v;
        if (d.y < 0) {
          d.y = 1;
          d.x = Math.random();
        }
        ctx.fillStyle = `rgba(${d.c},${(
          0.15 + 0.4 * Math.abs(Math.sin(t * 0.01 + d.x * 9))
        ).toFixed(3)})`;
        ctx.fillRect(d.x * w, d.y * horizon, d.s, d.s);
      }

      if (Math.random() < 0.02) {
        const sy = Math.random() * h;
        const sh = 2 + Math.random() * 18;
        const off = (Math.random() - 0.5) * 40;
        try {
          const img = ctx.getImageData(0, sy, w, sh);
          ctx.putImageData(img, off, sy);
          ctx.fillStyle = `rgba(${pink},0.07)`;
          ctx.fillRect(0, sy, w, sh);
        } catch {
          /* ignore */
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 block h-full w-full"
    />
  );
}
