// Client-side .ics generation — no backend needed for "add to calendar".
// Venue times are IST (Asia/Kolkata, fixed UTC+5:30, no DST), so we convert
// to UTC explicitly rather than emitting floating local time, which would
// otherwise render wrong on a guest's calendar if they're in another timezone.

function toUtcStamp(dateStr, timeStr) {
  const date = new Date(`${dateStr}T${timeStr}:00+05:30`);
  return date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function nowStamp() {
  return new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
}

function escapeIcsText(value) {
  return value.replace(/[\\,;]/g, (match) => `\\${match}`).replace(/\n/g, '\\n');
}

function buildVevent(dayDate, event) {
  const endDate = event.endDate || dayDate;
  return [
    'BEGIN:VEVENT',
    `UID:${event.id}@rokkam-wedding`,
    `DTSTAMP:${nowStamp()}`,
    `DTSTART:${toUtcStamp(dayDate, event.start)}`,
    `DTEND:${toUtcStamp(endDate, event.end)}`,
    `SUMMARY:${escapeIcsText(event.title)}`,
    `LOCATION:${escapeIcsText(event.venue)}`,
    'END:VEVENT',
  ];
}

export function buildEventIcs(dayDate, event) {
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Rokkam Wedding//EN',
    ...buildVevent(dayDate, event),
    'END:VCALENDAR',
  ].join('\r\n');
}

export function buildFullScheduleIcs(schedule) {
  const vevents = schedule.flatMap((day) => day.events.flatMap((event) => buildVevent(day.date, event)));
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Rokkam Wedding//EN', ...vevents, 'END:VCALENDAR'].join('\r\n');
}

export function downloadIcs(filename, content) {
  const blob = new Blob([content], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
