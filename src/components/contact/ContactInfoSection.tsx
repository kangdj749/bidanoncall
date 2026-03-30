"use client";

export default function ContactInfoSection() {
  return (
    <section className="section-tight">

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
            Informasi Perusahaan
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
            Detail Kontak & Identitas Perusahaan
          </h2>

        </div>

        {/* Info Grid */}
        <div
          className="
          grid
          gap-6
          md:grid-cols-2
          text-[12.5px]
          leading-[1.7]
          text-[rgb(var(--color-muted))]
        "
        >

          {/* Company Info */}
          <div className="space-y-4">

            <div>
              <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
                Nama Perusahaan
              </p>
              <p>PT. Bangun Cipta Solusi</p>
            </div>

            <div>
              <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
                Status
              </p>
              <p>Kantor Pusat</p>
            </div>

          </div>

          {/* Address & Contact */}
          <div className="space-y-4">

            <div>
              <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
                Alamat Kantor
              </p>

              <p>
                Rukan Graha Kencana, Blok A
                <br />
                Jl. Perjuangan No. 88 RT.15/RW.10
                <br />
                Kel. Kebon Jeruk, Kec. Kebon Jeruk
                <br />
                Jakarta Barat 11530
              </p>
            </div>

            <div>
              <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
                Telepon / WhatsApp
              </p>
              <p>(+62) 877 6550 5935</p>
            </div>

            <div>
              <p className="text-[11px] font-medium text-[rgb(var(--color-text))] mb-1">
                Email
              </p>
              <p>bangunciptasolusi01@gmail.com</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}