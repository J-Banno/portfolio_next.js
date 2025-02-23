"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "@/styles/global.scss";
import { educations } from "@/lib/educations";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay },
    }),
  };

  return (
    <section
      id="education"
      className="educ-section"
      ref={ref}
      aria-labelledby="educ-title"
    >
      <motion.h2
        id="educ-title"
        className="educ-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUp}
        custom={0.1}
      >
        Formation
      </motion.h2>

      <div className="educ-content">
        {educations.map((edu, index) => (
          <motion.div
            key={edu.title}
            className="educ-item"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={index * 0.2}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 0px 20px rgba(209, 181, 124, 0.5)",
            }}
          >
            <h3 className="educ-item-title">{edu.title}</h3>
            <p className="educ-item-date">{edu.date}</p>
            <p className="educ-item-description">{edu.description}</p>
            <motion.div
              className="educ-line"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: index * 0.2 }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
