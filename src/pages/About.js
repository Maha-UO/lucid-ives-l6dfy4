import React from "react";
import "../styles.css"; // make sure this exists and has any necessary styles

export default function About() {
  return (
    <div className="container mt-4">
      <div className="text-center">
        <h2>About This Game</h2>
        <p>
          We are a team of engineering students passionate about creating
          meaningful and engaging digital experiences. This matching game is
          more than just a fun activity. It represents our journey as problem
          solvers and user-centered designers. Through this project, we applied
          key engineering principles such as logic, memory handling, interface
          design, and human-computer interaction. Our goal was to build a game
          that not only challenges memory but also brings joy to users of all
          ages - from children to seniors. By developing this game, we
          strengthened our understanding of front-end development, user
          experience (UX), and accessibility, essential skills for modern
          engineers building real-world applications. This project reflects our
          belief that engineering isn’t just about machines and math. It’s about
          making life better through thoughtful design.
        </p>
      </div>

      {/* Contact Section */}
      <div id="contact" className="contact-container mt-5">
        <h2 style={{ color: "red" }}>Contact Us</h2>
        <form className="contact-form">
          <div
            className="input-row"
            style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
          >
            <input
              type="text"
              placeholder="First Name"
              required
              className="form-control"
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              className="form-control"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            required
            className="form-control"
            style={{ marginBottom: "10px" }}
          />
          <textarea
            placeholder="Message"
            rows="6"
            required
            className="form-control"
            style={{ marginBottom: "10px" }}
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
