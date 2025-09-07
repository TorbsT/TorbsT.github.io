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
import { DateTime, Duration, Interval } from "luxon";
import { CircleBlobs } from "./Blobs";
import { useThemeSwitcher } from "../../ThemeContext";
import { ordinalForm } from "../../utils/formatUtils";

const birthdayNostalgiaLimit = 10;
const birthdayAnticipationLimit = 10;

function Hero() {
  const theme = useThemeSwitcher();

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
            . {yearsOld()} currently doing a Master of Informatics, with a focus
            on interaction design. My thesis is about Collaborative Classroom
            Learning Games.
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
function yearsOld() {
  const now = DateTime.now();
  const birthday = DateTime.fromISO("2001-09-22");
  const age = Interval.fromDateTimes(birthday, now);
  const closestIntAge = Math.round(age.length("years"));
  const ageInt = Math.floor(age.length("years"));
  const closestBirthday = birthday.plus({ years: closestIntAge });
  const daysLeft = Math.ceil(closestBirthday.diff(now, "days").days);

  if (daysLeft == 0)
    return `Today is my ${ordinalForm(ageInt)} birthday! Yay! Anyways, I am`;
  if (daysLeft == 1) return `I turn ${ageInt + 1} years tomorrow, and I am`;
  if (daysLeft == -1) return `I turned ${ageInt} years yesterday, and I am`;
  if (daysLeft > 0 && daysLeft <= birthdayAnticipationLimit)
    return `My ${ordinalForm(
      ageInt + 1
    )} birthday is in ${daysLeft} days, and I am`;
  if (daysLeft < 0 && daysLeft >= -1 * birthdayNostalgiaLimit)
    return `I recently celebrated my ${ordinalForm(
      ageInt
    )} birthday (${Math.abs(daysLeft)} days ago), and I am`;

  return `I am ${ageInt} years old,`;
}
export default Hero;
