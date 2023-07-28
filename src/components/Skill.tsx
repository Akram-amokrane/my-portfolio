import Image from "next/image";

interface ISkill {
  name: string;
}

export default function Skill({ name }: ISkill) {
  return (
    <div className="w-32 md:w-44  flex justify-start items-center px-3 py-3 border-dark-200 border-[1px] border-solid rounded-xl hover:scale-110  transition-all duration-300 cursor-default">
      <div className="relative w-6 h-6 md:w-7 md:h-7">
        <Image
          src={`/images/${name}.png`}
          alt={`${name} logo`}
          fill={true}
        ></Image>
      </div>
      <h3 className="ml-2 text-xs md:text-xl">{name}</h3>
    </div>
  );
}
