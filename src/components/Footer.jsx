import { useState } from "react";

function Footer() {
  const [hovered, setHovered] = useState(null);

  const links = [
    { text: "Instagram", href: "#" },
    { text: "Facebook", href: "#" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <footer
      style={{
        background: "#050505",
        borderTop: "1px solid #d4af37",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <img
        src="/logo.png"
        alt="Elite Fitness"
        style={{
          width: "180px",
          height: "180px",
          objectFit: "contain",
          marginBottom: "25px",
          filter: "drop-shadow(0 0 25px rgba(212,175,55,0.4))",
        }}
      />

      <p
        style={{
          color: "#aaa",
          marginBottom: "35px",
          fontSize: "1.1rem",
          letterSpacing: "1px",
        }}
      >
        Transform Your Body. Transform Your Life.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            style={{
              color: "#d4af37",
              textDecoration: "none",
              fontWeight: "700",
              transition: "all 0.25s ease",
              transform:
                hovered === index
                  ? "translateY(-3px)"
                  : "translateY(0)",
              textShadow:
                hovered === index
                  ? "0 0 12px rgba(212,175,55,0.8)"
                  : "none",
            }}
          >
            {link.text}
          </a>
        ))}
      </div>

      <p
        style={{
          color: "#666",
          marginTop: "45px",
          fontSize: "0.9rem",
        }}
      >
        © 2025 Elite Fitness. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;