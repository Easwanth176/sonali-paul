"use client";

import { site } from "@/lib/site-data";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "./ui";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${data.get("name")} — ${data.get("interest")}`,
    );
    const body = encodeURIComponent(
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nInterest: ${data.get("interest")}\n\n${data.get("message")}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <p
          style={{
            textAlign: "center",
            color: "var(--accent-orange)",
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          ✨ Get in Touch
        </p>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <h2
            className="section-title"
            id="contact"
            style={{ justifyContent: "center", scrollMarginTop: 96 }}
          >
            Let&apos;s build something
            <br />
            <span style={{ color: "var(--accent-orange)" }}>remarkable together.</span>
          </h2>
        </div>
        <p
          style={{
            textAlign: "center",
            color: "var(--text-secondary)",
            maxWidth: 640,
            margin: "0 auto 40px",
          }}
        >
          {site.openFor}
        </p>

        <div
          className="contact-grid"
          style={{ display: "grid", gap: 32, gridTemplateColumns: "1fr" }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div className="editorial-card" style={{ padding: 22 }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                  fontWeight: 700,
                }}
              >
                Direct Email
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                  marginTop: 10,
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={`mailto:${site.email}`}
                  style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}
                >
                  <Mail size={18} />
                  {site.email}
                </a>
                <button type="button" className="btn-outline" onClick={copyEmail} style={{ padding: "6px 14px", fontSize: "0.8rem" }}>
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
            <div className="editorial-card" style={{ padding: 22 }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                  fontWeight: 700,
                }}
              >
                Phone & WhatsApp
              </p>
              <a
                href={site.phoneHref}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginTop: 10,
                  fontWeight: 600,
                }}
              >
                <Phone size={18} />
                {site.phone}
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  color: "var(--accent-orange)",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                }}
              >
                WhatsApp →
              </a>
            </div>
            <div className="editorial-card" style={{ padding: 22 }}>
              <p
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  color: "var(--text-muted)",
                  fontWeight: 700,
                }}
              >
                Professional Network
              </p>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "block", marginTop: 10, fontWeight: 700 }}
              >
                {site.name} — Connect ↗
              </a>
              <p style={{ marginTop: 16, fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                <strong>Current Status:</strong> {site.openFor}
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="editorial-card">
            <h3 style={{ marginBottom: 20 }}>Send a Direct Message</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: 20 }}>
              Have an open digital marketing role or project? Drop a note below.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>
                Your Name *
                <input
                  name="name"
                  required
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: 6,
                    padding: "12px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--border-color)",
                    fontSize: "0.95rem",
                  }}
                />
              </label>
              <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>
                Work Email *
                <input
                  name="email"
                  type="email"
                  required
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: 6,
                    padding: "12px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--border-color)",
                    fontSize: "0.95rem",
                  }}
                />
              </label>
              <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>
                Opportunity / Interest
                <select
                  name="interest"
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: 6,
                    padding: "12px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--border-color)",
                    fontSize: "0.95rem",
                    background: "#fff",
                  }}
                >
                  {site.contactInterests.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label style={{ fontSize: "0.82rem", fontWeight: 600 }}>
                Message
                <textarea
                  name="message"
                  rows={4}
                  style={{
                    display: "block",
                    width: "100%",
                    marginTop: 6,
                    padding: "12px 14px",
                    borderRadius: "var(--radius-sm)",
                    border: "1.5px solid var(--border-color)",
                    fontSize: "0.95rem",
                    resize: "vertical",
                  }}
                />
              </label>
              <button type="submit" className="btn-primary" style={{ width: "100%", marginTop: 8 }}>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
