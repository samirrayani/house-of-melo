"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Legacy", href: "#legacy" },
  { label: "Press", href: "#press" },
  { label: "Partners", href: "#partners" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-[1520px] mx-auto flex items-center justify-between px-6 py-4 md:py-5">
          <a href="#" className="relative z-50">
            <Image
              src="/logo.png"
              alt="House of Melo"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm uppercase tracking-[0.2em] text-white/80 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative z-50 md:hidden flex flex-col gap-1.5 p-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {menuOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center gap-8">
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-5 right-6 p-2"
              aria-label="Close menu"
            >
              <span className="block w-6 h-[2px] bg-white rotate-45 translate-y-[1px]" />
              <span className="block w-6 h-[2px] bg-white -rotate-45 -translate-y-[1px]" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-3xl uppercase tracking-[0.3em] text-white hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
