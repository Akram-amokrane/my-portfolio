"use client";

import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useEffect, useState } from "react";

import Project from "@/components/Project";
import ProjectDetails from "@/components/ProjectDetails";

import data from "../data/projects.json";

import { motion } from "framer-motion";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLang } from "@/providers/LangProvider";

interface IProjectDetails {
  id: number;
  title: string;
  type: string;
  description: Array<string>;
  features: Array<string>;
  techs: Array<string>;
  imgs: Array<string>;
  bg: string;
}

export default function Projects() {
  const [width, setWidth] = useState(500);
  const [selectedProject, setSelectedProject] = useState(data.EN[0]);
  const [showDetails, setShowDetails] = useState(false);
  const { lang } = useLang();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    });
  }, []);

  const setProjectToShow = (projectDetails: IProjectDetails) => {
    setSelectedProject(projectDetails);
    setShowDetails(true);
  };

  return (
    <div
      className="h-screen md:h-screen w-screen sm:w-full flex flex-col justify-start items-center bg-white dark:bg-dark-500"
      id="projects"
    >
      <div className="D2 uppercase mt-16 md:mt-24 dark:text-white">
        {lang == "EN" ? "Projects" : "Projets"}
      </div>
      <div className="w-72 sm:w-96  sm text-center py-2 text-dark-400 dark:text-dark-200">
        {lang == "EN"
          ? "Explore a collection of my diverse projects, showcasing creativity and technical excellence."
          : "Explorez une collection de mes différents projets, mettant en avant la créativité et l'excellence technique."}
      </div>
      <div className="w-[300px] md:w-full h-full   mt-2 overflow-hidden ">
        {data.EN.length > 0 && (
          <Swiper
            slidesPerView={width > 768 ? 3 : 1}
            // spaceBetween={5}
            navigation={width > 768}
            pagination={{ enabled: width < 768, clickable: true }}
            centeredSlides
            slidesPerGroup={1}
            loop={true}
            effect="coverflow"
            coverflowEffect={{
              slideShadows: false,
              scale: 0.9,
            }}
            modules={[EffectCoverflow, Navigation, Pagination]}
            className="mySwiper"
          >
            {(lang == "EN" ? data.EN : data.FR).map((p, i) => (
              <SwiperSlide key={p.id}>
                <div
                  className="h-80 md:h-96"
                  onClick={() => setProjectToShow(p)}
                >
                  <Project {...p}></Project>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
      {showDetails && (
        <motion.div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50   ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="w-screen md:w-5/6 h-screen md:h-5/6  drop-shadow-2xl z-10"
          >
            <ProjectDetails
              {...selectedProject}
              onClose={() => setShowDetails(false)}
            ></ProjectDetails>
          </motion.div>
          <motion.div
            animate={{ width: "100%", height: "100%" }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="absolute w-1 h-1 bg-[#00000030] dark:bg-[#FFFFFF30] z-0"
            onClick={() => setShowDetails(false)}
          ></motion.div>
        </motion.div>
      )}
    </div>
  );
}
