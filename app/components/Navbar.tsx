"use client";

import { useState } from "react";

const links = ["MARKETS", "STACK", "JOIN", "DOCS"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 animate-slide-down"
        style={{
          background: "rgba(7, 0, 13, 0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(204, 0, 0, 0.15)",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div style={{ flexShrink: 0 }}>
            <div
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "28px",
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
                fontSize: "8px",
                letterSpacing: "3px",
                color: "#444",
                fontFamily: "var(--font-space-grotesk)",
                marginTop: "2px",
              }}
            >
              LIQUIDITY
            </div>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontSize: "10px",
                  letterSpacing: "2.5px",
                  color: "#666",
                  fontFamily: "var(--font-space-grotesk)",
                  fontWeight: "500",
                  transition: "color 0.25s",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#f5f0e8")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.color = "#666")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right side: CTA + Hamburger */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* Desktop CTA */}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
              style={{
                border: "1px solid #cc0000",
                color: "#cc0000",
                padding: "8px 20px",
                fontSize: "9px",
                letterSpacing: "2.5px",
                fontFamily: "var(--font-space-grotesk)",
                fontWeight: "600",
                textDecoration: "none",
                alignItems: "center",
                gap: "6px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(204, 0, 0, 0.15)";
                el.style.boxShadow = "0 0 20px rgba(204, 0, 0, 0.3)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "transparent";
                el.style.boxShadow = "none";
              }}
            >
              JOIN XD
            </a>

            {/* Hamburger button — visible on mobile only */}
            <button
              className="flex md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "1px solid rgba(204,0,0,0.3)",
                padding: "8px 10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuOpen ? (
                <span style={{ color: "#cc0000", fontSize: "18px", lineHeight: 1 }}>✕</span>
              ) : (
                <>
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "1.5px",
                      background: "#cc0000",
                      transition: "all 0.2s",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "14px",
                      height: "1.5px",
                      background: "#666",
                      transition: "all 0.2s",
                    }}
                  />
                  <span
                    style={{
                      display: "block",
                      width: "20px",
                      height: "1.5px",
                      background: "#cc0000",
                      transition: "all 0.2s",
                    }}
                  />
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className="md:hidden"
        style={{
          position: "fixed",
          top: "64px",
          left: 0,
          right: 0,
          zIndex: 49,
          background: "rgba(7, 0, 13, 0.98)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(204,0,0,0.2)",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          padding: "28px 24px 32px",
        }}
      >
        {/* Mobile nav links */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0",
            marginBottom: "24px",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-space-grotesk)",
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#666",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                transition: "color 0.2s",
                animationDelay: `${i * 60}ms`,
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#f5f0e8")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#666")
              }
            >
              {link}
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            background: "#cc0000",
            color: "#fff",
            padding: "14px",
            fontSize: "10px",
            letterSpacing: "2.5px",
            fontFamily: "var(--font-space-grotesk)",
            fontWeight: "700",
            textDecoration: "none",
            width: "100%",
          }}
        >
          JOIN XD
        </a>
      </div>

      {/* Backdrop when menu open */}
      {menuOpen && (
        <div
          className="md:hidden"
          onClick={() => setMenuOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 48,
            background: "rgba(0,0,0,0.5)",
            top: "64px",
          }}
        />
      )}
    </>
  );
}
