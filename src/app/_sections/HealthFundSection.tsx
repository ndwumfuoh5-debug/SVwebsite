"use client";

import { FadeUp } from "./shared";

const STATS = ["AI-Native Only", "Proprietary Data Channels", "Health System Distribution"];

export function HealthFundSection() {
  return (
    <section id="health-fund" className="py-24 lg:py-32" style={{ backgroundColor: "#F7F7F7" }}>
      {/* Full-bleed hero image */}
      <div className="w-full overflow-hidden mb-16" style={{ height: 500 }}>
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
          alt="Health and longevity"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <FadeUp>
          <span className="inline-flex items-center bg-white rounded-full px-4 py-2 text-sm font-medium text-[#0A1540] tracking-wide mb-8">
            HEALTH &amp; LONGEVITY FUND
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={100}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0A1540] mb-8 leading-tight">
            AI-native health companies built<br className="hidden lg:block" /> for a longer human lifespan.
          </h2>
        </FadeUp>

        {/* Body */}
        <FadeUp delay={200}>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed text-pretty mb-10">
            We back companies at the intersection of AI and longevity science, where proprietary data channels create compounding clinical and commercial advantages.
          </p>
        </FadeUp>

        {/* Stat pills */}
        <FadeUp delay={300}>
          <div className="flex flex-wrap gap-3">
            {STATS.map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-medium text-[#0A1540]"
              >
                {stat}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
