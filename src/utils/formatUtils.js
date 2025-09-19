export function longTimeFormat(attribute) {
  const parts = [];

  if (attribute.days)
    parts.push(`${attribute.days}\u00A0day${attribute.days !== 1 ? "s" : ""}`);
  if (attribute.hours)
    parts.push(
      `${attribute.hours}\u00A0hour${attribute.hours !== 1 ? "s" : ""}`
    );
  if (attribute.minutes)
    parts.push(
      `${attribute.minutes}\u00A0minute${attribute.minutes !== 1 ? "s" : ""}`
    );
  if (attribute.seconds)
    parts.push(
      `${Math.floor(attribute.seconds)}\u00A0second${
        Math.floor(attribute.seconds) !== 1 ? "s" : ""
      }`
    );

  if (parts.length === 0) return "0\u00A0seconds";

  if (parts.length === 1) return parts[0];

  // Join everything with commas, but add "and" before last element
  const last = parts.pop();
  return parts.join(", ") + " and " + last;
}
export function midTimeFormat(attribute) {
  const parts = [];

  const days = attribute.days ? attribute.days + " days, " : "";

  if (attribute.hours) parts.push(twoDigit(attribute.hours));
  if (attribute.minutes) parts.push(twoDigit(attribute.minutes));
  if (attribute.seconds) parts.push(twoDigit(attribute.seconds));

  const clock = parts.join(":");

  return days + clock;
}
export function shortTimeFormat(attribute) {
  const parts = [];

  if (attribute.days) parts.push(attribute.days);
  attribute.hours ? parts.push(twoDigit(attribute.hours)) : parts.push("00");
  attribute.minutes
    ? parts.push(twoDigit(attribute.minutes))
    : parts.push("00");
  attribute.seconds
    ? parts.push(twoDigit(attribute.seconds))
    : parts.push("00");

  const clock = parts.join(":");

  return clock;
}
export function formatPercent(value, digits = 3) {
  return new Intl.NumberFormat("en-US", {
    style: "percent",
    maximumSignificantDigits: digits,
  }).format(value);
}
export function ordinalForm(number) {
  const j = number % 10,
    k = number % 100;

  if (k >= 11 && k <= 13) {
    return number + "th";
  }

  switch (j) {
    case 1:
      return number + "st";
    case 2:
      return number + "nd";
    case 3:
      return number + "rd";
    default:
      return number + "th";
  }
}
function twoDigit(number) {
  if (number < 10) return "0" + number.toString();
  return number.toString();
}
