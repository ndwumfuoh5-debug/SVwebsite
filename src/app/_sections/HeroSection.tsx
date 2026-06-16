"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* ─── Animated grid + rising data particles ─── */
function DataStreamCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Grid lines */
    const COLS = 20;
    const ROWS = 12;

    type Particle = {
      col: number;
      x: number;
      y: number;
      speed: number;
      size: number;
      alpha: number;
      trail: { x: number; y: number }[];
    };

    const particles: Particle[] = [];
    const spawn = () => {
      const col = Math.floor(Math.random() * COLS);
      particles.push({
        col,
        x: 0,
        y: Math.random() * canvas.height,
        speed: 0.4 + Math.random() * 1.2,
        size: 1.5 + Math.random() * 2,
        alpha: 0.4 + Math.random() * 0.5,
        trail: [],
      });
    };
    for (let i = 0; i < 28; i++) spawn();

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      /* Faint grid */
      const cellW = w / COLS;
      const cellH = h / ROWS;
      ctx.strokeStyle = "rgba(74,144,226,0.07)";
      ctx.lineWidth = 0.5;
      for (let c = 0; c <= COLS; c++) {
        ctx.beginPath();
        ctx.moveTo(c * cellW, 0);
        ctx.lineTo(c * cellW, h);
        ctx.stroke();
      }
      for (let r = 0; r <= ROWS; r++) {
        ctx.beginPath();
        ctx.moveTo(0, r * cellH);
        ctx.lineTo(w, r * cellH);
        ctx.stroke();
      }

      /* Particles rising upward along grid columns */
      for (const p of particles) {
        p.x = (p.col + 0.5) * cellW;
        p.y -= p.speed;
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 18) p.trail.shift();

        /* Trail */
        for (let t = 0; t < p.trail.length; t++) {
          const pt = p.trail[t]!;
          const ratio = t / p.trail.length;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.size * ratio * 0.7, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(74,144,226,${p.alpha * ratio * 0.4})`;
          ctx.fill();
        }

        /* Head dot */
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${p.alpha})`;
        ctx.fill();

        /* Glow */
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        grd.addColorStop(0, `rgba(74,144,226,${p.alpha * 0.3})`);
        grd.addColorStop(1, "rgba(74,144,226,0)");
        ctx.fillStyle = grd;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fill();

        /* Recycle when off top */
        if (p.y < -20) {
          p.y = h + 20;
          p.trail = [];
          p.col = Math.floor(Math.random() * COLS);
          p.speed = 0.4 + Math.random() * 1.2;
          p.alpha = 0.4 + Math.random() * 0.5;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
}

/* ─── Kinetic word cycler ─── */
const WORDS = ["Scale.", "Disrupt.", "Create."];

function KineticWord() {
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"in" | "hold" | "out">("in");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === "in")   t = setTimeout(() => setPhase("hold"), 500);
    if (phase === "hold") t = setTimeout(() => setPhase("out"),  2200);
    if (phase === "out")  t = setTimeout(() => { setIdx(i => (i + 1) % WORDS.length); setPhase("in"); }, 350);
    return () => clearTimeout(t);
  }, [phase]);

  const style: React.CSSProperties =
    phase === "in"
      ? { opacity: 1, transform: "translateY(0)", transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.22,1,0.36,1)" }
      : phase === "hold"
      ? { opacity: 1, transform: "translateY(0)" }
      : { opacity: 0, transform: "translateY(-24px)", transition: "opacity 0.35s ease, transform 0.35s ease" };

  return (
    <span className="inline-block" style={{ ...style, color: "#C0272D" }}>
      {WORDS[idx]}
    </span>
  );
}

/* ─── AI Next cycling tag ─── */
const AI_TAGS = [
  "Exclusive Data Channels",
  "Large Picture Models (LPM)",
  "AI on the Edge",
  "C-Suite Network to Scale",
  "Small Specialized Models",
  "Forward Integration to End-User",
];

function CyclingTag() {
  const [idx, setIdx]     = useState(0);
  const [vis, setVis]     = useState(true);

  useEffect(() => {
    const iv = setInterval(() => {
      setVis(false);
      setTimeout(() => { setIdx(i => (i + 1) % AI_TAGS.length); setVis(true); }, 380);
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  return (
    <span
      className="font-medium text-white/80 transition-opacity duration-300"
      style={{ opacity: vis ? 1 : 0 }}
    >
      {AI_TAGS[idx]}
    </span>
  );
}

/* ─── Main Hero ─── */
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16"
      style={{ background: "linear-gradient(160deg, #030b24 0%, #071035 50%, #060e2c 100%)" }}
    >
      <DataStreamCanvas />

      {/* Radial spotlight behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 50%, rgba(27,79,191,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto px-8 text-center flex flex-col items-center gap-6 w-full" style={{ maxWidth: "min(90vw, 1400px)" }}>

        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{ background: "rgba(74,144,226,0.1)", border: "1px solid rgba(74,144,226,0.2)", color: "#93c5fd" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          Scalator Ventures
        </div>

        {/* Main headline */}
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[1.05] text-white w-full"
          style={{
            fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
            fontWeight: 400,
            letterSpacing: "-0.03em",
          }}
        >
          <span style={{ fontWeight: 400, color: "rgba(255,255,255,0.82)" }}>We invest to</span>{" "}
          <span style={{ fontWeight: 800 }}>
            <KineticWord />
          </span>
        </h1>

        {/* Sub line */}
        <p
          className="text-xl lg:text-2xl xl:text-3xl font-light max-w-3xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)", letterSpacing: "0.01em" }}
        >
          Exponential growth through AI next focus and large scale distribution.
        </p>

        {/* AI Next strip */}
        <div
          className="flex items-center gap-3 px-6 py-3 rounded-2xl text-base md:text-lg mt-1"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
        >
          <span
            className="text-sm font-bold tracking-widest uppercase whitespace-nowrap"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            AI Next
          </span>
          <span style={{ color: "rgba(255,255,255,0.12)" }}>·</span>
          <CyclingTag />
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            onClick={() => document.getElementById("thesis")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:brightness-110"
            style={{ background: "linear-gradient(135deg, #1B4FBF 0%, #3b82f6 100%)" }}
          >
            Our Thesis
          </button>
          <button
            onClick={() => document.getElementById("funds")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            style={{ color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.12)", background: "transparent" }}
          >
            Our Funds
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.getElementById("thesis")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/20 hover:text-white/40 transition-all duration-300 z-10"
      >
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" strokeWidth={1} />
      </button>
    </section>
  );
}