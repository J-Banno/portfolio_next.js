"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      const line = timelineRef.current.querySelector(
        ".timeline-line"
      ) as HTMLDivElement | null;
      if (!line) return;

      // Animation fluide de la ligne centrale
      gsap.fromTo(
        line,
        { height: "0%" },
        {
          height: "100%",
          duration: 2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 85%",
            end: "bottom 10%",
            scrub: 1.5,
          },
        }
      );

      // Animation des expériences
      itemsRef.current.forEach((item, index) => {
        if (item) {
          gsap.fromTo(
            item,
            {
              opacity: 0,
              x: isMobile ? 0 : index % 2 === 0 ? -100 : 100,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
                end: "center 40%",
                scrub: 1.5,
              },
            }
          );
        }
      });
    }
  }, [isMobile]);

  return (
    <section className="timeline-section">
      <h2 className="timeline-title">Mon Expérience</h2>
      <div className="timeline" ref={timelineRef}>
        <div className="timeline-line" />
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-item ${isMobile ? "mobile" : ""}`}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
          >
            <div className="timeline-marker" />
            <div className="timeline-content">
              <span className="timeline-year">{exp.date}</span>
              <h3>{exp.title}</h3>
              <p className="description">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
