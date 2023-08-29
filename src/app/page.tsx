"use client";
import NavBar from "@/components/NavBar";
import AboutMe from "@/pages/AboutMe";
import EducationV2 from "@/pages/EducationV2";
import Footer from "@/pages/footer";
import Home from "@/pages/home";
import Projects from "@/pages/projects";

import MyLangProvider from "@/providers/LangProvider";

import { Analytics } from "@vercel/analytics/react";

export default function Main() {
  return (
    <>
      <MyLangProvider>
        <NavBar></NavBar>
        <div className="container mx-auto w-full h-auto px-2 sm:px-0 lg:px-32 overflow-y-auto overflow-x-hidden flex flex-col justify-center  bg-white dark:bg-dark-500">
          <Home></Home>
          <Projects></Projects>
          <EducationV2></EducationV2>
          <AboutMe></AboutMe>
        </div>
        <Footer></Footer>
        <Analytics />
      </MyLangProvider>
    </>
  );
}
