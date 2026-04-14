// hooks/useCountdown.js
import { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { calculateTimeLeft, getMilliseconds } from "../utils/timeUtils";

export const useCountdown = (targetDateTime, timeZone, delay = 1000) => {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(targetDateTime, timeZone),
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateTime, timeZone));
    }, delay);

    return () => clearInterval(timer);
  }, [targetDateTime, timeZone]);

  return timeLeft;
};

export const useRelativeProgress = (
  targetDateTime,
  timeZone,
  offset,
  delay = 33,
) => {
  const totalSex = getMilliseconds(
    useCountdown(targetDateTime, timeZone, delay),
  );
  if (totalSex <= 0) return 1;
  const offsetSex = getMilliseconds(offset);
  if (offsetSex >= totalSex) return 1;
  const relative = offsetSex / totalSex;
  //console.log(totalSex + " " + relative);

  return relative;
};
