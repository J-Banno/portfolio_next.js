"use client";
import { motion } from "framer-motion";
import "@/styles/global.scss";

const skills = [
  {
    name: "React",
    category: "Frontend",
  },
  {
    name: "Next.js",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Frontend",
  },
  {
    name: "Node.js",
    category: "Backend",
  },
  {
    name: "Express",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    category: "Backend",
  },
  {
    name: "Docker",
    category: "DevOps",
  },
  { name: "AWS", category: "DevOps" },
  {
    name: "Git",
    category: "Outils",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Compétences</h2>
      <div className="skills-cloud">
        {skills.map((skill) => (
          <motion.span
            key={skill.name}
            className="skill-tag"
            data-tooltip-id={skill.name}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
