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
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import TralaleroImage from "./Tralalero_tralala.jpg";
import DreamImage from "./dreamescape.png";
import DomeImage from "./dome.png";
import AlliedImage from "./alliedabductees.png";
import HexaImage from "./hexaphobia.png";
import useIsMobile from "../../hooks/useIsMobile";

function Tag({ text }) {
  return <Chip label={text} clickable={false} variant="outlined" />;
}
function Project({ name, img, desc, tags, link }) {
  const isMobile = useIsMobile();
  const width = 250;
  const height = 300;
  const imgHeight = 100;
  const playButtonHeight = 40;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          width: `${width}px`,
          height: `${height}px`,
        }}
      >
        <CardMedia
          component="img"
          height={imgHeight}
          image={img}
          alt={`Project ${name}`}
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: `${height - imgHeight}px`,
          }}
        >
          <Box>
            <Typography gutterBottom variant="h6">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {desc}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            gap={1}
            height={playButtonHeight}
            sx={{
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="contained"
              startIcon={<PlayCircleOutlineIcon />}
              color="primary"
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play
            </Button>
            <Box>
              {tags.map((tag, index) => (
                <Box
                  key={index}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  height={playButtonHeight}
                >
                  <Tag text={tag} />
                </Box>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}

function Projects() {
  const isMobile = useIsMobile();
  return (
    <Box mt={10} sx={{ backgroundColor: "background.highlight" }}>
      <Box>
        <Typography
          align={isMobile ? "center" : "left"}
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 500,
            color: "secondary.main", // or 'primary.main' for consistency
          }}
          gutterBottom
        >
          Featured Games
        </Typography>
        <Typography mt={1} variant="body1" align={isMobile ? "center" : "left"}>
          I make games in my free time sometimes. All of my games are available
          to play in the browser!
        </Typography>
      </Box>
      <Box mt={5}>
        <Grid
          container
          spacing={3}
          justifyContent={isMobile ? "center" : "left"}
        >
          <Project
            name="D.O.M.E."
            img={DomeImage}
            desc="Burnout simulator"
            tags={["2024"]}
            link="https://torbst.itch.io/dome"
          />
          <Project
            name="Dream Escape"
            img={DreamImage}
            desc="Puzzle platformer with dimension traversal"
            tags={["2023"]}
            link="https://torbst.itch.io/dream-escape"
          />
          <Project
            name="Hexaphobia"
            img={HexaImage}
            desc="A game for those who hate that number between 5 and 7"
            tags={["2022"]}
            link="https://torbst.itch.io/hexaphobia"
          />
          <Project
            name="Allied Abductees"
            img={AlliedImage}
            desc="Says a lot about society"
            tags={["2021"]}
            link="https://torbst.itch.io/allied-abductees"
          />
        </Grid>
      </Box>
    </Box>
  );
}

export default Projects;
