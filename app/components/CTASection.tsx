"use client";

import Particles from "./Particles";

const AIRTABLE_LINK = ""; // TODO: Add Airtable link

export default function CTASection() {
  return (
    <section
      style={{
        position: "relative",
        padding: "140px 24px",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(120,0,0,0.1) 0%, rgba(70,0,100,0.05) 40%, transparent 70%), #07000d",
        textAlign: "center",
      }}
    >
      <Particles count={25} />

      {/* Decorative ring */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(204,0,0,0.06)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          border: "1px solid rgba(201,162,39,0.06)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
        {/* Label */}
        <div
          className="animate-fade-in-up"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "32px",
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "10px",
            letterSpacing: "3px",
            color: "#cc0000",
            border: "1px solid rgba(204,0,0,0.2)",
            padding: "8px 16px",
            backdropFilter: "blur(10px)",
            background: "rgba(204,0,0,0.05)",
          }}
        >
          <span
            className="animate-spark"
            style={{ fontSize: "12px" }}
          >
            ✦
          </span>
          MAKE YOUR PACT WITH XD
        </div>

        {/* Heading */}
        <h2
          className="animate-fade-in-up delay-100"
          style={{ marginBottom: "24px", lineHeight: 1.05 }}
        >
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "clamp(44px, 6vw, 80px)",
              fontWeight: "400",
              color: "#cc3333",
            }}
          >
            Are You Ready
          </span>
          <span
            style={{
              display: "block",
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(44px, 6vw, 80px)",
              fontWeight: "700",
              color: "#f5f0e8",
            }}
          >
            to Be{" "}
            <span
              style={{ color: "#c9a227" }}
              className="animate-glow-gold"
            >
              Claimed?
            </span>
          </span>
        </h2>

        <p
          className="animate-fade-in-up delay-200"
          style={{
            fontFamily: "var(--font-space-grotesk)",
            fontSize: "15px",
            color: "#666",
            lineHeight: 1.8,
            marginBottom: "48px",
            maxWidth: "500px",
            margin: "0 auto 48px",
          }}
        >
          XD doesn&apos;t ask for your trust. It earns it — spread by spread,
          fill by fill, in silence. Make your pact. Let the machine do the rest.
        </p>

        {/* CTA Button */}
        <div
          className="animate-fade-in-up delay-300"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          <a
            href={AIRTABLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-glow-red"
            style={{
              background: "#cc0000",
              color: "#fff",
              padding: "18px 48px",
              fontSize: "11px",
              letterSpacing: "3px",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: "700",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s",
              position: "relative",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#e60000";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 20px 60px rgba(204,0,0,0.4)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#cc0000";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "";
            }}
          >
            ✦ ENTER THE PACT
          </a>

          <a
            href="#platforms"
            style={{
              border: "1px solid rgba(201,162,39,0.3)",
              color: "#c9a227",
              padding: "18px 40px",
              fontSize: "11px",
              letterSpacing: "3px",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              transition: "all 0.3s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(201,162,39,0.08)";
              el.style.borderColor = "rgba(201,162,39,0.6)";
              el.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.borderColor = "rgba(201,162,39,0.3)";
              el.style.transform = "translateY(0)";
            }}
          >
            LEARN MORE
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="animate-fade-in-up delay-400"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            marginTop: "60px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "$420M+", sub: "Total Volume" },
            { label: "99.9%", sub: "Uptime" },
            { label: "0.008%", sub: "Avg Spread" },
            { label: "2+", sub: "Live DEXes" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "0 16px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "28px",
                  fontWeight: "700",
                  color: "#c9a227",
                  lineHeight: 1,
                }}
              >
                {item.label}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "9px",
                  letterSpacing: "2px",
                  color: "#444",
                  marginTop: "6px",
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
