import React, { useState } from "react";
import { Box, Grid, Button, TextField, Typography } from "@mui/material";
import ANSWERS from "./answers.json";
import GUESSES from "./guesses.json";
import { initPossibleSolutions, handleGuess } from "./evilWordleBackend";

const VALID = [...new Set([...ANSWERS, ...GUESSES])];

const ROWS = 6;
const COLS = 5;

const initialKeyboard = {};
"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach((c) => {
  initialKeyboard[c] = "untried";
});

export default function EvilWordle() {
  const [possible, setPossible] = useState(initPossibleSolutions(ANSWERS));
  const [history, setHistory] = useState([]);
  const [keyboard, setKeyboard] = useState(initialKeyboard);
  const [inputValue, setInputValue] = useState("");

  const guessWord = () => {
    const guess = inputValue.toUpperCase();
    if (!VALID.includes(guess.toLowerCase())) {
      alert("Invalid word!");
      return;
    }

    const [feedback, newPossible] = handleGuess(guess, possible);
    setPossible(newPossible);
    setHistory([...history, { guess, feedback }]);

    // Update keyboard
    const newKeyboard = { ...keyboard };
    for (let i = 0; i < 5; i++) {
      const letter = guess[i];
      const status =
        feedback[i] === "G" ? "green" : feedback[i] === "Y" ? "yellow" : "gray";
      if (
        newKeyboard[letter] !== "green" &&
        (newKeyboard[letter] !== "yellow" || status === "green")
      ) {
        newKeyboard[letter] = status;
      }
    }
    setKeyboard(newKeyboard);

    setInputValue("");

    if (feedback === "GGGGG") {
      alert("🎉 You won!");
    }
  };

  const getBoxColor = (status) => {
    switch (status) {
      case "green":
        return "#6aaa64";
      case "yellow":
        return "#c9b458";
      case "gray":
        return "#787c7e";
      default:
        return "#d3d6da";
    }
  };

  return (
    <Box
      sx={{
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Evil Wordle
      </Typography>

      {/* Input */}
      <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
        <TextField
          label="Enter guess"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          inputProps={{ maxLength: 5 }}
          onKeyDown={(e) => {
            if (e.key === "Enter") guessWord();
          }}
        />
        <Button variant="contained" onClick={guessWord}>
          Guess
        </Button>
      </Box>

      {/* Word Grid */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mb: 3 }}>
        {[...Array(ROWS)].map((_, row) => (
          <Box
            key={row}
            sx={{
              display: "flex",
              gap: 1,
              justifyContent: "center",
            }}
          >
            {[...Array(COLS)].map((_, col) => {
              const cell =
                history[row] && history[row].guess[col]
                  ? history[row].guess[col]
                  : "";
              const status =
                history[row] && history[row].feedback[col]
                  ? history[row].feedback[col] === "G"
                    ? "green"
                    : history[row].feedback[col] === "Y"
                    ? "yellow"
                    : "gray"
                  : "untried";
              return (
                <Box
                  key={col}
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: getBoxColor(status),
                    color: status === "untried" ? "black" : "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: 24,
                    textTransform: "uppercase",
                    borderRadius: 1,
                  }}
                >
                  {cell}
                </Box>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* Keyboard */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {["QWERTYUIOP", "ASDFGHJKL", "ZXCVBNM"].map((rowLetters, idx) => (
          <Box
            key={idx}
            sx={{ display: "flex", gap: 0.5, justifyContent: "center" }}
          >
            {rowLetters.split("").map((letter) => (
              <Box
                key={letter}
                sx={{
                  width: 40,
                  height: 50,
                  bgcolor: getBoxColor(keyboard[letter]),
                  color: keyboard[letter] === "untried" ? "black" : "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  borderRadius: 1,
                  fontSize: 18,
                  textTransform: "uppercase",
                }}
              >
                {letter}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
