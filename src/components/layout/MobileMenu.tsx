"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { FiChevronRight, FiX } from "react-icons/fi"

import { menuItems } from "@/data/menuItems"
import NavbarSearch from "@/components/search/NavbarSearch"

import type { BlogPost } from "@/types/blog"

interface Props {
  isOpen: boolean
  onClose: () => void
  posts: BlogPost[]
}

export default function MobileMenu({ isOpen, onClose, posts }: Props) {
  const pathname = usePathname()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleSubmenu = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  /* auto close saat route change */
  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <>
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40
          bg-[rgb(var(--color-dark))]/30
          backdrop-blur-[2px]
          transition-all duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* DRAWER */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-[300px]
          bg-[rgb(var(--color-surface))]
          border-l border-[rgb(var(--color-border))]
          flex flex-col
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between h-[60px] px-5 border-b border-[rgb(var(--color-border))]">
          <span className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[rgb(var(--color-primary))]">
            Menu
          </span>

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="
              inline-flex items-center justify-center
              w-[36px] h-[36px]
              rounded-[var(--radius-md)]
              border border-[rgb(var(--color-border))]
              text-[rgb(var(--color-text))]
              transition-all duration-200
              hover:bg-[rgb(var(--color-elevated))]
            "
          >
            <FiX size={18} />
          </button>
        </div>

        {/* SEARCH */}
        <div className="px-5 py-4 border-b border-[rgb(var(--color-border))]">
          <NavbarSearch posts={posts} />
        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 overflow-y-auto py-3">

          <div className="px-5 pb-2 text-[10px] tracking-[0.14em] uppercase text-[rgb(var(--color-muted))]">
            Navigasi
          </div>

          {menuItems.map((item, index) => {
            const isActive = pathname === item.href

            return (
              <div key={item.href} className="border-b border-[rgb(var(--color-border))]/60">

                <div className="flex items-center justify-between px-5">

                  <Link
                    href={item.href}
                    className={`
                      flex-1 py-3 text-[13px] font-medium
                      transition-colors duration-200
                      ${isActive
                        ? "text-[rgb(var(--color-primary))]"
                        : "text-[rgb(var(--color-text))]"
                      }
                    `}
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      onClick={() => toggleSubmenu(index)}
                      className="
                        w-[32px] h-[32px]
                        flex items-center justify-center
                        rounded-[var(--radius-sm)]
                        transition-all duration-200
                        hover:bg-[rgb(var(--color-elevated))]
                      "
                    >
                      <FiChevronRight
                        size={16}
                        className={`
                          transition-transform duration-200
                          ${openIndex === index ? "rotate-90" : ""}
                        `}
                      />
                    </button>
                  )}

                </div>

                {/* SUBMENU */}
                {item.children && (
                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${openIndex === index
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <div className="pl-7 pr-5 pb-3 space-y-1">

                      {item.children.map((child) => {
                        const isChildActive = pathname === child.href

                        return (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`
                              block py-2 text-[12.5px]
                              transition-colors duration-200
                              ${isChildActive
                                ? "text-[rgb(var(--color-primary))]"
                                : "text-[rgb(var(--color-muted))]"
                              }
                              hover:text-[rgb(var(--color-primary))]
                            `}
                          >
                            {child.label}
                          </Link>
                        )
                      })}

                    </div>
                  </div>
                )}

              </div>
            )
          })}

        </nav>

        {/* CTA SECTION (IMPORTANT FOR CONVERSION) */}
        <div className="px-5 py-4 border-t border-[rgb(var(--color-border))] space-y-3">

          <div className="text-[12px] font-medium text-[rgb(var(--color-dark))]">
            Butuh bantuan bidan?
          </div>

          <p className="text-[11.5px] leading-[1.6] text-[rgb(var(--color-muted))]">
            Konsultasi dan panggil bidan ke rumah untuk ibu hamil, persalinan,
            nifas, dan perawatan bayi dengan layanan profesional.
          </p>

          <div className="flex flex-col gap-2">

            <Link
              href="/kontak"
              className="
                btn-primary text-center
              "
            >
              Hubungi Sekarang
            </Link>

            <Link
              href="/layanan"
              className="
                btn-outline text-center
              "
            >
              Lihat Layanan
            </Link>

          </div>

        </div>

      </aside>
    </>
  )
}