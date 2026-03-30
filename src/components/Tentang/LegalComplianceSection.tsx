"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function LegalComplianceSection() {
  const legalDocs = [
    { title: "NIB OSS", number: "1601260070145" },
    { title: "SIUJK", number: "1601260070145" },
    { title: "Akta & SK", number: "AHU-0001581.AH.01.01.TAHUN 2026" },
  ];

  const documentImage =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1773565509/legal_jz8hzg.jpg";

  return (
    <section id="legalitas" className="relative py-12 md:py-20 bg-[rgb(var(--color-bg))]">
      <div className="container-main grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* Left Column — Statement */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[20px] md:text-[26px] font-semibold leading-[1.35] tracking-[0.2px] text-[rgb(var(--color-primary))] mb-5">
            Legalitas Resmi & Terverifikasi
          </h2>
          <p className="text-[12px] md:text-[13px] leading-[1.65] text-[rgb(var(--color-text))]/85">
            Beroperasi secara sah dan efektif berdasarkan perizinan resmi 
            Pemerintah Republik Indonesia melalui sistem OSS.
          </p>
        </motion.div>

        {/* Right Column — Cards & Image */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4 md:gap-5"
        >
          {/* Document Cards */}
          {legalDocs.map((doc, idx) => (
            <div
              key={idx}
              className="
                bg-[rgb(var(--color-surface))]
                border border-[rgb(var(--color-border))]
                rounded-[var(--radius-lg)]
                p-5
                shadow-[var(--shadow-soft)]
                hover:shadow-[var(--shadow-elevated)]
                hover:border-[rgb(var(--color-border-strong))]
                transition-all duration-300
                text-center
              "
            >
              <h3 className="text-[12.5px] font-semibold tracking-[0.5px] text-[rgb(var(--color-primary))] mb-1">
                {doc.title}
              </h3>
              <p className="text-[11px] text-[rgb(var(--color-text))]/80 leading-[1.5]">
                {doc.number}
              </p>
            </div>
          ))}

          {/* Legal Document Blur Image */}
          <div className="relative w-full h-40 md:h-48 rounded-xl overflow-hidden shadow-[0_8px_25px_-8px_rgba(0,0,0,0.1)]">
            <Image
              src={documentImage}
              alt="Dokumen Legal Blur Aesthetic"
              fill
              sizes="100vw"
              className="object-cover filter blur-sm"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}