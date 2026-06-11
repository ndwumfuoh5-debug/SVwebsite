"use client";

import { FadeUp } from "./shared";

const STATS = ["Athlete-Led Distribution", "Authentic Credibility", "Fan-to-Consumer Scale"];

export function SportsFundSection() {
  return (
    <section id="sports-fund" className="bg-white py-24 lg:py-32">
      {/* Full-bleed hero image */}
      <div className="w-full overflow-hidden mb-16" style={{ height: 500 }}>
        <img
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1600&q=80"
          alt="Sports and athletes"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <FadeUp>
          <span className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-[#0A1540] tracking-wide mb-8">
            SPORTS HEROES FUND
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={100}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0A1540] mb-8 leading-tight">
            Where athlete trust becomes<br className="hidden lg:block" /> distribution.
          </h2>
        </FadeUp>

        {/* Body */}
        <FadeUp delay={200}>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed text-pretty mb-10">
            We invest in companies that turn authentic athlete relationships into scalable consumer distribution, reaching fans through the most trusted voices in their lives. The Sports Hero Fund secures exclusive athlete partnerships before investing, making distribution the unfair advantage from day one.
          </p>
        </FadeUp>

        {/* Stat pills */}
        <FadeUp delay={300}>
          <div className="flex flex-wrap gap-3">
            {STATS.map((stat) => (
              <span
                key={stat}
                className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-[#0A1540]"
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

// Keep backward-compatible export
export { SportsFundSection as WhyNowSection };
