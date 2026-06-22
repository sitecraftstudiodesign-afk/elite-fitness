function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#000",
        padding: "120px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(350px,1fr))",
          gap: "50px",
          alignItems: "center",
        }}
      >
        <div>
          <h2
            style={{
              color: "white",
              fontSize: "3rem",
              marginBottom: "20px",
            }}
          >
            Start Your Transformation
          </h2>

          <p
            style={{
              color: "#aaa",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Ready to take your fitness seriously? Tell us your goal and our team
            will help you choose the right membership.
          </p>

          <div style={infoBox}>
            <h3>📞 Call Us</h3>
            <p>0161 555 9080</p>
          </div>

          <div style={infoBox}>
            <h3>📧 Email Us</h3>
            <p>info@elitefitness.co.uk</p>
          </div>

          <div style={infoBox}>
            <h3>📍 Location</h3>
            <p>Manchester City Centre</p>
          </div>
        </div>

        <form
          style={{
            background: "#111",
            border: "1px solid #222",
            borderRadius: "25px",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Email Address" style={inputStyle} />
          <input type="tel" placeholder="Phone Number" style={inputStyle} />

          <textarea
            placeholder="What is your fitness goal?"
            rows="6"
            style={inputStyle}
          />

          <button
            style={{
              padding: "18px",
              borderRadius: "50px",
              border: "none",
              background: "#d4af37",
              color: "black",
              fontWeight: "800",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Request Membership Info →
          </button>
        </form>
      </div>
    </section>
  );
}

const inputStyle = {
  padding: "18px",
  borderRadius: "15px",
  border: "1px solid #222",
  background: "#0b0b0b",
  color: "white",
  fontSize: "1rem",
};

const infoBox = {
  background: "#111",
  border: "1px solid #222",
  borderRadius: "20px",
  padding: "25px",
  marginBottom: "20px",
  color: "white",
};

export default Contact;