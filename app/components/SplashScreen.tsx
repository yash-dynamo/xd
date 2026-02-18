"use client";

import { useState, useEffect } from "react";

const DRIP_POSITIONS = [8, 22, 37, 51, 64, 78, 91];
const DRIP_DELAYS = [0.2, 0.8, 0.4, 1.1, 0.6, 1.4, 0.3];
const DRIP_DURATIONS = [2.4, 1.8, 2.9, 2.1, 2.6, 1.9, 2.3];

export default function SplashScreen() {
  const [phase, setPhase] = useState<"in" | "hold" | "out" | "gone">("in");
  const [barWidth, setBarWidth] = useState(0);

  // Auto-progress timeline
  useEffect(() => {
    // Seal + first elements appear at 0
    // Bar starts filling at 400ms
    const barTimer = setTimeout(() => {
      setBarWidth(100);
    }, 400);

    // Auto-dismiss after 4.2s (bar fills in ~3.5s)
    const holdTimer = setTimeout(() => setPhase("hold"), 500);
    const outTimer = setTimeout(() => setPhase("out"), 4200);
    const goneTimer = setTimeout(() => setPhase("gone"), 5100);

    return () => {
      clearTimeout(barTimer);
      clearTimeout(holdTimer);
      clearTimeout(outTimer);
      clearTimeout(goneTimer);
    };
  }, []);

  const dismiss = () => {
    if (phase === "gone") return;
    setPhase("out");
    setTimeout(() => setPhase("gone"), 900);
  };

  if (phase === "gone") return null;

  const leaving = phase === "out";

  return (
    <div
      onClick={dismiss}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#040006",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        overflow: "hidden",
        opacity: leaving ? 0 : 1,
        transform: leaving ? "scale(1.04)" : "scale(1)",
        transition: "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {/* ── Blood drips along top edge ── */}
      {DRIP_POSITIONS.map((left, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 0,
            left: `${left}%`,
            width: "2px",
            height: `${20 + Math.floor(i * 7) % 40}px`,
            background: `linear-gradient(to bottom, #cc0000, #880000)`,
            borderRadius: "0 0 3px 3px",
            animation: `splash-drip ${DRIP_DURATIONS[i]}s ease-in ${DRIP_DELAYS[i]}s infinite`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* ── Large background seal ── */}
      <div
        style={{
          position: "absolute",
          width: "min(600px, 90vw)",
          height: "min(600px, 90vw)",
          borderRadius: "50%",
          border: "1px solid rgba(204,0,0,0.15)",
          animation: "splash-seal-in 1.2s cubic-bezier(0.16,1,0.3,1) both",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "min(480px, 70vw)",
          height: "min(480px, 70vw)",
          borderRadius: "50%",
          border: "1px solid rgba(201,162,39,0.08)",
          animation: "splash-seal-in 1.4s cubic-bezier(0.16,1,0.3,1) 0.1s both",
          pointerEvents: "none",
        }}
      />

      {/* ── Centre cross-hair ── */}
      <div style={{ position: "absolute", width: "1px", height: "min(300px,40vw)", background: "linear-gradient(to bottom, transparent, rgba(204,0,0,0.2), transparent)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", height: "1px", width: "min(300px,40vw)", background: "linear-gradient(to right, transparent, rgba(204,0,0,0.2), transparent)", pointerEvents: "none" }} />

      {/* ── Ambient red glow ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(120,0,0,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
          animation: "splash-glow-breathe 3s ease-in-out infinite",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "800px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Eye-of-DXD top label */}
        <div
          className="splash-line"
          style={{
            animationDelay: "0.2s",
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(8px,1vw,10px)",
            letterSpacing: "5px",
            color: "#cc0000",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "14px",
          }}
        >
          <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to right, transparent, #cc0000)" }} />
          ✦ XD PROTOCOL · SACRED BLOOD CONTRACT ✦
          <span style={{ display: "inline-block", width: "40px", height: "1px", background: "linear-gradient(to left, transparent, #cc0000)" }} />
        </div>

        {/* Scare quote — line 1 */}
        <div
          className="splash-line"
          style={{
            animationDelay: "0.45s",
            fontFamily: "var(--font-cormorant)",
            fontStyle: "italic",
            fontWeight: "300",
            fontSize: "clamp(28px, 5vw, 68px)",
            color: "#cc3333",
            lineHeight: 1.1,
            marginBottom: "8px",
            letterSpacing: "-1px",
          }}
        >
          Die on our first date,
        </div>

        {/* Scare quote — line 2 (GLITCH) */}
        <div
          className="splash-line splash-glitch-text"
          style={{
            animationDelay: "0.7s",
            fontFamily: "var(--font-cormorant)",
            fontWeight: "700",
            fontSize: "clamp(32px, 6vw, 84px)",
            color: "#f5f0e8",
            lineHeight: 1.0,
            marginBottom: "28px",
            letterSpacing: "-2px",
          }}
        >
          let&apos;s make market, baby.
        </div>

        {/* Sub-lines */}
        <div
          className="splash-line"
          style={{
            animationDelay: "1.0s",
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(10px,1.2vw,13px)",
            color: "#666",
            letterSpacing: "3px",
            marginBottom: "8px",
          }}
        >
          YOUR SOUL FOR SACRED SPREADS
        </div>
        <div
          className="splash-line"
          style={{
            animationDelay: "1.15s",
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "clamp(9px,1vw,11px)",
            color: "#555",
            letterSpacing: "4px",
            marginBottom: "56px",
          }}
        >
          EVERY TRADE · A BLOOD CONTRACT
        </div>

        {/* ENTER button */}
        <div
          className="splash-line"
          style={{
            animationDelay: "1.5s",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <button
            onClick={dismiss}
            className="splash-enter-btn"
            style={{
              background: "transparent",
              border: "1px solid rgba(204,0,0,0.5)",
              color: "#cc0000",
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "10px",
              letterSpacing: "5px",
              fontWeight: "700",
              padding: "14px 48px",
              cursor: "pointer",
              transition: "all 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(204,0,0,0.1)";
              el.style.borderColor = "#cc0000";
              el.style.color = "#ff4444";
              el.style.boxShadow = "0 0 30px rgba(204,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(204,0,0,0.5)";
              el.style.color = "#cc0000";
              el.style.boxShadow = "";
            }}
          >
            ✦ ENTER THE MARKET
          </button>

          <div style={{ fontSize: "9px", letterSpacing: "2px", color: "#222", fontFamily: "var(--font-space-grotesk)" }}>
            or wait · auto-entering soon
          </div>
        </div>
      </div>

      {/* ── Progress bar at bottom ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "rgba(204,0,0,0.08)",
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${barWidth}%`,
            background: "linear-gradient(to right, #880000, #cc0000, #c9a227)",
            transition: `width ${3.8}s linear`,
            boxShadow: "0 0 8px rgba(204,0,0,0.6)",
          }}
        />
      </div>

      {/* ── Bottom DXD stamp ── */}
      <div
        style={{
          position: "absolute",
          bottom: "18px",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "var(--font-cormorant)",
          fontSize: "clamp(32px,4vw,52px)",
          fontWeight: "700",
          letterSpacing: "10px",
          color: "rgba(204,0,0,0.06)",
          userSelect: "none",
          pointerEvents: "none",
          whiteSpace: "nowrap",
          animation: "splash-flicker 8s ease-in-out 2s infinite",
        }}
      >
        XD
      </div>

      {/* ── Corner runes ── */}
      {[
        { top: "20px", left: "24px" },
        { top: "20px", right: "24px" },
        { bottom: "24px", left: "24px" },
        { bottom: "24px", right: "24px" },
      ].map((pos, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            ...pos,
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "9px",
            letterSpacing: "2px",
            color: "rgba(204,0,0,0.2)",
            pointerEvents: "none",
          }}
        >
          {["✦ XD", "XD ✦", "✦ XD", "XD ✦"][i]}
        </div>
      ))}
    </div>
  );
}
