import Contact from "@/components/Contact";
import { useLang } from "@/providers/LangProvider";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const { lang } = useLang();
  return (
    <div
      className="w-full h-80 flex flex-col justify-center items-center bg-primary-500 dark:bg-primary-950 text-white relative"
      id="contact"
    >
      <div className="relative w-28 h-20">
        <Image src={"/images/logo-white.svg"} alt="logo" fill={true}></Image>
      </div>
      <blockquote className="w-72 md:w-2/6 text-white text-center mt-4">
        {lang == "EN"
          ? "Thank you for visiting my portfolio. Let's collaborate and create exceptional software solutions together!"
          : "Merci de visiter mon portfolio. Travaillons ensemble et créons des solutions logicielles exceptionnelles !"}
      </blockquote>
      <p className="sm uppercase mt-4 md:mt-8">
        {lang == "EN" ? "contact me" : "Contactez-moi"}
      </p>
      <div className="flex justify-center items-center gap-4 mt-2">
        <Contact />
      </div>
      <div className="absolute bottom-1">
        <p className="text-[10px] sm:text-xs uppercase text-white">
          Handcrafted by me © 2023
        </p>
      </div>
    </div>
  );
}
