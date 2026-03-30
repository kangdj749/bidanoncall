"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppCTA() {
  const whatsappNumber = "6281322817712";

  const defaultMessage = `
Assalamu'alaikum,

Saya ingin berkonsultasi terkait layanan Bidan On Call (Homecare Ibu & Bayi).

Mohon informasi lebih lanjut.
  `.trim();

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <>
      {/* ================= MOBILE STICKY CTA ================= */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      >
        <div
          className="
            flex items-center justify-between
            px-4 py-3
            border-t border-[rgb(var(--color-border))]
            bg-[rgb(var(--color-surface))]
            backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--color-surface))]/80
          "
        >
          {/* TEXT */}
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold text-[rgb(var(--color-dark))] leading-tight">
              Konsultasi Bidan
            </span>
            <span className="text-[10px] text-[rgb(var(--color-muted))]">
              Respon cepat via WhatsApp
            </span>
          </div>

          {/* BUTTON */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hubungi bidan via WhatsApp"
            className="
              inline-flex items-center gap-2
              px-4 py-2
              text-[11px] font-medium
              rounded-[var(--radius-md)]
              bg-[rgb(var(--color-primary))]
              text-[rgb(var(--color-white))]
              shadow-[var(--shadow-soft)]
              transition-all duration-200
              hover:opacity-90
              active:scale-[0.98]
              focus:outline-none
              focus:shadow-[var(--shadow-focus)]
            "
          >
            <MessageCircle className="w-4 h-4" />
            Chat Sekarang
          </a>
        </div>
      </motion.div>

      {/* ================= DESKTOP FLOAT CTA ================= */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="hidden md:flex fixed bottom-6 right-6 z-50"
      >
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Konsultasi layanan bidan ke rumah"
          className="
            group
            inline-flex items-center gap-3
            px-5 py-3
            rounded-[var(--radius-lg)]
            border border-[rgb(var(--color-border))]
            bg-[rgb(var(--color-surface))]
            shadow-[var(--shadow-elevated)]
            transition-all duration-300
            hover:-translate-y-[2px]
            hover:border-[rgb(var(--color-border-strong))]
          "
        >
          {/* ICON */}
          <div
            className="
              flex items-center justify-center
              w-9 h-9
              rounded-[var(--radius-md)]
              bg-[rgb(var(--color-primary))]
              text-[rgb(var(--color-white))]
              shadow-[var(--shadow-soft)]
            "
          >
            <MessageCircle className="w-4 h-4" />
          </div>

          {/* TEXT */}
          <div className="flex flex-col leading-tight">
            <span className="text-[12px] font-semibold text-[rgb(var(--color-dark))]">
              Konsultasi Bidan
            </span>
            <span className="text-[11px] text-[rgb(var(--color-muted))]">
              Homecare Ibu & Bayi
            </span>
          </div>
        </a>
      </motion.div>
    </>
  );
}