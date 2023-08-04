import EduDegree from "@/components/EduDegree";
import Skill from "@/components/Skill";
import { motion } from "framer-motion";

import data from "../data/Education.json";

export default function Education() {
  return (
    <div
      className="sm:h-screen w-screen sm:w-full flex flex-col justify-around items-center bg-white"
      id="education"
    >
      <div className="flex flex-col justify-center items-center gap-2 mt-14 sm:mt-24">
        <div className="D2 uppercase py-1 sm:py-2">Education</div>
        <div className="w-full h-full md:px-8 md:py-2 py-1  flex flex-col sm:flex-row justify-between gap-1 items-center md:mt-2 ">
          {data.degrees.map((deg, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
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
      <div className="flex flex-col justify-center items-center mt-2 sm:mt-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="D2 uppercase"
        >
          Skills
        </motion.div>
        <div className="w-full h-full px-1 sm:px-4 pb-1 flex justify-center  flex-wrap gap-1 sm:gap-2 items-center mt-1 sm:mt-6">
          {data.skills.map((s, i) => (
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [1, 1.1, 1] }}
              transition={{ delay: 0.8 + i * 0.1 }}
              viewport={{ once: true }}
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
