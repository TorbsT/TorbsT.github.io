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
} from "@mui/material";
import Tooti from "./Tooti";
import TorontoImg from "./kurrahty.png";
import useIsMobile from "../../hooks/useIsMobile";
import { CircleBlobs } from "./Blobs";
import { useThemeSwitcher } from "../../ThemeContext";

function Hero() {
  const theme = useThemeSwitcher();
  const birthDate = "2001-09-22";
  const age =
    new Date().getFullYear() -
    new Date(birthDate).getFullYear() -
    (new Date().setFullYear(new Date().getFullYear()) <
    new Date(birthDate).setFullYear(new Date().getFullYear())
      ? 1
      : 0);

  const isMobile = useIsMobile();
  const maskWidth = 398;
  const maskHeight = Math.floor((maskWidth * 1474) / 1110);
  return (
    <Box
      mt={7}
      sx={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : `1fr ${maskWidth}px`,
        height: { maskHeight },
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <Box mt={5}>
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 600, // or 'bold'
            color: "primary.main",
          }}
        >
          Hello!
        </Typography>

        <Typography variant="h4">I'm Torbjørn.</Typography>

        <Box mt={3}>
          <Typography variant="body1">
            Don't worry if my name is difficult to pronounce, you can call me{" "}
            <Tooti
              title="I am not affiliated with, endorsed by,
or otherwise connected to the City of Toronto,
the Province of Ontario, or any associated entities.
"
              underline
            >
              Toronto
            </Tooti>
            . I'm {age} years old and I am currently doing a Master of
            Informatics, specifically about interaction design.
          </Typography>
        </Box>
        <Box mt={3}>
          <Typography variant="body1">
            I’ve pursued a broad education, choosing to learn about anything I
            find interesting — from web development, algorithms, and game
            development to Japanese language studies. In 2024 I went on a
            year-long exchange in Japan, during which I got caught up in a whole
            lot of{" "}
            <Tooti underline title="Mistakes were made">
              shenanigans
            </Tooti>
            .
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "flex-end", // Aligns content to the right
          alignItems: "center", // Optional: vertical center
          width: "100%",
          height: "100%", // or a fixed height if needed
        }}
      >
        <img src={TorontoImg} width={maskWidth} height={maskHeight} />
        <CircleBlobs
          top={130}
          right={100}
          count={12}
          size={100}
          vertexSize={200}
        />
      </Box>
    </Box>
  );
}

export default Hero;
