import { DateTime } from "luxon";

// Get duration between two date/time strings with time zones
export function getDuration(startDateTime, startZone, endDateTime, endZone) {
  const start = DateTime.fromISO(startDateTime, { zone: startZone }).toUTC();
  const end = DateTime.fromISO(endDateTime, { zone: endZone }).toUTC();

  const diff = end.diff(start, [
    "days",
    "hours",
    "minutes",
    "seconds",
    "millisecond",
  ]);

  return {
    days: diff.days,
    hours: diff.hours,
    minutes: diff.minutes,
    seconds: Math.floor(diff.seconds),
    milliseconds: diff.milliseconds,
  };
}
export function calculateTimeSince(pastDateTime, pastTimeZone) {
  return getDuration(
    pastDateTime,
    pastTimeZone,
    new Date().toISOString(),
    "utc"
  );
}
export function calculateTimeLeft(targetDateTime, targetTimeZone) {
  return getDuration(
    new Date().toISOString(),
    "utc",
    targetDateTime,
    targetTimeZone
  );
}
/**
 * Get a DateTime a certain duration away from now.
 *
 * @param {Object} offset - e.g. { days: 1, hours: 5, minutes: 30 }
 * @param {boolean} toFuture - true for future, false for past (default: true)
 * @param {string} zone - optional IANA time zone string (default: UTC)
 * @returns {DateTime}
 */
export function getTimeOffset(offset, toFuture = true, zone = "UTC") {
  const now = DateTime.now().setZone(zone);
  const factor = toFuture ? 1 : -1;

  return now.plus({
    days: (offset.days || 0) * factor,
    hours: (offset.hours || 0) * factor,
    minutes: (offset.minutes || 0) * factor,
    seconds: (offset.seconds || 0) * factor,
    milliseconds: (offset.milliseconds || 0) * factor,
  });
}

export function getMilliseconds(duration) {
  const {
    days = 0,
    hours = 0,
    minutes = 0,
    seconds = 0,
    milliseconds = 0,
  } = duration;

  return (
    days * 24 * 60 * 60 * 1000 +
    hours * 60 * 60 * 1000 +
    minutes * 60 * 1000 +
    seconds * 1000 +
    milliseconds
  );
}
