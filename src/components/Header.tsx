"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import "@/styles/global.scss";

export default function Header() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolling ? "scrolled" : ""}`}>
      <nav className="nav">
        {/* Logo */}
        <Link href="/" className="logo">
          <span>Jonathan Bannholtzer</span>
        </Link>

        {/* Menu Desktop */}
        <ul className="nav-links">
          {["about", "experience", "projects", "skills", "contact"].map(
            (item) => (
              <li key={item}>
                <Link href={`#${item}`} className="nav-link">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Menu Burger Mobile */}
        <div className="burger-menu">
          <button onClick={() => setMenuOpen(!menuOpen)} className="menu-icon">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="mobile-menu"
          >
            <ul className="mobile-nav-links">
              {["about", "experience", "projects", "skills", "contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item}`}
                      className="mobile-nav-link"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
