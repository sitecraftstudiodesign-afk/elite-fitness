import { useState } from "react";

function Trainers() {
  const [hovered, setHovered] = useState(null);

  const trainers = [
    {
      name: "Sarah Lewis",
      role: "Personal Trainer",
      image: "/trainer1.jpg",
    },
    {
      name: "Michael Stone",
      role: "Strength Coach",
      image: "/trainer2.jpg",
    },
    {
      name: "Daniel Ross",
      role: "Performance Specialist",
      image: "/trainer3.jpg",
    },
  ];

  return (
    <section
      style={{
        background: "#0b0b0b",
        padding: "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Meet Our Coaches
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "60px",
          }}
        >
          Expert coaches dedicated to helping you achieve
          your fitness goals.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {trainers.map((trainer, index) => (
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
                    ? "translateY(-10px)"
                    : "translateY(0)",
                boxShadow:
                  hovered === index
                    ? "0 20px 45px rgba(212,175,55,0.2)"
                    : "none",
              }}
            >
              <div
                style={{
                  height: "350px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    transform:
                      hovered === index
                        ? "scale(1.08)"
                        : "scale(1)",
                  }}
                />
              </div>

              <div
                style={{
                  padding: "30px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    color: "white",
                    marginBottom: "10px",
                  }}
                >
                  {trainer.name}
                </h3>

                <span
                  style={{
                    display: "inline-block",
                    background: "#d4af37",
                    color: "black",
                    padding: "8px 16px",
                    borderRadius: "50px",
                    fontWeight: "700",
                    fontSize: "0.9rem",
                  }}
                >
                  {trainer.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Trainers;