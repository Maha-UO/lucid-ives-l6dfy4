import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-4" style={{ backgroundColor: "#f3faff" }}>
      <h1 style={{ fontSize: "2.5rem", animation: "bounce 2s infinite" }}>
        🌟 Welcome to the{" "}
        <span style={{ color: "#007bff" }}>Matching Game</span>!
      </h1>

      <img
        src="/images/welcome banner.jpg"
        alt="Matching game intro"
        style={{
          width: "100%",
          maxWidth: "600px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      />

      <p className="mt-4 fs-5" style={{ fontWeight: 500 }}>
        Train your brain with colorful matching cards.great for kids, adult, and
        grandparents, or anyone who loves fun!
      </p>
      <div className="feature-list mt-4">
        <h2>🧠 Game Features</h2>
        <ul style={{ listStyleType: "none", padding: 0, fontSize: "1.1rem" }}>
          <li>✔️ Boosts memory and concentration</li>
          <li>🎨 Enjoy different catigories</li>
          <li>👨‍👩‍👧‍👦 Fun for all ages</li>
          <li>💻 Play on your desktop, tablet, and mobile</li>
        </ul>
      </div>

      <button
        style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "0.75rem 1.5rem",
          fontSize: "1.1rem",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "transform 0.3s ease",
        }}
        onClick={() => navigate("/game")}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        🎮 Start Playing
      </button>
    </div>
  );
}
