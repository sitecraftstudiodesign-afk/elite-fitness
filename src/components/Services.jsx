import { useState } from "react";

function Services() {
  const [hovered, setHovered] = useState(null);

  const services = [
    {
      title: "🏋️ Strength Training",
      text: "Premium equipment and coaching designed to maximize performance.",
    },
    {
      title: "🔥 Personal Training",
      text: "One-to-one coaching tailored to your goals and lifestyle.",
    },
    {
      title: "⚡ HIIT Classes",
      text: "High-energy group sessions built for results and endurance.",
    },
    {
      title: "🧘 Recovery Zone",
      text: "Dedicated recovery facilities to help you train harder and recover faster.",
    },
  ];

  return (
    <section
      style={{
        background: "#000",
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
          Premium Training Experience
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
          Everything you need to transform your body,
          improve performance and achieve lasting results.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {services.map((service, index) => (
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
                padding: "35px",
                color: "white",
                transition: "all 0.3s ease",
                transform:
                  hovered === index
                    ? "translateY(-8px)"
                    : "translateY(0)",
                boxShadow:
                  hovered === index
                    ? "0 15px 35px rgba(212,175,55,0.18)"
                    : "none",
              }}
            >
              <h3>{service.title}</h3>

              <p
                style={{
                  color: "#aaa",
                  lineHeight: "1.8",
                }}
              >
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;