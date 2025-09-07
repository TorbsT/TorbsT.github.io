// hooks/useIsMobile.js
import { useTheme, useMediaQuery } from "@mui/material";

export default function useIsMobile() {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down("lg")); // sm = 600px, md = 900px
}
