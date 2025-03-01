"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import * as Dialog from "@radix-ui/react-dialog";
import "@/styles/global.scss";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      <nav className="nav">
        <Link href="/" className="logo">
          <span>Jonathan Bannholtzer</span>
        </Link>

        <ul className="nav-links">
          {["experiences", "projets", "compétences", "contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item}`} className="nav-link">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className="menu-icon" aria-label="Toggle menu">
              <FiMenu />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="menu-overlay" />
            <Dialog.Content className="mobile-menu">
              <Dialog.Close asChild>
                <button className="menu-close" aria-label="Close menu">
                  <FiX />
                </button>
              </Dialog.Close>
              <ul className="mobile-nav-links">
                {["experience", "projects", "compétences", "contact"].map(
                  (item) => (
                    <li key={item}>
                      <Dialog.Close asChild>
                        <Link href={`#${item}`} className="mobile-nav-link">
                          {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                      </Dialog.Close>
                    </li>
                  )
                )}
              </ul>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
