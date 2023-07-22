import Image from "next/image";

export default function AboutMe() {
  return (
    <div
      className="bg-primary-300 snap-always snap-center h-screen w-full flex flex-col justify-between items-center bg-white"
      id="about-me"
    >
      <div className="D2 uppercase mt-24">About Me</div>
      <div className="w-full h-full px-8 flex justify-between items-center">
        <div className="w-2/5 h-5/6 relative rounded-xl overflow-hidden">
          <Image
            src={"/images/me.jpg"}
            alt="me in about me"
            fill={true}
          ></Image>
        </div>
        <div className="w-3/5 h-full ml-2 flex flex-col items-start justify-center">
          <p className="sm indent-8 text-justify my-1">
            Hello, I&apos;m Akram Amokrane, a highly skilled full stack
            developer specializing in web, mobile, and desktop application
            development. With a Master&apos;s degree in Computer Science from
            Abderahmane Mira University in Bejaia, Algeria, I bring a strong
            educational background combined with extensive practical experience
            to my projects.
          </p>
          <p className="sm indent-8 text-justify my-1">
            As a versatile developer, I have expertise in a wide range of
            technologies and frameworks. From crafting sleek and responsive web
            applications using HTML, CSS, JavaScript, and various front-end
            frameworks like Angular and React, to building cross-platform mobile
            apps with Flutter and Ionic, and developing robust desktop
            applications using JavaFx and Tauri, I have a comprehensive skill
            set to tackle diverse project requirements.
          </p>
          <p className="sm indent-8 text-justify my-1">
            In addition to my academic achievements, I am a freelancer on Fiverr
            and Upwork. I am passionate about delivering exceptional results and
            exceeding client expectations. With my strong problem-solving
            skills, attention to detail, and dedication to staying up-to-date
            with the latest industry trends.
          </p>
          <p className="sm indent-8 text-justify my-1">
            If you&apos;re looking for a reliable and skilled full stack
            developer who can bring your ideas to life, please feel free to
            reach out to me. I am excited about new opportunities and look
            forward to collaborating on innovative projects that make a
            difference.
          </p>
          <blockquote className="inline-block w-full text-center font-semibold text-primary-500 my-1">
            Let&apos;s work together to create exceptional software solutions!
          </blockquote>
        </div>
      </div>
    </div>
  );
}
