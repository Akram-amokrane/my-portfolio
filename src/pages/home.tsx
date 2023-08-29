import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useLang } from "@/providers/LangProvider";
import Contact from "@/components/Contact";

export default function Home() {
  const { theme } = useTheme();
  const { lang } = useLang();

  useEffect(() => {
    console.log(theme);
    console.log(theme == "dark" ? "-dark" : "");
  }, [theme]);

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
            {lang == "EN" ? "HEY, I AM" : "SALUT,JE SUIS"}
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
          {lang == "EN"
            ? "Software Engineer / Full Stack developer"
            : "Ingénieur en logiciel / Développeur Full Stack"}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "tween",
            delay: 0.9,
            ease: "easeInOut",
            duration: 0.4,
          }}
          className="mt-8"
        >
          <Contact />
        </motion.div>
      </div>
      <motion.div
        initial={{ x: "+1000px" }}
        animate={{ x: "0px" }}
        transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
        className="w-80 h-80   sm:w-[600px] sm:h-[600px] absolute top-16 sm:top-12 md:right-0 "
      >
        <Image
          src={`/images/me-draw-f.webp`}
          alt="me drawed"
          width={600}
          height={600}
          className="dark:hidden w-80 h-80 sm:w-[600px] sm:h-[600px]"
        ></Image>
        <Image
          src={`/images/me-draw-f-dark.webp`}
          alt="me drawed"
          width={600}
          height={600}
          className="hidden dark:block"
        ></Image>
      </motion.div>
    </div>
  );
}
