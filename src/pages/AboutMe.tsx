import Image from "next/image";
import { motion } from "framer-motion";

import data from "../data/about-me.json";

export default function AboutMe() {
  return (
    <div
      className="h-screen w-screen sm:w-full flex flex-col justify-center items-center bg-white overflow-hidden"
      id="about-me"
    >
      <div className="D2 uppercase mt-24 sm:py-2 md:mb-8">About Me</div>
      <div className="w-full h-auto max-h-full px-2 sm:px-8 flex flex-col sm:flex-row justify-center sm:justify-center items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "tween", ease: "easeIn", duration: 0.3 }}
          className=" w-56 h-56 sm:w-60 sm:h-60 md:w-72 md:h-72 mt-4 md:mt-0 relative rounded-xl overflow-hidden"
        >
          <Image
            src={"/images/me.webp"}
            alt="me in about me"
            fill={true}
          ></Image>
        </motion.div>
        <div className="w-full h-full  md:w-3/5  mt-2 sm:ml-2 overflow-y-auto sm:overflow-hidden flex flex-col items-start justify-start sm:justify-center">
          {data.map((text, i) => (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.3 }}
              viewport={{ once: true }}
              key={i}
              className="text-xs sm:text-sm md:text-base indent-8 text-justify py-1 "
            >
              {text}
            </motion.p>
          ))}

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.9 }}
            viewport={{ once: true }}
            className="inline-block w-full text-center font-semibold text-primary-500 my-1"
          >
            Let&apos;s work together to create exceptional software solutions!
          </motion.blockquote>
        </div>
      </div>
    </div>
  );
}
