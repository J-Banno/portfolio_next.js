"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "@/styles/global.scss";

const educations = [
  {
    title: "🎓 Diplôme Bac+5 - Epitech",
    date: "2024",
    description: "Validation des acquis par l'expérience (VAE).",
  },
  {
    title: "🎓 Bac+2 Développement Web",
    date: "2020",
    description: "Formation spécialisée en développement web et mobile.",
  },
  {
    title: "🎓 Bac Économique et sociale",
    date: "2015",
    description: "Formation spécialisée en développement web et mobile.",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: "100%", opacity: 1 });
    }
  }, [isInView, controls]);

  return (
    <section id="education" className="education-section" ref={ref}>
      <h2 className="neon-title">Formation</h2>

      <div className="education-content">
        {educations.map((edu, index) => (
          <div key={index} className="education-item">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={controls}
              transition={{
                duration: 1.2,
                delay: index * 0.5,
                ease: "easeInOut",
              }}
              className="neon-line"
            />
            <h3>{edu.title}</h3>
            <p className="date">{edu.date}</p>
            <p className="description">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
