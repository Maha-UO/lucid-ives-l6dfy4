import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const allImages = {
  flower: [
    "/images/daisy.jpg",
    "/images/sunflower.jpg",
    "/images/tulip.jpg",
    "/images/rose.jpg",
    "/images/purple.jpg",
    "/images/tree.jpg",
  ],
  animal: [
    "/images/bunny.jpg",
    "/images/deer.jpg",
    "/images/duck.jpg",
    "/images/kitten.jpg",
    "/images/panda.jpg",
    "/images/puppy.jpg",
  ],
  random: [
    "/images/ball.jpg",
    "/images/door.jpg",
    "/images/fan.jpg",
    "/images/book.jpg",
    "/images/refrigerator.jpg",
    "/images/tv.jpg",
  ],
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandomImages(images, level, category) {
  const selectedImages = images[category];
  const shuffled = shuffle(selectedImages);
  return shuffled.slice(0, level * 2);
}

function Tile({ tile, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 80,
        height: 80,
        margin: 8,
        backgroundColor: "#e9ecef",
        borderRadius: 12,
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 32,
        userSelect: "none",
      }}
    >
      {tile.flipped || tile.matched ? (
        <img
          className="img-fluid"
          src={tile.image}
          alt="tile"
          style={{ width: 64, height: 64, borderRadius: 8 }}
        />
      ) : (
        <span>❓</span>
      )}
    </div>
  );
}

export default function MatchingGame() {
  const [level, setLevel] = useState(1);
  const [category, setCategory] = useState("flower");
  const [tiles, setTiles] = useState([]);
  const [selected, setSelected] = useState([]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const baseImages = pickRandomImages(allImages, level, category);
    const doubled = [...baseImages, ...baseImages].map((img, index) => ({
      id: index,
      image: img,
      flipped: false,
      matched: false,
    }));
    setTiles(shuffle(doubled));
    setSelected([]);
    setLock(false);
    setFeedback("");
  }, [level, category]);

  const handleClick = (index) => {
    if (lock || tiles[index].flipped || tiles[index].matched) return;

    const newTiles = [...tiles];
    newTiles[index].flipped = true;
    const newSelected = [...selected, index];

    if (newSelected.length === 2) {
      const [firstIdx, secondIdx] = newSelected;
      if (newTiles[firstIdx].image === newTiles[secondIdx].image) {
        newTiles[firstIdx].matched = true;
        newTiles[secondIdx].matched = true;
        setScore((prev) => prev + 10);
        setFeedback("🌟 Great job! You found a match!");
        setSelected([]);
      } else {
        setFeedback("🌀 Try again!");
        setLock(true);
        setTimeout(() => {
          newTiles[firstIdx].flipped = false;
          newTiles[secondIdx].flipped = false;
          setTiles([...newTiles]);
          setSelected([]);
          setLock(false);
        }, 1000);
        setScore((prev) => Math.max(prev - 2, 0));
      }
    } else {
      setSelected(newSelected);
    }
    setTiles([...newTiles]);
  };

  const isLevelComplete = tiles.every((tile) => tile.matched);
  const gridSize = Math.max(2, Math.ceil(Math.sqrt(tiles.length)));

  return (
    <div className="matching-game-wrapper container align-items-center">
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundColor: "white",
          boxShadow: "0 0 15px rgba(0,0,0,0.1)",
        }}
      >
        {/* Header + Mascot */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontSize: "2.5rem",
            }}
          >
            🧩 Let's Play the Matching Pair Game!
          </h1>
          <img
            src="/images/game-mascot.png"
            alt="Game Mascot"
            style={{
              width: "120px",
              marginBottom: "1rem",
              animation: "bounce 2s infinite",
            }}
          />
          <p style={{ color: "#444", fontSize: "1.2rem" }}>
            Select your level and category to start playing. Match all the pairs
            to win!
          </p>
        </div>

        {/* Level & Category Select */}
        <label style={{ fontWeight: "600", marginTop: "1rem" }}>
          Select Level:
        </label>
        <select
          className="form-select mb-3"
          value={level}
          onChange={(e) => setLevel(Number(e.target.value))}
        >
          <option value={1}>Level 1</option>
          <option value={2}>Level 2</option>
          <option value={3}>Level 3</option>
        </select>

        <label style={{ fontWeight: "600" }}>Select Category:</label>
        <select
          className="form-select mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="flower">Flower</option>
          <option value="animal">Animal</option>
          <option value="random">Random</option>
        </select>

        {/* Score & Feedback */}
        <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>Score: {score}</p>
        <p
          className="text-center"
          style={{
            fontSize: "18px",
            color: "#a15e75",
            fontFamily: "'Quicksand', sans-serif",
            minHeight: "24px",
          }}
        >
          {feedback}
        </p>

        {/* Game Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${gridSize}, 80px)`,
            gap: 12,
            maxWidth: gridSize * 80,
          }}
        >
          {tiles.map((tile, index) => (
            <Tile
              key={tile.id}
              tile={tile}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>

        {/* Level Progression */}
        {isLevelComplete &&
          (level === 3 ? (
            <Button
              variant="success"
              className="mt-4"
              onClick={() => (window.location.href = "/congrats")}
            >
              🎊 Finish Game
            </Button>
          ) : (
            <Button
              variant="success"
              className="mt-4"
              onClick={() => setLevel((prev) => Math.min(prev + 1, 3))}
            >
              Next Level
            </Button>
          ))}
      </div>
    </div>
  );
}
