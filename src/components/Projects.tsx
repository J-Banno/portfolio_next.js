"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import projects from "@/lib/project";
import "@/styles/global.scss";

const Projects = () => {
  return (
    <section className="projects" id="projets">
      <h2 className="projects-title">Mes Projets</h2>

      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250,
          modifier: 1.5,
          slideShadows: false,
        }}
        navigation
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="project-carousel"
        loop={true}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="project-card">
            <div className="project-content">
              <div className="project-image-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="project-image"
                  loading="lazy"
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="stack-list">
                  {project.stack.split(", ").map((tech, i) => (
                    <span key={i} className="stack">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                  aria-label="GitHub"
                >
                  <FiGithub size={24} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Projects;
