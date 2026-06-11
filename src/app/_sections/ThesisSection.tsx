"use client";

import { FadeUp } from "./shared";

const PRINCIPLES = [
  {
    title: "Distribution First",
    desc: "We secure the channel before the capital.",
  },
  {
    title: "Bypass CAC",
    desc: "Strategic partnerships compress acquisition costs to near zero.",
  },
  {
    title: "Super Growth",
    desc: "When distribution is locked in, growth becomes exponential.",
  },
];

const AI_NEXT = [
  { label: "Exclusive Data Channels" },
  { label: "Large Picture Models (LPM)" },
  { label: "Forward Integration to End-User" },
  { label: "AI on the Edge" },
  { label: "Small Specialized Models" },
  { label: "C-Suite Network to Scale" },
];

export function ThesisSection() {
  return (
    <section id="thesis" className="bg-white py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#1B4FBF] mb-4">
            The Scalator Effect
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0A1540] mb-8 leading-tight">
            Scale fast. Enter the market<br className="hidden lg:block" /> strategically.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed text-pretty">
            Traditional venture bets on product-market fit, then figures out distribution. We flip the model. Before we invest, we secure exclusive strategic distribution channels, giving portfolio companies immediate access to millions of end-users from day one.
          </p>
        </FadeUp>

        {/* Principle cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {PRINCIPLES.map((p, i) => (
            <FadeUp key={p.title} delay={(i * 100) as 0 | 100 | 200}>
              <div className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 h-full">
                <h3 className="text-[#0A1540] font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-gray-500 text-base leading-relaxed">{p.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* AI Next Investments */}
        <FadeUp delay={200}>
          <div className="mt-20 border-t border-gray-100 pt-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-[#1B4FBF] mb-4">
              AI Next Investments
            </p>
            <h3 className="text-2xl lg:text-3xl font-bold text-[#0A1540] mb-3 leading-snug">
              Post-LLM. The next wave of AI value creation.
            </h3>
            <p className="text-gray-500 max-w-2xl mb-10 leading-relaxed text-pretty">
              We focus beyond the LLM layer, investing in the infrastructure, channels, and applications that turn AI into durable, defensible businesses.
            </p>
            <div className="flex flex-wrap gap-3">
              {AI_NEXT.map((item) => (
                <span
                  key={item.label}
                  className="px-4 py-2 rounded-full border border-[#1B4FBF]/20 bg-[#1B4FBF]/5 text-[#1B4FBF] text-sm font-medium"
                >
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}