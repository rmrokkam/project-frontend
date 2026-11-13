// Source of truth for the wedding schedule.
// `address` is intentionally null until real addresses are provided —
// the UI only renders a "Get Directions" link once an address is filled in.
//
// `timeKind` drives how the time is displayed (so the "onwards"/"से"/"నుండి"
// qualifier can be translated instead of baked into a fixed English string):
//   - 'onwards': shown as "<displayTime> <onwards-word>" (e.g. "12:30 PM onwards")
//   - 'range':    shown as "<displayStart> – <displayEnd>" (no qualifier word)
//   - 'exact':    shown as just "<displayTime>" (a single precise moment)
//
// `start`/`end` (24h) are separate from the above — they're only used to
// generate .ics reminders, and for 'onwards' events are an estimated 2-hour
// block (the photo gives no real end time), so they're intentionally never
// shown to guests as if they were the actual stated time.

export const WEDDING = {
  dateRangeDisplay: 'November 19 – 22, 2026',
};

export const SCHEDULE = [
  {
    dayLabel: 'Thursday',
    date: '2026-11-19',
    dateDisplay: 'Nov 19, 2026',
    events: [
      {
        id: 'thu-lunch',
        title: 'Lunch',
        timeKind: 'onwards',
        displayTime: '12:30 PM',
        venue: 'Meher Home',
        address: null,
        start: '12:30',
        end: '14:30',
      },
      {
        id: 'thu-sangeet',
        title: 'Sangeet',
        timeKind: 'range',
        displayStart: '7:30 PM',
        displayEnd: '12:00 AM',
        venue: '24K Convention Center',
        address: null,
        start: '19:30',
        end: '00:00',
        endDate: '2026-11-20',
      },
    ],
  },
  {
    dayLabel: 'Friday',
    date: '2026-11-20',
    dateDisplay: 'Nov 20, 2026',
    events: [
      {
        id: 'fri-photoshoot',
        title: 'Family Photoshoot',
        timeKind: 'onwards',
        displayTime: '10:00 AM',
        venue: 'Madhuram (Goutham Sridevi Residence)',
        address: null,
        start: '10:00',
        end: '12:00',
      },
      {
        id: 'fri-lunch',
        title: 'Lunch',
        timeKind: 'onwards',
        displayTime: '12:30 PM',
        venue: 'Madhuram (Goutham Sridevi Residence)',
        address: null,
        start: '12:30',
        end: '14:30',
      },
      {
        id: 'fri-dinner',
        title: 'Dinner',
        timeKind: 'onwards',
        displayTime: '7:30 PM',
        venue: 'Hotel Ilapuram',
        address: null,
        start: '19:30',
        end: '21:30',
      },
    ],
  },
  {
    dayLabel: 'Saturday',
    date: '2026-11-21',
    dateDisplay: 'Nov 21, 2026',
    events: [
      {
        id: 'sat-haldi',
        title: 'Haldi (Muhurtham)',
        timeKind: 'exact',
        displayTime: '8:15 AM',
        venue: 'Meher Home',
        address: null,
        start: '08:15',
        end: '09:15',
      },
      {
        id: 'sat-pellikuturu',
        title: 'Pellikuturu',
        timeKind: 'onwards',
        displayTime: '10:00 AM',
        venue: 'Meher Home',
        address: null,
        start: '10:00',
        end: '12:00',
      },
      {
        id: 'sat-lunch',
        title: 'Lunch',
        timeKind: 'onwards',
        displayTime: '12:30 PM',
        venue: 'Meher Home',
        address: null,
        start: '12:30',
        end: '14:30',
      },
      {
        id: 'sat-mehendi',
        title: 'Mehendi',
        timeKind: 'onwards',
        displayTime: '5:00 PM',
        venue: 'Meher Home',
        address: null,
        start: '17:00',
        end: '19:00',
      },
      {
        id: 'sat-dinner',
        title: 'Dinner',
        timeKind: 'onwards',
        displayTime: '7:30 PM',
        venue: 'Meher Home',
        address: null,
        start: '19:30',
        end: '21:30',
      },
    ],
  },
  {
    dayLabel: 'Sunday',
    date: '2026-11-22',
    dateDisplay: 'Nov 22, 2026',
    events: [
      {
        id: 'sun-vratam',
        title: 'Vratam',
        timeKind: 'range',
        displayStart: '4:00 AM',
        displayEnd: '7:00 AM',
        venue: 'Meher Home',
        address: null,
        start: '04:00',
        end: '07:00',
      },
      {
        id: 'sun-lunch',
        title: 'Lunch',
        timeKind: 'onwards',
        displayTime: '12:30 PM',
        venue: 'Meher Home',
        address: null,
        start: '12:30',
        end: '14:30',
      },
      {
        id: 'sun-wedding-event',
        title: 'Wedding Event (Programme Begins)',
        timeKind: 'onwards',
        displayTime: '3:00 PM',
        venue: 'A Convention Centre',
        address: null,
        start: '15:00',
        end: '17:00',
      },
      {
        id: 'sun-muhurtham',
        title: 'Muhurtham',
        timeKind: 'exact',
        displayTime: '8:53 PM',
        venue: 'A Convention Centre',
        address: null,
        start: '20:53',
        end: '21:53',
      },
    ],
  },
];
