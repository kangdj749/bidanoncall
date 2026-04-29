"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  address: string;
  service: string;
  message: string;
};

const SERVICES = [
  "Paket Perawatan Kehamilan",
  "Doula Persalinan",
  "Perawatan Nifas",
  "Perawatan Bayi",
  "Infus ke Rumah",
];

export default function ContactFormSection() {
  const { register, handleSubmit, reset } = useForm<FormValues>();
  const [submitting, setSubmitting] = useState(false);

  const ADMIN_WA = "6285720038494";

  const onSubmit = async (data: FormValues) => {
    setSubmitting(true);

    try {
      const res = await fetch("/api/registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        throw new Error(json.error || "Gagal mengirim data");
      }
      
      const message = `
Halo Admin Bidan On Call 👋

Saya ingin konsultasi layanan:

Nama: ${data.name}
No WhatsApp: ${data.phone}
Alamat: ${data.address}
Layanan: ${data.service}

Keluhan / Kebutuhan:
${data.message}
      `;

      const url = `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(
        message
      )}`;

      reset();

      window.location.href = url;
    } catch (error) {
      alert("Terjadi kesalahan, silakan coba lagi.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="section bg-[rgb(var(--color-soft))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-10 space-y-3">
          <p className="text-[11px] tracking-[1.6px] uppercase font-medium text-[rgb(var(--color-primary))]">
            Konsultasi Layanan
          </p>

          <h2 className="h2">
            Konsultasikan Kebutuhan Ibu & Bayi Anda
          </h2>

          <p className="body text-[rgb(var(--color-muted))]">
            Isi form singkat berikut. Tim bidan kami akan segera membantu Anda
            melalui WhatsApp dengan respon cepat.
          </p>
        </div>

        {/* CARD FORM */}
        <div className="max-w-3xl mx-auto">
          <div className="card-premium bg-[rgb(var(--color-bg))]">

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 md:grid-cols-2"
            >

              {/* Nama */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="Contoh: Ibu Siti"
                  className="h-[42px] px-3 rounded-md border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]/30"
                />
              </div>

              {/* WA */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium">
                  Nomor WhatsApp
                </label>
                <input
                  type="tel"
                  {...register("phone", { required: true })}
                  placeholder="Contoh: 628xxxx"
                  className="h-[42px] px-3 rounded-md border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]/30"
                />
              </div>

              {/* Layanan */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium">
                  Pilih Layanan
                </label>
                <select
                  {...register("service", { required: true })}
                  className="h-[42px] px-3 rounded-md border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]/30"
                >
                  <option value="">Pilih layanan</option>
                  {SERVICES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Alamat */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-medium">
                  Alamat
                </label>
                <input
                  type="text"
                  {...register("address", { required: true })}
                  placeholder="Contoh: Jakarta Selatan"
                  className="h-[42px] px-3 rounded-md border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]/30"
                />
              </div>

              {/* Pesan */}
              <div className="md:col-span-2 flex flex-col gap-1.5">
                <label className="text-[12px] font-medium">
                  Keluhan / Kebutuhan
                </label>
                <textarea
                  rows={4}
                  {...register("message")}
                  placeholder="Contoh: Ingin perawatan nifas di rumah..."
                  className="px-3 py-2 rounded-md border border-[rgb(var(--color-border))] bg-[rgb(var(--color-bg))] focus:outline-none focus:ring-2 focus:ring-[rgb(var(--color-primary))]/30"
                />
              </div>

              {/* CTA */}
              <button
                type="submit"
                disabled={submitting}
                className="md:col-span-2 h-[44px] mt-2 rounded-md bg-[rgb(var(--color-primary))] text-[rgb(var(--color-white))] text-[13px] font-medium transition hover:opacity-90 disabled:opacity-60"
              >
                {submitting
                  ? "Menghubungkan ke WhatsApp..."
                  : "Konsultasi via WhatsApp"}
              </button>

            </form>
          </div>
        </div>

        {/* TRUST BADGE */}
        <div className="text-center mt-6">
          <p className="caption">
            ✔ Respon cepat • ✔ Bidan profesional • ✔ Layanan ke rumah
          </p>
        </div>

      </div>
    </section>
  );
}