import { useState } from "react";

function Navbar() {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  const mobile = window.innerWidth <= 768;

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: mobile ? "16px" : "20px 50px",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        display: "flex",
        flexDirection: mobile ? "column" : "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: mobile ? "15px" : "0",
        boxSizing: "border-box",
        zIndex: 1000,
        textAlign: "center",
        borderBottom: "1px solid rgba(212,175,55,0.15)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: mobile ? "column" : "row",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <img
          src="/logo.png"
          alt="Elite Fitness"
          style={{
            width: mobile ? "70px" : "55px",
            height: mobile ? "70px" : "55px",
            objectFit: "contain",
          }}
        />

        <h2
          style={{
            color: "#d4af37",
            margin: 0,
            letterSpacing: "2px",
            fontSize: mobile ? "1.2rem" : "1.5rem",
          }}
        >
          ELITE FITNESS
        </h2>
      </div>

      <a
        href="https://sitecraft-studio-liart.vercel.app#projects"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        style={{
          background: hovered
            ? "linear-gradient(135deg,#d4af37,#f5d76e)"
            : "#d4af37",
          color: "black",
          padding: mobile ? "12px 18px" : "12px 24px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "800",
          fontSize: mobile ? "0.85rem" : "1rem",
          whiteSpace: "nowrap",
          transition: "all 0.25s ease",
          transform: pressed
            ? "scale(0.95)"
            : hovered
            ? "translateY(-3px)"
            : "translateY(0)",
          boxShadow: hovered
            ? "0 12px 30px rgba(212,175,55,0.35)"
            : "none",
        }}
      >
        ← Back To SiteCraft Studio
      </a>
    </nav>
  );
}

export default Navbar;