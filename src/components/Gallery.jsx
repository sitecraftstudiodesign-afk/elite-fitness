import { useState } from "react";

function Gallery() {
  const [hovered, setHovered] = useState(null);

  const images = [
    {
      image: "/gym1.jpg",
      title: "Luxury Training Floor",
    },
    {
      image: "/gym2.jpg",
      title: "Elite Strength Zone",
    },
    {
      image: "/gym3.jpg",
      title: "Recovery & Wellness Pool",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 20px",
        background: "#0b0b0b",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize:
  window.innerWidth <= 768
    ? "2.1rem"
    : "3rem",
            color: "white",
            marginBottom: "20px",
          }}
        >
          Elite Training Environment
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            maxWidth: "700px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          Premium facilities designed for performance,
          recovery and long-term results.
        </p>

      <div
  style={{
    display: "grid",
    gridTemplateColumns:
      window.innerWidth <= 768
        ? "1fr"
        : "repeat(auto-fit,minmax(350px,1fr))",
    gap: "30px",
    maxWidth: "100%",
  }}
>
          {images.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#111",
                border:
                  hovered === index
                    ? "1px solid #d4af37"
                    : "1px solid #222",
                borderRadius: "25px",
                overflow: "hidden",
                transition: "all 0.3s ease",
                transform:
                  hovered === index
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow:
                  hovered === index
                    ? "0 20px 45px rgba(212,175,55,0.18)"
                    : "none",
              }}
            >
              <div
                style={{
                  height: window.innerWidth <= 768 ? "240px" : "320px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.45s ease",
                    transform:
                      hovered === index
                        ? "scale(1.08)"
                        : "scale(1)",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "25px",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;