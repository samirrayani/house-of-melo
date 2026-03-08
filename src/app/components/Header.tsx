"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";

const sections = [
  { label: "Baltimore", href: "/baltimore", number: "01" },
  { label: "The Rise", href: "/the-rise", number: "02" },
  { label: "Greatness", href: "/greatness", number: "03" },
  { label: "Beyond the Court", href: "/beyond", number: "04" },
  { label: "Community", href: "/community", number: "05" },
  { label: "The Memoir", href: "/the-memoir", number: "06" },
  { label: "The Exhibition", href: "/exhibition", number: "07" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-bg/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 py-4 md:py-5">
          <Link href="/" className="relative z-50">
            <Image
              src="/logo.png"
              alt="House of Melo"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 flex flex-col gap-1.5 p-2 group"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-7 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-7 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "opacity-0" : "group-hover:w-5"
              }`}
            />
            <span
              className={`block w-7 h-[1.5px] bg-text transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[1px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {menuOpen &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[999] bg-bg flex items-center justify-center">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 p-2 z-50"
              aria-label="Close menu"
            >
              <span className="block w-7 h-[1.5px] bg-text rotate-45 translate-y-[1px]" />
              <span className="block w-7 h-[1.5px] bg-text -rotate-45 -translate-y-[1px]" />
            </button>

            <nav className="flex flex-col gap-2 px-8 w-full max-w-2xl">
              {sections.map((section, i) => (
                <Link
                  key={section.href}
                  href={section.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-baseline gap-6 py-3 border-b border-border hover:border-primary transition-colors"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  <span className="font-mono text-xs text-text-muted group-hover:text-primary transition-colors">
                    {section.number}
                  </span>
                  <span className="font-display text-3xl md:text-5xl italic text-text group-hover:text-primary transition-colors">
                    {section.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>,
          document.body
        )}
    </>
  );
}
