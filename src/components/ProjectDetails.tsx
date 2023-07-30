import Mac from "./devices/Mac";
import Skill from "./Skill";
import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface IProject {
  title: string;
  type: string;
  description: Array<string>;
  features: Array<string>;
  techs: Array<string>;
  imgs: Array<{ type: string; name: string }>;
  bg: string;
  onClose: () => void;
}

export default function ProjectDetails({
  title,
  type,
  description,
  features,
  techs,
  imgs,
  bg,
  onClose,
}: IProject) {
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const [width, setWidth] = useState(500);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-full h-full relative flex flex-col sm:flex-row  justify-start items-center overflow-hidden border-dark-200 border-[1px] border-solid md:rounded-xl ">
      <div className="w-6 h-6 absolute top-2 right-2">
        <XMarkIcon
          className="w-6 h-6 text-dark-400 hover:text-accent-600 cursor-pointer "
          onClick={onClose}
        />
      </div>
      <motion.div className="w-full sm:w-2/5 h-2/5 sm:h-full flex flex-col items-center justify-center p-2  bg-dark-300">
        <div>
          <Mac
            name={selectedImg.name}
            size={width < 640 ? 0.08 : width / 10000}
          ></Mac>
        </div>
        <div className="flex justify-center items-center gap-1 flex-wrap ">
          {imgs.map((img, i) => (
            <svg
              key={img.name}
              width={60}
              height={60}
              viewBox="0 0 2560 1600"
              onClick={() => setSelectedImg(img)}
              className="cursor-pointer"
            >
              <rect width="2560" height="1600" fill={`url(#${img.name}${i})`} />
              <defs>
                <pattern
                  id={`${img.name}${i}`}
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref={`#${img.name}`}
                    transform="matrix(0.000813802 0 0 0.00130208 -0.0558268 0)"
                  />
                </pattern>
              </defs>
            </svg>
          ))}
        </div>
      </motion.div>
      <div className="h-3/5 sm:h-full w-full sm:w-3/5 flex items-start p-4 overflow-x-hidden overflow-y-auto bg-white">
        <div>
          <motion.p className="text-xs text-dark-400">{type}</motion.p>
          <motion.h1 className="font-semibold">{title}</motion.h1>
          <motion.div className="mt-1">
            {description.map((desc, i) => (
              <motion.p
                key={i}
                className="text-sm indent-4 text-justify italic"
              >
                {desc}
              </motion.p>
            ))}
          </motion.div>

          <h3 className="font-semibold text-dark-300 pt-3 pb-1">Features</h3>
          <div>
            {features.map((f, i) => (
              <p key={i} className="text-xs text-justify">
                - {f}
              </p>
            ))}
          </div>

          <h3 className="font-semibold text-dark-300 pt-3 pb-1">
            Technologies
          </h3>
          <div className="flex gap-2 flex-wrap">
            {techs.map((t, i) => (
              <Skill key={i} name={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
