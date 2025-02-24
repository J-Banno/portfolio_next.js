"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Image from "next/image";
import "@/styles/global.scss";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="hero-text">
          <h1>Software Developer</h1>
          <h2>Développeur Full-Stack | React & PHP</h2>
          <p>
            Développeur web passionné et expérimenté, j’ai acquis une expertise
            dans la création d’interfaces modernes et performantes. Toujours à
            l’écoute des évolutions technologiques, je m’investis pleinement
            dans la réussite de chaque projet.
          </p>
          <div className="hero-buttons">
            <a
              href="/CV-Bannholtzer-Jonathan.pdf"
              download
              className="btn btn-primary"
              aria-label="cv"
            >
              <FaDownload /> Mon CV
            </a>
            <a
              href="https://www.linkedin.com/in/jonathan-bannholtzer/"
              target="_blank"
              className="btn btn-secondary"
              aria-label="LinkedIn"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/J-Banno"
              target="_blank"
              className="btn btn-secondary"
              aria-label="GitHub"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Image
          src="/profile1.jpeg"
          alt="Photo de profil de Jonathan Bannholtzer"
          width={200}
          height={200}
          className="profile-pic"
          priority
        />
      </motion.div>
    </section>
  );
}
