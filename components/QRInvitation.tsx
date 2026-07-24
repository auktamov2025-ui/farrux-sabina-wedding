'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const invitationUrl = 'https://example.com';
const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(invitationUrl)}`;

export default function QRInvitation() {
  const [message, setMessage] = useState('');
  const reduceMotion = useReducedMotion();

  const shareInvitation = async () => {
    const shareData = { title: "Farrux va Sabina nikoh to'yi", text: "Sizni nikoh to'yimizga taklif etamiz.", url: window.location.href };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }
      await navigator.clipboard.writeText(shareData.url);
      setMessage('Havola nusxalandi.');
    } catch {
      setMessage("Havolani ulashib bo'lmadi.");
    }
  };

  return (
    <section aria-labelledby="qr-sarlavhasi" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: reduceMotion ? 0.01 : 0.5 }} className="mx-auto grid max-w-5xl items-center gap-6 rounded-[34px] border border-[#c7a86c]/30 bg-[linear-gradient(135deg,rgba(255,250,240,0.95)_0%,rgba(240,221,177,0.95)_100%)] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.16)] sm:p-8 md:grid-cols-[1fr_auto]">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#a36d1b]">Taklifnoma havolasi</p>
          <h2 id="qr-sarlavhasi" className="mt-3 text-2xl font-semibold tracking-[0.06em] text-[#4a2e15] sm:text-3xl">Taklifnomani ulashing</h2>
          <p className="mt-4 max-w-xl leading-8 text-[#6b4b1b]">QR kodni skanerlang yoki taklifnoma havolasini yaqinlaringizga yuboring.</p>
          <button type="button" onClick={shareInvitation} className="mt-6 rounded-full border border-[#bc8a2a] bg-[#c08b2d] px-5 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_10px_22px_rgba(139,92,20,0.22)] transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6b4212]">Taklifnomani ulashish</button>
          <p role="status" aria-live="polite" className="mt-3 min-h-5 text-sm text-[#7c4a13]">{message}</p>
        </div>
        <div className="mx-auto rounded-[24px] border border-[#d8b56b]/30 bg-[#fffaf0] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] md:mx-0">
          <Image src={qrCodeUrl} width={300} height={300} sizes="(max-width: 640px) 160px, 176px" alt="Taklifnoma havolasi uchun QR kod" className="h-40 w-40 rounded-[16px] sm:h-44 sm:w-44" />
        </div>
      </motion.div>
    </section>
  );
}
