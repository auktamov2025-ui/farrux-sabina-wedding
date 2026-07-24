'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownSection() {
  const targetDate = useMemo(
    () => new Date('2026-08-18T19:00:00+05:00'),
    []
  );

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDate));

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: 'Kun', value: timeLeft.days },
    { label: 'Soat', value: timeLeft.hours },
    { label: 'Daqiqa', value: timeLeft.minutes },
    { label: 'Sekund', value: timeLeft.seconds },
  ];

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-5xl rounded-[34px] border border-[#c7a86c]/30 bg-[#fffaf3] p-6 shadow-xl"
      >
        <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#a36d1b]">
          Qolgan vaqt
        </p>

        <h3 className="mt-3 text-center text-2xl font-semibold text-[#4a2e15]">
          18-avgust 2026 • Seshanba • 19:00
        </h3>

        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#d8b56b]/30 bg-white p-4 text-center"
            >
              <div className="text-5xl font-bold text-[#4a2e15]">
                {item.value.toString().padStart(2, '0')}
              </div>

              <div className="mt-2 text-sm uppercase tracking-[0.2em] text-[#9a6620]">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}