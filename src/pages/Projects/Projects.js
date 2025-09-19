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
import TechTag from "../../components/TechTag";

import projectsData from "./projectsData.json";
import useIsMobile from "../../hooks/useIsMobile";
import YouTubeEmbed from "../../components/YoutubeEmbed";

const gameSpacing = 12;
const gameWidth = 250;
const gameHeight = 320;
const gameImgHeight = 140;
const gameColumns = 3;
const gameFooterHeight = 40;

const projectSpacing = 24;
const projectWidth = 350;
const projectHeight = 450;
const projectImgHeight = 195;
const projectColumns = 3;
const projectFooterHeight = 25;

const gamesData = [
  {
    name: "Oath to Burn",
    img: "oathtoburn.jpg",
    desc: "Fantasy adventure",
    tags: ["2025"],
    link: "https://torbst.itch.io/oath-to-burn",
  },
  {
    name: "D.O.M.E.",
    img: "dome.png",
    desc: "Burnout simulator that's played with a single button",
    tags: ["2024"],
    link: "https://torbst.itch.io/dome",
  },
  {
    name: "Dream Escape",
    img: "dreamescape.png",
    desc: "Puzzle platformer with dimension traversal",
    tags: ["2023"],
    link: "https://torbst.itch.io/dream-escape",
  },
  {
    name: "Hexaphobia",
    img: "hexaphobia.png",
    desc: "A game for those who hate that number between 5 and 7",
    tags: ["2022"],
    link: "https://torbst.itch.io/hexaphobia",
  },
  {
    name: "Allied Abductees",
    img: "alliedabductees.png",
    desc: "Endless runner",
    tags: ["2021"],
    link: "https://torbst.itch.io/allied-abductees",
  },
];

function Tag({ text }) {
  return <Chip label={text} clickable={false} variant="outlined" />;
}
function Game({ name, img, desc, tags, link }) {
  const isMobile = useIsMobile();

  return (
    <Card
      sx={{
        width: `${gameWidth}px`,
        height: `${gameHeight}px`,
      }}
    >
      <CardMedia
        component="img"
        height={gameImgHeight}
        image={`/images/${img}`}
        alt={`${img}`}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: `${gameHeight - gameImgHeight}px`,
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
          height={gameFooterHeight}
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
                height={gameFooterHeight}
              >
                <Tag text={tag} />
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
export function Games() {
  const isMobile = useIsMobile(); // <-- Add this line
  // Always use maxColumns, even on mobile

  return (
    <Box mt={10} sx={{ backgroundColor: "background.highlight" }}>
      <Box>
        <Typography
          align={isMobile ? "center" : "left"}
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 500,
            color: "secondary.main",
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
        <Wrapper
          data={gamesData}
          renderItem={(game) => <Game {...game} />}
          width={gameWidth}
          spacing={gameSpacing}
          columns={gameColumns}
          alwaysCenter={false}
        ></Wrapper>
      </Box>
    </Box>
  );
}

function Project({ project }) {
  const isMobile = useIsMobile();

  return (
    <Card
      sx={{
        width: `${projectWidth}px`,
        height: `${projectHeight}px`,
      }}
    >
      {project.youtube ? (
        <YouTubeEmbed videoId={project.youtube.split("embed/")[1]} />
      ) : (
        <CardMedia
          component="img"
          height={projectImgHeight}
          image={`/images/${project.img}`}
          alt={`${project.img}`}
        />
      )}
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: `${projectHeight - projectImgHeight}px`,
        }}
      >
        <Box>
          <Typography gutterBottom variant="h6">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.desc}
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          gap={1}
          height={projectFooterHeight}
          sx={{
            justifyContent: "start",
          }}
        >
          {project.techStack.map((tech) => (
            <TechTag key={tech} name={tech} />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
function Projects() {
  const isMobile = useIsMobile(); // <-- Add this line
  // Always use maxColumns, even on mobile

  return (
    <Box mt={10} sx={{ backgroundColor: "background.highlight" }}>
      <Box>
        <Typography
          align="center"
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 500,
            color: "secondary.main",
          }}
          gutterBottom
        >
          Projects
        </Typography>
        <Typography mt={1} variant="body1" align="center">
          I have also worked on some other projects over the years. These range
          from everything between game design documents, web apps and full on
          games.
        </Typography>
      </Box>
      <Box mt={5}>
        <Wrapper
          data={projectsData.oldProjects}
          renderItem={(proj) => <Project project={proj} />}
          alwaysCenter={true}
          width={projectWidth}
          spacing={projectSpacing}
          columns={projectColumns}
        ></Wrapper>
      </Box>
    </Box>
  );
}

function Wrapper({
  data,
  renderItem,
  width,
  spacing,
  columns,
  alwaysCenter = false,
}) {
  const isMobile = useIsMobile();

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "flex-start",
        maxWidth: `${width * columns + spacing * columns}px`,
        justifyContent: alwaysCenter || isMobile ? "center" : "flex-start",
        marginLeft: alwaysCenter || isMobile ? "auto" : undefined,
        marginRight: alwaysCenter || isMobile ? "auto" : undefined,
      }}
    >
      {data.map((item) => (
        <Box
          key={item.name}
          sx={{
            width: `${width}px`,
            marginBottom: `${spacing}px`,
            marginRight: `${isMobile ? spacing / 2 : spacing}px`,
            marginLeft: `${isMobile ? spacing / 2 : 0}px`,
          }}
        >
          {renderItem(item)}
        </Box>
      ))}
    </Box>
  );
}

export default Projects;
