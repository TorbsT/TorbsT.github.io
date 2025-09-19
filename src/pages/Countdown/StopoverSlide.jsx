import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { DateTime } from "luxon";
import { longTimeFormat } from "../../utils/formatUtils";

function StopoverSlide({ stopover, isCurrent }) {
  const now = DateTime.now();

  let landedText = "";
  let departingText = "";
  let durationText = "";

  if (stopover.arrival_time && stopover.departure_time) {
    const arrival = DateTime.fromISO(stopover.arrival_time, {
      zone: stopover.timezone,
    });
    const departure = DateTime.fromISO(stopover.departure_time, {
      zone: stopover.timezone,
    });

    // Total stopover duration
    const diffDuration = departure
      .diff(arrival, ["hours", "minutes", "seconds"])
      .toObject();
    durationText = `Total stopover: ${longTimeFormat(diffDuration)}`;

    // Landed ago
    if (now >= arrival) {
      const diffLanded = now
        .diff(arrival, ["hours", "minutes", "seconds"])
        .toObject();
      landedText = `Landed ${longTimeFormat(diffLanded)} ago`;
    }

    // Departing in
    if (now <= departure) {
      const diffDeparting = departure
        .diff(now, ["hours", "minutes", "seconds"])
        .toObject();
      departingText = `Departing in ${longTimeFormat(diffDeparting)}`;
    }
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
          Stopover at {stopover.airport}
        </Typography>
        {durationText && <Typography>{durationText}</Typography>}
        {landedText && <Typography>{landedText}</Typography>}
        {departingText && <Typography>{departingText}</Typography>}
      </CardContent>
    </Card>
  );
}
export default StopoverSlide;
