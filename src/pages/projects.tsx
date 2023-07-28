import Project from "@/components/Project";
import { Navigation, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

import data from "../data/projects.json";
import { useEffect, useState } from "react";

export default function Projects() {
  const [width, setWidth] = useState(500);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div
      className="snap-always snap-center h-screen w-full flex flex-col justify-start items-center bg-white"
      id="projects"
    >
      <div className="D2 uppercase mt-20">Projects</div>
      <div className="w-80 md:w-2/3 sm text-center py-2 text-dark-400">
        Explore a collection of my diverse web projects, showcasing creativity
        and technical excellence.
      </div>
      <div className="w-full h-full flex justify-center gap-2 items-center  mt-2 overflow-hidden ">
        <Swiper
          slidesPerView={width > 767 ? 3 : 1}
          spaceBetween={5}
          navigation={width > 767}
          pagination={width < 768}
          loop
          effect="coverflow"
          coverflowEffect={{ slideShadows: false }}
          modules={[EffectCoverflow, width > 767 ? Navigation : Pagination]}
          className="mySwiper"
        >
          {data.map((p, i) => (
            <SwiperSlide key={i}>
              <div className=" h-96">
                <Project {...p}></Project>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
