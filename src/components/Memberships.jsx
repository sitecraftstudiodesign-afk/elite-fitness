import { useState } from "react";

function Memberships() {
  const [hovered, setHovered] = useState(null);

  const plans = [
    {
      name: "Essential",
      price: "£29",
      features: [
        "Full Gym Access",
        "Locker Rooms",
        "Free Parking",
      ],
    },
    {
      name: "Pro",
      price: "£49",
      features: [
        "Everything in Essential",
        "Group Classes",
        "Recovery Zone",
      ],
      featured: true,
    },
    {
      name: "Elite",
      price: "£79",
      features: [
        "Everything in Pro",
        "Personal Training",
        "VIP Access",
      ],
    },
  ];

  return (
    <section
      style={{
        background: "#000",
        padding: "120px 20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            textAlign: "center",
            color: "white",
            fontSize: "3rem",
            marginBottom: "20px",
          }}
        >
          Membership Plans
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#aaa",
            marginBottom: "60px",
          }}
        >
          Choose the membership that matches your goals.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
          }}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: "#111",
                border:
                  plan.featured || hovered === index
                    ? "2px solid #d4af37"
                    : "1px solid #222",
                borderRadius: "25px",
                padding: "40px",
                color: "white",
                transition: "all 0.3s ease",
                transform:
                  hovered === index
                    ? "translateY(-10px)"
                    : plan.featured
                    ? "scale(1.05)"
                    : "scale(1)",
                boxShadow:
                  hovered === index
                    ? "0 20px 45px rgba(212,175,55,0.2)"
                    : "none",
              }}
            >
              {plan.featured && (
                <div
                  style={{
                    background: "#d4af37",
                    color: "black",
                    display: "inline-block",
                    padding: "8px 15px",
                    borderRadius: "50px",
                    fontWeight: "800",
                    marginBottom: "20px",
                    fontSize: "0.8rem",
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <h3>{plan.name}</h3>

              <h2
                style={{
                  color: "#d4af37",
                  fontSize: "3rem",
                  marginBottom: "25px",
                }}
              >
                {plan.price}
                <span style={{ color: "#888", fontSize: "1rem" }}>
                  /month
                </span>
              </h2>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  lineHeight: "2.2",
                }}
              >
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <a
                href="#contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  width: "100%",
                  marginTop: "30px",
                  padding: "15px 0",
                  borderRadius: "50px",
                  border: "none",
                  background: plan.featured ? "#d4af37" : "#222",
                  color: plan.featured ? "black" : "white",
                  fontWeight: "800",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Join Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Memberships;