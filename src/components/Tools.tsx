import { site } from "@/lib/site-data";
import { SectionHeading } from "./ui";

export function Tools() {
  return (
    <section
      style={{
        padding: "80px 0",
        background: "var(--bg-card-subtle)",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        <SectionHeading
          title="tools."
          subtitle="Platforms and analytics suites used to plan, execute, and measure digital growth."
        />

        {site.toolCategories.map((cat) => (
          <div key={cat.title} style={{ marginBottom: 48 }}>
            <h3 style={{ fontSize: "1.25rem", marginBottom: 20 }}>
              {cat.title}{" "}
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600 }}>
                {cat.count} Platforms
              </span>
            </h3>
            <div
              style={{
                display: "grid",
                gap: 16,
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              }}
            >
              {cat.tools.map((tool) => (
                <div key={tool.name} className="editorial-card" style={{ padding: 24 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      border: "2px solid var(--border-dark)",
                      boxShadow: "var(--shadow-pop-sm)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 900,
                      fontFamily: "var(--font-heading)",
                      background: "var(--accent-orange)",
                      color: "#fff",
                      marginBottom: 14,
                      fontSize: "0.75rem",
                    }}
                  >
                    {tool.initial}
                  </div>
                  <h4 style={{ fontSize: "1.05rem" }}>{tool.name}</h4>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--accent-orange)",
                      fontWeight: 700,
                      marginTop: 4,
                    }}
                  >
                    {tool.role}
                  </p>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-muted)",
                      marginTop: 10,
                      lineHeight: 1.5,
                    }}
                  >
                    {tool.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
