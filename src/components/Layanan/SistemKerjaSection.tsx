"use client";

import { motion } from "framer-motion";
import {
  FiClipboard,
  FiUsers,
  FiTool,
  FiDollarSign,
} from "react-icons/fi";

export default function SistemKerjaSection() {

  const pillars = [
    {
      title: "Administrasi Proyek",
      icon: <FiClipboard size={18} />,
      items: [
        "Perencanaan jadwal pekerjaan",
        "Dokumentasi teknis proyek",
        "Koordinasi dengan stakeholder",
        "Pengelolaan dokumen kontrak",
      ],
    },
    {
      title: "Manajemen SDM",
      icon: <FiUsers size={18} />,
      items: [
        "Tim ahli multidisiplin",
        "Distribusi tugas profesional",
        "Pengawasan kualitas pekerjaan",
        "Koordinasi tim lapangan",
      ],
    },
    {
      title: "Pelaksanaan Teknis",
      icon: <FiTool size={18} />,
      items: [
        "Survey dan analisis teknis",
        "Perencanaan desain detail",
        "Pengujian lapangan",
        "Validasi hasil perencanaan",
      ],
    },
    {
      title: "Kontrol Keuangan",
      icon: <FiDollarSign size={18} />,
      items: [
        "Perencanaan anggaran proyek",
        "Monitoring biaya pekerjaan",
        "Efisiensi penggunaan dana",
        "Pelaporan keuangan proyek",
      ],
    },
  ];

  return (
    <section id="sistem-kerja" className="section-tight bg-[rgb(var(--color-surface))]">

      <div className="container-main">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="h2 text-[rgb(var(--color-primary))] mb-3">
            Sistem Kerja Profesional
          </h2>

          <p className="text-[12px] leading-[1.6] text-[rgb(var(--color-muted))] max-w-[520px]">
            Setiap proyek dikelola melalui sistem kerja yang terstruktur,
            mengintegrasikan aspek administrasi, sumber daya manusia,
            pelaksanaan teknis, dan kontrol keuangan untuk memastikan
            hasil yang profesional dan akuntabel.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="
                bg-[rgb(var(--color-bg))]
                border
                border-[rgb(var(--color-border))]
                rounded-[var(--radius-md)]
                p-4
                shadow-[var(--shadow-sm)]
                transition-all
                duration-300
                hover:shadow-[var(--shadow-md)]
              "
            >

              {/* Header */}
              <div className="flex items-center gap-2 mb-3">

                <div
                  className="
                  w-[34px]
                  h-[34px]
                  flex
                  items-center
                  justify-center
                  rounded-[var(--radius-sm)]
                  bg-[rgb(var(--color-primary))]/10
                  text-[rgb(var(--color-primary))]
                "
                >
                  {pillar.icon}
                </div>

                <h3 className="text-[13px] font-semibold text-[rgb(var(--color-text))]">
                  {pillar.title}
                </h3>

              </div>

              {/* Items */}
              <ul className="space-y-[3px]">

                {pillar.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-[11px] leading-[1.55] text-[rgb(var(--color-muted))]"
                  >
                    • {item}
                  </li>
                ))}

              </ul>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}