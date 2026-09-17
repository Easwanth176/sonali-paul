"use client";

import { site } from "@/lib/site-data";
import { useState } from "react";
import { SectionHeading } from "./ui";

export function Skills() {
  const [active, setActive] = useState("all");
  const group =
    site.skillGroups.find((g) => g.id === active) ?? site.skillGroups[0];

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <SectionHeading
          id="skills"
          title="*skills."
          subtitle="Core digital marketing competencies combining structured campaigns with creative storytelling."
        />

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 28 }}>
          {site.skillGroups.map((g) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(g.id)}
              className={active === g.id ? "sticker-pill orange" : "sticker-pill"}
              style={{ fontSize: "0.82rem", padding: "8px 16px" }}
            >
              {g.label}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {group.skills.map((skill) => (
            <span
              key={skill}
              style={{
                padding: "10px 16px",
                borderRadius: "var(--radius-md)",
                border: "1.5px solid var(--border-color)",
                background: "var(--bg-card)",
                fontWeight: 600,
                fontSize: "0.9rem",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              ✦ {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
