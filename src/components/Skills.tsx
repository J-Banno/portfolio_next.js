"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import "@/styles/global.scss";
import { skills, categories } from "@/lib/skills"; // ✅ Correct !

export default function SkillsCloud() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const displayedSkills =
    selectedCategory === "Tous"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const skillRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // ✅ Refactorisation avec useCallback pour éviter la recréation de la fonction à chaque render
  const assignRef = useCallback((el: HTMLSpanElement | null) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  }, []);

  useEffect(() => {
    if (!skillRefs.current.length) return;

    const isMobile = window.innerWidth <= 768;
    const amplitudeX = isMobile ? 40 : 90;
    const amplitudeY = isMobile ? 15 : 30;

    skillRefs.current.forEach((el) => {
      if (!el || gsap.isTweening(el)) return; // ✅ Évite d’animer un élément déjà en mouvement

      gsap.to(el, {
        x: `+=${Math.random() * amplitudeX - amplitudeX / 2}`,
        y: `+=${Math.random() * amplitudeY - amplitudeY / 2}`,
        duration: 1.5 + Math.random() * 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        delay: Math.random() * 0.5,
      });
    });
  }, [selectedCategory]);

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Compétences</h2>

      {/* 🎯 Filtres stylisés */}
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
            {selectedCategory === category && <span className="underline" />}
          </button>
        ))}
      </div>

      {/* 🌟 Nuage de compétences animé */}
      <div className="skills-cloud">
        {displayedSkills.map((skill, index) => (
          <motion.span
            key={skill.name}
            className="skill-tag"
            ref={assignRef}
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.05 }} // ✅ Stagger effect
            whileHover={{
              scale: 1.15,
              boxShadow: "0px 6px 20px rgba(209, 181, 124, 0.6)",
            }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
