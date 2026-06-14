import React from "react";

export default function Logo({ size = 50 }) {
  return (
    <div className="flex items-center gap-3">
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <defs>
          {/* Rose gold metallic gradient */}
          <linearGradient id="roseGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E8C2BC" />
            <stop offset="50%" stopColor="#D29F96" />
            <stop offset="100%" stopColor="#AA7066" />
          </linearGradient>
        </defs>

        {/* Textured/painted outer circle ring */}
        <circle
          cx="100"
          cy="100"
          r="80"
          stroke="url(#roseGoldGrad)"
          strokeWidth="3.5"
          strokeDasharray="400 60 50 30"
          className="opacity-90 transform -rotate-45 origin-center"
        />

        {/* Sparkles / Glitter Dots around the ring */}
        <circle cx="25" cy="90" r="2" fill="#E8C2BC" className="opacity-80" />
        <circle cx="35" cy="55" r="1.5" fill="#D29F96" className="opacity-60" />
        <circle cx="50" cy="35" r="2.5" fill="#E8C2BC" className="opacity-95" />
        <circle cx="85" cy="20" r="1.5" fill="#AA7066" className="opacity-70" />
        <circle cx="120" cy="18" r="2" fill="#E8C2BC" className="opacity-80" />
        <circle cx="155" cy="35" r="1.5" fill="#D29F96" className="opacity-60" />
        <circle cx="178" cy="70" r="2" fill="#E8C2BC" className="opacity-90" />
        <circle cx="180" cy="110" r="1.5" fill="#AA7066" className="opacity-70" />
        <circle cx="165" cy="145" r="2.5" fill="#E8C2BC" className="opacity-95" />
        <circle cx="140" cy="170" r="1.5" fill="#D29F96" className="opacity-60" />
        <circle cx="100" cy="182" r="2" fill="#E8C2BC" className="opacity-80" />
        <circle cx="60" cy="175" r="1.5" fill="#AA7066" className="opacity-70" />
        <circle cx="35" cy="150" r="2" fill="#E8C2BC" className="opacity-90" />
        <circle cx="20" cy="120" r="1.5" fill="#D29F96" className="opacity-60" />

        {/* Additional smaller decorative sparkles */}
        <circle cx="48" cy="48" r="1" fill="#FFF" className="opacity-90" />
        <circle cx="152" cy="50" r="1" fill="#FFF" className="opacity-90" />
        <circle cx="150" cy="150" r="1" fill="#FFF" className="opacity-90" />
        <circle cx="50" cy="148" r="1" fill="#FFF" className="opacity-90" />

        {/* Handwritten signature logo text */}
        <text
          x="100"
          y="110"
          textAnchor="middle"
          fill="#FFFFFF"
          style={{
            fontFamily: "'Alex Brush', cursive",
            fontSize: "62px",
            fontWeight: "normal",
          }}
        >
          Aeindri
        </text>

        {/* Sub-text PRODUCTIONS */}
        <text
          x="100"
          y="140"
          textAnchor="middle"
          fill="#E8C2BC"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "10px",
            fontWeight: "500",
            letterSpacing: "8px",
            opacity: 0.85,
          }}
        >
          PRODUCTIONS
        </text>
      </svg>
    </div>
  );
}
