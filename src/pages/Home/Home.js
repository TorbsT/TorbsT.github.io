import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  useMediaQuery,
  useTheme,
  Button,
  SwipeableDrawer,
} from "@mui/material";
import TralaleroImage from "./Tralalero_tralala.jpg";
import Hero from "./Hero";
import Projects from "./Projects";
import Exp from "./Exp";
import Edu from "./Edu";
import Sidebar, { Lk } from "./Sidebar";
import Docker from "./DockSidebar";
import { CircleBlobs, RandomBlobs } from "./Blobs";
import { SIDEBAR_WIDTH } from "../../constants/layout";
import useIsMobile from "../../hooks/useIsMobile";
import { Link, Element } from "react-scroll";
import Mask from "./Mask";
import Bouncer from "./BouncingShit";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Home = () => {
  const [drawer, setDrawer] = useState(false);

  const theme = useTheme();
  const isMobile = useIsMobile();

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Srollable parent area */}
      <Box
        id="scroll-container"
        sx={{
          flex: 1,
          height: "100vh",
          overflowY: "auto",
          display: "flex",
        }}
      >
        {theme.name == "silly" && (
          <Box
            sx={{
              top: 0,
              left: 0,
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <Bouncer key={i} id={i} />
            ))}
          </Box>
        )}

        {/* Left Panel inside scroll area, but fixed via sticky */}
        {!isMobile && (
          <Box
            sx={{
              width: SIDEBAR_WIDTH,
              flexShrink: 0,
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              padding: "0vh",
              zIndex: 1,
            }}
          >
            {/* Sidebar */}
            <Sidebar />
          </Box>
        )}

        {isMobile && <Docker setDrawer={setDrawer} />}
        {/* Main Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            padding: 0,
            minHeight: "150vh", // So we can scroll
          }}
        >
          {/* Docker */}
          {isMobile && (
            <React.Fragment>
              <SwipeableDrawer
                anchor="left"
                open={drawer}
                onClose={() => setDrawer(false)}
                onOpen={() => setDrawer(true)}
                sx={{
                  width: SIDEBAR_WIDTH,
                  flexShrink: 0,
                  padding: "0vh",
                }}
              >
                {/* Sidebar */}
                <Sidebar />
              </SwipeableDrawer>
            </React.Fragment>
          )}

          {/* Hero Section */}
          <Element name="hero">
            <Hero />
          </Element>

          {/* Games Section */}
          <Element name="games">
            <Projects />
          </Element>

          <Element name="experience">
            {/* Experience section */}
            <Box mt={20}>
              <Exp />
            </Box>
          </Element>

          <Element name="education">
            {/* Education section */}
            <Box mt={20}>
              <Edu />
            </Box>
          </Element>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
