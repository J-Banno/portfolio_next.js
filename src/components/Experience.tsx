"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { experiences } from "@/lib/experiences";
import "@/styles/global.scss";

const ExperienceTimeline = () => {
  const timelineRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const controlsArray = useRef(experiences.map(() => useAnimation())).current;
  const observedItems = useRef(new Set()).current;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (
            entry.isIntersecting &&
            index !== -1 &&
            !observedItems.has(entry.target)
          ) {
            controlsArray[index].start("visible");
            observedItems.add(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start start", "end end"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "98%"]);

  return (
    <section id="experience" ref={timelineRef} className="exp-section">
      <h2 className="exp-title">Expériences</h2>

      <div className="exp-timeline-container">
        <motion.div
          className="exp-timeline-line"
          style={{
            height: lineHeight,
            maxHeight: "98%",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />

        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              ref={(el) => {
                if (el) itemRefs.current[index] = el;
              }}
              key={exp.id}
              className="exp-timeline-item"
              initial={{ opacity: 0, y: isMobile ? 20 : 40 }}
              animate={controlsArray[index]}
              variants={{
                visible: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: isMobile ? 0.4 : 0.6,
                delay: index * (isMobile ? 0.05 : 0.2),
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
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
              />

              <motion.div
                className="exp-timeline-content"
                initial={{ opacity: 0, y: isMobile ? 20 : 0 }}
                animate={controlsArray[index]}
                variants={{
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{
                  duration: isMobile ? 0.4 : 0.6,
                  ease: "easeOut",
                }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
