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
import Footer from "./Footer";
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

function MainPage() {
  return (
    <Box>
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

      <Element name="footer">
        <Box mt={20}>
          <Footer />
        </Box>
      </Element>
    </Box>
  );
}

export default MainPage;
