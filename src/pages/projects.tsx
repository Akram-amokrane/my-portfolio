import Project from "@/components/Project";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

import data from "../data/projects.json";
import { useEffect } from "react";

export default function Projects() {
  return (
    <div
      className="bg-primary-300 snap-always snap-center h-screen w-full flex flex-col justify-start items-center bg-white"
      id="projects"
    >
      <div className="D2 uppercase mt-24">Projects</div>
      <div className="w-full h-full flex justify-center items-center mt-2">
        <Swiper
          spaceBetween={30}
          effect={"coverflow"}
          navigation={{ enabled: true }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((p, i) => (
            <SwiperSlide
              key={i}
              style={{ width: 300 + "px", height: 400 + "px" }}
            >
              <Project {...p}></Project>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
