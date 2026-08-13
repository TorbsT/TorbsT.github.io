import React from "react";
import { Box, Typography, Container, Paper, useTheme } from "@mui/material";
import { useCountdown, useRelativeProgress } from "../hooks/useCountdown";
import {
  getDuration,
  getMilliseconds,
  calculateTimeSince,
  getCurrentTimeDiff,
} from "../utils/timeUtils";
import {
  shortTimeFormat,
  longTimeFormat,
  formatPercent,
} from "../utils/formatUtils";
import Floater from "./Countdown/Floater";
import MexFlag from "./Countdown/MEX.png";
import NorFlag from "./Countdown/NOR.png";
import flights from "./Countdown/flights.json";
import FlightDetails from "./Countdown/FlightDetails";
import { BigDay } from "./Countdown/BigDay";

const april = "2026-04-10T00:00:00";
const testTime = "2025-08-20T23:59:00";
const test2Time = "2025-08-21T23:59:00";
const boughtTime = flights.boughtTime;
const departTime = flights.route[0].departure_time;
const departZone = flights.route[0].timezone;
const arriveTime = flights.route[flights.route.length - 1].arrival_time;
const arriveZone = flights.route[flights.route.length - 1].timezone;
const dayoffset = { hours: 24 };
const weekoffset = { days: 7 };
const relativeUpdateDelay = 33;

let timeLeft;
let departToArriveDuration;
let futureProgress;
let nowToDepartDuration;
let nowToArriveDuration;
const chosenoffset = dayoffset;
const significantDigits = 3;

const Countdown = () => {
  const theme = useTheme(); // Access theme palette
  timeLeft = useCountdown(departTime, departZone);
  departToArriveDuration = getDuration(
    departTime,
    departZone,
    arriveTime,
    arriveZone,
  );
  const boughtToArriveDuration = getDuration(
    boughtTime,
    departZone,
    arriveTime,
    arriveZone,
  );
  const boughtToNowDuration = calculateTimeSince(boughtTime, departZone);

  futureProgress = useRelativeProgress(
    departTime,
    departZone,
    chosenoffset,
    relativeUpdateDelay,
  );

  nowToDepartDuration = getCurrentTimeDiff(departTime, departZone);
  nowToArriveDuration = getCurrentTimeDiff(arriveTime, arriveZone);

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
        flexDirection: "column",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
        padding: 2,
      }}
    >
      <BigDay />
      <Floater src={NorFlag} progress={0} />
      <Floater src={MexFlag} progress={1} />
      <Floater progress={boughtToArriveProgress} width={80} />
      <Container maxWidth="lg">
        <Paper
          elevation={3}
          sx={{
            padding: 1,
            textAlign: "center",
            borderRadius: 3,
            bgcolor: theme.palette.secondary.dark,
          }}
        >
          {getMilliseconds(nowToArriveDuration) <= 0 ? (
            afterArrive()
          ) : getMilliseconds(nowToDepartDuration) <= 0 ? (
            <FlightDetails />
          ) : (
            beforeDepart()
          )}
        </Paper>
      </Container>
    </Box>
  );
};

const afterArrive = () => {
  return (
    <Box
      sx={{
        padding: 4,
      }}
    >
      <Typography variant="h3" component="h1" gutterBottom>
        {flights.arrivedDesc}
      </Typography>
    </Box>
  );
};
const beforeDepart = () => {
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
        {shortTimeFormat(timeLeft)}
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        {flights.desc}
      </Typography>
      {nowToDepartDuration.days == 0 ? (
        <Typography variant="h5" component="h2" gutterBottom>
          Leaving soon!!!!
        </Typography>
      ) : (
        <Typography variant="h5" component="h2" gutterBottom>
          In {longTimeFormat(chosenoffset)}, about{" "}
          {formatPercent(futureProgress, significantDigits)} of the wait will be
          over.
        </Typography>
      )}
      <Typography variant="body1" color="text.secondary">
        The trip will last for {longTimeFormat(departToArriveDuration)}.
      </Typography>
    </>
  );
};
export default Countdown;
