import data from "@/data/Education.json";
import Skill from "./Skill";
import Link from "next/link";

import { RiInstagramFill } from "react-icons/ri";
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoFacebookCircle,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

interface IContact {
  isWhite?: boolean;
}

export default function Contact({ isWhite = false }: IContact) {
  return (
    <div className="flex justify-start items-center gap-4 ">
      <Link
        href={"https://github.com/Akram-amokrane"}
        target="_blank"
        className="block"
      >
        <BiLogoGithub className="w-10 h-10 hover:text-secondary-600" />
      </Link>
      <Link
        href={"mailto:amokraneakram54@gmail.com"}
        target="_blank"
        className="block"
      >
        <BiLogoGmail className="w-10 h-10 hover:text-secondary-600" />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/akram-amokrane-9b1509222"}
        target="_blank"
        className="block"
      >
        <BiLogoLinkedinSquare className="w-10 h-10 hover:text-secondary-600" />
      </Link>
      <Link
        href={"https://www.instagram.com/akram.amokrane/"}
        target="_blank"
        className="block"
      >
        <RiInstagramFill className="w-10 h-10 hover:text-secondary-600" />
      </Link>
    </div>
  );
}
