import { site } from "@/lib/site-data";
import { SectionHeading } from "./ui";

export function Experience() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--bg-card-subtle)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 16,
            marginBottom: 8,
          }}
        >
          <SectionHeading id="experience" title="experience." />
          <a
            href={site.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: 700,
              color: "var(--accent-orange)",
              marginBottom: 24,
            }}
          >
            Resume (PDF) ↗
          </a>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {site.experience.map((job) => (
            <article key={job.id} className="editorial-card">
              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    border: "2px solid var(--border-dark)",
                    boxShadow: "var(--shadow-pop-sm)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    background: "var(--accent-orange-light)",
                    color: "var(--accent-orange)",
                    flexShrink: 0,
                  }}
                >
                  {job.initials}
                </div>
                <div>
                  <h3 style={{ fontSize: "1.35rem" }}>{job.role}</h3>
                  <p style={{ color: "var(--text-secondary)", fontWeight: 600, fontSize: "0.95rem" }}>
                    {job.company} • {job.location}
                  </p>
                  <p
                    style={{
                      color: "var(--accent-orange)",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      marginTop: 4,
                    }}
                  >
                    {job.period}
                  </p>
                </div>
              </div>
              <ul style={{ marginTop: 20, listStyle: "none" }}>
                {job.bullets.map((b) => (
                  <li
                    key={b}
                    style={{
                      display: "flex",
                      gap: 10,
                      marginBottom: 10,
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                    }}
                  >
                    <span style={{ color: "var(--accent-orange)", fontWeight: 900 }}>•</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {job.tags.map((tag) => (
                  <span key={tag} className="sticker-pill" style={{ padding: "6px 14px", fontSize: "0.78rem" }}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
