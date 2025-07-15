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
import Date from "./Dated";

function Job({ company, title, year, children }) {
  return (
    <Box
      sx={{
        margin: 1,
        padding: 2,
      }}
    >
      <Typography component="h4" sx={{ fontWeight: 700 }} variant="h6">
        {company} · {title} · {year}
      </Typography>
      {children}
    </Box>
  );
}
function Work() {
  const isMobile = useIsMobile();
  return (
    <Box>
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
            color: "secondary.main",
          }}
          gutterBottom
        >
          Work experience
        </Typography>
      </Box>
      <Card>
        <Job
          company="NTNU"
          title="Teaching Assistant"
          year="Aug 2025 – Ongoing"
        >
          Assisting students in the course TPD4168 Game Design. I am teaching
          how to setup a basic Unity game, and making sure the groups are going
          to finish their game in time.
        </Job>
        <Job
          company="株式会社MamaSan"
          title="Contract Developer (Remote on-demand)"
          year="May 2024 – Dec 2024"
        >
          Contributed to the development and maintenance of an iOS application
          in progress for eventual App Store release. - Supported client on an
          as-needed basis (~5% time commitment).
        </Job>
        <Job
          company="NTNU"
          title="Teaching Assistant"
          year="Aug 2022 – Dec 2022"
        >
          Wrote documentation for project setup in the course TDT4240 Software
          Architecture. It was a compilation of common platform-specific
          problems and solutions for setup of Java, Android Studio and LibGDX.
        </Job>
      </Card>
    </Box>
  );
}
function Club({ title, year, children }) {
  return (
    <Box
      sx={{
        margin: 1,
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
      <Card>
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
      </Card>
    </Box>
  );
}
function Exp() {
  const isMobile = useIsMobile();
  const textColor = "secondary.main";
  let width = 600;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: isMobile ? "center" : "left",
        padding: 2,
      }}
    >
      <Box sx={{ width: "100%", maxWidth: width }}>
        <Work></Work>
        <Box mt={8}></Box>
        <Clubs></Clubs>
      </Box>
      <Box
        sx={{
          display: isMobile ? "none" : "flex",
          alignItems: "center",
          justifyContent: "right",
          paddingLeft: "5%",
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            width: "50%",
            justifyContent: "flex-end",
            color: "secondary.main",

            writingMode: "vertical-rl",
          }}
        >
          Experience
        </Typography>
      </Box>
    </Box>
  );
}
export default Exp;
