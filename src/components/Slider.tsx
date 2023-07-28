import { ReactNode, useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { animate } from "framer-motion";

interface ISlider {
  children: ReactNode[];
}

export default function Slider({ children }: ISlider) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(children.length - 1);
  const [nextIndex, setNextIndex] = useState(1);

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
    animate([element], { scale: 1 }, { type: "spring" });
  };

  useEffect(() => {
    console.log(currentIndex);
    animate(
      [document.getElementsByClassName(".slides")],
      { scale: 0.5 },
      { type: "spring" }
    );
    scrolltoHash(`slide-${currentIndex}`);
  }, [currentIndex]);

  return (
    <div className="w-full h-full flex justify-center items-center gap-4  relative">
      <div className="w-12 h-full flex justify-center items-center left-0">
        <ChevronLeftIcon
          className="w-12 h-12 cursor-pointer hover:text-primary-500"
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % children.length);
          }}
        ></ChevronLeftIcon>
      </div>
      <div className="snap-x snap-mandatory w-full h-full flex justify-center overflow-auto items-center gap-3 px-12">
        {children.map((child, i) => (
          <div
            className="slides snap-always snap-center min-w-[320px] scale-75"
            id={`slide-${i}`}
            key={i}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="w-12 h-full flex justify-center items-center right-0">
        <ChevronRightIcon
          className="w-12 h-12 cursor-pointer hover:text-primary-500"
          onClick={() => {
            setCurrentIndex((currentIndex + 1) % children.length);
          }}
        ></ChevronRightIcon>
      </div>
    </div>
  );
}
