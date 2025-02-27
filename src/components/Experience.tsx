"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/lib/experiences";
import "@/styles/global.scss";

const ExperienceTimeline = () => {
  const [isClient, setIsClient] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  return (
    <section id="experience" ref={timelineRef} className="exp-section">
      <h2 className="exp-title">Expériences</h2>
      <div className="exp-timeline-container">
        <div className="exp-timeline-line"></div>
        <div
          className={`exp-timeline ${isClient && isVisible ? "visible" : ""}`}
        >
          {experiences.map((exp, index) => (
            <div key={exp.id} className="exp-timeline-item">
              <div className="exp-timeline-dot"></div>
              <motion.div
                className="exp-timeline-content"
                initial={{ opacity: 0, y: 20 }}
                animate={isClient && isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
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
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
