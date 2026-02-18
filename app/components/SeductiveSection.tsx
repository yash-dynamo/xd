"use client";

import Image from "next/image";

const features = [
  {
    icon: "⚔",
    title: "Sacred Gear Algorithms",
    desc: "Proprietary Sacred Gear–class execution engines that evolve with market conditions — no manual tuning required.",
    color: "#cc0000",
    stat: "∞ Power",
  },
  {
    icon: "♾",
    title: "Infinite Dragon Mode",
    desc: "Scales liquidity infinitely across any venue. The Boosted Gear of market making — doubling power every 10 seconds.",
    color: "#c9a227",
    stat: "2× / 10s",
  },
  {
    icon: "✦",
    title: "Crimson Spread Control",
    desc: "Tight spreads enforced by Gremory-class precision. Sub-0.01% average across all deployed pairs.",
    color: "#6b00a8",
    stat: "0.008%",
  },
  {
    icon: "◈",
    title: "Peerage Risk Shield",
    desc: "Every position guarded by a multi-layer Senjutsu barrier. Drawdowns are vanquished before they bloom.",
    color: "#1a7a4a",
    stat: "99.9%",
  },
  {
    icon: "🔥",
    title: "Balance Breaker Execution",
    desc: "When others hesitate, we break the seal. Maximum-tier fills at the exact moment of opportunity.",
    color: "#cc4400",
    stat: "<1ms",
  },
  {
    icon: "⬡",
    title: "Gremory Network Effect",
    desc: "Cross-venue arbitrage powered by the clan's reach. Every DEX feeds every other. Infinite synergy.",
    color: "#2a5aaa",
    stat: "7 Venues",
  },
];

export default function SeductiveSection() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 80% 60% at 100% 50%, rgba(100,0,0,0.08) 0%, transparent 60%), #07000d",
      }}
    >
      {/* Separator */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(204,0,0,0.3), rgba(201,162,39,0.3), transparent)",
        }}
      />

      <div className="seductive-grid">
        {/* ====== LEFT: Image ====== */}
        <div
          className="animate-fade-in-left"
          style={{
            position: "relative",
          }}
        >
          {/* Outer glow frame */}
          <div
            className="animate-glow-red"
            style={{
              position: "relative",
              borderRadius: "4px",
              overflow: "hidden",
              border: "1px solid rgba(204,0,0,0.25)",
            }}
          >
            <Image
              src="/seductive/5.png"
              alt="Sacred Power"
              width={600}
              height={750}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
              }}
              priority
            />

            {/* Image overlay gradient */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to right, transparent 60%, rgba(7,0,13,0.5) 100%), linear-gradient(to top, rgba(7,0,13,0.3) 0%, transparent 30%)",
                pointerEvents: "none",
              }}
            />

            {/* Red top accent */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "3px",
                background:
                  "linear-gradient(to right, #cc0000, #c9a227, transparent)",
              }}
            />
          </div>

          {/* Floating stat badge */}
          <div
            className="animate-float-slow seductive-float-badge"
            style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              background: "rgba(16, 0, 22, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(201,162,39,0.35)",
              borderRadius: "4px",
              padding: "20px 24px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "38px",
                fontWeight: "700",
                color: "#c9a227",
                lineHeight: 1,
              }}
              className="animate-glow-gold"
            >
              ∞
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "8px",
                letterSpacing: "2.5px",
                color: "#555",
                marginTop: "6px",
              }}
            >
              POWER LEVEL
            </div>
          </div>

          {/* Floating stat badge 2 */}
          <div
            className="animate-float-medium seductive-float-badge"
            style={{
              position: "absolute",
              top: "30px",
              right: "-30px",
              background: "rgba(16, 0, 22, 0.95)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(204,0,0,0.3)",
              borderRadius: "4px",
              padding: "14px 18px",
              textAlign: "center",
              boxShadow: "0 10px 40px rgba(204,0,0,0.15)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "18px",
                fontWeight: "700",
                color: "#cc0000",
                lineHeight: 1,
              }}
            >
              99.9%
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
              UPTIME
            </div>
          </div>
        </div>

        {/* ====== RIGHT: Content ====== */}
        <div className="animate-fade-in-right delay-200">
          {/* Section label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "24px",
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "10px",
              letterSpacing: "3px",
              color: "#c9a227",
              fontWeight: "600",
            }}
          >
            <span
              style={{
                width: "5px",
                height: "5px",
                borderRadius: "50%",
                background: "#c9a227",
                display: "inline-block",
              }}
            />
            THE SACRED ARSENAL
          </div>

          {/* Heading */}
          <h2 style={{ marginBottom: "20px", lineHeight: 1.05 }}>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant)",
                fontStyle: "italic",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: "400",
                color: "#cc3333",
              }}
            >
              Magnetic
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: "700",
                color: "#f5f0e8",
              }}
            >
              Power. Lethal
            </span>
            <span
              style={{
                display: "block",
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: "700",
                color: "#c9a227",
              }}
              className="animate-glow-gold"
            >
              Precision.
            </span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "14px",
              color: "#666",
              lineHeight: 1.8,
              marginBottom: "44px",
              maxWidth: "440px",
            }}
          >
            Every tool in XD&apos;s arsenal was forged for one purpose — to make
            the market bend. Tight spreads, infinite depth, zero hesitation.
            We don&apos;t follow the orderbook. We write it.
          </p>

          {/* ── Sacred Arsenal — infinite vertical scroll ── */}
          <div
            style={{
              position: "relative",
              height: "340px",
              overflow: "hidden",
              /* fade top + bottom edges */
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            {/* Invisible sentinel that pauses the CSS animation on hover */}
            <div
              className="arsenal-track"
              style={{ display: "flex", flexDirection: "column", gap: "14px" }}
            >
              {/* Render items TWICE for seamless loop */}
              {[...features, ...features].map((f, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "14px",
                    alignItems: "flex-start",
                    padding: "14px 16px",
                    border: "1px solid rgba(255,255,255,0.04)",
                    background: "rgba(255,255,255,0.01)",
                    borderRadius: "2px",
                    borderLeft: `2px solid ${f.color}`,
                    transition: "background 0.3s, box-shadow 0.3s",
                    cursor: "default",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.boxShadow = `0 0 20px ${f.color}18`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.background = "rgba(255,255,255,0.01)";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "2px",
                      background: `${f.color}1a`,
                      border: `1px solid ${f.color}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                      flexShrink: 0,
                    }}
                  >
                    {f.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#f5f0e8",
                        marginBottom: "4px",
                      }}
                    >
                      {f.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-space-grotesk)",
                        fontSize: "11px",
                        color: "#4a4a4a",
                        lineHeight: 1.5,
                      }}
                    >
                      {f.desc}
                    </div>
                  </div>

                  {/* Stat badge */}
                  <div
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "10px",
                      fontWeight: "700",
                      color: f.color,
                      flexShrink: 0,
                      paddingLeft: "10px",
                      letterSpacing: "1px",
                      alignSelf: "center",
                      opacity: 0.8,
                    }}
                  >
                    {f.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(201,162,39,0.2), rgba(204,0,0,0.2), transparent)",
        }}
      />
    </section>
  );
}
