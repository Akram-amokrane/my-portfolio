'use client'

import Image  from "next/image"
import Link  from "next/link"
import { ReactNode, useEffect, useState } from "react"
import {useRouter} from "next/navigation"

export default function NavBar() {
    const router = useRouter()

    const navLinks = [
        {
            id:"home",
            name : "Home",
        },
        {
            id:"about-me",
            name : "About me",
        },
        {
            id:"education",
            name : "Education",
        },
        {
            id:"projects",
            name : "Projects",
        }

    ]

    return (
      <nav className="container fixed bg-white z-50 flex justify-between items-center w-3/4 h-fit my-4 px-3 py-2 rounded-2xl shadow-md shadow-dark-100 ">
        <div className="relative w-16 h-12">
            <Image src="/images/logo.svg" alt="my logo" fill={true} />
        </div>

        <div className="w-fit h-fit   flex justify-center items-center">

            {navLinks.map((link)=>
                <label key={link.id} htmlFor={link.id} className="flex flex-col justify-center items-center mx-2 cursor-pointer">
                    <input type="radio" name="navlink" id={link.id} className="peer hidden"/>
                    <div onClick={()=>router.push("#"+link.id)} className="text-xl peer-checked:text-primary-500">{link.name}</div>
                    <div className="w-8 h-1 rounded-full hidden bg-primary-500 peer-checked:block "></div>
                </label>
            )}
            
        </div>

        <label htmlFor="contact" className="flex flex-col justify-center items-center mx-2 cursor-pointer">
            <input type="radio" name="navlink" id="contact" className="peer hidden"/>
            <div onClick={()=>router.push("#contact")} className="text-xl peer-checked:text-secondary-500">Contact Me</div>
        </label>
      </nav>
    )
  }

  