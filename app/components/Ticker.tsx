"use client";

import { useEffect, useMemo, useState } from "react";

type TickerItem = {
  pair: string;
  value: string;
  change: string;
  up: boolean;
};

const fallbackItems: TickerItem[] = [
  { pair: "BTC/USD", value: "$0", change: "0.00%", up: true },
  { pair: "ETH/USD", value: "$0", change: "0.00%", up: true },
  { pair: "SOL/USD", value: "$0", change: "0.00%", up: true },
  { pair: "ARB/USD", value: "$0", change: "0.00%", up: true },
  { pair: "PEPE/USD", value: "$0", change: "0.00%", up: true },
];

const symbols = [
  { pair: "BTC/USD", symbol: "BTC" },
  { pair: "ETH/USD", symbol: "ETH" },
  { pair: "SOL/USD", symbol: "SOL" },
  { pair: "ARB/USD", symbol: "ARB" },
  { pair: "PEPE/USD", symbol: "PEPE" },
];

const formatPrice = (value: number) => {
  if (!Number.isFinite(value)) return "$0";
  if (value >= 1000)
    return `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  if (value >= 1) return `$${value.toFixed(3)}`;
  return `$${value.toFixed(8)}`;
};

const formatChange = (value: number) => {
  if (!Number.isFinite(value)) return "0.00%";
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(2)}%`;
};

export default function Ticker() {
  const [items, setItems] = useState<TickerItem[]>(fallbackItems);

  useEffect(() => {
    let cancelled = false;

    const fetchPrices = async () => {
      try {
        const response = await fetch("/api/prices", { cache: "no-store" });
        const data = await response.json();

        const quotes = symbols.map(({ pair, symbol }) => {
          const quote = data?.quotes?.[symbol];
          const price = Number(quote?.price ?? 0);
          const percentChange = Number(quote?.percent_change_24h ?? 0);

          return {
            pair,
            value: formatPrice(price),
            change: formatChange(percentChange),
            up: percentChange >= 0,
          };
        });

        if (
          !cancelled &&
          quotes.length > 0 &&
          quotes.some((item) => item.value !== "$0")
        ) {
          setItems(quotes);
        }
      } catch {
        // Keep last successful values if the API errors.
      }
    };

    fetchPrices();
    const interval = window.setInterval(fetchPrices, 30000);

    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  const allItems = useMemo(() => [...items, ...items], [items]);

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
