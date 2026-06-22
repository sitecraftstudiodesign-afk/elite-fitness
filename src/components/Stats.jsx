function Stats() {
  return (
    <section
      style={{
        background: "#0b0b0b",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(250px,1fr))",
          gap: "30px",
          textAlign: "center",
          color: "white",
        }}
      >
        <div>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "4rem",
              marginBottom: "10px",
            }}
          >
            5K+
          </h2>

          <p>Members Trained</p>
        </div>

        <div>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "4rem",
              marginBottom: "10px",
            }}
          >
            25+
          </h2>

          <p>Expert Coaches</p>
        </div>

        <div>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "4rem",
              marginBottom: "10px",
            }}
          >
            15+
          </h2>

          <p>Years Experience</p>
        </div>

        <div>
          <h2
            style={{
              color: "#d4af37",
              fontSize: "4rem",
              marginBottom: "10px",
            }}
          >
            98%
          </h2>

          <p>Member Satisfaction</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;