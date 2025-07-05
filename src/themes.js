import { createTheme } from "@mui/material/styles";

// Common typography
const typography = {
  fontFamily: "Inter, sans-serif",
  h1: { fontFamily: "Poppins, sans-serif" },
  h2: { fontFamily: "Poppins, sans-serif" },
  h3: { fontFamily: "Poppins, sans-serif" },
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
      light: "#63a4ff",
      dark: "#004ba0",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f50057",
      light: "#ff5983",
      dark: "#bb002f",
      contrastText: "#ffffff",
    },
    success: { main: "#2e7d32" },
    error: { main: "#d32f2f" },
    warning: { main: "#ed6c02" },
    info: { main: "#0288d1" },
  },
  typography,
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    secondary: { main: "#f50057" },
  },
  typography,
});

export const sillyTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#ff0000" }, // Hot pink
    secondary: { main: "#7cfc00" }, // Lawn green
    error: { main: "#ffff00" }, // Bright yellow error color
    warning: { main: "#00ffff" }, // Cyan warning
    background: {
      default: "#ff0000", // Light pink
      paper: "#ff0000", // More pink
    },
    text: {
      primary: "#0000ff", // Teal
      secondary: "#ff0000", // Bright red
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
    h1: { fontFamily: '"Comic Sans MS", cursive' },
    h2: { fontFamily: '"Comic Sans MS", cursive' },
    h3: { fontFamily: '"Comic Sans MS", cursive' },
    button: {
      fontWeight: 900,
      textTransform: "uppercase",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          cursor:
            "url('https://cur.cursors-4u.net/toons/too-3/too254.cur'), auto",
          //animation: "bg-cursed 5s infinite alternate",
        },
        "@keyframes bg-cursed": {
          "0%": { backgroundColor: "#fff0f5" },
          "50%": { backgroundColor: "#ffe4e1" },
          "100%": { backgroundColor: "#ffffe0" }, // pale yellow
        },
        "*": {
          transition: "all 0.2s ease-in-out",
        },
        a: {
          color: "#ff00ff",
          textDecoration: "blink",
        },
        "h1, h2, h3": {
          animation: "rainbow-text 2s linear infinite",
        },
        "@keyframes rainbow-text": {
          "0%": { color: "#ff0000" },
          "25%": { color: "#ffa500" },
          "50%": { color: "#ffff00" },
          "75%": { color: "#00ff00" },
          "100%": { color: "#0000ff" },
        },
      },
    },
  },
});
