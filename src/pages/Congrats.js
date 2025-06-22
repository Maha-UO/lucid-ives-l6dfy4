import React from "react";

export default function Congrats() {
  return (
    <div className="text-center" style={{ padding: "40px" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#2c3e50" }}>
        🎉 Congratulations! 🎉
      </h1>
      <p style={{ fontSize: "1.2rem", marginTop: "20px" }}>
        You successfully completed all 3 levels of the Matching Game! 🧠💪
      </p>
      <img
        src="/images/trophy.jpg"
        alt="Trophy"
        style={{
          maxWidth: "200px",
          margin: "30px auto",
          display: "block",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      />
      <a href="/" className="btn btn-primary mt-4">
        🔁 Play Again
      </a>
    </div>
  );
}
