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
        <Link
          href={"https://web.facebook.com/profile.php?id=100008846531008"}
          target="_blank"
          className="block w-6 h-6 relative"
        >
          <Image
            src={"/images/Facebook.svg"}
            alt="facebook logo"
            fill={true}
          ></Image>
        </Link>
        <Link
          href={"mailto:amokraneakram54@gmail.com"}
          target="_blank"
          className="block w-6 h-6 relative"
        >
          <Image src={"/images/Gmail.svg"} alt="Gmail logo" fill={true}></Image>
        </Link>
        <Link
          href={"https://www.instagram.com/akram.amokrane/"}
          target="_blank"
          className="block w-6 h-6 relative"
        >
          <Image
            src={"/images/Instagram.svg"}
            alt="instagram logo"
            fill={true}
          ></Image>
        </Link>
        <Link
          href={"https://www.linkedin.com/in/akram-amokrane-9b1509222"}
          target="_blank"
          className="block w-6 h-6 relative"
        >
          <Image
            src={"/images/Linkedin.svg"}
            alt="linkedin logo"
            fill={true}
          ></Image>
        </Link>
      </div>
      <div className="absolute bottom-1">
        <p className="text-[10px] sm:text-xs uppercase text-white">
          Handcrafted by me © 2023
        </p>
      </div>
    </div>
  );
}
