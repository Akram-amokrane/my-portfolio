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
      <div className="container mx-auto h-auto px-32 overflow-auto flex flex-col justify-center ">
        <NavBar></NavBar>
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
