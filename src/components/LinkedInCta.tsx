import { site } from "@/lib/site-data";

export function LinkedInCta() {
  return (
    <section style={{ padding: "64px 0", background: "var(--bg-canvas)" }}>
      <div className="container-narrow" style={{ textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 900,
            marginBottom: 12,
          }}
        >
          Ohh I forgot, I Still Have...
        </h2>
        <p style={{ color: "var(--text-secondary)", marginBottom: 28, fontSize: "1.05rem" }}>
          More campaign insights, live projects & recommendations!
        </p>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          See on My LinkedIn ↗
        </a>
      </div>
    </section>
  );
}
