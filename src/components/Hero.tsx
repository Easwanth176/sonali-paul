import Image from "next/image";
import { site } from "@/lib/site-data";
import { CircleCheck, TrendingUp } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        paddingTop: 40,
        paddingBottom: 10,
        overflow: "visible",
        zIndex: 10,
        width: "100%",
      }}
    >
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 18,
            width: "100%",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{
                position: "absolute",
                left: -34,
                top: -8,
                transform: "rotate(-15deg)",
              }}
              aria-hidden
            >
              <path
                d="M6 16L1 14M10 8L6 3M16 6L16 1"
                stroke="#FF6B35"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
            <div
              style={{
                border: "2px solid var(--border-dark)",
                borderRadius: "var(--radius-full)",
                padding: "6px 22px",
                backgroundColor: "#FFFFFF",
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: "1rem",
                boxShadow: "var(--shadow-pop-sm)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span>Welcome!</span>
              <span style={{ fontSize: "1.1rem" }}>⚡</span>
            </div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{
                position: "absolute",
                right: -34,
                top: -8,
                transform: "rotate(15deg)",
              }}
              aria-hidden
            >
              <path
                d="M26 16L31 14M22 8L26 3M16 6L16 1"
                stroke="#FF6B35"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.3rem, 4.5vw, 3.8rem)",
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: "-0.04em",
            maxWidth: 920,
            margin: "0 auto 14px auto",
            textAlign: "center",
          }}
        >
          I&apos;m{" "}
          <span
            style={{
              color: "var(--accent-orange)",
              position: "relative",
              display: "inline-block",
            }}
          >
            {site.preferredName}
            <svg
              viewBox="0 0 200 18"
              fill="none"
              style={{
                position: "absolute",
                left: 0,
                bottom: -10,
                width: "100%",
                height: 14,
              }}
              aria-hidden
            >
              <path
                d="M3 12C50 4 150 4 197 12"
                stroke="#FF6B35"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>{" "}
          <span className="wave-hand">👋</span>,<br />
          A {site.title}
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)",
            color: "var(--text-secondary)",
            maxWidth: 700,
            margin: "0 auto 36px auto",
            fontWeight: 500,
            textAlign: "center",
          }}
        >
          {site.tagline}
        </p>

        <div
          className="hero-stage"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 1140,
            margin: "0 auto",
            minHeight: 440,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            className="hero-side-card hero-left-card"
            style={{ width: 270, textAlign: "left", zIndex: 10, flexShrink: 0 }}
          >
            <div
              style={{
                fontSize: "2.8rem",
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 0.8,
                marginBottom: 8,
              }}
            >
              &ldquo;
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                lineHeight: 1.5,
                color: "var(--text-secondary)",
                fontStyle: "italic",
                marginBottom: 12,
              }}
            >
              {site.recommendation.quote}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  background: "var(--accent-green)",
                  color: "#fff",
                }}
              >
                <CircleCheck size={13} strokeWidth={2.5} />
              </span>
              <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>
                {site.recommendation.label}
              </span>
            </div>
          </div>

          <div className="hero-portrait-stage">
            <div className="hero-arch-frame">
              <div className="hero-arch-inner">
                <Image
                  src={site.photo}
                  alt={site.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 80vw, 320px"
                  style={{ objectFit: "cover", objectPosition: "center 12%" }}
                />
              </div>
            </div>

            {site.heroChips.map((chip, i) => (
              <div
                key={chip.label}
                className={`sticker-pill dark hero-sticker hero-sticker-${i + 1}`}
              >
                <span>{chip.emoji}</span>
                <span>{chip.label}</span>
              </div>
            ))}

            <div
              style={{
                position: "absolute",
                bottom: 12,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 25,
                display: "inline-flex",
                alignItems: "center",
                background: "rgba(28, 28, 32, 0.9)",
                backdropFilter: "blur(16px)",
                border: "1.5px solid rgba(255, 255, 255, 0.3)",
                borderRadius: "var(--radius-full)",
                padding: "4px 5px",
                boxShadow: "0 8px 25px rgba(0, 0, 0, 0.35)",
                whiteSpace: "nowrap",
              }}
            >
              <a
                href="#projects"
                style={{
                  background: "var(--accent-orange)",
                  color: "#FFFFFF",
                  padding: "7px 18px",
                  borderRadius: "var(--radius-full)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 5,
                  boxShadow: "0 2px 10px rgba(255, 107, 53, 0.35)",
                }}
              >
                <span>Projects</span>
                <span>↗</span>
              </a>
              <a
                href="#contact"
                style={{
                  color: "#F0F0F5",
                  padding: "7px 18px",
                  borderRadius: "var(--radius-full)",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                }}
              >
                Hire me
              </a>
            </div>
          </div>

          <div className="hero-chip-row">
            {site.heroChips.map((chip) => (
              <span key={chip.label} className="sticker-pill dark">
                <span>{chip.emoji}</span>
                <span>{chip.label}</span>
              </span>
            ))}
          </div>

          <div
            className="hero-side-card hero-right-card"
            style={{ width: 250, textAlign: "right", zIndex: 10, flexShrink: 0 }}
          >
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 3.2vw, 3rem)",
                fontWeight: 900,
                letterSpacing: "-0.04em",
                lineHeight: 1,
              }}
            >
              MBA @ LPU
            </div>
            <p
              style={{
                fontSize: "0.95rem",
                color: "var(--text-secondary)",
                fontWeight: 600,
                marginTop: 6,
                lineHeight: 1.35,
              }}
            >
              {site.subtitle}
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                marginTop: 12,
                padding: "5px 12px",
                borderRadius: "var(--radius-full)",
                background: "var(--accent-orange-light)",
                color: "var(--accent-orange)",
                fontSize: "0.78rem",
                fontWeight: 700,
                border: "1px solid rgba(255, 107, 53, 0.2)",
              }}
            >
              <TrendingUp size={14} />
              <span>
                {site.heroBadge.value} {site.heroBadge.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
