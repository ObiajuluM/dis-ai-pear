/**
 * Hidden share card — captured by html-to-image for the screenshot.
 * Fixed at 1200×630 (standard OG-card ratio), positioned off-screen.
 *
 * Props:
 *   cardRef      {React.Ref}
 *   score        {number}
 *   verdict      {string}
 *   archetype    {string}
 *   headline     {string}
 *   accentPhrase {string}
 *   headlineSuffix {string}
 *   wallet       {string}   already-truncated address
 *   body         {string}   full roast body (first sentence extracted here)
 */
export default function ShareCard({
  cardRef,
  score = 0,
  verdict = "",
  archetype = "",
  headline = "",
  accentPhrase = "",
  headlineSuffix = "",
  wallet = "",
  body = "",
}) {
  /* Pull the first sentence for the quote callout */
  const firstSentence = (body || "").split(/(?<=[.!?])\s/)[0] ?? "";

  /* ---- inline style constants ---- */
  const bg = "#08080f";
  const surface = "rgba(255,255,255,0.04)";
  const border = "rgba(255,255,255,0.07)";
  const textBright = "#f3f4f6";
  const textMuted = "#6b7280";
  const textDim = "#374151";
  const accentPurple = "rgba(139,92,246,0.5)";
  const accentPink = "rgba(236,72,153,0.3)";

  return (
    <div
      ref={cardRef}
      style={{
        width: "1200px",
        height: "630px",
        background: bg,
        padding: "56px 72px",
        fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      {/* ── Decorative background orbs ── */}
      <div
        style={{
          position: "absolute",
          top: "-160px",
          right: "-160px",
          width: "560px",
          height: "560px",
          background: `radial-gradient(circle, ${accentPurple} 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-120px",
          left: "-80px",
          width: "440px",
          height: "440px",
          background: `radial-gradient(circle, ${accentPink} 0%, transparent 70%)`,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />
      {/* Subtle top-center glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "2px",
          background:
            "linear-gradient(to right, transparent, rgba(139,92,246,0.6), rgba(236,72,153,0.6), transparent)",
          pointerEvents: "none",
        }}
      />

      {/* ── Top bar: branding + wallet ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              fontSize: "22px",
              lineHeight: 1,
              filter: "drop-shadow(0 0 8px rgba(249,115,22,0.7))",
            }}
          >
            🔥
          </span>
          <span
            style={{
              color: textBright,
              fontWeight: 900,
              fontSize: "15px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            dis-ai-pear
          </span>
        </div>

        <span
          style={{
            color: textMuted,
            fontSize: "13px",
            fontFamily: "'Courier New', monospace",
            letterSpacing: "0.04em",
            padding: "5px 14px",
            border: `1px solid ${border}`,
            borderRadius: "99px",
            background: surface,
          }}
        >
          {wallet}
        </span>
      </div>

      {/* ── Main content row ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          gap: "56px",
          marginTop: "32px",
          marginBottom: "32px",
          zIndex: 1,
        }}
      >
        {/* Score column */}
        <div
          style={{
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "180px",
          }}
        >
          <div
            style={{
              fontSize: "108px",
              fontWeight: 900,
              color: textBright,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              textShadow: "0 0 60px rgba(139,92,246,0.4)",
            }}
          >
            {score}
          </div>
          <div
            style={{
              color: textMuted,
              fontSize: "13px",
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              marginTop: "4px",
            }}
          >
            / 100
          </div>
          <div
            style={{
              marginTop: "20px",
              padding: "7px 16px",
              background: "rgba(139,92,246,0.12)",
              border: "1px solid rgba(139,92,246,0.35)",
              borderRadius: "99px",
              color: "#c4b5fd",
              fontSize: "10px",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {verdict}
          </div>
        </div>

        {/* Vertical neon divider */}
        <div
          style={{
            width: "1px",
            alignSelf: "stretch",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(139,92,246,0.5) 30%, rgba(236,72,153,0.5) 70%, transparent 100%)",
            flexShrink: 0,
          }}
        />

        {/* Headline + quote */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <h1
            style={{
              margin: 0,
              fontSize: "50px",
              fontWeight: 900,
              lineHeight: 0.96,
              letterSpacing: "-0.025em",
              textTransform: "uppercase",
              color: textBright,
              wordBreak: "break-word",
            }}
          >
            {headline}{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, #fb923c 0%, #ec4899 50%, #a855f7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontStyle: "italic",
              }}
            >
              {accentPhrase}
            </span>{" "}
            {headlineSuffix}
          </h1>

          {firstSentence && (
            <p
              style={{
                marginTop: "28px",
                color: "#9ca3af",
                fontSize: "15px",
                lineHeight: 1.65,
                fontStyle: "italic",
                paddingLeft: "16px",
                borderLeft: "2px solid rgba(236,72,153,0.4)",
                maxWidth: "560px",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              "{firstSentence}"
            </p>
          )}
        </div>
      </div>

      {/* ── Bottom bar: archetype + URL ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "20px",
          borderTop: `1px solid ${border}`,
          zIndex: 1,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span
            style={{
              color: textDim,
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Archetype
          </span>
          <span
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: "rgba(139,92,246,0.5)",
              display: "inline-block",
            }}
          />
          <span
            style={{
              color: "#d1d5db",
              fontSize: "13px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {archetype}
          </span>
        </div>

        <span
          style={{
            color: textDim,
            fontSize: "12px",
            letterSpacing: "0.06em",
            fontFamily: "'Courier New', monospace",
          }}
        >
          dis-ai-pear.vercel.app
        </span>
      </div>
    </div>
  );
}
