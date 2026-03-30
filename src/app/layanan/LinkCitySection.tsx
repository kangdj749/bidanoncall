"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { cities } from "@/lib/seo/cities";

interface Props {
  service: string;
}

export default function CityServiceList({ service }: Props) {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  const filtered = useMemo(() => {
    return cities.filter((city) =>
      city.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const visibleCities = showAll ? filtered : filtered.slice(0, 12);

  return (
    <section className="section-tight bg-[rgb(var(--color-bg))]">
      <div className="container-main">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">

          <div className="max-w-lg">
            <h2 className="h3 mb-1">
              Layanan Bidan On Call Tersedia di Berbagai Kota
            </h2>

            <p className="caption">
              Kami melayani pendampingan persalinan, perawatan ibu & bayi,
              serta layanan homecare di berbagai wilayah Indonesia.
            </p>
          </div>

          {/* SEARCH */}
          <div className="relative w-full md:w-[260px]">
            <input
              type="text"
              placeholder="Cari kota..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                px-3 py-2.5
                text-[13px]
                rounded-[var(--radius-md)]
                border
                border-[rgb(var(--color-border))]
                bg-[rgb(var(--color-surface))]
                focus:outline-none
                focus:border-[rgb(var(--color-primary))]
                focus:shadow-[var(--shadow-focus)]
                transition
              "
            />

            {/* CLEAR BUTTON */}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="
                  absolute right-2 top-1/2 -translate-y-1/2
                  text-[10px]
                  text-[rgb(var(--color-muted))]
                  hover:text-[rgb(var(--color-primary))]
                "
              >
                ✕
              </button>
            )}
          </div>

        </div>

        {/* CITY GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {visibleCities.map((city) => {
            const slug = city.toLowerCase().replace(/\s+/g, "-");

            return (
              <Link
                key={city}
                href={`/layanan/${service}/${slug}`}
                className="
                  group
                  px-3 py-2.5
                  text-[12.5px]
                  rounded-[var(--radius-md)]
                  border
                  border-[rgb(var(--color-border))]
                  bg-[rgb(var(--color-surface))]
                  text-[rgb(var(--color-muted))]
                  hover:text-[rgb(var(--color-primary))]
                  hover:border-[rgb(var(--color-primary))]
                  hover:bg-[rgb(var(--color-elevated))]
                  transition-all
                "
              >
                <span className="flex items-center justify-between">
                  {city}

                  {/* DOT INDICATOR */}
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--color-primary))] opacity-0 group-hover:opacity-100 transition" />
                </span>
              </Link>
            );
          })}

        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <div className="mt-6 text-center">
            <p className="caption">
              Kota tidak ditemukan. Coba kata kunci lain.
            </p>
          </div>
        )}

        {/* ACTION */}
        {filtered.length > 12 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="btn-outline"
            >
              {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua Kota"}
            </button>
          </div>
        )}

      </div>
    </section>
  );
}