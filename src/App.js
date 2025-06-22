import Congrats from "./pages/Congrats";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import MatchingGame from "./pages/MatchingGame";
import Home from "./pages/Home";
import About from "./pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  return (
    <Router>
      <Navbar style={{ backgroundColor: "rgb(132, 193, 233)" }} expand="lg">
        <Container>
          <Navbar.Brand href="/">Matching Game</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/game">
                Play
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>

              <Nav.Link as="a" href="/about#contact">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<MatchingGame />} />
          <Route path="/about" element={<About />} />
          <Route path="/congrats" element={<Congrats />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
