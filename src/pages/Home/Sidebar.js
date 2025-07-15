import React, { forwardRef } from "react";
import { Box, Typography, List, ListItemButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import { SIDEBAR_HEIGHT, SIDEBAR_WIDTH } from "../../constants/layout";
import useIsMobile from "../../hooks/useIsMobile";
import { Link } from "react-scroll";
import ThemeSwitcher from "../../hooks/ThemeSwitcher";

const socialLinks = [
  {
    name: "Itch",
    display: "torbst.itch.io",
    url: "https://torbst.itch.io/",
    icon: <SportsEsportsIcon sx={{ width: "100%", height: "100%" }} />,
  },
  {
    name: "GitHub",
    display: "github.com/torbst",
    url: "https://github.com/torbst",
    icon: <GitHubIcon sx={{ width: "100%", height: "100%" }} />,
  },

  {
    name: "LinkedIn",
    display: "linkedin.com/in/torbst",
    url: "https://www.linkedin.com/in/torbst/",
    icon: <LinkedInIcon sx={{ width: "100%", height: "100%" }} />,
  },
  {
    name: "Email",
    display: "torbst2001@gmail.com",
    url: "mailto:torbst2001@gmail.com",
    icon: <EmailIcon sx={{ width: "100%", height: "100%" }} />,
  },
];

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
        padding: "1vh",
      }}
    >
      <Typography
        variant="body1"
        sx={{ textAlign: "right", color: "text.primary", fontSize: "2vh" }}
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
        height: "100vh",
        width: SIDEBAR_WIDTH,
        maxWidth: "90vw",
        paddingTop: "12vh",
        paddingLeft: 3,
        paddingBottom: "3vh",
        paddingRight: "20%", //15,
        display: "flex",
        flexDirection: "column",
        textAlign: "right",
        rowGap: "5vh",
        lineHeight: 0,
        fontSize: "1vh",
        backgroundColor: "background.default",
      }}
    >
      <Box>
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
              fontSize: "3.5vh",
              paddingLeft: 0,
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
          sx={{ fontWeight: 600, fontSize: "2vh" }}
        >
          Software developer
        </Typography>
      </Box>

      <Box mt="0vh">
        <List sx={{ padding: 0 }}>
          <Lk to="hero" txt="TOP" />
          <Lk to="games" txt="GAMES" />
          <Lk to="experience" txt="EXPERIENCE" />
          <Lk to="education" txt="EDUCATION" />
        </List>
      </Box>
      <Box mt="0vh">
        <ThemeSwitcher></ThemeSwitcher>
      </Box>
      <Box mt="0vh">
        <Box
          component="ul"
          sx={{
            display: "block",
            listStyle: "none",
            p: 0,
            m: 0,
            lineHeight: "2vh",
          }}
        >
          {socialLinks.map(({ name, display, url, icon }) => (
            <Box
              component="li"
              color="text.primary"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                color: "text.primary",
              }}
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => console.log("Clicked!")}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: "2vh" }}>{display}</Typography>

                  <Box
                    sx={{
                      color: "text.primary",
                      width: "4vh",
                      height: "4vh",
                      padding: "0.75vh",
                    }}
                  >
                    {icon}
                  </Box>
                </Box>
              </a>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
});

export default Sidebar;
