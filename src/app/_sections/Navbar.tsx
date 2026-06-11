"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Sections that have a dark background
    const darkSectionIds = ["hero", "contact"];

    const observers: IntersectionObserver[] = [];

    // Track which dark sections are currently visible
    const visibleDark = new Set<string>();

    darkSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            visibleDark.add(id);
          } else {
            visibleDark.delete(id);
          }
          setIsDark(visibleDark.size > 0);
        },
        { threshold: 0.15 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const NAV_LINKS = [
    { label: "The Scalator Effect", id: "thesis" },
    { label: "Funds", id: "funds" },
    { label: "Contact", id: "contact" },
  ];

  const navBg = isDark
    ? "transparent"
    : "rgba(255,255,255,0.97)";

  const navShadow = isDark ? "none" : "0 1px 12px rgba(0,0,0,0.08)";
  const linkColor = isDark ? "text-white/90 hover:text-white" : "text-[#0A1540]/80 hover:text-[#0A1540]";
  const mobileIconColor = isDark ? "text-white" : "text-[#0A1540]";

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: navBg, boxShadow: navShadow }}
    >
      <div className="w-full px-4 lg:px-10">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scalator Ventures scroll to top"
            className="flex items-center"
          >
            <img
              src="https://res.cloudinary.com/drnmfkzgx/image/upload/e_background_removal/e_trim/f_png/PastedGraphic-4_2_pmh44r"
              alt="Scalator Ventures"
              className="h-24 w-auto object-contain"
              style={{
                background: "transparent",
                mixBlendMode: isDark ? "screen" : "multiply",
              }}
            />
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group ${linkColor}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C0272D] rounded-full transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className={`md:hidden p-1 transition-colors duration-300 ${mobileIconColor}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-1 transition-all duration-300"
          style={{
            background: isDark ? "rgba(5,15,50,0.92)" : "rgba(255,255,255,0.97)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            borderColor: isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`text-sm font-semibold px-3 py-2 rounded-lg transition-all duration-200 text-left ${
                isDark
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-[#0A1540]/80 hover:text-[#0A1540] hover:bg-black/5"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
