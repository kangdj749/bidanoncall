"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { FiMenu } from "react-icons/fi"

import NavbarSearch from "@/components/search/NavbarSearch"
import MobileMenu from "@/components/layout/MobileMenu"
import Image from "next/image"
import { menuItems } from "@/data/menuItems"
import type { BlogPost } from "@/types/blog"
import { cloudinaryImage } from "@/lib/cloudinaryImage";

interface Props {
  posts: BlogPost[]
}

export default function NavbarClient({ posts }: Props) {
  const logo =
    "https://res.cloudinary.com/de7fqcvpf/image/upload/v1774871761/logo_bidanoncall2_eo43np.png";

  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const handleOpen = useCallback(() => {
    setMobileOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setMobileOpen(false)
  }, [])

  return (
    <>
      <nav
        className="
          fixed top-0 w-full z-50
          bg-[rgb(var(--color-surface))]
          border-b border-[rgb(var(--color-border))]
          backdrop-blur supports-[backdrop-filter]:bg-[rgb(var(--color-surface)/0.85)]
        "
      >
        <div className="container-main flex items-center justify-between h-[60px] md:h-[68px] gap-4">

        {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={cloudinaryImage(logo, "logo")}
              alt="Bangun.in"
              width={170}
              height={100}
              priority
              className="
                h-[24px] md:h-[28px]
                w-auto object-contain
              "
            />
          </Link>

          {/* DESKTOP SEARCH */}
          <div className="flex-1 max-w-[440px] hidden md:block">
            <NavbarSearch posts={posts} />
          </div>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 text-[13px] font-medium">

            {menuItems.map((item) => (
              <li key={item.href} className="relative group">

                <Link
                  href={item.href}
                  className="
                    relative py-2
                    text-[rgb(var(--color-text))]
                    transition-colors duration-200
                    hover:text-[rgb(var(--color-primary))]
                  "
                >
                  {item.label}
                </Link>

                {/* SUBMENU */}
                {item.children && (
                  <ul
                    className="
                      absolute left-0 top-full mt-3 w-[220px]
                      rounded-[var(--radius-md)]
                      bg-[rgb(var(--color-surface))]
                      border border-[rgb(var(--color-border))]
                      shadow-[var(--shadow-elevated)]
                      backdrop-blur
                      opacity-0 invisible translate-y-2
                      group-hover:opacity-100
                      group-hover:visible
                      group-hover:translate-y-0
                      transition-all duration-200
                      overflow-hidden
                    "
                  >
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="
                            block px-4 py-3 text-[12.5px]
                            text-[rgb(var(--color-text))]
                            transition-all duration-200
                            hover:bg-[rgb(var(--color-primary)/0.06)]
                            hover:text-[rgb(var(--color-primary))]
                          "
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

              </li>
            ))}

            {/* CTA */}
            <li>
              <Link
                href="/kontak"
                className="
                  ml-2 inline-flex items-center justify-center
                  px-5 py-[10px]
                  text-[12.5px] font-medium
                  rounded-[var(--radius-md)]
                  bg-[rgb(var(--color-primary))]
                  text-[rgb(var(--color-white))]
                  shadow-[var(--shadow-soft)]
                  transition-all duration-300
                  hover:opacity-90 hover:-translate-y-[1px]
                "
              >
                Konsultasi
              </Link>
            </li>

          </ul>

          {/* MOBILE BUTTON */}
          <div className="flex items-center md:hidden">
            <button
              onClick={handleOpen}
              aria-label="Open Menu"
              className="
                inline-flex items-center justify-center
                w-[40px] h-[40px]
                rounded-[var(--radius-md)]
                border border-[rgb(var(--color-border))]
                bg-[rgb(var(--color-surface))]
                text-[rgb(var(--color-text))]
                transition-all duration-200
                hover:bg-[rgb(var(--color-elevated))]
              "
            >
              <FiMenu size={20} />
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={handleClose}
        posts={posts}
      />
    </>
  )
}