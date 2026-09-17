import { site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer
      style={{
        borderTop: "3px solid var(--border-dark)",
        background: "var(--bg-dark)",
        color: "#fff",
        padding: "48px 0 32px",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gap: 32,
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-heading)", fontWeight: 900, fontSize: "1.1rem" }}>
            {site.name}
          </p>
          <p style={{ color: "#a8a8b3", fontSize: "0.9rem", marginTop: 12, lineHeight: 1.6 }}>
            {site.title}. MBA candidate at Lovely Professional University. Digital
            marketing, ZEVAR, and growth-focused campaigns.
          </p>
        </div>
        <div>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>
            Navigation
          </p>
          <ul style={{ listStyle: "none", marginTop: 12 }}>
            {site.nav.map((n) => (
              <li key={n.href} style={{ marginBottom: 8 }}>
                <a href={n.href} style={{ color: "#ddd", fontSize: "0.92rem" }}>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#888" }}>
            Connect
          </p>
          <ul style={{ listStyle: "none", marginTop: 12, color: "#ddd", fontSize: "0.92rem" }}>
            <li style={{ marginBottom: 8 }}>
              <a href={site.linkedin}>LinkedIn</a>
            </li>
            <li style={{ marginBottom: 8 }}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.phone}</li>
          </ul>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: 40,
          fontSize: "0.8rem",
          color: "#777",
        }}
      >
        © {new Date().getFullYear()} {site.name}. All rights reserved. · Built with
        Next.js & TypeScript · Digital Marketing Portfolio
      </p>
    </footer>
  );
}
