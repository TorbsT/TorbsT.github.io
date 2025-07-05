import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";
import { darkTheme, lightTheme, sillyTheme } from "./themes";

const ThemeSwitcherContext = createContext();

const themeMap = {
  dark: darkTheme,
  light: lightTheme,
  silly: sillyTheme,
};

const LOCAL_STORAGE_KEY = "preferredTheme";

export const ThemeSwitcherProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    // Try to load the stored theme or default to "dark"
    return localStorage.getItem(LOCAL_STORAGE_KEY) || "dark";
  });

  // Whenever mode changes, persist it to localStorage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, mode);
  }, [mode]);

  const theme = useMemo(() => themeMap[mode] || darkTheme, [mode]);

  return (
    <ThemeSwitcherContext.Provider value={{ mode, setMode, theme }}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
};

export const useThemeSwitcher = () => useContext(ThemeSwitcherContext);
