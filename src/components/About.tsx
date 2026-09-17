import Image from "next/image";
import { site } from "@/lib/site-data";
import { SectionHeading } from "./ui";

export function About() {
  const marquee = [...site.marqueeSkills, ...site.marqueeSkills];

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <SectionHeading id="about" title="about." />

        <div
          className="about-grid"
          style={{
            display: "grid",
            gap: 40,
            gridTemplateColumns: "1fr",
          }}
        >
          <div>
            {site.about.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "1.05rem",
                  lineHeight: 1.7,
                  marginBottom: 20,
                }}
              >
                {p}
              </p>
            ))}
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                marginTop: 28,
              }}
            >
              {site.about.focus.map((f) => (
                <div key={f.title} className="editorial-card" style={{ padding: 22 }}>
                  <h4 style={{ fontSize: "1rem", marginBottom: 6 }}>{f.title}</h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)" }}>
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
            <p
              style={{
                marginTop: 24,
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "var(--text-secondary)",
              }}
            >
              ● {site.location}
            </p>
          </div>

          <div
            className="editorial-card"
            style={{ padding: 0, overflow: "hidden", alignSelf: "start" }}
          >
            <div
              style={{
                position: "relative",
                aspectRatio: "1 / 1",
                width: "100%",
                background: "var(--bg-card-subtle)",
              }}
            >
              <Image
                src={site.photo}
                alt={site.name}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            <div style={{ padding: 24 }}>
              <p style={{ fontWeight: 800, fontFamily: "var(--font-heading)" }}>
                {site.name}
              </p>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: 4 }}>
                MBA @ LPU · Digital Marketing
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            overflow: "hidden",
            borderRadius: "var(--radius-md)",
            border: "1.5px solid var(--border-color)",
            background: "var(--bg-card)",
            padding: "14px 0",
          }}
        >
          <div className="marquee-container">
            <div className="marquee-track" style={{ animationDuration: "35s" }}>
              {marquee.map((s, i) => (
                <span
                  key={`${s}-${i}`}
                  style={{
                    padding: "0 28px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    color: "var(--text-secondary)",
                  }}
                >
                  {s} ✦
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
