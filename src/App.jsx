import { useState } from "react";

const TAGLINES = [
  "One place to deploy everything your AI builds.",
  "From Claude, ChatGPT, or Grok — straight to GitHub and Vercel.",
  "Stop copy-pasting code. Start shipping it.",
  "Your AI writes it. This ships it.",
];

const PLATFORMS = ["Claude", "ChatGPT", "Grok", "GitHub", "Vercel"];

const STEPS = [
  {
    n: "01",
    title: "Generate the code",
    body: "Write or refine it in a Claude or ChatGPT canvas, like you already do.",
  },
  {
    n: "02",
    title: "Click deploy",
    body: "The extension picks up the canvas and pushes it — no copy, no paste.",
  },
  {
    n: "03",
    title: "It's live",
    body: "Code lands on GitHub and Vercel spins up a deployment automatically.",
  },
];

const FEATURES = [
  {
    tag: "Free",
    title: "One-click deploy",
    body: "Send code straight from an AI canvas to a GitHub repo and a live Vercel URL.",
  },
  {
    tag: "Free",
    title: "Cross-tool context transfer",
    body: "Carry context between Claude, ChatGPT, and Grok without starting the thread over.",
  },
  {
    tag: "Pro",
    title: "Managed deploys",
    body: "Hand off the whole pipeline — branches, environments, and rollbacks handled for you.",
  },
  {
    tag: "Pro",
    title: "Auto-fix",
    body: "Build errors get caught and patched automatically before they reach production.",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "$0",
    blurb: "Everything you need to ship a canvas to production.",
    items: ["One-click deploy", "Cross-tool context transfer", "Unlimited public repos"],
  },
  {
    name: "Pro",
    price: "Coming soon",
    blurb: "For projects that need a steadier hand after the deploy.",
    items: ["Everything in Free", "Managed deploys", "Auto-fix on build errors", "Priority support"],
  },
];

const FAQS = [
  {
    q: "Which AI tools does it work with?",
    a: "Claude and ChatGPT canvases today, with Grok support on the way.",
  },
  {
    q: "Do I need to connect GitHub and Vercel myself?",
    a: "Once — a one-time authorization. Every deploy after that reuses it automatically.",
  },
  {
    q: "Does it store my code anywhere?",
    a: "No. Code passes straight from the canvas to your own GitHub repo and Vercel project.",
  },
  {
    q: "What's the difference between Free and Pro?",
    a: "Free covers direct deploys and carrying context between tools. Pro adds managed pipelines and automatic error fixing.",
  },
];

export default function WelcomeScreen() {
  const [index, setIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

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
          "radial-gradient(ellipse 140% 60% at 50% 0%, #fbf8f1 0%, #f1ece0 100%)",
        fontFamily: "'Inter', sans-serif",
        color: "#1e2126",
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
        .feature-card, .price-card {
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .feature-card:hover, .price-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(30,33,38,0.06);
        }
        .cta:hover {
          background: #a67735 !important;
        }
        .faq-row {
          cursor: pointer;
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
          top: "18rem",
          right: "-6rem",
          width: "26rem",
          height: "26rem",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,33,38,0.05) 0%, rgba(30,33,38,0) 70%)",
          animation: "drift2 18s ease-in-out infinite",
        }}
      />

      {/* hero */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          maxWidth: "36rem",
          margin: "0 auto",
          padding: "5rem 2rem 0",
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
            marginTop: "1.5rem",
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
          marginTop: "3.25rem",
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

      {/* why */}
      <div style={{ maxWidth: "50rem", margin: "0 auto", padding: "4rem 2rem 0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(16rem, 1fr))",
            gap: "2rem",
            background: "#fbf8f1",
            border: "1px solid #e6dfd0",
            borderRadius: "12px",
            padding: "2rem",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                fontWeight: 500,
                color: "#b04b4b",
              }}
            >
              THE PROBLEM
            </span>
            <p style={{ marginTop: "0.6rem", fontSize: "0.95rem", lineHeight: 1.65, color: "#4a4e54" }}>
              Great code comes out of an AI canvas, then ten minutes go into copying
              files, creating a repo, and wiring up hosting before it's actually live.
            </p>
          </div>
          <div>
            <span
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                fontWeight: 500,
                color: "#4f8a63",
              }}
            >
              THE FIX
            </span>
            <p style={{ marginTop: "0.6rem", fontSize: "0.95rem", lineHeight: 1.65, color: "#4a4e54" }}>
              AI Deploy skips all of that. One click, and the same code is on GitHub
              and live on Vercel — no context switch required.
            </p>
          </div>
        </div>
      </div>

      {/* how it works */}
      <div style={{ maxWidth: "50rem", margin: "0 auto", padding: "4rem 2rem 0" }}>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 340,
            fontSize: "1.6rem",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          How it works
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(14rem, 1fr))",
            gap: "2rem",
          }}
        >
          {STEPS.map((s) => (
            <div key={s.n}>
              <div
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.4rem",
                  color: "#d8bd8f",
                  marginBottom: "0.5rem",
                }}
              >
                {s.n}
              </div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 500, margin: "0 0 0.4rem" }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "0.92rem", lineHeight: 1.6, color: "#6b7280", margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* features */}
      <div style={{ maxWidth: "50rem", margin: "0 auto", padding: "4.5rem 2rem 0" }}>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 340,
            fontSize: "1.6rem",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          What you get
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            gap: "1.25rem",
          }}
        >
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="feature-card"
              style={{
                background: "#fbf8f1",
                border: "1px solid #e6dfd0",
                borderRadius: "10px",
                padding: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.68rem",
                  letterSpacing: "0.06em",
                  fontWeight: 500,
                  color: f.tag === "Pro" ? "#b8863c" : "#8a9a8f",
                  background: f.tag === "Pro" ? "#f6ecd9" : "#eef2ee",
                  borderRadius: "999px",
                  padding: "0.2rem 0.6rem",
                }}
              >
                {f.tag.toUpperCase()}
              </span>
              <h3 style={{ fontSize: "1.02rem", fontWeight: 500, margin: "0.75rem 0 0.4rem" }}>
                {f.title}
              </h3>
              <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#6b7280", margin: 0 }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* pricing */}
      <div style={{ maxWidth: "42rem", margin: "0 auto", padding: "4.5rem 2rem 0" }}>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 340,
            fontSize: "1.6rem",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          Pricing
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
            gap: "1.5rem",
          }}
        >
          {PRICING.map((p) => (
            <div
              key={p.name}
              className="price-card"
              style={{
                background: p.name === "Pro" ? "#1e2126" : "#fbf8f1",
                color: p.name === "Pro" ? "#fbf8f1" : "#1e2126",
                border: "1px solid #e6dfd0",
                borderRadius: "12px",
                padding: "1.75rem",
              }}
            >
              <h3 style={{ fontSize: "1.1rem", fontWeight: 500, margin: 0 }}>{p.name}</h3>
              <p
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "1.8rem",
                  margin: "0.5rem 0",
                }}
              >
                {p.price}
              </p>
              <p
                style={{
                  fontSize: "0.88rem",
                  lineHeight: 1.5,
                  color: p.name === "Pro" ? "#c7c9cc" : "#6b7280",
                  margin: "0 0 1rem",
                }}
              >
                {p.blurb}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {p.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "0.88rem",
                      padding: "0.4rem 0",
                      borderTop: `1px solid ${p.name === "Pro" ? "#333" : "#e6dfd0"}`,
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* faq */}
      <div style={{ maxWidth: "42rem", margin: "0 auto", padding: "4.5rem 2rem 0" }}>
        <h2
          style={{
            fontFamily: "'Fraunces', serif",
            fontWeight: 340,
            fontSize: "1.6rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Questions
        </h2>
        {FAQS.map((f, i) => (
          <div key={f.q} style={{ borderBottom: "1px solid #e6dfd0" }}>
            <div
              className="faq-row"
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1.1rem 0.25rem",
              }}
            >
              <span style={{ fontSize: "0.95rem", fontWeight: 500 }}>{f.q}</span>
              <span style={{ fontSize: "1.1rem", color: "#b8863c" }}>
                {openFaq === i ? "–" : "+"}
              </span>
            </div>
            {openFaq === i && (
              <p
                style={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "#6b7280",
                  margin: "0 0.25rem 1.1rem",
                }}
              >
                {f.a}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* footer cta */}
      <div style={{ textAlign: "center", padding: "4.5rem 2rem 5rem" }}>
        <button
          className="cta"
          style={{
            background: "#b8863c",
            color: "#fbf8f1",
            border: "none",
            fontSize: "0.92rem",
            fontWeight: 500,
            padding: "0.8rem 2rem",
            borderRadius: "999px",
            cursor: "pointer",
            transition: "background 200ms ease",
          }}
        >
          Get the extension
        </button>
        <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#9aa0a6" }}>
          Free to start. No card required.
        </p>
      </div>
    </div>
  );
}