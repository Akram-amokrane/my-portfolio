import Skill from "./Skill";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AiOutlineGithub, AiOutlinePlayCircle } from "react-icons/ai";
import { useLang } from "@/providers/LangProvider";
import Link from "next/link";

interface IProject {
  title: string;
  type: string;
  description: Array<string>;
  features: Array<string>;
  techs: Array<string>;
  imgs: Array<string>;
  links?: { github?: string; demo?: string };
  onClose: () => void;
}

export default function ProjectDetails({
  title,
  type,
  description,
  features,
  techs,
  imgs,
  links,
  onClose,
}: IProject) {
  const [selectedImg, setSelectedImg] = useState(imgs[0]);
  const [width, setWidth] = useState(500);
  const { lang } = useLang();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div className="w-full h-full relative flex flex-col sm:flex-row  justify-start items-center overflow-hidden border-dark-200 dark:border-dark-800 border-[1px] border-solid md:rounded-xl ">
      <div className="flex justify-between items-center gap-2  h-6 absolute top-2 right-2">
        <XMarkIcon
          className="w-6 h-6 text-dark-400 dark:text-dark-100 hover:text-accent-600 cursor-pointer "
          onClick={onClose}
        />
      </div>
      <motion.div className="w-full sm:w-2/5 h-2/5 sm:h-full flex flex-col items-center justify-center p-2  bg-[#ADB5BD]">
        {links ? (
          <div className="flex justify-between items-center gap-6">
            {links.demo ? (
              <Link href={links.demo} target="blank">
                <AiOutlinePlayCircle className="w-8 h-8 text-dark-500 hover:text-primary-700" />
              </Link>
            ) : (
              ""
            )}
            {links.github ? (
              <Link href={links.github} target="blank">
                <AiOutlineGithub className="w-8 h-8 text-dark-500 hover:text-primary-700" />
              </Link>
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
        <div
          className="w-full h-5/6 sm:h-1/2 "
          style={{
            backgroundImage: `url(${selectedImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="w-full flex justify-center items-center gap-1 flex-nowrap sm:flex-wrap overflow-x-auto">
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
      <div className="h-3/5 sm:h-full w-full sm:w-3/5 flex items-start p-4 overflow-x-hidden overflow-y-auto bg-white dark:bg-dark-400">
        <div>
          <motion.p className="text-xs text-dark-400 dark:text-dark-200">
            {type}
          </motion.p>
          <motion.h1 className="font-semibold dark:text-white">
            {title}
          </motion.h1>
          <motion.div className="mt-1">
            {description.map((desc, i) => (
              <motion.p
                key={i}
                className="text-sm indent-4 text-justify italic dark:text-dark-100"
              >
                {desc}
              </motion.p>
            ))}
          </motion.div>

          <h3 className="font-semibold text-dark-300 pt-3 pb-1 dark:text-dark-200">
            {lang == "En" ? "Features" : "Caractéristiques"}
          </h3>
          <div>
            {features.map((f, i) => (
              <p key={i} className="text-sm text-justify dark:text-dark-100">
                - {f}
              </p>
            ))}
          </div>

          <h3 className="font-semibold text-dark-300 pt-3 pb-1 dark:text-dark-200">
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
