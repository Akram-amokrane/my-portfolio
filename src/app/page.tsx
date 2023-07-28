"use client";
import NavBar from "@/components/NavBar";
import SvgDefs from "@/components/devices/SvgDefs";
import AboutMe from "@/pages/AboutMe";
import Education from "@/pages/Education";
import Footer from "@/pages/footer";
import Home from "@/pages/home";
import Projects from "@/pages/projects";
import { useEffect } from "react";

export default function Main() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container mx-auto w-full h-auto px-2 sm:px-0 lg:px-32 overflow-y-auto overflow-x-hidden flex flex-col justify-center  bg-white">
        <Home></Home>
        <AboutMe></AboutMe>
        <Education></Education>
        <Projects></Projects>
      </div>
      <Footer></Footer>
      <SvgDefs></SvgDefs>
    </>
  );
}
