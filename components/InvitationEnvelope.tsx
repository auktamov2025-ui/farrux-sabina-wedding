'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';

const details = [
  ['Sana', '18-avgust 2026'],
  ['Kun', 'Seshanba'],
  ['Vaqt', '19:00'],
  ['Joy', "Afsona To'yxonasi"],
];

export default function InvitationEnvelope() {
  const [isOpen, setIsOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 0.01 : 0.7;

  return (
    <section aria-labelledby="taklifnoma-sarlavhasi" className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_12%,rgba(228,193,118,0.2),transparent_26%),radial-gradient(circle_at_80%_80%,rgba(181,129,32,0.12),transparent_25%),linear-gradient(135deg,#050505_0%,#12100c_52%,#050505_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-[12%] top-[14%] -z-10 h-px bg-gradient-to-r from-transparent via-[#d7b267]/40 to-transparent" />

      <div className="w-full max-w-4xl">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div key="yopiq" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration }} className="mx-auto flex max-w-md flex-col items-center">
              <p className="mb-7 text-center text-[11px] font-semibold uppercase tracking-[0.34em] text-[#e4c176]">Farrux va Sabina</p>
              <button type="button" aria-label="Taklifnomani ochish" aria-expanded={isOpen} onClick={() => setIsOpen(true)} className="group relative aspect-[1.32/1] w-full rounded-[30px] border border-[#d7b267]/40 bg-[linear-gradient(145deg,#fdf5df_0%,#ebd299_48%,#ba842b_100%)] p-3 text-left shadow-[0_28px_80px_rgba(0,0,0,0.46)] outline-offset-8 transition focus-visible:outline-2 focus-visible:outline-[#f0d488]">
                <span aria-hidden="true" className="absolute inset-3 rounded-[22px] border border-[#8d5c16]/25" />
                <span aria-hidden="true" className="absolute inset-x-3 top-3 h-[52%] origin-top rounded-t-[22px] border-x border-t border-[#d7b267]/30 bg-[linear-gradient(155deg,#fffaf0_0%,#e9c97f_100%)] [clip-path:polygon(0_0,100%_0,50%_100%)] transition-transform duration-700 ease-out group-hover:[transform:perspective(600px)_rotateX(-12deg)] group-focus-visible:[transform:perspective(600px)_rotateX(-12deg)]" />
                <span aria-hidden="true" className="absolute inset-x-3 bottom-3 h-[68%] rounded-b-[22px] bg-[linear-gradient(145deg,#c38c32_0%,#f7e6b8_52%,#bf882d_100%)] [clip-path:polygon(0_0,50%_58%,100%_0,100%_100%,0_100%)]" />
                <span aria-hidden="true" className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#7b4d0f]/40 bg-[radial-gradient(circle_at_35%_30%,#fff3be,#c28a29_58%,#7f4d0d)] text-[11px] font-semibold tracking-[0.16em] text-[#4b2b0e] shadow-[0_8px_16px_rgba(87,48,4,0.28)]">FS</span>
              </button>
              <p className="mt-7 text-center text-sm tracking-[0.18em] text-[#f5e6c4]">Taklifnomani ochish uchun bosing</p>
            </motion.div>
          ) : (
            <motion.article key="ochiq" initial={{ opacity: 0, y: 36, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration, ease: 'easeOut' }} className="relative overflow-hidden rounded-[32px] border border-[#d7b267]/35 bg-[linear-gradient(145deg,#fffaf0_0%,#f4dfad_52%,#e9c77e_100%)] p-5 shadow-[0_30px_90px_rgba(0,0,0,0.4)] sm:rounded-[40px] sm:p-10">
              <div aria-hidden="true" className="absolute inset-3 rounded-[25px] border border-[#a97420]/20 sm:inset-5 sm:rounded-[32px]" />
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.88),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(169,111,19,0.18),transparent_32%)]" />
              <div className="relative mx-auto max-w-2xl py-8 text-center sm:py-12">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-[#96611a] sm:text-[11px]">Nikoh to&apos;yi</p>
                <h1 id="taklifnoma-sarlavhasi" className="mt-5 text-4xl font-semibold tracking-[0.1em] text-[#4d2f16] sm:text-6xl">Farrux <span aria-hidden="true" className="text-[#b27b20]">&amp;</span> Sabina</h1>
                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#674521] sm:text-lg">Sizni nikoh to&apos;yimizga taklif etamiz.</p>
                <dl className="mt-9 grid gap-3 rounded-[24px] border border-[#d8b56b]/30 bg-[#fffdf7]/75 p-3 text-center sm:grid-cols-2 sm:p-4 lg:grid-cols-4">
                  {details.map(([label, value]) => <div key={label} className="rounded-[18px] border border-[#d8b56b]/25 bg-[#fffaf0] p-4"><dt className="text-[10px] uppercase tracking-[0.28em] text-[#a5711c]">{label}</dt><dd className="mt-2 text-sm font-medium text-[#4f3012]">{value}</dd></div>)}
                </dl>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
