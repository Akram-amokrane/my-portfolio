import Project from "@/components/Project";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import data from "../data/projects.json";
import { useEffect } from "react";
import Slider from "@/components/Slider";

export default function Projects() {
  return (
    <div
      className="bg-primary-300 snap-always snap-center h-screen w-full flex flex-col justify-start items-center bg-white"
      id="projects"
    >
      <div className="D2 uppercase mt-20">Projects</div>
      <div className="w-full h-full flex justify-center gap-2 items-center  mt-2 overflow-hidden">
        <Swiper
          slidesPerView={3}
          spaceBetween={5}
          navigation
          loop
          effect="coverflow"
          coverflowEffect={{ slideShadows: false }}
          modules={[EffectCoverflow, Navigation]}
          className="mySwiper"
        >
          {data.map((p, i) => (
            <SwiperSlide key={i}>
              <div className="w-80 h-96">
                <Project {...p}></Project>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
