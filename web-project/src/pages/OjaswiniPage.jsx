import React, { useRef, useState, useLayoutEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './OjaswiniPage.css';

function rectsOverlap(rectA, rectB) {
  return !(
    rectA.right < rectB.left ||
    rectA.left > rectB.right ||
    rectA.bottom < rectB.top ||
    rectA.top > rectB.bottom
  );
}

export default function OjaswiniPage() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const buttonsRef = useRef(null);
  const noButtonRef = useRef(null);
  const headerRef = useRef(null);
  const yesButtonRef = useRef(null);
  const [buttonStyle, setButtonStyle] = useState({ left: 'calc(50% + 100px)', top: '0px' });

  const setInitialPosition = useCallback(() => {
    const buttons = buttonsRef.current;
    const yesBtn = yesButtonRef.current;
    if (!buttons || !yesBtn) return;

    const buttonsRect = buttons.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();

    const gap = 24;
    const left = yesRect.right - buttonsRect.left + gap;
    const top = yesRect.top - buttonsRect.top;

    setButtonStyle({ left: `${left}px`, top: `${top}px` });
  }, []);

  const positionNoButton = useCallback(() => {
    const container = buttonsRef.current;
    const noBtn = noButtonRef.current;
    const header = headerRef.current;
    const yesBtn = yesButtonRef.current;
    if (!container || !noBtn || !header || !yesBtn) {
      return;
    }

    const containerRect = container.getBoundingClientRect();
    const headerRect = header.getBoundingClientRect();
    const yesRect = yesBtn.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    const padding = 16;
    const maxLeft = containerRect.width - btnRect.width - padding;
    const maxTop = containerRect.height - btnRect.height - padding;

    const currentLeft = btnRect.left - containerRect.left;
    const currentTop = btnRect.top - containerRect.top;
    const minDistance = 150; // Minimum distance to jump

    const headerBox = {
      left: headerRect.left - containerRect.left - padding,
      top: headerRect.top - containerRect.top - padding,
      right: headerRect.right - containerRect.left + padding,
      bottom: headerRect.bottom - containerRect.top + padding,
    };
    const yesBox = {
      left: yesRect.left - containerRect.left - padding,
      top: yesRect.top - containerRect.top - padding,
      right: yesRect.right - containerRect.left + padding,
      bottom: yesRect.bottom - containerRect.top + padding,
    };

    let tries = 0;
    let chosen = null;
    while (tries < 100 && !chosen) {
      const left = padding + Math.random() * Math.max(0, maxLeft - padding);
      const top = padding + Math.random() * Math.max(0, maxTop - padding);
      const candidate = {
        left,
        top,
        right: left + btnRect.width,
        bottom: top + btnRect.height,
      };

      const distance = Math.sqrt((left - currentLeft) ** 2 + (top - currentTop) ** 2);
      if (distance >= minDistance && !rectsOverlap(candidate, headerBox) && !rectsOverlap(candidate, yesBox)) {
        chosen = candidate;
      }
      tries += 1;
    }

    if (chosen) {
      setButtonStyle({ left: `${Math.round(chosen.left)}px`, top: `${Math.round(chosen.top)}px` });
    }
  }, []);

  useLayoutEffect(() => {
    setInitialPosition();
    const handleResize = () => {
      setInitialPosition();
      positionNoButton();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setInitialPosition, positionNoButton]);

  return (
    <div className="ojaswini-page">
      <div className="ojaswini-card" ref={containerRef}>
        <h1 className="ojaswini-title" ref={headerRef}>
          Will you go on a date with Rohan on Friday May 1st???
        </h1>
        <div className="ojaswini-buttons" ref={buttonsRef}>
          <button
            type="button"
            className="ojaswini-yes"
            ref={yesButtonRef}
            onClick={() => navigate('/ojaswini/accepts')}
          >
            OF COURSE!!!
          </button>
          <button
            type="button"
            className="ojaswini-no"
            style={buttonStyle}
            ref={noButtonRef}
            onMouseEnter={positionNoButton}
          >
            no
          </button>
        </div>
      </div>
    </div>
  );
}
