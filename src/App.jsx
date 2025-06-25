import React from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Full Name: <span style={styles.highlight}>Helloo!!!!</span></h1>
        <h1 style={styles.heading}>
         Done with the Registrations!!! 
        </h1>

        {/* Social Icons */}
        <div style={styles.socialIcons}>
          <a href="https://www.instagram.com/btechcareerguide/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaInstagram style={{ color: "#E4405F" }} />
          </a>
          <a href="https://www.linkedin.com/in/duggirala-akhil-151768187/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaLinkedin style={{ color: "#0e76a8" }} />
          </a>
          <a href="https://www.youtube.com/@btechcareerguide" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
            <FaYoutube style={{ color: "#FF0000" }} />
          </a>
        </div>

        {/* Counter */}
        <div id="sfcwj52dg58wett1176jbj92w1xh21p9dj2" />

        {/* Fallback for JS-disabled users */}
        <noscript>
          <a href="https://www.freecounterstat.com" title="website counter">
            <img
              src="https://counter1.optistats.ovh/private/freecounterstat.php?c=wj52dg58wett1176jbj92w1xh21p9dj2"
              border="0"
              title="website counter"
              alt="website counter"
              style={{ marginTop: "20px" }}
            />
          </a>
        </noscript>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f4f6f8",
    padding: "20px",
  },
  card: {
    background: "#ffffff",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    width: "100%",
    textAlign: "center",
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "15px",
    color: "#333",
  },
  highlight: {
    color: "#007acc",
  },
  subText: {
    display: "block",
    fontSize: "1rem",
    marginTop: "10px",
    color: "#555",
  },
  friend: {
    color: "#28a745",
  },
  socialIcons: {
    fontSize: "2rem",
    marginTop: "30px",
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "40px",
  },
  iconLink: {
    transition: "transform 0.2s",
  },
};

export default App;
