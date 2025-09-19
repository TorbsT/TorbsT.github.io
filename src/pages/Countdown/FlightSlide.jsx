import { Box, Card, CardContent, Typography } from "@mui/material";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import { DateTime } from "luxon";
import { longTimeFormat } from "../../utils/formatUtils";

const markSize = 6;

function FlightSlide({ flight, isCurrent }) {
  const now = DateTime.now();

  let elapsedText = "";
  let remainingText = "";
  let totalDurationText = "";
  let progressPercent = 0;

  if (flight.departure_time && flight.arrival_time) {
    const departure = DateTime.fromISO(flight.departure_time, {
      zone: flight.from_timezone,
    });
    const arrival = DateTime.fromISO(flight.arrival_time, {
      zone: flight.to_timezone,
    });

    // Total flight duration
    const diffTotal = arrival
      .diff(departure, ["hours", "minutes", "seconds"])
      .toObject();
    totalDurationText = `Total flight: ${longTimeFormat(diffTotal)}`;

    // Elapsed time
    let elapsed = 0;
    const totalMillis = arrival.toMillis() - departure.toMillis();

    if (now >= departure) {
      const diffElapsed = now
        .diff(departure, ["hours", "minutes", "seconds"])
        .toObject();
      elapsedText = `Departed ${longTimeFormat(diffElapsed)} ago`;
      elapsed = now.toMillis() - departure.toMillis();
    }

    // Remaining time
    if (now <= arrival) {
      const diffRemaining = arrival
        .diff(now, ["hours", "minutes", "seconds"])
        .toObject();
      remainingText = `Arriving in ${longTimeFormat(diffRemaining)}`;
    }

    progressPercent = Math.min(Math.max((elapsed / totalMillis) * 100, 0), 100);
  }

  return (
    <Card
      sx={{
        border: isCurrent ? "3px solid #1976d2" : "1px solid #ccc",
        transition: "border 0.3s",
      }}
    >
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Flying from {flight.from_airport} to {flight.to_airport}
        </Typography>

        {/* Flight progress line */}
        <Box
          sx={{
            position: "relative",
            mt: 3,
            ml: 5,
            mr: 5,
            mb: 3,
            height: 24,
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Line */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              right: 0,
              height: 2,
              bgcolor: "grey.300",
              transform: "translateY(-50%)",
            }}
          />
          {/* Start dot */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: 0,
              width: markSize,
              height: markSize,
              bgcolor: "grey.300",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          {/* End dot */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              right: 0,
              width: markSize,
              height: markSize,
              bgcolor: "grey.300",
              borderRadius: "50%",
              transform: "translate(50%, -50%)",
            }}
          />
          {/* Plane icon */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: `${progressPercent}%`,
              transform: "translate(-50%, -50%) rotate(90deg)", // rotate(90deg) points down
            }}
          >
            <AirplanemodeActiveIcon
              sx={{ fontSize: (100 * markSize) / 12 }}
              color="text.primary"
            />
          </Box>
        </Box>
        {totalDurationText && <Typography>{totalDurationText}</Typography>}
        {elapsedText && <Typography>{elapsedText}</Typography>}
        {remainingText && <Typography>{remainingText}</Typography>}
      </CardContent>
    </Card>
  );
}

export default FlightSlide;
