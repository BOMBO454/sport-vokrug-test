import { DateTime } from "luxon";

export function formatEventDates(dt_start: string, dt_end: string): string {
  const start = DateTime.fromISO(dt_start);
  const end = DateTime.fromISO(dt_end);

  if (start.toFormat("yyyy-MM-dd") === end.toFormat("yyyy-MM-dd")) {
    return start.toFormat("dd.MM.yyyy"); // Один день
  }

  if (start.month === end.month && start.year === end.year) {
    return `${start.toFormat("dd")}-${end.toFormat("dd")}.${start.toFormat("MM.yyyy")}`; // В одном месяце
  }

  if (start.year === end.year) {
    return `${start.toFormat("dd.MM")}-${end.toFormat("dd.MM.yyyy")}`; // В одном году, разные месяцы
  }

  return `${start.toFormat("dd.MM.yyyy")}-${end.toFormat("dd.MM.yyyy")}`; // Разные года
}
