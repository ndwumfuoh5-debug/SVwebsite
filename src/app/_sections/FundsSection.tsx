"use client";

import { FadeUp } from "./shared";

const FUNDS = [
  {
    id: "automotive-fund",
    name: "Smartphones on Wheels Fund",
    subtitle: "AI-Native In-Cabin Technology",
    description: "AI-native in-cabin technology with exclusive OEM joint ventures.",
    image: "https://zjxnv7e5voftnnlw.public.blob.vercel-storage.com/agents/generated-images/a1a539ed-e71d-4daa-9068-4bc1b6b9319b.png",
    imageAlt: "Luxury car interior",
    imagePosition: "center center",
  },
  {
    id: "health-fund",
    name: "Health & Longevity Fund",
    subtitle: "AI First Fund",
    description: "Proprietary data channels at the intersection of AI and longevity science.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
    imageAlt: "Health and longevity",
    imagePosition: "center center",
  },
  {
    id: "sports-fund",
    name: "Sports Heroes Fund",
    subtitle: "Athlete-Led Distribution",
    description: "Authentic athlete relationships turned into scalable consumer distribution.",
    image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    imageAlt: "Sports and athletes",
    imagePosition: "center center",
  },
];

export function FundsSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="funds" className="py-24 lg:py-32" style={{ backgroundColor: "#F7F7F7" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <FadeUp>
          <p className="text-xs font-semibold tracking-widest uppercase text-[#1B4FBF] mb-4">
            Our Funds
          </p>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-[#0A1540] mb-16">
            Three sectors. One thesis.
          </h2>
        </FadeUp>

        {/* Fund cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {FUNDS.map((fund, i) => (
            <FadeUp key={fund.id} delay={(i * 100) as 0 | 100 | 200}>
              <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 220 }}>
                  <img
                    src={fund.image}
                    alt={fund.imageAlt}
                    className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
                    style={{ objectPosition: fund.imagePosition }}
                  />
                </div>
                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-[#0A1540] font-bold text-xl mb-1">{fund.name}</h3>
                  <p className="text-[#1B4FBF] text-sm font-semibold tracking-wide mb-3">{fund.subtitle}</p>
                  <p className="text-gray-500 text-base leading-relaxed mb-6 flex-1">{fund.description}</p>
                  <button
                    onClick={() => scrollTo(fund.id)}
                    className="text-[#1B4FBF] text-sm font-semibold hover:underline text-left transition-all duration-300"
                  >
                    Learn more ↓
                  </button>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}