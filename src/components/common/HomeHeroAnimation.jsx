import React, { useEffect, useRef } from "react";
import "./HomeHeroAnimation.css";

/**
 * FlareCore Interactive Cyber Mesh & Radiant Aurora Hero Animation
 * 
 * Performance & Lighthouse Characteristics:
 * - 0 External Dependencies (<4KB Vanilla JS + Pure CSS)
 * - Automatic pause via IntersectionObserver when scrolled off-screen
 * - Tab visibility listener pauses animation when tab is unfocused
 * - DPR clamped to 2.0 to avoid GPU fillrate bottleneck on 4K/Retina displays
 * - Reduced motion support (prefers-reduced-motion)
 * - Zero Layout Shift (CLS = 0)
 */

export default function HomeHeroAnimation() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const isVisibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Dimensions & DPR
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Mouse coordinates & smoothing
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      radius: 140,
      active: false,
    };

    // Color palette for FlareMinds tech nodes
    const nodeColors = [
      { r: 56, g: 189, b: 248 },  // #38bdf8 sky/cyan
      { r: 99, g: 102, b: 241 },  // #6366f1 indigo
      { r: 45, g: 212, b: 191 },  // #2dd4bf teal
      { r: 245, g: 158, b: 11 },  // #f59e0b tech flare amber
    ];

    // Particle & Connection state
    let particles = [];
    let pulses = [];
    const MAX_DISTANCE = 175;
    const PULSE_SPEED = 0.025;

    class Particle {
      constructor(w, h) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.originVx = (Math.random() - 0.5) * 0.5;
        this.originVy = (Math.random() - 0.5) * 0.5;
        this.vx = this.originVx;
        this.vy = this.originVy;
        this.radius = Math.random() * 1.6 + 1.3;
        this.color = nodeColors[Math.floor(Math.random() * nodeColors.length)];
        this.alpha = Math.random() * 0.45 + 0.4;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.03 + 0.015;
      }

      update(w, h) {
        // Natural ambient drift
        this.x += this.vx;
        this.y += this.vy;

        // Smooth infinite boundary wrapping (never bunches at borders)
        if (this.x < -30) this.x = w + 30;
        else if (this.x > w + 30) this.x = -30;
        if (this.y < -30) this.y = h + 30;
        else if (this.y > h + 30) this.y = -30;

        // Gentle interactive velocity nudge when mouse is near
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 0.35;
            const angle = Math.atan2(dy, dx);
            this.vx -= Math.cos(angle) * force;
            this.vy -= Math.sin(angle) * force;
          }
        }

        // Return velocity smoothly to base speed
        this.vx += (this.originVx - this.vx) * 0.04;
        this.vy += (this.originVy - this.vy) * 0.04;

        // Pulse phase
        this.pulsePhase += this.pulseSpeed;
      }

      draw(context) {
        const currentAlpha = Math.max(0.15, this.alpha + Math.sin(this.pulsePhase) * 0.15);
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${currentAlpha})`;
        context.fill();

        // Core glow for primary nodes
        if (this.radius > 2.0) {
          context.beginPath();
          context.arc(this.x, this.y, this.radius * 2.2, 0, Math.PI * 2);
          context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${currentAlpha * 0.25})`;
          context.fill();
        }
      }
    }

    class EnergyPulse {
      constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
        this.progress = 0;
        this.color = p1.color;
      }

      update() {
        this.progress += PULSE_SPEED;
        return this.progress < 1;
      }

      draw(context) {
        const currX = this.p1.x + (this.p2.x - this.p1.x) * this.progress;
        const currY = this.p1.y + (this.p2.y - this.p1.y) * this.progress;
        const pulseAlpha = Math.sin(this.progress * Math.PI) * 0.85;

        context.beginPath();
        context.arc(currX, currY, 2.2, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${pulseAlpha})`;
        context.fill();

        context.beginPath();
        context.arc(currX, currY, 5, 0, Math.PI * 2);
        context.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${pulseAlpha * 0.4})`;
        context.fill();
      }
    }

    // Initialize Particles based on viewport size
    function initParticles() {
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1100;
      const count = isMobile ? 32 : isTablet ? 55 : 85;

      particles = [];
      pulses = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(width, height));
      }
    }


    // Canvas Resizing with DPR Clamping (No layout thrashing)
    function resize() {
      if (!container || !canvas) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || window.innerHeight || 800;
      if (width === w && height === h && canvas.width > 0) return;
      width = w;
      height = h;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      initParticles();

      if (prefersReducedMotion) {
        renderStaticFrame();
      }
    }


    function renderStaticFrame() {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw(ctx);
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();
          }
        }
      }
    }

    // Main 60fps Render Loop
    function animate() {
      if (!isVisibleRef.current) return;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.15;
        mouse.y += (mouse.targetY - mouse.y) * 0.15;
      }

      // Update & Draw Particles
      const len = particles.length;
      for (let i = 0; i < len; i++) {
        particles[i].update(width, height);
        particles[i].draw(ctx);

        // Connections between particles
        for (let j = i + 1; j < len; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);

          if (dist < MAX_DISTANCE) {
            const alpha = (1 - dist / MAX_DISTANCE) * 0.45;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1.1;
            ctx.stroke();

            // Randomly spawn energy pulses along close connections
            if (Math.random() < 0.0008 && pulses.length < 12) {
              pulses.push(new EnergyPulse(particles[i], particles[j]));
            }
          }
        }

        // Connection from active cursor to nearby particles
        if (mouse.active) {
          const mdx = mouse.x - particles[i].x;
          const mdy = mouse.y - particles[i].y;
          const mdist = Math.hypot(mdx, mdy);
          if (mdist < 160) {
            const mAlpha = (1 - mdist / 160) * 0.55;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      // Update & Draw Pulses
      for (let k = pulses.length - 1; k >= 0; k--) {
        const alive = pulses[k].update();
        if (alive) {
          pulses[k].draw(ctx);
        } else {
          pulses.splice(k, 1);
        }
      }

      animFrameIdRef.current = requestAnimationFrame(animate);
    }

    // Mouse & Touch Listeners
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    const handleTouchEnd = () => {
      mouse.active = false;
    };

    // IntersectionObserver to pause when offscreen (Crucial for 100 Lighthouse Performance)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisibleRef.current = true;
            if (!prefersReducedMotion && !animFrameIdRef.current) {
              animFrameIdRef.current = requestAnimationFrame(animate);
            }
          } else {
            isVisibleRef.current = false;
            if (animFrameIdRef.current) {
              cancelAnimationFrame(animFrameIdRef.current);
              animFrameIdRef.current = null;
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    // Tab visibility handling
    const handleVisibilityChange = () => {
      if (document.hidden) {
        isVisibleRef.current = false;
        if (animFrameIdRef.current) {
          cancelAnimationFrame(animFrameIdRef.current);
          animFrameIdRef.current = null;
        }
      } else {
        isVisibleRef.current = true;
        if (!prefersReducedMotion && !animFrameIdRef.current) {
          animFrameIdRef.current = requestAnimationFrame(animate);
        }
      }
    };

    // Initialize
    resize();
    observer.observe(container);

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };

    window.addEventListener("resize", handleResize, { passive: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    canvas.addEventListener("mousemove", handleMouseMove, { passive: true });
    canvas.addEventListener("mouseleave", handleMouseLeave, { passive: true });
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true });
    canvas.addEventListener("touchend", handleTouchEnd, { passive: true });

    let startAnimTimer;
    if (!prefersReducedMotion) {
      startAnimTimer = setTimeout(() => {
        animFrameIdRef.current = requestAnimationFrame(animate);
      }, 150);
    }

    // Cleanup
    return () => {
      clearTimeout(startAnimTimer);
      clearTimeout(resizeTimer);
      observer.disconnect();

      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
        canvas.removeEventListener("touchmove", handleTouchMove);
        canvas.removeEventListener("touchend", handleTouchEnd);
      }
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, []);



  return (
    <div className="flare-hero-container" ref={containerRef} aria-hidden="true">
      {/* Dynamic Interactive HTML5 Canvas (Ultra-lightweight) */}
      <canvas ref={canvasRef} className="flare-hero-canvas" />

      {/* Radiant Aurora Flares (Hardware-Accelerated CSS) */}
      <div className="flare-aurora-glow flare-glow-1" />
      <div className="flare-aurora-glow flare-glow-2" />
      <div className="flare-aurora-glow flare-glow-3" />
      <div className="flare-aurora-glow flare-glow-flare" />

      {/* Cyber Horizon Matrix Grid */}
      <div className="flare-cyber-grid" />

      {/* Floating Holographic Innovation Badges */}
      <div className="flare-badge-layer">
        <div className="flare-badge flare-badge-tl">
          <span className="flare-badge-pulse-dot" />
          <span className="flare-badge-icon">⚡</span>
          <span>99+ Performance Engine</span>
        </div>

        <div className="flare-badge flare-badge-tr">
          <span className="flare-badge-icon">✦</span>
          <span>Full-Stack Web & AI</span>
        </div>

        <div className="flare-badge flare-badge-bl">
          <span className="flare-badge-icon">▲</span>
          <span>Scalable Cloud Systems</span>
        </div>

        <div className="flare-badge flare-badge-br">
          <span className="flare-badge-pulse-dot" />
          <span className="flare-badge-icon">📈</span>
          <span>High-Growth ROI Marketing</span>
        </div>
      </div>
    </div>
  );
}
