import EduDegree from "@/components/EduDegree";
import Skill from "@/components/Skill";
import Image from "next/image";
import { motion } from "framer-motion";

import data from "../data/Education.json";
import { useRef } from "react";

export default function Education() {
  return (
    <div
      className="bg-primary-300 snap-always snap-center h-screen w-full flex flex-col justify-start items-center bg-white"
      id="education"
    >
      <div className="flex flex-col justify-center items-center  mt-24">
        <div className="D2 uppercase">Education</div>
        <div className="w-full h-full px-8 flex justify-between gap-2 items-center mt-6">
          {data.degrees.map((deg, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.4 }}
              key={i}
            >
              <EduDegree
                date={deg.date}
                title={deg.title}
                from={deg.from}
              ></EduDegree>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="D2 uppercase"
        >
          Skills
        </motion.div>
        <div className="w-full h-full px-8 flex justify-between flex-wrap gap-2 items-center mt-6">
          {data.skills.map((s, i) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 1.1 + i * 0.1 }}
              key={i}
            >
              <Skill name={s}></Skill>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
