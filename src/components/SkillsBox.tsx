import data from "@/data/Education.json";
import Skill from "./Skill";

interface ISkillsBox {
  stack: string;
}

export default function SkillsBox({ stack }: ISkillsBox) {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        <div className="w-20 sm:w-40 h-px bg-dark-300 "></div>
        <span className="text-sm text-dark-300">{stack}</span>
        <div className="w-20 sm:w-40 h-px bg-dark-300 "></div>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        {(data.skills2 as { [index: string]: any })[stack].map(
          (tech: string, i: number) => (
            <Skill name={tech} key={i} />
          )
        )}
      </div>
    </div>
  );
}
