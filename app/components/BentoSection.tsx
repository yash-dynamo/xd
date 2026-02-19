"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

/* ─────────────────────────── data ─────────────────────────── */
const cards = [
  {
    img: "/cards/1.png",
    name: "Rias Gremory",
    role: "Chief Liquidity Architect",
    tag: "XD · INNER CIRCLE",
    ability: "Crimson Depth",
    power: 100,
    color: "#cc0000",
    colorDim: "rgba(204,0,0,0.18)",
    stars: 5,
    desc: "Deep books. Clean fills.",
    size: "large",
    glowColor: "rgba(204,0,0,0.35)",
  },
  {
    img: "/cards/2.png",
    name: "Akeno Himejima",
    role: "Head of Execution",
    tag: "XD · THUNDER FILLS",
    ability: "Holy Lightning",
    power: 97,
    color: "#7b00c8",
    colorDim: "rgba(123,0,200,0.18)",
    stars: 5,
    desc: "Low latency. High hit rate.",
    size: "small",
    glowColor: "rgba(123,0,200,0.35)",
  },
  {
    img: "/cards/3.png",
    name: "Koneko Toujou",
    role: "Risk & Defense Lead",
    tag: "XD · IRON SHIELD",
    ability: "Senjutsu Ward",
    power: 88,
    color: "#2a5aaa",
    colorDim: "rgba(42,90,170,0.18)",
    stars: 4,
    desc: "Risk first. Always on.",
    size: "small",
    glowColor: "rgba(42,90,170,0.35)",
  },
  {
    img: "/cards/4.png",
    name: "Asia Argento",
    role: "Portfolio Recovery Lead",
    tag: "XD · TWILIGHT HEAL",
    ability: "Sacred Recovery",
    power: 92,
    color: "#1a8a3a",
    colorDim: "rgba(26,138,58,0.18)",
    stars: 4,
    desc: "Recovery engine online.",
    size: "large",
    glowColor: "rgba(26,138,58,0.35)",
  },
];

/* ─────────────────────────── sub-components ─────────────────────────── */
function PowerBar({ power, color }: { power: number; color: string }) {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" }}>
        <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "7px", letterSpacing: "2px", color: "#444" }}>
          POWER LEVEL
        </span>
        <span style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "10px", fontWeight: "700", color }}>
          {power}
        </span>
      </div>
      <div style={{ height: "2px", background: "rgba(255,255,255,0.06)", borderRadius: "1px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${power}%`,
            background: `linear-gradient(to right, ${color}88, ${color})`,
            borderRadius: "1px",
            transition: "width 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────── card ─────────────────────────── */
function BentoCard({ card, index }: { card: (typeof cards)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  }, []);

  return (
    <div
      className={`animate-fade-in-up delay-${(index + 1) * 100} bento-card`}
      style={{
        position: "relative",
        borderRadius: "3px",
        overflow: "hidden",
        cursor: "pointer",
        aspectRatio: card.size === "large" ? "3/4" : "2/3",
        background: "#06000e",
        transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        border: hovered ? `1px solid ${card.color}66` : "1px solid rgba(255,255,255,0.06)",
        boxShadow: hovered
          ? `0 24px 80px ${card.glowColor}, 0 0 0 1px ${card.color}33`
          : "none",
        transform: hovered ? "translateY(-10px) scale(1.015)" : "translateY(0) scale(1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* ── Character image ── */}
      <div
        className="bento-card-inner"
        style={{
          position: "absolute",
          inset: 0,
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <Image
          src={card.img}
          alt={card.name}
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
        />
      </div>

      {/* ── Mouse-following spotlight ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle 120px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.07) 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      {/* ── Base gradient overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(
              to bottom,
              transparent 0%,
              transparent 30%,
              ${card.colorDim} 55%,
              rgba(6,0,14,0.88) 72%,
              rgba(6,0,14,0.98) 100%
            )
          `,
          transition: "opacity 0.4s",
          zIndex: 1,
        }}
      />

      {/* ── Top colored bar ── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: hovered ? "3px" : "2px",
          background: `linear-gradient(to right, ${card.color}, transparent 70%)`,
          transition: "height 0.3s",
          zIndex: 5,
        }}
      />

      {/* ── Tag pill ── */}
      <div
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          background: "rgba(6,0,14,0.8)",
          backdropFilter: "blur(10px)",
          border: `1px solid ${card.color}44`,
          padding: "4px 10px",
          fontSize: "7px",
          letterSpacing: "2px",
          fontFamily: "var(--font-space-grotesk)",
          color: card.color,
          fontWeight: "700",
          zIndex: 5,
          transition: "all 0.3s",
          transform: hovered ? "translateY(-2px)" : "translateY(0)",
        }}
      >
        {card.tag}
      </div>

      {/* ── Ability badge (appears on hover) ── */}
      <div
        style={{
          position: "absolute",
          top: "14px",
          right: "14px",
          background: `${card.color}22`,
          backdropFilter: "blur(10px)",
          border: `1px solid ${card.color}55`,
          padding: "4px 10px",
          fontSize: "7px",
          letterSpacing: "1.5px",
          fontFamily: "var(--font-space-grotesk)",
          color: card.color,
          fontWeight: "600",
          zIndex: 5,
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(-8px)",
          transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        ⚡ {card.ability}
      </div>

      {/* ── Bottom content ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "20px",
          zIndex: 5,
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {/* Description — reveals on hover */}
        <p
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "11px",
            color: "#888",
            lineHeight: 1.55,
            marginBottom: "12px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.35s cubic-bezier(0.16,1,0.3,1) 0.05s",
            maxHeight: "40px",
            overflow: "hidden",
          }}
        >
          {card.desc}
        </p>

        {/* Name */}
        <div
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(16px,1.5vw,20px)",
            fontWeight: "700",
            color: "#f5f0e8",
            marginBottom: "2px",
            letterSpacing: "0.5px",
          }}
        >
          {card.name}
        </div>

        {/* Role */}
        <div
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "8px",
            letterSpacing: "2.5px",
            color: card.color,
            marginBottom: "12px",
            fontWeight: "700",
            opacity: 0.9,
          }}
        >
          {card.role}
        </div>

        {/* Power bar */}
        <PowerBar power={card.power} color={card.color} />
      </div>

      {/* ── Bottom right corner accent ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: hovered ? "50px" : "30px",
          height: "1px",
          background: `linear-gradient(to left, ${card.color}88, transparent)`,
          transition: "width 0.4s",
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "1px",
          height: hovered ? "50px" : "30px",
          background: `linear-gradient(to top, ${card.color}88, transparent)`,
          transition: "height 0.4s",
          zIndex: 5,
        }}
      />
    </div>
  );
}

/* ─────────────────────────── section ─────────────────────────── */
export default function BentoSection() {
  return (
    <section
      id="platforms"
      style={{
        padding: "100px 0 80px",
        position: "relative",
        background:
          "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(100,0,0,0.07) 0%, transparent 60%), #07000d",
        overflow: "hidden",
      }}
    >
      {/* Vertical divider from top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "1px",
          height: "100px",
          background: "linear-gradient(to bottom, transparent, rgba(204,0,0,0.5), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div style={{ marginBottom: "56px" }}>
          <div
            className="animate-fade-in-up"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "16px",
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "9px",
              letterSpacing: "3px",
              color: "#cc0000",
              fontWeight: "700",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#cc0000",
                display: "inline-block",
                animation: "live-pulse 2s ease-in-out infinite",
              }}
            />
            CORE TEAM
          </div>

          <h2 className="animate-fade-in-up delay-100" style={{ lineHeight: 1.05, margin: 0 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(38px, 5vw, 64px)",
                fontWeight: "700",
                color: "#f5f0e8",
              }}
            >
              Core
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(38px, 5vw, 64px)",
                fontWeight: "300",
                color: "#cc3333",
              }}
            >
              Stack
            </span>
          </h2>

          <p
            className="animate-fade-in-up delay-200"
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "13px",
              color: "#484848",
              marginTop: "14px",
              maxWidth: "460px",
              lineHeight: 1.7,
            }}
          >
            Four modules. One execution engine.
          </p>
        </div>

        {/* Bento grid */}
        <div className="bento-grid">
          {cards.map((card, i) => (
            <BentoCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* Footer quote */}
        <div
          className="animate-fade-in-up delay-500"
          style={{
            marginTop: "48px",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to right, transparent, rgba(204,0,0,0.3))" }} />
          <span
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "18px",
              color: "#333",
              letterSpacing: "0.5px",
            }}
          >
            Built for speed.
          </span>
          <div style={{ height: "1px", width: "60px", background: "linear-gradient(to left, transparent, rgba(204,0,0,0.3))" }} />
        </div>
      </div>
    </section>
  );
}
