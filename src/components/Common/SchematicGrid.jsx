// components/Common/SchematicGrid.jsx
// Hero backdrop: a hairline measuring grid with occasional light pulses
// travelling along its lines, like traffic crossing a patch panel. Chosen over
// a generic particle field because it reads as infrastructure rather than
// decoration — the grid is the subject, the pulses are the signal.
//
// The canvas is transparent; whatever sits behind it provides the colour.
// It stops drawing entirely when scrolled out of view, when the tab is hidden,
// and when the visitor prefers reduced motion (a static grid is drawn instead).
import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './SchematicGrid.css';

const PULSE_RGB = '79, 151, 224';
const GRID_STROKE = 'rgba(244, 246, 248, 0.055)';
const GRID_STROKE_MAJOR = 'rgba(244, 246, 248, 0.1)';

// Every Nth line is drawn slightly brighter, the way a drawing grid marks
// its major divisions.
const MAJOR_EVERY = 4;

const SchematicGrid = ({ spacing = 76, pulseCount = 7, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let pulses = [];
    let frame = 0;
    let lastTime = 0;
    let onScreen = true;

    const spawnPulse = (seeded = false) => {
      const vertical = Math.random() < 0.5;
      const track = Math.floor(Math.random() * ((vertical ? cols : rows) + 1));
      const span = vertical ? height : width;
      const length = 80 + Math.random() * 220;
      const dir = Math.random() < 0.5 ? 1 : -1;

      return {
        vertical,
        track,
        length,
        dir,
        speed: 45 + Math.random() * 105, // px per second
        alpha: 0.3 + Math.random() * 0.45,
        // Seeded pulses start mid-flight so the grid is already alive on load
        // instead of staying empty for the first few seconds.
        head: seeded ? Math.random() * span : dir === 1 ? -length : span + length,
      };
    };

    const drawGrid = () => {
      ctx.lineWidth = 1;

      for (let i = 0; i <= cols; i += 1) {
        const x = Math.round(i * spacing) + 0.5;
        ctx.strokeStyle = i % MAJOR_EVERY === 0 ? GRID_STROKE_MAJOR : GRID_STROKE;
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let i = 0; i <= rows; i += 1) {
        const y = Math.round(i * spacing) + 0.5;
        ctx.strokeStyle = i % MAJOR_EVERY === 0 ? GRID_STROKE_MAJOR : GRID_STROKE;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const drawPulse = (pulse) => {
      const tail = pulse.head - pulse.dir * pulse.length;
      const line = Math.round(pulse.track * spacing) + 0.5;

      const headX = pulse.vertical ? line : pulse.head;
      const headY = pulse.vertical ? pulse.head : line;
      const tailX = pulse.vertical ? line : tail;
      const tailY = pulse.vertical ? tail : line;

      const gradient = ctx.createLinearGradient(tailX, tailY, headX, headY);
      gradient.addColorStop(0, `rgba(${PULSE_RGB}, 0)`);
      gradient.addColorStop(1, `rgba(${PULSE_RGB}, ${pulse.alpha})`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(headX, headY);
      ctx.stroke();

      // A brighter node at the leading edge, so the pulse reads as a packet
      // arriving rather than a smear of light.
      ctx.fillStyle = `rgba(${PULSE_RGB}, ${Math.min(1, pulse.alpha + 0.4)})`;
      ctx.fillRect(headX - 1.5, headY - 1.5, 3, 3);
    };

    const render = (time) => {
      const delta = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;

      ctx.clearRect(0, 0, width, height);
      drawGrid();

      pulses.forEach((pulse, index) => {
        pulse.head += pulse.dir * pulse.speed * delta;

        const span = pulse.vertical ? height : width;
        const escaped =
          pulse.dir === 1 ? pulse.head - pulse.length > span : pulse.head + pulse.length < 0;

        if (escaped) {
          pulses[index] = spawnPulse();
        } else {
          drawPulse(pulse);
        }
      });

      frame = requestAnimationFrame(render);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      lastTime = 0;
    };

    const start = () => {
      if (frame || reduceMotion || !onScreen || document.hidden) return;
      frame = requestAnimationFrame(render);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(width / spacing);
      rows = Math.ceil(height / spacing);
      pulses = Array.from({ length: pulseCount }, () => spawnPulse(true));

      // Paint the grid synchronously rather than waiting on the first frame.
      // The substrate is the part that carries the design; if animation is
      // unavailable — reduced motion, a backgrounded tab, a throttled rAF —
      // the hero still has its grid instead of a bare rectangle.
      ctx.clearRect(0, 0, width, height);
      drawGrid();
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    resize();
    start();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        if (onScreen) start();
        else stop();
      },
      { threshold: 0 }
    );
    intersectionObserver.observe(canvas);

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [spacing, pulseCount]);

  return <canvas ref={canvasRef} className={`tm-schematic ${className}`} aria-hidden="true" />;
};

SchematicGrid.propTypes = {
  spacing: PropTypes.number,
  pulseCount: PropTypes.number,
  className: PropTypes.string,
};

export default SchematicGrid;
