'use client';

import { motion } from 'framer-motion';

export default function LocationSection() {
  return (
    <section aria-labelledby="joy-sarlavhasi" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mx-auto max-w-6xl rounded-[34px] border border-[#c7a86c]/30 bg-[linear-gradient(135deg,_rgba(255,250,240,0.95)_0%,_rgba(240,221,177,0.95)_100%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-8"
      >
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-[28px] border border-[#d8b56b]/30 bg-[#fffdf8]/90 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.36em] text-[#a36d1b]">Joy</p>
            <h2 id="joy-sarlavhasi" className="mt-3 text-2xl font-semibold tracking-[0.08em] text-[#4a2e15] sm:text-3xl">
              Afsona To&apos;yxonasi
            </h2>
            <p className="mt-4 text-base leading-8 text-[#6b4b1b]">Navoiy shahri</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://maps.app.goo.gl/FX11agXyWmWs6cnw8" target="_blank" rel="noreferrer" className="rounded-full border border-[#bc8a2a] bg-[#c08b2d] px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white">
                Google Maps
              </a>
              <a href="https://yandex.ru/maps/org/afsona_to_yxonasi/91930204312" target="_blank" rel="noreferrer" className="rounded-full border border-[#d8b56b]/30 bg-[#fffdf8] px-5 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#7c4a13]">
                Yandex Maps
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-[#d8b56b]/30 bg-[#fffdf8] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <iframe
              src="https://www.google.com/maps?q=Afsona%20To%27yxonasi%20Navoiy&output=embed"
              title="Venue map"
              className="h-[320px] w-full rounded-[24px] border-0 sm:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
