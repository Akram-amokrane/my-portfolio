import Skill from "./Skill";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface IProject {
  title: string;
  type: string;
  description: Array<string>;
  features: Array<string>;
  techs: Array<string>;
  imgs: Array<string>;
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
      <motion.div className="w-full sm:w-2/5 h-2/5 sm:h-full flex flex-col items-center justify-center p-2  bg-[#ADB5BD]">
        <div
          className="w-full h-1/2 "
          style={{
            backgroundImage: `url(${selectedImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="flex justify-center items-center gap-1 flex-wrap ">
          {imgs.map((img, i) => (
            <div
              className="w-24 h-16 cursor-pointer"
              key={i}
              style={{
                backgroundImage: `url(${imgs[i]})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              onClick={() => setSelectedImg(imgs[i])}
            ></div>
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
              <p key={i} className="text-sm text-justify">
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
