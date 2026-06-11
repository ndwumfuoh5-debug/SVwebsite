"use client";

import { useEffect, useRef } from "react";
import { FadeUp } from "./shared";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";

/* ─── Same data-stream canvas reused for the contact footer ─── */
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

    const COLS = 20;
    const ROWS = 8;

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
    for (let i = 0; i < 22; i++) {
      const col = Math.floor(Math.random() * COLS);
      particles.push({
        col,
        x: 0,
        y: Math.random() * (canvas.height || 400),
        speed: 0.3 + Math.random() * 0.9,
        size: 1.5 + Math.random() * 1.5,
        alpha: 0.25 + Math.random() * 0.4,
        trail: [],
      });
    }

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cellW = w / COLS;
      const cellH = h / ROWS;

      ctx.strokeStyle = "rgba(74,144,226,0.06)";
      ctx.lineWidth = 0.5;
      for (let c = 0; c <= COLS; c++) {
        ctx.beginPath(); ctx.moveTo(c * cellW, 0); ctx.lineTo(c * cellW, h); ctx.stroke();
      }
      for (let r = 0; r <= ROWS; r++) {
        ctx.beginPath(); ctx.moveTo(0, r * cellH); ctx.lineTo(w, r * cellH); ctx.stroke();
      }

      for (const p of particles) {
        p.x = (p.col + 0.5) * cellW;
        p.y -= p.speed;
        p.trail.push({ x: p.x, y: p.y });
        if (p.trail.length > 14) p.trail.shift();

        for (let t = 0; t < p.trail.length; t++) {
          const pt = p.trail[t]!;
          const ratio = t / p.trail.length;
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.size * ratio * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(74,144,226,${p.alpha * ratio * 0.35})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,197,253,${p.alpha})`;
        ctx.fill();

        if (p.y < -20) {
          p.y = h + 20;
          p.trail = [];
          p.col = Math.floor(Math.random() * COLS);
          p.speed = 0.3 + Math.random() * 0.9;
          p.alpha = 0.25 + Math.random() * 0.4;
        }
      }

      raf = requestAnimationFrame(draw);
    };

    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

const CONTACT_ITEMS = [
  {
    icon: MapPin,
    label: "Address",
    value: "5900 Balcones Drive #24298\nAustin, TX 78731",
    href: "https://maps.google.com/?q=5900+Balcones+Drive+Austin+TX+78731",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(650) 600 7737",
    href: "tel:+16506007737",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@scalatorx.com",
    href: "mailto:info@scalatorx.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Scalator Ventures",
    href: "https://www.linkedin.com/company/scalator/?viewAsMember=true",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-28 lg:py-36 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #030b24 0%, #071035 50%, #060e2c 100%)" }}
    >
      <DataStreamCanvas />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(27,79,191,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

        <FadeUp>
          <h2
            className="text-5xl lg:text-7xl text-white mb-4"
            style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 300, letterSpacing: "-0.04em" }}
          >
            Ready to{" "}
            <span style={{ fontWeight: 700 }}>scale?</span>
          </h2>
          <p className="text-base text-white/40 mb-16 tracking-wide">
            We&apos;d love to hear from you.
          </p>
        </FadeUp>

        {/* Contact grid */}
        <FadeUp delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-20">
            {CONTACT_ITEMS.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "LinkedIn" || label === "Address" ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex flex-col items-center gap-5 p-10 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  minHeight: "220px",
                  justifyContent: "center",
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  style={{ background: "rgba(74,144,226,0.15)", border: "1px solid rgba(74,144,226,0.25)" }}
                >
                  <Icon className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/30">
                  {label}
                </span>
                <span className="text-lg text-white/70 text-center leading-relaxed whitespace-pre-line group-hover:text-white transition-colors duration-200">
                  {value}
                </span>
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Divider */}
        <div className="w-16 h-px mx-auto mb-8" style={{ background: "rgba(255,255,255,0.1)" }} />

        {/* Footer */}
        <FadeUp delay={200}>
          <p className="text-white/20 text-xs tracking-widest uppercase">
            © 2026 Scalator Ventures. All rights reserved.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}