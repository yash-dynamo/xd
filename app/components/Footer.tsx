"use client";

const AIRTABLE_LINK = ""; // TODO: Add Airtable link

const footerLinks = {
  Protocol: ["Markets", "Stack", "Docs"],
  Community: ["Join", "X", "Discord"],
  Legal: ["Terms", "Privacy", "Risk"],
};

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(204,0,0,0.12)",
        background: "#050009",
        overflow: "hidden",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(to right, transparent, #cc0000 30%, #c9a227 50%, #cc0000 70%, transparent)",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 40px",
        }}
      >
        {/* Main footer grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "32px",
                  fontWeight: "700",
                  letterSpacing: "6px",
                  color: "#cc0000",
                  lineHeight: 1,
                }}
              >
              XD
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "8px",
                letterSpacing: "3px",
                color: "#444",
                marginTop: "4px",
              }}
            >
              LIQUIDITY
              </div>
            </div>

            <p
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "13px",
                color: "#444",
                lineHeight: 1.7,
                maxWidth: "260px",
                marginBottom: "24px",
              }}
            >
            Deep liquidity for modern markets.
            </p>

            {/* Social-style badges */}
            <div style={{ display: "flex", gap: "10px" }}>
              {["✕", "◎", "⬡"].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: "34px",
                    height: "34px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#444",
                    textDecoration: "none",
                    transition: "all 0.25s",
                    borderRadius: "2px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#cc0000";
                    el.style.borderColor = "rgba(204,0,0,0.3)";
                    el.style.background = "rgba(204,0,0,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.color = "#444";
                    el.style.borderColor = "rgba(255,255,255,0.08)";
                    el.style.background = "transparent";
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div
                style={{
                  fontFamily: "var(--font-space-grotesk)",
                  fontSize: "9px",
                  letterSpacing: "3px",
                  color: "#cc0000",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                {category.toUpperCase()}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: "var(--font-space-grotesk)",
                      fontSize: "13px",
                      color: "#444",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#f5f0e8")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#444")
                    }
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA mini banner */}
        <div
          className="footer-cta-banner"
          style={{
            border: "1px solid rgba(204,0,0,0.2)",
            background: "rgba(204,0,0,0.04)",
            borderRadius: "2px",
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "48px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "22px",
                fontWeight: "700",
                color: "#f5f0e8",
              }}
            >
              Ready?
            </div>
            <div
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "12px",
                color: "#555",
                marginTop: "4px",
              }}
            >
              Join XD.
            </div>
          </div>
          <a
            href={AIRTABLE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              border: "1px solid #cc0000",
              color: "#cc0000",
              padding: "12px 28px",
              fontSize: "9px",
              letterSpacing: "2.5px",
              fontFamily: "var(--font-space-grotesk)",
              fontWeight: "700",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "all 0.3s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(204,0,0,0.12)";
              el.style.boxShadow = "0 0 20px rgba(204,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "transparent";
              el.style.boxShadow = "none";
            }}
          >
            JOIN XD
          </a>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom-bar"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255,255,255,0.04)",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "11px",
              color: "#333",
              letterSpacing: "1px",
            }}
          >
            © 2026 XD Protocol.
          </div>
          <div
            style={{
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              fontSize: "13px",
              color: "#333",
            }}
          >
            Real-time liquidity.
          </div>
          <div
            style={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            {["★", "★", "★", "★", "★"].map((s, i) => (
              <span
                key={i}
                style={{ color: "#c9a227", fontSize: "10px", opacity: 0.6 }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
