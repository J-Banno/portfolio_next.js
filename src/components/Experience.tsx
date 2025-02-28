"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { experiences } from "@/lib/experiences";
import "@/styles/global.scss";

const ExperienceTimeline = () => {
  const timelineRef = useRef<HTMLElement | null>(null);
  const controlsArray = experiences.map(() => useAnimation());
  const refsArray = experiences.map(() => useRef<HTMLDivElement | null>(null));

  useEffect(() => {
    const handleScroll = () => {
      refsArray.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            controlsArray[index].start("visible");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controlsArray, refsArray]);

  return (
    <section id="experience" ref={timelineRef} className="exp-section">
      <h2 className="exp-title">Expériences</h2>
      <div className="exp-timeline-container">
        <motion.div
          className="exp-timeline-line"
          initial={{ height: 0 }}
          animate={{ height: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              ref={refsArray[index]}
              key={exp.id}
              className="exp-timeline-item"
              initial={{ opacity: 0, y: 40 }}
              animate={controlsArray[index]}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.div
                className="exp-timeline-dot"
                initial={{ opacity: 0 }}
                animate={controlsArray[index]}
                variants={{
                  visible: { opacity: 1 },
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              />

              <div className="exp-timeline-content">
                <h3 className="exp-title-text">{exp.title}</h3>
                <span className="exp-date">{exp.date}</span>

                <ul className="exp-missions">
                  {exp.missions.map((mission, i) => (
                    <li key={i}>{mission}</li>
                  ))}
                </ul>

                <div className="exp-stack">
                  {exp.stack.map((tech) => (
                    <span key={tech} className="exp-tech">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
