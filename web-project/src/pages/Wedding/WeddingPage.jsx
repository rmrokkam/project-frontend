import React, { useState } from 'react';
import { WEDDING, SCHEDULE } from './weddingData';
import { buildEventIcs, buildFullScheduleIcs, downloadIcs } from './ics';
import { LANGUAGES, DEFAULT_LANGUAGE, UI_TEXT, DAY_LABELS, EVENT_TITLES, WEDDING_TITLE } from './translations';
import './WeddingPage.css';

const LANGUAGE_STORAGE_KEY = 'rw-wedding-lang';

function slug(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function readStoredLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return LANGUAGES.some((lang) => lang.code === stored) ? stored : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

export default function WeddingPage() {
  const [language, setLanguage] = useState(readStoredLanguage);

  const handleLanguageChange = (code) => {
    setLanguage(code);
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
  };

  const t = (key) => UI_TEXT[language][key] ?? UI_TEXT[DEFAULT_LANGUAGE][key];
  const translateDay = (dayLabel) => DAY_LABELS[dayLabel]?.[language] ?? dayLabel;
  const translateEventTitle = (eventId, fallbackTitle) => EVENT_TITLES[eventId]?.[language] ?? fallbackTitle;

  const formatEventTime = (event) => {
    if (event.timeKind === 'range') {
      return `${event.displayStart} – ${event.displayEnd}`;
    }
    if (event.timeKind === 'onwards') {
      return `${event.displayTime} ${t('onwards')}`;
    }
    return event.displayTime;
  };

  const handleAddEvent = (day, event) => {
    const ics = buildEventIcs(day.date, event);
    downloadIcs(`${slug(event.title)}.ics`, ics);
  };

  const handleAddFullSchedule = () => {
    const ics = buildFullScheduleIcs(SCHEDULE);
    downloadIcs('rokkam-wedding-schedule.ics', ics);
  };

  return (
    <div className="rw-page">
      <header className="rw-hero">
        <div className="rw-lang-switcher">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              className={`rw-lang-btn${lang.code === language ? ' rw-lang-btn-active' : ''}`}
              onClick={() => handleLanguageChange(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>

        <p className="rw-hero-eyebrow">{t('eyebrow')}</p>
        <h1 className="rw-hero-title">{WEDDING_TITLE[language] ?? WEDDING_TITLE[DEFAULT_LANGUAGE]}</h1>
        <p className="rw-hero-subtitle">{t('subtitle')}</p>
        <p className="rw-hero-dates">{WEDDING.dateRangeDisplay}</p>
        <button type="button" className="rw-btn rw-btn-primary" onClick={handleAddFullSchedule}>
          {t('addFullCalendar')}
        </button>
      </header>

      <main className="rw-schedule">
        {SCHEDULE.map((day) => (
          <section className="rw-day-card" key={day.date}>
            <div className="rw-day-header">
              <span className="rw-day-label">{translateDay(day.dayLabel)}</span>
              <span className="rw-day-date">{day.dateDisplay}</span>
            </div>
            <ul className="rw-event-list">
              {day.events.map((event) => (
                <li className="rw-event-row" key={event.id}>
                  <div className="rw-event-time">{formatEventTime(event)}</div>
                  <div className="rw-event-main">
                    <div className="rw-event-title">{translateEventTitle(event.id, event.title)}</div>
                    <div className="rw-event-venue">
                      {event.venue}
                      {event.address ? (
                        <a
                          className="rw-event-directions"
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.address)}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t('getDirections')}
                        </a>
                      ) : null}
                    </div>
                  </div>
                  <button type="button" className="rw-btn rw-btn-ghost" onClick={() => handleAddEvent(day, event)}>
                    {t('addCalendar')}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
