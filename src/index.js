import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeSwitcherProvider, useThemeSwitcher } from "./ThemeContext";
import CursorTrail from "./garbage/CursorTrail";

// Wrapper to bridge theme context to MUI ThemeProvider
const ThemeWrapper = () => {
  const { theme } = useThemeSwitcher();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {theme === "silly" && <CursorTrail />}
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeSwitcherProvider>
      <ThemeWrapper />
    </ThemeSwitcherProvider>
  </React.StrictMode>
);

reportWebVitals();
