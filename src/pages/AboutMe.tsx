import Image from "next/image";
import { motion } from "framer-motion";

import data from "../data/about-me.json";

export default function AboutMe() {
  return (
    <div
      className="sm:h-screen w-full flex flex-col justify-between items-center bg-white"
      id="about-me"
    >
      <div className="D2 uppercase mt-16 sm:mt-24">About Me</div>
      <div className="w-full h-full px-2 sm:px-8 flex flex-col md:flex-row justify-center sm:justify-between items-center">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "tween", ease: "easeIn", duration: 0.3 }}
          className="hidden sm:block w-3/5 h-1/4 md:w-2/5 md:h-5/6 mt-4 md:mt-0 relative rounded-xl overflow-hidden"
        >
          <Image
            src={"/images/me.jpg"}
            alt="me in about me"
            fill={true}
            loading="lazy"
          ></Image>
        </motion.div>
        <div className="w-full h-full sm:h-auto md:w-3/5 h-3/4 mt-2 md:ml-2 overflow-y-auto sm:overflow-hidden flex flex-col items-start justify-center">
          {data.map((text, i) => (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: i * 0.3 }}
              viewport={{ once: true }}
              key={i}
              className="text-xs md:sm indent-8 text-justify py-1 "
            >
              {text}
            </motion.p>
          ))}

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 1.2 }}
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
