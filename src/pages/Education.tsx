import EduDegree from "@/components/EduDegree";
import Skill from "@/components/Skill";
import Image from "next/image";

export default function Education() {
  const degrees = [
    {
      date: "2017-2018",
      title: "High school diploma",
      from: "Kadi Athmane High School,Tichy",
    },
    {
      date: "2020-2021",
      title: "Bachelor's degree in si",
      from: "Abderrahmane Mira University,Bejaia",
    },
    {
      date: "2022-2023",
      title: "master's degree in sia",
      from: "Abderrahmane Mira University,Bejaia",
    },
  ];

  const skills = [
    "Javascript",
    "Typescript",
    "Angular",
    "React",
    "NodeJs",
    "Express",
    "Ionic",
    "Tauri",
    "Sass",
    "Kotlin",
    "Flutter",
    "Python",
    "Flask",
    "TensorFlow",
    "JavaFx",
    "Firebase",
    "MySql",
    "MongoDb",
    "Figma",
  ];

  return (
    <div
      className="bg-primary-300 snap-always snap-center h-screen w-full flex flex-col justify-start items-center bg-white"
      id="education"
    >
      <div className="flex flex-col justify-center items-center  mt-24">
        <div className="D2 uppercase">Education</div>
        <div className="w-full h-full px-8 flex justify-between gap-2 items-center mt-6">
          {degrees.map((deg, i) => (
            <EduDegree
              key={i}
              date={deg.date}
              title={deg.title}
              from={deg.from}
            ></EduDegree>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-8">
        <div className="D2 uppercase">Skills</div>
        <div className="w-full h-full px-8 flex justify-between flex-wrap gap-2 items-center mt-6">
          {skills.map((s, i) => (
            <Skill key={i} name={s}></Skill>
          ))}
        </div>
      </div>
    </div>
  );
}
