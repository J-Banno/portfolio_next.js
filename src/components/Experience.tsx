"use client";
import { motion } from "framer-motion";
import "@/styles/global.scss";

const experiences = [
  {
    id: 1,
    title: "Développeur Frontend - Egerie",
    date: "2023 - 2024",
    desc: "Développement de composants réutilisables en React.",
  },
  {
    id: 2,
    title: "Développeur Fullstack - Freelance",
    date: "2020 - 2023",
    desc: "Création de solutions web sur mesure avec Next.js.",
  },
  {
    id: 3,
    title: "Diplôme Bac+5 - Epitech",
    date: "2024",
    desc: "Validation des acquis par l'expérience (VAE).",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">Expérience</h2>
      <div className="experience-grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="experience-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{exp.title}</h3>
            <span className="date">{exp.date}</span>
            <p>{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
