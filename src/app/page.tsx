"use client"
import NavBar from "@/components/NavBar";
import AboutMe from "@/pages/AboutMe";
import Education from "@/pages/Education";
import Home from "@/pages/home";
import { useEffect } from "react";

export default function Main() {

  

  return (
    <div className="container mx-auto h-auto px-32 overflow-auto flex flex-col justify-center ">
      <NavBar ></NavBar>
      <Home ></Home>
      <AboutMe></AboutMe>
      <Education></Education>
    </div>
  )
}
