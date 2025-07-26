import {
  format,
  formatDistanceToNow,
  isToday,
  isThisWeek,
  isThisYear,
  isAfter,
  parseISO,
} from "date-fns";

export function formatChatTimestamp(timestamp) {
  const date = parseISO(timestamp);

  if (isToday(date)) {
    return formatDistanceToNow(date, { addSuffix: true });
  }

  if (isThisWeek(date)) {
    return format(date, "EEEE");
  }

  if (isThisYear(date)) {
    return format(date, "MMM d");
  }

  return format(date, "MMMM d, yyyy");
}
