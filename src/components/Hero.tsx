"use client";
import { motion } from "framer-motion";
import "@/styles/global.scss";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Software developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        Développeur web passionné et expérimenté, j’ai acquis une expertise dans
        la création d’interfaces modernes et performantes. Toujours à l’écoute
        des évolutions technologiques, je m’investis pleinement dans la réussite
        de chaque projet. Alliant rigueur et créativité, je conçois des
        solutions intuitives qui répondent aux besoins des utilisateurs. Habitué
        à travailler en équipe et dans des environnements agiles, je mets mes
        compétences au service de la performance et de l’atteinte des objectifs.
      </motion.p>

      <motion.div
        className="btn-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <motion.a
          href="#projects"
          className="btn btn-primary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrez mes projets
        </motion.a>
      </motion.div>
    </section>
  );
}
