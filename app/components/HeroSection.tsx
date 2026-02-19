"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Particles from "./Particles";

/* ─────────────────────────── data ─────────────────────────── */
const platforms = [
  {
    name: "HotStuff",
    type: "PERP DEX · LIVE",
    volume: "$142M",
    pairs: "234 pairs",
    icon: "🔥",
    color: "#cc0000",
    bars: [0.5, 0.75, 0.55, 0.9, 0.65, 0.8, 1.0],
  },
  {
    name: "Hyperliquid",
    type: "PERP DEX · LIVE",
    volume: "$198M",
    pairs: "189 pairs",
    icon: "⚡",
    color: "#7b00c8",
    bars: [0.4, 0.65, 0.85, 0.6, 0.9, 0.7, 0.95],
  },
  {
    name: "More DEXes",
    type: "COMING Q2 2026",
    volume: "Soon™",
    pairs: "∞ pairs",
    icon: "◎",
    color: "#2a5aaa",
    bars: [0.2, 0.25, 0.2, 0.3, 0.2, 0.28, 0.32],
    soon: true,
  },
];

/* ─────────────────────────── hooks ─────────────────────────── */
function useAnimatedNumber(target: number, duration = 1800, delay = 700) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.floor(eased * target));
        if (p < 1) requestAnimationFrame(tick);
        else setVal(target);
      };
      requestAnimationFrame(tick);
    }, delay);
    return () => clearTimeout(t);
  }, [target, duration, delay]);
  return val;
}

/* ─────────────────────────── sub-components ─────────────────────────── */
function MiniBarChart({ bars, color, delay = 0 }: { bars: number[]; color: string; delay?: number }) {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 900 + delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: "2px", height: "22px", opacity: 0.85 }}>
      {bars.map((h, i) => (
        <div
          key={i}
          style={{
            width: "3px",
            height: "100%",
            position: "relative",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "1px",
          }}
        >
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: "1px",
              background: color,
              transformOrigin: "bottom",
              transform: ready ? `scaleY(${h})` : "scaleY(0)",
              height: "100%",
              transition: `transform 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 55 + delay}ms`,
            }}
          />
        </div>
      ))}
    </div>
  );
}

function StatBlock({ value, label, delay }: { value: string; label: string; delay: number }) {
  const [show, setShow] = useState(false);
  useEffect(() => { const t = setTimeout(() => setShow(true), delay); return () => clearTimeout(t); }, [delay]);
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(18px,2vw,26px)",
          fontWeight: "700",
          color: "#c9a227",
          transform: show ? "translateY(0)" : "translateY(12px)",
          opacity: show ? 1 : 0,
          transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontFamily: "var(--font-space-grotesk)",
          fontSize: "7px",
          letterSpacing: "2px",
          color: "#444",
          marginTop: "4px",
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ─────────────────────────── main component ─────────────────────────── */
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const vol = useAnimatedNumber(420, 1800, 800);
  const uptime = useAnimatedNumber(999, 1600, 1000);

  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    cardRef.current.style.transform = `perspective(1200px) rotateY(${x}deg) rotateX(${y}deg) translateZ(16px)`;
  }, []);

  const handleCardMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(1200px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "#07000d",
        padding: "100px 0 80px",
      }}
    >
      {/* Animated grid background */}
      <div className="hero-bg-grid" />

      {/* Radial glow overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 15% 55%, rgba(180,0,0,0.09) 0%, transparent 55%), radial-gradient(ellipse 45% 60% at 85% 20%, rgba(80,0,130,0.07) 0%, transparent 55%)",
          pointerEvents: "none",
        }}
      />

      {/* Bottom left warm glow */}
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-80px",
          width: "520px",
          height: "520px",
          background: "radial-gradient(circle, rgba(204,0,0,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <Particles count={28} />

      <div className="max-w-7xl mx-auto px-6 w-full" style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-grid">

          {/* ══════════════ LEFT ══════════════ */}
          <div>
            {/* Protocol badge */}
            <div
              className="animate-fade-in-left"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "9px",
                letterSpacing: "3px",
                color: "#cc0000",
                fontWeight: "600",
                border: "1px solid rgba(204,0,0,0.2)",
                padding: "7px 14px",
                background: "rgba(204,0,0,0.04)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="animate-spark" style={{ fontSize: "10px" }}>✦</span>
              XD · LIVE
            </div>

            {/* Heading — each line staggered */}
            <h1 style={{ lineHeight: 1.04, marginBottom: "28px", margin: "0 0 28px" }}>
              <span
                className="animate-fade-in-left delay-100"
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  fontStyle: "italic",
                  fontSize: "clamp(50px, 6vw, 84px)",
                  fontWeight: "300",
                  color: "#cc3333",
                  letterSpacing: "-1px",
                }}
              >
                Pure
              </span>
              <span
                className="animate-fade-in-left delay-200"
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(50px, 6vw, 84px)",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  letterSpacing: "-1.5px",
                }}
              >
                Deep
              </span>
              <span
                className="animate-fade-in-left delay-300 animate-glow-gold"
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(46px, 5.5vw, 78px)",
                  fontWeight: "700",
                  color: "#c9a227",
                  letterSpacing: "-1px",
                }}
              >
                Market
              </span>
              <span
                className="animate-fade-in-left delay-400"
                style={{
                  display: "block",
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(50px, 6vw, 84px)",
                  fontWeight: "700",
                  color: "#f5f0e8",
                  letterSpacing: "-1.5px",
                }}
              >
                Liquidity
              </span>
            </h1>

            {/* Description */}
            <p
              className="animate-fade-in-left delay-500"
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "14px",
                color: "#666",
                lineHeight: 1.8,
                marginBottom: "40px",
                maxWidth: "420px",
              }}
            >
              Fast routing. Tight spreads. Live on every major venue.
            </p>

            {/* CTA buttons */}
            <div
              className="animate-fade-in-left delay-600 hero-cta-row"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}
            >
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="animate-glow-red"
                style={{
                  background: "linear-gradient(135deg, #cc0000, #990000)",
                  color: "#fff",
                  padding: "15px 36px",
                  fontSize: "10px",
                  letterSpacing: "2.5px",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: "700",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "linear-gradient(135deg, #e00000, #bb0000)";
                  el.style.transform = "translateY(-3px)";
                  el.style.boxShadow = "0 16px 48px rgba(204,0,0,0.45)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "linear-gradient(135deg, #cc0000, #990000)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "";
                }}
              >
                START
              </a>
              <a
                href="#platforms"
                style={{
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#777",
                  padding: "15px 32px",
                  fontSize: "10px",
                  letterSpacing: "2.5px",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: "600",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(201,162,39,0.35)";
                  el.style.color = "#c9a227";
                  el.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(255,255,255,0.12)";
                  el.style.color = "#777";
                  el.style.transform = "translateY(0)";
                }}
              >
                STACK
              </a>
            </div>
          </div>

          {/* ══════════════ RIGHT — tilt card ══════════════ */}
          <div
            className="animate-fade-in-right delay-300"
            style={{ perspective: "1200px" }}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div
              ref={cardRef}
              style={{
                transition: "transform 0.15s cubic-bezier(0.16,1,0.3,1)",
                transformStyle: "preserve-3d",
                position: "relative",
              }}
            >
              {/* Outer glow halo */}
              <div
                style={{
                  position: "absolute",
                  inset: "-2px",
                  background: "linear-gradient(135deg, rgba(204,0,0,0.25) 0%, transparent 50%, rgba(100,0,150,0.15) 100%)",
                  borderRadius: "6px",
                  filter: "blur(12px)",
                  opacity: 0.6,
                  pointerEvents: "none",
                }}
              />

              {/* Card body */}
              <div
                style={{
                  position: "relative",
                  background:
                    "linear-gradient(160deg, rgba(26,0,38,0.97) 0%, rgba(10,0,18,0.99) 100%)",
                  border: "1px solid rgba(204,0,0,0.25)",
                  borderRadius: "4px",
                  padding: "28px",
                  overflow: "hidden",
                }}
              >
                {/* Scan line */}
                <div
                  className="hero-scan-line"
                  style={{ position: "absolute", left: 0, right: 0, height: "1px" }}
                />

                {/* Corner accents */}
                <div style={{ position: "absolute", top: 0, left: 0, width: "80px", height: "2px", background: "linear-gradient(to right, #cc0000, transparent)" }} />
                <div style={{ position: "absolute", top: 0, left: 0, width: "2px", height: "80px", background: "linear-gradient(to bottom, #cc0000, transparent)" }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "60px", height: "1px", background: "linear-gradient(to left, rgba(201,162,39,0.4), transparent)" }} />
                <div style={{ position: "absolute", bottom: 0, right: 0, width: "1px", height: "60px", background: "linear-gradient(to top, rgba(201,162,39,0.4), transparent)" }} />

                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div>
                    <div
                      style={{
                        fontSize: "8px",
                        letterSpacing: "3px",
                        color: "#cc0000",
                        fontFamily: "var(--font-space-grotesk)",
                        marginBottom: "6px",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                        opacity: 0.9,
                      }}
                    >
                      <span
                        className="live-dot"
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#cc0000",
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      ACTIVE PROTOCOL
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-cormorant)",
                        fontSize: "38px",
                        fontWeight: "700",
                        color: "#c9a227",
                        letterSpacing: "5px",
                        lineHeight: 1,
                      }}
                      className="animate-glow-gold"
                    >
                      XD
                    </div>
                  </div>
                  <div
                    style={{
                      border: "1px solid rgba(0,200,100,0.35)",
                      color: "#00c864",
                      padding: "5px 12px",
                      fontSize: "8px",
                      letterSpacing: "2px",
                      fontFamily: "var(--font-space-grotesk)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "rgba(0,200,100,0.04)",
                    }}
                  >
                    <span
                      className="live-dot"
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#00c864",
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    LIVE
                  </div>
                </div>

                {/* Platform rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: "7px", marginBottom: "20px" }}>
                  {platforms.map((p, i) => (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        border: "1px solid rgba(255,255,255,0.05)",
                        borderLeft: `2px solid ${p.color}`,
                        borderRadius: "2px",
                        padding: "12px 14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transition: "all 0.25s",
                        cursor: p.soon ? "default" : "pointer",
                        opacity: p.soon ? 0.5 : 1,
                      }}
                      onMouseEnter={(e) => {
                        if (p.soon) return;
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(255,255,255,0.04)";
                        el.style.borderColor = `rgba(255,255,255,0.12)`;
                        el.style.transform = "translateX(3px)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLDivElement;
                        el.style.background = "rgba(255,255,255,0.02)";
                        el.style.borderColor = "rgba(255,255,255,0.05)";
                        el.style.transform = "translateX(0)";
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <span
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "50%",
                            background: `${p.color}20`,
                            border: `1px solid ${p.color}33`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "13px",
                            flexShrink: 0,
                          }}
                        >
                          {p.icon}
                        </span>
                        <div>
                          <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "12px", fontWeight: "600", color: "#f5f0e8" }}>
                            {p.name}
                          </div>
                          <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "8px", letterSpacing: "1.5px", color: "#444", marginTop: "1px" }}>
                            {p.type}
                          </div>
                        </div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <MiniBarChart bars={p.bars} color={p.color} delay={i * 120} />
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "12px", fontWeight: "700", color: p.soon ? "#333" : "#c9a227" }}>
                            {p.volume}
                          </div>
                          <div style={{ fontFamily: "var(--font-space-grotesk)", fontSize: "8px", color: "#333", marginTop: "1px", letterSpacing: "0.5px" }}>
                            {p.pairs}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    borderTop: "1px solid rgba(204,0,0,0.12)",
                    paddingTop: "18px",
                    gap: "4px",
                  }}
                >
                  <StatBlock value={`$${vol}M+`} label="DAILY VOLUME" delay={1000} />
                  <StatBlock value="0.008%" label="AVG SPREAD" delay={1100} />
                  <StatBlock value={`${Math.floor(uptime / 10)}.${uptime % 10}%`} label="UPTIME" delay={1200} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
