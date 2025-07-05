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
import useIsMobile from "../../hooks/useIsMobile";

function Work() {
  const isMobile = useIsMobile();
  return (
    <Box>
      <Box
        sx={{
          height: "100%", // or any height you want
          backgroundColor: "green",
          display: "flex",
          justifyContent: "center", // horizontal centering
          alignItems: "center", // vertical centering
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 500,
            color: "secondary.main",
          }}
          gutterBottom
        >
          Work experience
        </Typography>
      </Box>
      <Box>
        <Typography mt={1} variant="body1">
          📌 株式会社MamaSan — Contract Developer (Remote) May 2024 – Dec 2024
          <br />
          (on-demand) Contributed to the development and maintenance of an iOS
          application in progress for eventual App Store release. - Supported
          client on an as-needed basis (~5% time commitment).
        </Typography>
        <Typography>
          📌 NTNU — Aug 2022 - Dec 2022 Wrote documentation for project setup in
          the course TDT4240 Software Architecture. It was a compilation of
          common platform-specific problems and solutions for setup of Java,
          Android Studio and LibGDX.
        </Typography>
      </Box>
    </Box>
  );
}
function Club({ title, year, children }) {
  return (
    <Box
      sx={{
        margin: 0,
        border: "1px dashed gray",
        padding: 2,
      }}
    >
      <Typography component="h4" sx={{ fontWeight: 700 }} variant="h6">
        {title} · {year}
      </Typography>
      {children}
    </Box>
  );
}
function Clubs() {
  const isMobile = useIsMobile();
  return (
    <Box>
      <Typography mt={1} variant="body1">
        <Club title="Chiba University Karate Club Member" year="2024–2025">
          Trained in traditional karate alongside Japanese university students
          three times per week. Achieved san-kyuu (brown belt) and mentored new
          white belts during the final months of membership.
        </Club>
        <Club title="Immerse NTNU - Member / Developer" year="2022-2024">
          Collaborated on the student-led game project Battle for Hermannia.
          Taught game development principles to aspiring programmers through
          workshops and mentoring.
        </Club>
        <Club title="Casual Gaming NTNU Event Staff" year="2021">
          Supported logistics and technical setup for TrøndeLAN, one of
          Trondheim’s largest annual LAN parties. Provided on-site assistance to
          participants throughout the event.
        </Club>
        <Club title="Cogito NTNU - Developer" year="2020-2021">
          Contributed to the club website’s development and maintenance.
          Participated in the Spill-AI project, creating a game environment and
          API interface for training AI agents.
        </Club>
      </Typography>
      <Box
        sx={{
          height: "100%", // or any height you want
          display: "flex",
          justifyContent: "center", // horizontal centering
          alignItems: "center", // vertical centering
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 500,
            color: "secondary.main", // or 'primary.main' for consistency
          }}
          gutterBottom
        >
          Club experience
        </Typography>
      </Box>
    </Box>
  );
}
function Exp() {
  const isMobile = useIsMobile();
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 200px",
      }}
    >
      <Box sx={{ maxWidth: 8000 }}>
        <Work></Work>
        <Clubs></Clubs>
      </Box>
      <Typography
        variant="h2"
        component="h1"
        sx={{
          justifyContent: "flex-end",
          backgroundColor: "red",
          writingMode: "vertical-rl",
          color: "black",
          textShadow: `
      -1px -1px 0 red,
      1px -1px 0 red,
      -1px 1px 0 red,
      1px 1px 0 red
      `,
        }}
      >
        Experience
      </Typography>
    </Box>
  );
}
export default Exp;
