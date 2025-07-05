import React from "react";
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
} from "@mui/material";
import TralaleroImage from "./Tralalero_tralala.jpg";
import Hero from "./Hero";
import Projects from "./Projects";
import Exp from "./Exp";
import Edu from "./Edu";
import Sidebar, { Lk } from "./Sidebar";
import { CircleBlobs, RandomBlobs } from "./Blobs";
import { SIDEBAR_WIDTH } from "../../constants/layout";
import useIsMobile from "../../hooks/useIsMobile";
import { Link, Element } from "react-scroll";
import Mask from "./Mask";

const Home = () => {
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
        {/* Left Panel inside scroll area, but fixed via sticky */}
        {!isMobile ? (
          <Box
            sx={{
              width: SIDEBAR_WIDTH,
              flexShrink: 0,
              position: "sticky",
              top: 0,
              alignSelf: "flex-start",
              height: "100vh",
              padding: 2,
              zIndex: 1,
            }}
          >
            {/* Sidebar */}
            <Sidebar />
          </Box>
        ) : (
          ""
        )}

        {/* Main Scrollable Content */}
        <Box
          sx={{
            flex: 1,
            padding: 2,
            minHeight: "150vh", // So we can scroll
          }}
        >
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

    /*
    <Box
      id={isMobile ? "none" : "scroll-container"}
      sx={{
        display: "grid",
        overflowY: "visible",
        gridTemplateColumns: isMobile ? "1fr" : `${SIDEBAR_WIDTH}px 1fr`,
        height: isMobile ? "100%" : "100%",
        position: "relative",
      }}
    >


      {/* Main Content }
      <Box
        id={isMobile ? "none" : "scroll-container"}
        sx={{
          overflowY: "visible",
          height: isMobile ? "100%" : "100vh",
          paddingLeft: 3,
          paddingBottom: 3,
          position: "relative",
          overflowX: "hidden",
        }}
      >
      
      </Box>
      </Box>
      */
  );
};

export default Home;
