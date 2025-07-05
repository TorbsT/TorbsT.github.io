import React, { forwardRef } from "react";
import { Box, Typography, List, ListItemButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { SIDEBAR_HEIGHT, SIDEBAR_WIDTH } from "../../constants/layout";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-scroll";
import ThemeSwitcher from "../../hooks/ThemeSwitcher";

export function Lk({ to, txt }) {
  return (
    <ListItemButton
      component={Link}
      to={to}
      smooth
      duration={500}
      containerId="scroll-container"
      sx={{
        justifyContent: "flex-end",
      }}
    >
      <Typography
        variant="body1"
        sx={{ textAlign: "right", color: "text.primary" }}
      >
        {txt}
      </Typography>
    </ListItemButton>
  );
}

const Splatter = ({ color = "#FF4081", size = 120 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill={color}
      d="M53.1,-59.3C66.3,-48.1,71.8,-24.1,67.6,-3.1C63.3,17.9,49.2,35.8,36.1,53.3C23.1,70.9,11.5,88,1.2,86.4C-9.1,84.8,-18.2,64.4,-28.6,50.6C-39,36.9,-50.6,29.7,-61.6,15.7C-72.6,1.7,-83,-19.2,-75.6,-34.1C-68.2,-48.9,-42.9,-57.6,-19.6,-64.3C3.6,-71,26.4,-75.9,53.1,-59.3Z"
      transform="translate(100 100)"
    />
  </svg>
);

// Sidebar as forwardRef to allow scroll event delegation
const Sidebar = forwardRef((props, ref) => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  return (
    <Box
      ref={ref}
      sx={{
        position: isMobile ? "relative" : "sticky",
        top: 0,
        height: isMobile ? `${SIDEBAR_HEIGHT}px` : "100vh",
        width: isMobile ? "100%" : `${SIDEBAR_WIDTH}px`,
        paddingTop: 15,
        paddingLeft: 3,
        paddingBottom: 3,
        paddingRight: isMobile ? 3 : 15,
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        color: "white",
      }}
    >
      <Link
        to="hero"
        smooth
        duration={500}
        containerId="scroll-container"
        style={{
          cursor: "pointer",
          textDecoration: "none",
          display: "inline-block",
        }}
        tabIndex={0}
        role="button"
      >
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: "primary.main",
          }}
        >
          Torbjørn Stakvik
        </Typography>
      </Link>

      <Typography
        color="gray"
        variant="h6"
        component="h2"
        gutterBottom
        sx={{ fontWeight: 600 }}
      >
        Software developer
      </Typography>

      <Box mt={2}>
        <List>
          <Lk to="hero" txt="TOP" />
          <Lk to="games" txt="GAMES" />
          <Lk to="experience" txt="EXPERIENCE" />
          <Lk to="education" txt="EDUCATION" />
        </List>
      </Box>

      <Box mt={2}>
        <ThemeSwitcher></ThemeSwitcher>
      </Box>
      <Box mt={2}>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ color: "text.primary" }}
        >
          Contact
        </Typography>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          torbst2001@gmail.com
        </Typography>
        <Typography variant="body2" sx={{ color: "text.primary" }}>
          LinkedIn / GitHub
        </Typography>
        <GitHubIcon sx={{ color: "text.primary" }} />
        <LinkedInIcon sx={{ color: "text.primary" }} />
      </Box>
    </Box>
  );
});

export default Sidebar;
