import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div
      className="h-screen w-full flex flex-col md:flex-row justify-end pb-10 md:pb-0 md:justify-between items-center bg-white dark:bg-dark-500 "
      id="home"
    >
      <div className="z-10">
        <div>
          <motion.div
            initial={{ x: "-1000px" }}
            animate={{ x: "0px" }}
            transition={{ type: "tween" }}
            className="text-2xl sm:D1 font-semibold whitespace-nowrap dark:text-dark-100"
          >
            HEY, I AM
          </motion.div>
          <motion.div
            initial={{ x: "-1000px" }}
            animate={{ x: "0px" }}
            transition={{ type: "tween", delay: 0.4 }}
            className="text-2xl sm:D1 font-semibold text-primary-500 whitespace-nowrap"
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
          className="text-sm font-semibold sm:font-normal sm:text-2xl text-dark-500 whitespace-nowrap dark:text-dark-200"
        >
          Software Engineer / Full Stack developer
        </motion.h2>
      </div>
      <motion.div
        initial={{ x: "+1000px" }}
        animate={{ x: "0px" }}
        transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
        className="w-full h-2/3  sm:w-[600px] sm:h-[600px] absolute top-16 sm:top-12 md:right-0 "
      >
        <Image
          src={`/images/me-draw-f${theme == "dark" ? "-dark" : ""}.webp`}
          alt="me drawed"
          width={600}
          height={600}
        ></Image>
      </motion.div>
    </div>
  );
}
