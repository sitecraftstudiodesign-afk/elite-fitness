function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(rgba(0,0,0,0.72), rgba(0,0,0,0.92)), url('/hero-gym.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "120px 20px 80px",
      }}
    >
      <div style={{ maxWidth: "1000px" }}>
        <p
          style={{
            color: "#d4af37",
            fontWeight: "800",
            letterSpacing: "2px",
          }}
        >
          PREMIUM PERFORMANCE GYM
        </p>

        <h1
          style={{
            fontSize: "clamp(4rem, 9vw, 7rem)",
            lineHeight: "0.95",
            marginBottom: "30px",
          }}
        >
          Transform
          <br />
          Your Body
        </h1>

        <p
          style={{
            color: "#ddd",
            fontSize: "1.2rem",
            maxWidth: "700px",
            margin: "0 auto 45px",
            lineHeight: "1.8",
          }}
        >
          Premium fitness facilities, expert coaching and
          high-performance training designed to help you
          look stronger, move better and feel unstoppable.
        </p>

        <a
          href="#contact"
          style={{
            background: "#d4af37",
            color: "black",
            padding: "18px 42px",
            borderRadius: "50px",
            textDecoration: "none",
            fontWeight: "800",
            boxShadow: "0 0 30px rgba(212,175,55,0.35)",
          }}
        >
          Start Your Journey
        </a>
      </div>
    </section>
  );
}

export default Hero;