export function StarDivider() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 48 48"
      fill="#FF6B35"
      style={{
        filter: "drop-shadow(0 0 10px rgba(255, 107, 53, 0.6))",
        transform: "rotate(12deg)",
        flexShrink: 0,
      }}
      aria-hidden
    >
      <path
        d="M24 0L27.5 14.5L41 7.5L34 21L48 24L34 27.5L41 41L27.5 34L24 48L20.5 34L7 41L14 27.5L0 24L14 21L7 7.5L20.5 14.5L24 0Z"
      />
    </svg>
  );
}

export function SectionHeading({
  id,
  title,
  subtitle,
}: {
  id?: string;
  title: string;
  subtitle?: string;
}) {
  const parts = title.split(".");
  const hasDot = title.includes(".");

  return (
    <div id={id} style={{ scrollMarginTop: 96 }}>
      <h2 className="section-title">
        {hasDot ? (
          <>
            {parts[0]}
            <span className="dot">.</span>
            {parts.slice(1).join(".")}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}
