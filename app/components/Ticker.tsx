const tickerItems = [
  { pair: "XD/USDT", value: "∞", change: "+99.9%", up: true },
  { pair: "BTC/USDT", value: "$97,842", change: "+2.41%", up: true },
  { pair: "ETH/USDT", value: "$3,301", change: "+1.84%", up: true },
  { pair: "XD/SPREAD", value: "0.008%", change: "-0.002%", up: true },
  { pair: "SOL/USDT", value: "$192.7", change: "-0.62%", up: false },
  { pair: "XD/DEPTH", value: "$420M", change: "+12.4%", up: true },
  { pair: "XD/VOLUME", value: "$666M", change: "+6.66%", up: true },
  { pair: "ARB/USDT", value: "$1.061", change: "+5.13%", up: true },
  { pair: "XD/UPTIME", value: "99.9%", change: "+0.01%", up: true },
  { pair: "PEPE/USDT", value: "$0.0000094", change: "-1.21%", up: false },
  { pair: "XD/PAIRS", value: "423+", change: "+18", up: true },
];

// Duplicate for seamless loop
const allItems = [...tickerItems, ...tickerItems];

export default function Ticker() {
  return (
    <div
      style={{
        background: "rgba(10, 0, 18, 0.95)",
        borderBottom: "1px solid rgba(204, 0, 0, 0.15)",
        overflow: "hidden",
        marginTop: "65px",
        padding: "10px 0",
        position: "relative",
      }}
    >
      {/* Left fade */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background:
            "linear-gradient(to right, rgba(7,0,13,1), transparent)",
          zIndex: 2,
        }}
      />
      {/* Right fade */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          width: "80px",
          background: "linear-gradient(to left, rgba(7,0,13,1), transparent)",
          zIndex: 2,
        }}
      />

      <div
        className="animate-ticker"
        style={{
          display: "flex",
          gap: "0",
          whiteSpace: "nowrap",
          width: "max-content",
        }}
      >
        {allItems.map((item, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "0 28px",
              fontFamily: "var(--font-space-grotesk)",
              fontSize: "11px",
              borderRight: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <span style={{ color: "#555", letterSpacing: "1px" }}>
              {item.pair}
            </span>
            <span style={{ color: "#d0ccc8", fontWeight: "600" }}>
              {item.value}
            </span>
            <span
              style={{
                color: item.up ? "#22c55e" : "#cc0000",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "2px",
              }}
            >
              {item.up ? "▲" : "▼"} {item.change}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
