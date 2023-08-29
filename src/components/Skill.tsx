import Image from "next/image";

import {
  SiJavascript,
  SiTypescript,
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiIonic,
  SiTauri,
  SiSass,
  SiKotlin,
  SiFlutter,
  SiPython,
  SiFlask,
  SiTensorflow,
  SiKeras,
  SiFirebase,
  SiMysql,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiVuedotjs,
  SiSpringboot,
  SiSpring,
} from "react-icons/si";
import { FaNodeJs, FaJava } from "react-icons/fa";
import { IconType } from "react-icons";
import { JsxElement } from "typescript";
interface ISkill {
  name: string;
}

interface IIconsDict {
  [index: string]: IconType;
}

export default function Skill({ name }: ISkill) {
  const Icon = () => {
    switch (name) {
      case "Javascript":
        return <SiJavascript size={24} />;
      case "Typescript":
        return <SiTypescript size={24} />;
      case "Angular":
        return <SiAngular size={24} />;
      case "React":
        return <SiReact size={24} />;
      case "NextJs":
        return <SiNextdotjs size={24} />;
      case "NodeJs":
        return <FaNodeJs size={24} />;
      case "Express":
        return <SiExpress size={24} />;
      case "Ionic":
        return <SiIonic size={24} />;
      case "Tauri":
        return <SiTauri size={24} />;
      case "Sass":
        return <SiSass size={24} />;
      case "Kotlin":
        return <SiKotlin size={24} />;
      case "Flutter":
        return <SiFlutter size={24} />;
      case "Python":
        return <SiPython size={24} />;
      case "Flask":
        return <SiFlask size={24} />;
      case "TensorFlow":
        return <SiTensorflow size={24} />;
      case "Keras":
        return <SiKeras size={24} />;
      case "JavaFx":
        return <FaJava size={24} />;
      case "Firebase":
        return <SiFirebase size={24} />;
      case "MySql":
        return <SiMysql size={24} />;
      case "MongoDb":
        return <SiMongodb size={24} />;
      case "TailWind":
        return <SiTailwindcss size={24} />;
      case "Vue":
        return <SiVuedotjs size={24} />;
      case "Spring":
        return <SiSpring size={24} />;
      case "Figma":
        return <SiFigma size={24} />;
    }
  };

  return (
    <div className="group w-20 sm:w-32 md:w-44  flex justify-start items-center px-1 py-1 sm:px-2 sm:py-2 border-dark-200 border-[1px] border-solid rounded-xl hover:scale-105  transition-all duration-300 cursor-default">
      <div className="relative w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 flex justify-center items-center text-dark-500 dark:text-dark-200 group-hover:text-primary-500  dark:hover:text-primary-800">
        <Icon />
      </div>
      <h3 className=" ml-1 sm:ml-2 text-[10px] sm:text-xs md:text-xl dark:text-white ">
        {name}
      </h3>
    </div>
  );
}
