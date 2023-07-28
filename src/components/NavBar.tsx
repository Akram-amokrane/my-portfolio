"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  HomeIcon,
  IdentificationIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  ChatBubbleLeftIcon,
} from "@heroicons/react/24/outline";

export default function NavBar() {
  const router = useRouter();

  const navLinks = [
    {
      id: "home",
      name: "Home",
      default: true,
      icon: HomeIcon,
    },
    {
      id: "about-me",
      name: "About me",
      default: false,
      icon: IdentificationIcon,
    },
    {
      id: "education",
      name: "Education",
      default: false,
      icon: AcademicCapIcon,
    },
    {
      id: "projects",
      name: "Projects",
      default: false,
      icon: BriefcaseIcon,
    },
  ];

  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <nav className="container fixed bg-white z-50 top-0 md:top-4 left-1/2 -translate-x-1/2 flex justify-between items-center w-full  md:w-4/5 lg:w-3/4 h-fit  px-3 py-2 rounded-b-xl sm:rounded-2xl shadow-md shadow-dark-100 ">
      <div className="relative w-12 h-8 sm:w-16 sm:h-12">
        <Image src="/images/logo.svg" alt="my logo" fill={true} />
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
              className="text-xl peer-checked:text-primary-500"
            >
              <div>
                {
                  <link.icon className="md:hidden w-6 h-6 sm:w-8 sm:h-8 mx-3 sm:mx-5 md:mx-8"></link.icon>
                }
              </div>
              <div className="hidden md:block">{link.name}</div>
            </div>
            <div className="w-8 h-1 rounded-full hidden bg-primary-500 peer-checked:block "></div>
          </label>
        ))}
      </div>

      <label
        htmlFor="contactid"
        className="flex flex-col justify-center items-center mx-2 cursor-pointer"
      >
        <input
          type="radio"
          name="navlink"
          id="contactid"
          className="peer hidden"
        />
        <div
          onClick={() => scrolltoHash("contact")}
          className="text-xl peer-checked:text-secondary-500"
        >
          <ChatBubbleLeftIcon className="w-6 h-6 sm:w-8 sm:h-8 lg:hidden"></ChatBubbleLeftIcon>

          <div className="hidden lg:block">Contact Me</div>
        </div>
      </label>
    </nav>
  );
}
