"use client";

import { site } from "@/lib/site-data";
import { useMemo, useState } from "react";
import { SectionHeading } from "./ui";

export function Projects() {
  const [filter, setFilter] = useState("All Projects");

  const filtered = useMemo(() => {
    if (filter === "All Projects") return site.projects;
    return site.projects.filter((p) => p.filter === filter);
  }, [filter]);

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <SectionHeading
          id="projects"
          title="notable Projects"
          subtitle="Measurable brand results, e-commerce execution, and digital products from concept to revenue."
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
          {site.projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={filter === f ? "sticker-pill orange" : "sticker-pill"}
              style={{ fontSize: "0.8rem", padding: "8px 16px" }}
            >
              {f}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          {filtered.map((project) => (
            <article
              key={project.id}
              className="editorial-card project-item-card"
              style={{
                display: "grid",
                gap: 28,
                gridTemplateColumns: "1fr",
              }}
            >
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 900,
                      fontSize: "1.1rem",
                      color: "var(--accent-orange)",
                    }}
                  >
                    {project.num}
                  </span>
                  <span className="sticker-pill" style={{ fontSize: "0.75rem", padding: "6px 12px" }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)", fontWeight: 600 }}>
                    {project.period}
                  </span>
                </div>
                <h3 style={{ fontSize: "1.5rem", marginTop: 14, marginBottom: 10 }}>
                  {project.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.65 }}>
                  {project.summary}
                </p>
                <ul style={{ marginTop: 20, listStyle: "none" }}>
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      style={{
                        fontSize: "0.92rem",
                        color: "var(--text-secondary)",
                        marginBottom: 8,
                      }}
                    >
                      ✓ {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                style={{
                  display: "grid",
                  gap: 12,
                  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
                  alignContent: "start",
                }}
              >
                {project.metrics.map((m) => (
                  <div key={m.label} className="metric-box">
                    <div className="metric-value">
                      {m.value}
                      <span className="metric-arrow">↑</span>
                    </div>
                    <div className="metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
