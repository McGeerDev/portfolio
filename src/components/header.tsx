"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/blogs", label: "BLOG" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/resume", label: "RESUME" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex flex-col py-6">
      <nav className="flex w-full items-center justify-between">
        <div className="hidden text-2xl font-bold tracking-wider md:flex">
          <Link href="/">DM</Link>
        </div>

        <div className="hidden gap-4 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="tracking-widest hover:text-gray-600"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden space-x-4 md:flex">
          <a
            href="https://github.com/McGeerDev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/devan-mcgeer/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a href="mailto:mcgeer.devan@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

        {/* Mobile */}
        <div className="flex w-full items-center justify-between md:hidden">
          <Link href="/" className="text-2xl font-bold tracking-wider">
            DM
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="flex flex-col border-t border-black pt-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm uppercase tracking-widest hover:text-gray-600"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex gap-4 border-t border-black pt-4">
            <a
              href="https://github.com/McGeerDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/devan-mcgeer/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:mcgeer.devan@gmail.com" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
