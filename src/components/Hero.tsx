"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";
import Image from "next/image";
import "@/styles/global.scss";

export default function Hero() {
  const animatedText = "| Conception Full-Stack & Performance";

  return (
    <section id="hero" className="hero-section">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="hero-text">
          <h1>Software Developer</h1>
          <h2>
            Développeur Web{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ staggerChildren: 0.06 }}
              className="animated-text"
            >
              {animatedText.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </h2>
          <p>
            Développeur web passionné et expérimenté, j’ai acquis une expertise
            dans la création d’interfaces modernes et performantes. Mon objectif
            est de concevoir des solutions efficaces et adaptées aux besoins
            réels, tout en restant attentif aux évolutions technologiques.
            Chaque projet est une occasion d’apporter des réponses concrètes, de
            relever des défis techniques et de produire un travail soigné. Je
            m’engage pleinement dans la réussite des missions qui me sont
            confiées.
          </p>

          <div className="hero-buttons">
            <a
              href="/CV_Bannholtzer_Jonathan.pdf"
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
          src="/profile1.webp"
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
