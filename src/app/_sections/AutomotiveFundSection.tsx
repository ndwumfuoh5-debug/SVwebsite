"use client";

import { FadeUp } from "./shared";

const STATS = ["OEM-First Strategy"];

export function AutomotiveFundSection() {
  return (
    <section id="automotive-fund" className="bg-white py-24 lg:py-32">
      {/* Full-bleed hero image — car interior */}
      <div className="w-full overflow-hidden mb-16" style={{ height: 500 }}>
        <img
          src="https://zjxnv7e5voftnnlw.public.blob.vercel-storage.com/agents/generated-images/a1a539ed-e71d-4daa-9068-4bc1b6b9319b.png"
          alt="Futuristic car interior"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <FadeUp>
          <span className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-[#0A1540] tracking-wide mb-8">
            SMARTPHONES ON WHEELS FUND
          </span>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={100}>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0A1540] mb-8 leading-tight">
            The car is becoming<br className="hidden lg:block" /> the next platform.
          </h2>
        </FadeUp>

        {/* Body */}
        <FadeUp delay={200}>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed text-pretty mb-10">
            We invest in AI-native in-cabin technology companies and leverage exclusive OEM joint ventures, giving portfolio companies immediate access to 30%+ of the US and European automotive market. Our channel-before-capital model means we only invest when distribution is already locked in.
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
