"use client";

import { useState, useEffect } from "react";
import { SCHEDULE } from "./data";

export function useOpenStatus() {
  const [isOpen, setIsOpen] = useState(false);
  const [nextOpenTime, setNextOpenTime] = useState<string>("");

  useEffect(() => {
    const check = () => {
      const now = new Date();
      const day = now.getDay();
      const hour = now.getHours();
      const minutes = now.getMinutes();
      const time = hour + minutes / 60;

      const today = SCHEDULE[day];
      if (!today) {
        setIsOpen(false);
        const nextDay = SCHEDULE[1];
        setNextOpenTime(nextDay ? `Lundi à ${nextDay.open}h` : "Lundi");
        return;
      }

      const open = time >= today.open && time < today.close;
      setIsOpen(open);

      if (!open) {
        if (time < today.open) {
          setNextOpenTime(`Aujourd'hui à ${today.open}h`);
        } else {
          const tomorrow = (day + 1) % 7;
          const tomorrowSchedule = SCHEDULE[tomorrow];
          if (tomorrowSchedule) {
            setNextOpenTime(`Demain à ${tomorrowSchedule.open}h`);
          } else {
            let nextDay = (tomorrow + 1) % 7;
            while (!SCHEDULE[nextDay] && nextDay !== day) {
              nextDay = (nextDay + 1) % 7;
            }
            const next = SCHEDULE[nextDay];
            setNextOpenTime(next ? `Bientôt à ${next.open}h` : "Lundi");
          }
        }
      }
    };

    check();
    const interval = setInterval(check, 60000);
    return () => clearInterval(interval);
  }, []);

  return { isOpen, nextOpenTime };
}

export function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [threshold]);

  return scrolled;
}

export function useCountUp(end: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(!startOnView);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, started]);

  return { count, start: () => setStarted(true) };
}
