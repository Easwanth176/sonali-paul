import { site } from "@/lib/site-data";
import { SectionHeading } from "./ui";

export function Education() {
  return (
    <section
      className="dark-segment"
      style={{ padding: "80px 0", borderTop: "3px solid var(--border-dark)" }}
    >
      <div className="container">
        <SectionHeading id="education" title="education." />

        <div
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            marginBottom: 48,
          }}
        >
          {site.education.map((edu) => (
            <div
              key={edu.school}
              style={{
                background: "var(--bg-dark-card)",
                border: "1px solid #2b2b32",
                borderRadius: "var(--radius-lg)",
                padding: 28,
              }}
            >
              <p
                style={{
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--accent-orange)",
                  fontWeight: 700,
                }}
              >
                {edu.level}
              </p>
              <h3 style={{ color: "#fff", fontSize: "1.2rem", marginTop: 10 }}>
                {edu.school}
              </h3>
              <p style={{ color: "#d4d4dc", marginTop: 8, fontSize: "0.95rem" }}>
                {edu.degree}
              </p>
              <p style={{ color: "var(--accent-green)", fontWeight: 700, marginTop: 8 }}>
                {edu.detail}
              </p>
              <p style={{ color: "#888", fontSize: "0.82rem", marginTop: 14 }}>
                {edu.period} • {edu.location}
              </p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: 24 }}>
          Certifications & Credentials
        </h3>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            marginBottom: 56,
          }}
        >
          {site.certifications.map((cert) => (
            <div
              key={cert.title}
              style={{
                background: "var(--bg-dark-subtle)",
                borderRadius: "var(--radius-md)",
                padding: 20,
                border: "1px solid #333",
              }}
            >
              <p style={{ fontSize: "0.78rem", color: "var(--accent-orange)", fontWeight: 700 }}>
                {cert.tag} · {cert.date}
              </p>
              <p style={{ color: "#fff", fontWeight: 700, marginTop: 8 }}>{cert.title}</p>
              <p style={{ color: "#aaa", fontSize: "0.88rem", marginTop: 4 }}>{cert.issuer}</p>
            </div>
          ))}
        </div>

        <h3 style={{ color: "#fff", fontSize: "1.5rem", marginBottom: 24 }}>
          accolades<span style={{ color: "var(--accent-orange)" }}>.</span>
        </h3>
        <div
          style={{
            display: "grid",
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          }}
        >
          {site.accolades.map((a) => (
            <div
              key={a.title}
              className="editorial-card"
              style={{ background: "#fff", padding: 24 }}
            >
              <h4 style={{ fontSize: "1.05rem" }}>{a.title}</h4>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "var(--accent-orange)",
                  fontWeight: 700,
                  marginTop: 6,
                }}
              >
                {a.date} · {a.org}
              </p>
              <p style={{ fontSize: "0.92rem", color: "var(--text-secondary)", marginTop: 10 }}>
                {a.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
