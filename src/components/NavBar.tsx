"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  IdentificationIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ChatBubbleLeftIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";

import { useLang } from "@/providers/LangProvider";

export default function NavBar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();

  const navLinks = [
    {
      id: "home",
      name: lang == "EN" ? "Home" : "Accueil",
      default: true,
      icon: HomeIcon,
    },
    {
      id: "projects",
      name: lang == "EN" ? "Projects" : "Projets",
      default: false,
      icon: BriefcaseIcon,
    },
    {
      id: "education",
      name: lang == "EN" ? "Education" : "Éducation",
      default: false,
      icon: AcademicCapIcon,
    },
    {
      id: "about-me",
      name: lang == "EN" ? "About me" : "À propos de moi",
      default: false,
      icon: IdentificationIcon,
    },
  ];

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "nearest",
    });
  };

  const toggleTheme = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };

  const toggleLanguage = () => {
    setLang(lang == "EN" ? "FR" : "EN");
  };

  return (
    <nav className="container fixed bg-white dark:bg-dark-500 z-50 top-0 md:top-4 left-1/2 -translate-x-1/2 flex justify-between items-center w-full  md:w-4/5 lg:w-3/4 h-fit  px-3 py-2 rounded-b-xl sm:rounded-2xl drop-shadow-md shadow-dark-200 ">
      <div className="relative w-12 h-8 sm:w-16 sm:h-12">
        <Image src={`/images/logo.svg`} alt="my logo" fill={true} />
      </div>

      <div className="w-fit h-fit   flex justify-center items-center">
        {navLinks.map((link) => (
          <label
            key={link.id}
            htmlFor={link.id + "id"}
            className="flex flex-col justify-center items-center mx-0 sm:mx-2 cursor-pointer"
          >
            <input
              type="radio"
              name="navlink"
              id={link.id + "id"}
              className="peer hidden"
              defaultChecked={link.default}
            />
            <div
              onClick={() => scrolltoHash(link.id)}
              className="text-xl dark:text-white peer-checked:text-primary-500 dark:peer-checked:text-primary-400"
            >
              <div>
                {
                  <link.icon className="md:hidden w-6 h-6 sm:w-8 sm:h-8 mx-3 sm:mx-5 md:mx-8"></link.icon>
                }
              </div>
              <div className="hidden md:block ">{link.name}</div>
            </div>
            <div className="w-8 h-1 rounded-full hidden bg-primary-500 dark:bg-primary-400 peer-checked:block "></div>
          </label>
        ))}
      </div>

      <div className="flex  justify-center items-center gap-3 mx-2 cursor-pointer">
        <div onClick={() => toggleTheme()}>
          <MoonIcon className="text-primary-800 w-6 h-6 sm:w-8 sm:h-8 dark:hidden"></MoonIcon>
          <SunIcon className="text-accent-400 hidden w-6 h-6 sm:w-8 sm:h-8 dark:block"></SunIcon>
        </div>
        <div
          onClick={() => toggleLanguage()}
          className="font-semibold text-secondary-400"
        >
          {lang}
        </div>
      </div>
    </nav>
  );
}
