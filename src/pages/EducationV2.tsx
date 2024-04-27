import EduDegree from "@/components/EduDegree";
import SkillsBox from "@/components/SkillsBox";
import { motion } from "framer-motion";

import data from "../data/Education.json";
import { useLang } from "@/providers/LangProvider";

export default function EducationV2() {
  const { lang } = useLang();
  return (
    <div
      className="sm:h-screen w-screen sm:w-full flex flex-col justify-around items-center bg-white dark:bg-dark-500"
      id="education"
    >
      <div className="flex flex-col justify-center items-center gap-2 mt-14 sm:mt-24">
        <div className="D2 uppercase py-1 sm:py-2 dark:text-white">
          {lang == "EN" ? "Education" : "Éducation"}
        </div>
        <div className="w-full h-full md:px-8 md:py-2 py-1  flex flex-col sm:flex-row justify-between gap-1 items-center md:mt-2 ">
          {(lang == "EN" ? data.degrees.EN : data.degrees.FR).map((deg, i) => (
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
      <div className="flex flex-col justify-center items-center mt-2 sm:mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
          className="D2 uppercase dark:text-white"
        >
          {lang == "EN" ? "Skills" : "Compétences"}
        </motion.div>
        <div className="w-full h-full px-1 sm:px-4 pb-1 flex sm:justify-center  flex-nowrap sm:flex-wrap gap-1 sm:gap-2 items-start sm:items-center mt-1 sm:mt-6">
          {["Frontend", "Backend", "Databases", "Data science"].map(
            (stack, i) => (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.3 + 0.7 }}
                viewport={{ once: true }}
                key={i}
              >
                <SkillsBox stack={stack} />
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
