"use client";
import { motion } from "framer-motion";
import "@/styles/global.scss";

const socialLinks = [
  { name: "GitHub", url: "https://github.com/", icon: "🐙" },
  { name: "LinkedIn", url: "https://linkedin.com/", icon: "🔗" },
  { name: "Twitter", url: "https://twitter.com/", icon: "🐦" },
];

export default function Footer() {
  return (
    <motion.footer
      className="footer-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="footer-text">Merci de votre visite 🚀</p>
      <div className="footer-links">
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {link.icon} {link.name}
          </motion.a>
        ))}
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} - Tous droits réservés
      </p>
    </motion.footer>
  );
}
