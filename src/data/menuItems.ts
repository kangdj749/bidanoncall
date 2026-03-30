// src/constants/menuItems.ts

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },

  {
    label: "Tentang Kami",
    href: "/tentang",
    children: [
      { label: "Tentang Layanan", href: "/tentang#hero" },
      { label: "Cerita Kami", href: "/tentang#cerita" },
      { label: "Visi & Misi", href: "/tentang#visi-misi" },
      { label: "Tim Bidan", href: "/tentang#tim" },
      { label: "Nilai Pelayanan", href: "/tentang#nilai" },
    ],
  },

  {
    label: "Layanan",
    href: "/layanan",
    children: [
      { label: "Overview Layanan", href: "/layanan" },

      // Core services
      {
        label: "Paket Ibu Hamil",
        href: "/layanan/paket-hamil",
      },
      {
        label: "Doula Persalinan",
        href: "/layanan/doula-persalinan",
      },
      {
        label: "Paket Nifas",
        href: "/layanan/paket-nifas",
      },
      {
        label: "Perawatan Bayi",
        href: "/layanan/perawatan-bayi",
      },
      {
        label: "Jasa Infus",
        href: "/layanan/jasa-infus",
      },
    ],
  },

  {
    label: "Blog",
    href: "/blog",
  },

  {
    label: "Testimoni",
    href: "/testimoni",
  },

  {
    label: "Kontak",
    href: "/kontak",
  },
];