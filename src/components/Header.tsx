"use client";

import { site } from "@/lib/site-data";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "rgba(248, 247, 243, 0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1.5px solid rgba(230, 228, 221, 0.8)",
        padding: "16px 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="#hero"
          style={{ display: "flex", alignItems: "center", gap: 12 }}
        >
          <div
            style={{
              position: "relative",
              width: 44,
              height: 44,
              borderRadius: "50%",
              overflow: "hidden",
              border: "2px solid var(--border-dark)",
              backgroundColor: "var(--accent-orange)",
              boxShadow: "var(--shadow-pop-sm)",
              flexShrink: 0,
            }}
          >
            <Image
              src={site.photo}
              alt={site.name}
              fill
              sizes="44px"
              style={{ objectFit: "cover", objectPosition: "center 15%" }}
            />
          </div>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {site.preferredName}
              </span>
              <span
                className="pulse-badge"
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-green)",
                  boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                }}
                title="Open to Digital Marketing roles"
              />
            </div>
            <p
              style={{
                fontSize: "0.76rem",
                color: "var(--text-muted)",
                fontWeight: 600,
              }}
            >
              {site.navSubtitle}
            </p>
          </div>
        </a>

        <nav className="desktop-nav" style={{ display: "none" }}>
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              listStyle: "none",
            }}
          >
            {site.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  style={{
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                id="nav-resume-btn"
                href={site.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ display: "none", padding: "8px 18px", fontSize: "0.85rem" }}
              >
                CV
              </a>
            </li>
            <li>
              <a href="#contact" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          style={{
            display: "none",
            alignItems: "center",
            justifyContent: "center",
            background: "transparent",
          }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="container"
          style={{
            paddingTop: 16,
            paddingBottom: 8,
            borderTop: "1px solid var(--border-color)",
            marginTop: 12,
          }}
        >
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{
                display: "block",
                padding: "10px 0",
                fontWeight: 600,
                color: "var(--text-secondary)",
              }}
            >
              {item.label}
            </a>
          ))}
          <a href={site.cvPath} className="btn-outline" style={{ marginTop: 8 }}>
            CV
          </a>
        </div>
      )}
    </header>
  );
}
