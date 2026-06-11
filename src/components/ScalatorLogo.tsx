"use client";

interface ScalatorLogoProps {
  height?: number;
  light?: boolean;
  className?: string;
}

export function ScalatorLogo({ height = 48, light = false, className = "" }: ScalatorLogoProps) {
  return (
    <div className={`inline-flex items-center select-none ${className}`} style={{ height }}>
      <img
        src="https://zjxnv7e5voftnnlw.public.blob.vercel-storage.com/agents/generated-images/898ed0ac-2474-4fd5-aa76-2fe3ef0265cd.jpg"
        alt="Scalator Ventures"
        style={{
          height,
          width: "auto",
          objectFit: "contain",
          filter: light ? "brightness(0) invert(1)" : "none",
        }}
      />
    </div>
  );
}
