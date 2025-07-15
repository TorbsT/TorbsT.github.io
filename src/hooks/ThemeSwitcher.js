import React from "react";
import { IconButton, Tooltip, useTheme } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { useThemeSwitcher } from "../ThemeContext";
import Tooti from "../pages/Home/Tooti";

const buttons = [
  {
    name: "dark",
    title: "Dark Mode",
    prop: (
      <DarkModeIcon
        sx={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
      />
    ),
  },
  {
    name: "light",
    title: "Light Mode",
    prop: (
      <LightModeIcon
        sx={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
      />
    ),
  },
  {
    name: "silly",
    title: "HTML Hell Mode",
    prop: (
      <CelebrationIcon
        sx={{ width: "100%", height: "100%", minWidth: 0, minHeight: 0 }}
      />
    ),
  },
];

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
        gap: "2vh",
        justifyContent: "right",
        margin: "0vh 0",
      }}
    >
      {buttons.map(({ name, title, prop }) => (
        //<Tooti title={title}>
        <IconButton
          onClick={() => setMode(name)}
          style={getButtonStyle(name)}
          sx={{
            width: "3.5vh",
            height: "3.5vh",
            minWidth: 0,
            minHeight: 0,
            padding: "0.5vh",
          }}
        >
          {prop}
        </IconButton>
        //</Tooti>
      ))}
    </div>
  );
};

export default ThemeSwitcher;
