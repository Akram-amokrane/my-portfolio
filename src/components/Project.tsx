import Mac from "./devices/Mac";
import Skill from "./Skill";
import { useEffect, useState } from "react";
import Head from "next/head";

interface IProject {
  title: string;
  type: string;
  description: Array<string>;
  features: Array<string>;
  techs: Array<string>;
  imgs: Array<{ type: string; name: string }>;
  bg: string;
}

export default function Project({
  title,
  type,
  description,
  features,
  techs,
  imgs,
  bg,
}: IProject) {
  return (
    <div className="w-[360px] h-[400px] flex justify-center items-center px-3 py-3 ">
      <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden border-dark-200 border-[1px] border-solid rounded-xl ">
        <div className="h-3/5 w-full flex items-center justify-center p-2 bg-dark-300">
          <Mac name={imgs[0].name} size={0.095}></Mac>
        </div>
        <div className="h-2/5 w-full flex items-start p-4 overflow-hidden bg-white">
          <div>
            <p className="sm text-dark-400">{type}</p>
            <h1 className="font-semibold">{title}</h1>
            <div className="mt-2">
              <p className="small indent-4 text-justify italic line-clamp-3">
                {description[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
