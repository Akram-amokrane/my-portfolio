import Image from "next/image";

interface ISkill {
  name: string;
}

export default function Skill({ name }: ISkill) {
  return (
    <div className="w-44 flex justify-start items-center px-3 py-3 border-dark-200 border-[1px] border-solid rounded-xl hover:scale-110 hover:border-primary-700 transition-all duration-300 cursor-default">
      <div className="relative w-7 h-7">
        <Image
          src={`/images/${name}.png`}
          alt={`${name} logo`}
          fill={true}
        ></Image>
      </div>
      <h3 className="ml-2">{name}</h3>
    </div>
  );
}
