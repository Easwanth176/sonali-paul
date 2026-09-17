import { site } from "@/lib/site-data";
import { StarDivider } from "./ui";

function MarqueeSet() {
  return (
    <>
      {site.stats.map((stat) => (
        <div
          key={stat.label}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 40,
            padding: "0 30px",
            flexShrink: 0,
          }}
        >
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 900,
                color: "#FFFFFF",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              {stat.value}
            </span>
            <span
              style={{
                color: "#E2E2EC",
                fontSize: "0.92rem",
                fontWeight: 600,
                marginTop: 8,
                fontFamily: "var(--font-heading)",
                whiteSpace: "nowrap",
              }}
            >
              {stat.label}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0 10px",
            }}
          >
            <StarDivider />
          </div>
        </div>
      ))}
    </>
  );
}

export function StatsTicker() {
  return (
    <section
      style={{
        padding: 0,
        backgroundColor: "var(--bg-dark)",
        borderTop: "3px solid var(--border-dark)",
        borderBottom: "3px solid var(--border-dark)",
        overflow: "hidden",
        width: "100%",
        zIndex: 5,
      }}
    >
      <div className="marquee-container" style={{ padding: "26px 0" }}>
        <div className="marquee-track">
          <MarqueeSet />
          <MarqueeSet />
        </div>
      </div>
    </section>
  );
}
