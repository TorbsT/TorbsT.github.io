import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useThemeSwitcher } from "../ThemeContext";
import Tooti from "../pages/Home/Tooti";

const ThemeSwitcher = () => {
  const { mode, setMode } = useThemeSwitcher();

  const theme = useTheme(); // 👈 get current theme

  const getButtonStyle = (themeName) => ({
    backgroundColor:
      mode === themeName ? theme.palette.primary.main : "transparent",
    color: mode === themeName ? theme.palette.primary.contrastText : "inherit",
    transition: "background-color 0.3s ease, color 0.3s ease",
  });

  return (
    <div
      style={{
        display: "flex",
        gap: "0.5rem",
        justifyContent: "right",
        margin: "1rem 0",
      }}
    >
      <Tooti title="Light Mode">
        <IconButton
          onClick={() => setMode("light")}
          style={getButtonStyle("light")}
        >
          <LightModeIcon sx={{ color: "text.primary" }} />
        </IconButton>
      </Tooti>
      <Tooti title="Dark Mode">
        <IconButton
          onClick={() => setMode("dark")}
          style={getButtonStyle("dark")}
        >
          <DarkModeIcon sx={{ color: "text.primary" }} />
        </IconButton>
      </Tooti>
      <Tooti title="HTML Hell Mode">
        <IconButton
          onClick={() => setMode("silly")}
          style={getButtonStyle("silly")}
        >
          <CelebrationIcon sx={{ color: "text.primary" }} />
        </IconButton>
      </Tooti>
    </div>
  );
};

export default ThemeSwitcher;
