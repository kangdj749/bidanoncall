"use client";

export default function ContactLegalSection() {
  return (
    <section className="section-tight bg-[rgb(var(--color-secondary))]/8">

      <div className="container-main">

        {/* Section Header */}
        <div className="max-w-[520px] mb-8">

          <p
            className="
            text-[10px]
            tracking-[1.6px]
            uppercase
            font-medium
            text-[rgb(var(--color-primary))]
            mb-3
          "
          >
            Legalitas Perusahaan
          </p>

          <div className="w-10 h-[2px] bg-[rgb(var(--color-primary))] mb-4" />

          <h2
            className="
            text-[18px]
            sm:text-[20px]
            font-semibold
            leading-[1.35]
            text-[rgb(var(--color-text))]
          "
          >
            Legalitas & Perizinan Usaha
          </h2>

        </div>

        {/* Legal Info Grid */}
        <div
          className="
          grid
          gap-x-10
          gap-y-4
          md:grid-cols-2
          text-[12.5px]
          leading-[1.7]
          text-[rgb(var(--color-muted))]
        "
        >

          <div>
            <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
              NIB OSS
            </p>
            <p>1601260070145</p>
          </div>

          <div>
            <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
              SIUJK OSS
            </p>
            <p>1601260070145</p>
          </div>

          <div>
            <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
              Status Izin
            </p>
            <p>Telah Memenuhi Komitmen / Efektif</p>
          </div>

          <div>
            <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
              Akta Pendirian
            </p>
            <p>No. 70 — 08 Januari 2026</p>
          </div>

          <div>
            <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
              SK Kemenkumham
            </p>
            <p>AHU-0001581.AH.01.01.TAHUN 2026</p>
          </div>

        </div>

        {/* Legal Note */}
        <div
          className="
          mt-6
          pt-5
          border-t
          border-[rgb(var(--color-border))]
          max-w-[720px]
        "
        >
          <p
            className="
            text-[12px]
            leading-[1.7]
            text-[rgb(var(--color-muted))]
          "
          >
            Perizinan usaha diterbitkan oleh Pemerintah Republik Indonesia melalui
            sistem Online Single Submission (OSS) dan telah berlaku secara efektif
            sesuai ketentuan perundang-undangan yang berlaku.
          </p>
        </div>

      </div>

    </section>
  );
}