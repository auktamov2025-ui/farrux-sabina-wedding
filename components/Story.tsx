'use client';

import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';

const highlights = [
  "Sizning tashrifingiz bu quvonchli kunimizni yanada fayzli qiladi.",
  "Ezgu tilaklaringiz qalbimizda eng go'zal xotira bo'lib qoladi.",
];

export default function Story() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <SectionTitle
        eyebrow="Sevgi qissasi"
        title="Sevgi hikoyamiz"
        description="Ikki qalbning samimiy niyati birlashgan bu kunda, siz azizlarni yonimizda ko&apos;rishni istaymiz."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-[#d8b35b]/40 bg-[#fffaf0] p-8 shadow-lg"
        >
          <h3 className="text-3xl font-bold text-[#4e2f16]">
            Farrux &amp; Sabina
          </h3>

          <p className="mt-5 leading-8 text-[#674521]">
            Mehr, hurmat va ishonch bilan boshlangan yo&apos;limizning eng go&apos;zal
            kunini siz bilan baham ko&apos;rishga taklif etamiz.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-3xl border border-[#d8b35b]/40 bg-[#fff8e9] p-8 shadow-lg"
        >
          <ul className="space-y-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[#d8b35b]/30 bg-white/80 p-4"
              >
                <span aria-hidden="true" className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#b37a1f]" />
                <span className="text-[#674521]">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
