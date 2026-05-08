"use client";

import { useState } from "react";
import Link from "next/link";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("light");
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#departments", label: "Departments" },
    { href: "#partnership", label: "Partnership" },
    { href: "#apply", label: "Careers" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b">
      <div className="container mx-auto px-8 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="h-10 w-10 bg-primary flex items-center justify-center rounded">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0f2233"
              strokeWidth="3"
              strokeLinecap="square"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight uppercase">
            NorthStar <span className="text-primary">Express</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10 text-[13px] font-bold tracking-wider uppercase">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-item nav-link text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <button className="bg-primary text-[#0f2233] px-6 py-2.5 rounded hover:bg-accent transition-all">
            Coming soon!
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-2 text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-2 text-sm font-bold uppercase tracking-wider"
          >
            {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            Toggle Theme
          </button>
        </div>
      )}
    </nav>
  );
}
