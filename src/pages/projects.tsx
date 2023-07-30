"use client";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useEffect, useState } from "react";

import Project from "@/components/Project";
import ProjectDetails from "@/components/ProjectDetails";

import data from "../data/projects.json";

import { AnimatePresence, motion } from "framer-motion";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface IProjectDetails {
  id: number;
  title: string;
  type: string;
  description: Array<string>;
  features: Array<string>;
  techs: Array<string>;
  imgs: Array<{ type: string; name: string }>;
  bg: string;
}

export default function Projects() {
  const [width, setWidth] = useState(500);
  const [selectedProject, setSelectedProject] = useState(data[0]);
  const [showDetails, setShowDetails] = useState(false);

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
      className="snap-always snap-center h-screen w-full flex flex-col justify-start items-center bg-white mb-2s"
      id="projects"
    >
      <div className="D2 uppercase mt-20">Projects</div>
      <div className="w-80 md:w-2/3 sm text-center py-2 text-dark-400">
        Explore a collection of my diverse web projects, showcasing creativity
        and technical excellence.
      </div>
      <div className="w-full h-full flex justify-center gap-2 items-center  mt-2 overflow-hidden ">
        <Swiper
          slidesPerView={width > 768 ? 3 : 1}
          spaceBetween={5}
          navigation={width > 768}
          pagination={width < 768}
          loop
          effect="coverflow"
          coverflowEffect={{ slideShadows: false }}
          modules={[EffectCoverflow, width > 767 ? Navigation : Pagination]}
          className="mySwiper"
        >
          {data.map((p, i) => (
            <SwiperSlide key={p.id}>
              <div className=" h-96" onClick={() => setProjectToShow(p)}>
                <Project {...p}></Project>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {showDetails && (
        <motion.div className="w-full h-full fixed top-0 left-0 flex justify-center items-center z-50   ">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            className="w-screen md:w-5/6 h-screen md:h-5/6  drop-shadow-2xl z-10"
          >
            <ProjectDetails
              {...selectedProject}
              onClose={() => setShowDetails(false)}
            ></ProjectDetails>
          </motion.div>
          <motion.div
            animate={{ width: "100%", height: "100%" }}
            transition={{ delay: 0.7, duration: 0.3 }}
            className="absolute w-1 h-1 bg-[#00000030] z-0"
          ></motion.div>
        </motion.div>
      )}
    </div>
  );
}
