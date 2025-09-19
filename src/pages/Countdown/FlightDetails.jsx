import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { DateTime } from "luxon";
import FlightSlide from "./FlightSlide";
import StopoverSlide from "./StopoverSlide";
import flights from "./flights.json";

// Flight slide component

// Stopover slide component

// Build timeline combining flights and intermediate stopovers
function buildTimeline(data) {
  const timeline = [];

  for (let i = 0; i < data.length - 1; i++) {
    const from = data[i];
    const to = data[i + 1];

    // Flight slide
    timeline.push({
      type: "flight",
      flight_number: from.flight_number,
      from_airport: from.airport,
      from_timezone: from.timezone,
      departure_time: from.departure_time,
      to_airport: to.airport,
      to_timezone: to.timezone,
      arrival_time: to.arrival_time,
    });

    // Stopover slide for intermediate airports
    if (i < data.length - 2) {
      timeline.push({
        type: "stopover",
        airport: to.airport,
        timezone: to.timezone,
        arrival_time: to.arrival_time,
        departure_time: to.departure_time,
      });
    }
  }

  return timeline;
}

// Determine the current slide based on actual time
function getCurrentTimeSlideIndex(timeline) {
  const now = DateTime.now();
  for (let i = 0; i < timeline.length; i++) {
    const slide = timeline[i];
    if (slide.type === "flight") {
      const dep = DateTime.fromISO(slide.departure_time, {
        zone: slide.from_timezone,
      });
      const arr = DateTime.fromISO(slide.arrival_time, {
        zone: slide.to_timezone,
      });
      if (now >= dep && now <= arr) return i;
    } else if (slide.type === "stopover") {
      const arr = DateTime.fromISO(slide.arrival_time, {
        zone: slide.timezone,
      });
      const dep = DateTime.fromISO(slide.departure_time, {
        zone: slide.timezone,
      });
      if (now >= arr && now <= dep) return i;
    }
  }
  return -1;
}

// Helper to find initial slide
function findCurrentSlideIndex(timeline) {
  const index = getCurrentTimeSlideIndex(timeline);
  return index >= 0 ? index : 0;
}

// Main FlightDetails component
export default function FlightDetails() {
  const timeline = buildTimeline(flights);

  // Currently displayed slide
  const [step, setStep] = useState(findCurrentSlideIndex(timeline));

  // Slide that is actually current in time
  const [currentTimeSlide, setCurrentTimeSlide] = useState(
    getCurrentTimeSlideIndex(timeline)
  );

  // Auto-update the currentTimeSlide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTimeSlide(getCurrentTimeSlideIndex(timeline));
    }, 5000);
    return () => clearInterval(interval);
  }, [timeline]);

  const current = timeline[step];

  return (
    <Box sx={{ p: 4 }}>
      {current.type === "flight" ? (
        <FlightSlide flight={current} isCurrent={step === currentTimeSlide} />
      ) : (
        <StopoverSlide
          stopover={current}
          isCurrent={step === currentTimeSlide}
        />
      )}

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button
          variant="contained"
          disabled={step === 0}
          onClick={() => setStep((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </Button>
        <Button
          variant="contained"
          disabled={step === timeline.length - 1}
          onClick={() =>
            setStep((prev) => Math.min(prev + 1, timeline.length - 1))
          }
        >
          Next
        </Button>
      </Stack>

      <Typography variant="body2" sx={{ mt: 1 }}>
        Step {step + 1} of {timeline.length}
      </Typography>
    </Box>
  );
}
