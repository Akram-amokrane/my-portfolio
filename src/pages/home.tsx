import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div
      className="h-screen w-full flex flex-col md:flex-row justify-end pb-10 md:pb-0 md:justify-between items-center bg-white  "
      id="home"
    >
      <div className="z-10">
        <div>
          <motion.div
            initial={{ x: "-1000px" }}
            animate={{ x: "0px" }}
            transition={{ type: "tween" }}
            className="D1 font-semibold whitespace-nowrap"
          >
            HEY, I AM
          </motion.div>
          <motion.div
            initial={{ x: "-1000px" }}
            animate={{ x: "0px" }}
            transition={{ type: "tween", delay: 0.4 }}
            className="D1 font-semibold text-primary-500 whitespace-nowrap"
          >
            AKRAM AMOKRANE
          </motion.div>
        </div>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            delay: 0.7,
            ease: "easeInOut",
            duration: 0.4,
          }}
          className="text-dark-500 whitespace-nowrap"
        >
          Software Engineer / Full Stack developer
        </motion.h2>
      </div>
      <motion.div
        initial={{ x: "+1000px" }}
        animate={{ x: "0px" }}
        transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
        className="w-[600px] h-[600px] absolute top-6 md:right-0"
      >
        <Image
          src={"/images/me-draw-f.png"}
          alt="me drawed"
          fill={true}
        ></Image>
      </motion.div>
    </div>
  );
}
