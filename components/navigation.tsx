"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Обо мне" },
  { href: "#skills", label: "Навыки" },
  { href: "#projects", label: "Проекты" },
  { href: "#experience", label: "Опыт" },
  { href: "#contact", label: "Контакты" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${
        scrolled ? "top-4 left-4 right-4" : "top-0 left-0 right-0"
      }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${
          scrolled || mobileMenuOpen
            ? "neo-raised rounded-2xl shadow-lg max-w-6xl"
            : "bg-transparent max-w-6xl"
        }`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${
            scrolled ? "h-14" : "h-20"
          }`}
        >
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span
              className={`font-heading font-bold tracking-tight transition-all duration-500 ${
                scrolled ? "text-lg" : "text-xl"
              }`}
            >
              POTEMKIN
            </span>
            <span className="font-heading font-bold text-accent text-lg">
              .
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className={`neo-raised-sm inline-flex items-center gap-2 rounded-xl px-5 py-2 text-sm font-semibold text-background transition-all duration-500 hover:-translate-y-0.5 ${
                scrolled ? "text-xs" : ""
              }`}
              style={{ background: "var(--accent)" }}
            >
              Связаться
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="neo-raised-sm rounded-xl p-2 md:hidden transition-all duration-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-28 pb-8">
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center gap-8">
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-4xl font-heading font-bold text-foreground hover:text-muted-foreground transition-all duration-500 ${
                  mobileMenuOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: mobileMenuOpen ? `${i * 75}ms` : "0ms",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`pt-8 border-t border-border transition-all duration-500 ${
              mobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "300ms" : "0ms" }}
          >
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="neo-raised block text-center rounded-2xl px-6 py-4 text-base font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--accent)" }}
            >
              Связаться
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
