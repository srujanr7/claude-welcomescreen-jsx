import { useState } from "react";

const TAGLINES = [
  "One place to deploy everything your AI builds.",
  "From Claude, ChatGPT, or Grok — straight to GitHub and Vercel.",
  "Stop copy-pasting code. Start shipping it.",
  "Your AI writes it. This ships it.",
];

const PLATFORMS = ["Claude", "ChatGPT", "Grok", "GitHub", "Vercel"];

export default function WelcomeScreen() {
  const [index, setIndex] = useState(0);

  const nextTagline = () => {
    setIndex((current) => {
      let next = Math.floor(Math.random() * TAGLINES.length);
      if (next === current && TAGLINES.length > 1) {
        next = (next + 1) % TAGLINES.length;
      }
      return next;
    });
  };

  const marquee = [...PLATFORMS, ...PLATFORMS];

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 140% 100% at 50% 0%, #fbf8f1 0%, #f1ece0 100%)",
        fontFamily: "'Inter', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340&family=Inter:wght@400;500&display=swap"
      />

      <style>{`
        @keyframes drift1 {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(40px, 30px) scale(1.08); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes drift2 {
          0%   { transform: translate(0, 0) scale(1); }
          50%  { transform: translate(-35px, 25px) scale(1.05); }
          100% { transform: translate(0, 0) scale(1); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.55; transform: scale(1.25); }
        }
        @keyframes rise {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .badge:hover {
          background: #b8863c !important;
          color: #fbf8f1 !important;
        }
      `}</style>

      {/* floating background shapes */}
      <div
        style={{
          position: "absolute",
          top: "-6rem",
          left: "-4rem",
          width: "22rem",
          height: "22rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184,134,60,0.16) 0%, rgba(184,134,60,0) 70%)",
          animation: "drift1 14s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-8rem",
          right: "-5rem",
          width: "26rem",
          height: "26rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,33,38,0.06) 0%, rgba(30,33,38,0) 70%)",
          animation: "drift2 18s ease-in-out infinite",
        }}
      />

      {/* hero */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: "36rem",
          padding: "2rem",
          animation: "rise 700ms ease-out",
        }}
      >
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            background: "#b8863c",
            margin: "0 auto 1.75rem",
            animation: "pulse 2.4s ease-in-out infinite",
          }}
        />

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontOpticalSizing: "auto",
            fontWeight: 340,
            fontSize: "clamp(2.6rem, 7vw, 4.5rem)",
            lineHeight: 1.05,
            letterSpacing: "-0.01em",
            color: "#1e2126",
            margin: 0,
          }}
        >
          Welcome to AI Deploy
        </h1>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "1.05rem",
            lineHeight: 1.65,
            color: "#6b7280",
            minHeight: "3.3em",
          }}
        >
          {TAGLINES[index]}
        </p>

        <button
          onClick={nextTagline}
          style={{
            marginTop: "1.75rem",
            background: "transparent",
            border: "1px solid #b8863c",
            color: "#b8863c",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.88rem",
            padding: "0.6rem 1.4rem",
            borderRadius: "2px",
            cursor: "pointer",
            transition: "background 200ms ease, color 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#b8863c";
            e.currentTarget.style.color = "#fbf8f1";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#b8863c";
          }}
        >
          New tagline
        </button>
      </div>

      {/* scrolling platform strip */}
      <div
        style={{
          position: "relative",
          width: "100%",
          marginTop: "3.5rem",
          padding: "1.1rem 0",
          borderTop: "1px solid #e6dfd0",
          borderBottom: "1px solid #e6dfd0",
          overflow: "hidden",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.08em",
            color: "#9aa0a6",
            textAlign: "center",
            marginBottom: "0.85rem",
          }}
        >
          BUILT TO WORK WHEREVER YOUR CODE COMES FROM
        </p>
        <div
          style={{
            display: "flex",
            width: "max-content",
            gap: "0.75rem",
            animation: "scroll 16s linear infinite",
          }}
        >
          {marquee.map((name, i) => (
            <span
              key={i}
              className="badge"
              style={{
                flexShrink: 0,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "#1e2126",
                background: "#fbf8f1",
                border: "1px solid #e6dfd0",
                borderRadius: "999px",
                padding: "0.45rem 1.1rem",
                transition: "background 200ms ease, color 200ms ease",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}