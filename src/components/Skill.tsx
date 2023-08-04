import Image from "next/image";
interface ISkill {
  name: string;
}

export default function Skill({ name }: ISkill) {
  return (
    <div className="w-20 sm:w-32 md:w-44  flex justify-start items-center px-1 py-1 sm:px-2 sm:py-2 border-dark-200 border-[1px] border-solid rounded-xl hover:scale-105  transition-all duration-300 cursor-default">
      <div className="relative w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7">
        <Image
          src={`/images/${name}.png`}
          alt={`${name} logo`}
          width={28}
          height={28}
        ></Image>
      </div>
      <h3 className=" ml-1 sm:ml-2 text-[10px] sm:text-xs md:text-xl">
        {name}
      </h3>
    </div>
  );
}
