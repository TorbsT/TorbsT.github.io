import React from "react";
import { Box, Typography, Container, Paper, useTheme } from "@mui/material";
import { useCountdown, useRelativeProgress } from "../hooks/useCountdown";
import {
  getDuration,
  getMilliseconds,
  calculateTimeSince,
} from "../utils/timeUtils";
import {
  shortTimeFormat,
  longTimeFormat,
  formatPercent,
} from "../utils/formatUtils";
import Floater from "./Countdown/Floater";
import MexFlag from "./Countdown/MEX.png";
import NorFlag from "./Countdown/NOR.png";

const april = "2026-04-10T00:00:00";
const testTime = "2025-08-20T23:59:00";
const test2Time = "2025-08-21T23:59:00";
const boughtTime = "2025-08-08T12:00:00";
const departTime = "2025-09-20T06:50:00";
const departZone = "Mexico/General";
const arriveTime = "2025-09-21T12:45:00";
const arriveZone = "Europe/Oslo";
const dayoffset = { hours: 24 };
const weekoffset = { days: 7 };
const relativeUpdateDelay = 33;

const chosenoffset = dayoffset;
const significantDigits = 3;

const Countdown = () => {
  const theme = useTheme(); // Access theme palette
  const timeLeft = useCountdown(departTime, departZone);
  const departToArriveDuration = getDuration(
    departTime,
    departZone,
    arriveTime,
    arriveZone
  );
  const boughtToArriveDuration = getDuration(
    boughtTime,
    departZone,
    arriveTime,
    arriveZone
  );
  const boughtToNowDuration = calculateTimeSince(boughtTime, departZone);

  const futureProgress = useRelativeProgress(
    departTime,
    departZone,
    chosenoffset,
    relativeUpdateDelay
  );

  const boughtToArriveProgress =
    getMilliseconds(boughtToNowDuration) /
    getMilliseconds(boughtToArriveDuration);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
      }}
    >
      <Floater src={MexFlag} progress={0} />
      <Floater src={NorFlag} progress={1} />
      <Floater progress={boughtToArriveProgress} width={80} />
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            textAlign: "center",
            borderRadius: 3,
            bgcolor: theme.palette.secondary.dark,
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom>
            {shortTimeFormat(timeLeft)}
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            until Fatim leaves for Norway.
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            In {longTimeFormat(chosenoffset)}, about{" "}
            {formatPercent(futureProgress, significantDigits)} of the wait will
            be over.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            The trip will last for {longTimeFormat(departToArriveDuration)}.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
};

export default Countdown;
