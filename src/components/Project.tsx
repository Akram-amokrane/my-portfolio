import { motion } from "framer-motion";

interface IProject {
  title: string;
  type: string;
  description: Array<string>;
  features: Array<string>;
  techs: Array<string>;
  imgs: Array<string>;
  links?: { github?: string; demo?: string };
}

export default function Project({
  title,
  type,
  description,
  features,
  techs,
  imgs,
  links,
}: IProject) {
  return (
    <div className="min-w-full w-full h-full flex justify-center items-center ">
      <div className="w-full h-full flex flex-col justify-start items-center overflow-hidden cursor-pointer hover:border-primary-500 border-dark-200 dark:border-dark-800 border-[1px] border-solid rounded-xl ">
        <motion.div
          className="h-3/5 w-full flex items-center justify-center p-2 bg-dark-300"
          style={{
            backgroundImage: `url(${imgs[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/* <Image src={imgs[0]} alt={`${title}`} fill /> */}
        </motion.div>
        <div className="h-2/5 w-full flex items-start p-4 overflow-hidden dark:bg-dark-600">
          <div>
            <motion.p className="text-[10px] text-dark-400 dark:text-dark-200">
              {type}
            </motion.p>
            <motion.h2 className="font-semibold dark:text-white">
              {title}
            </motion.h2>
            <motion.div className="mt-1">
              <motion.p className="text-xs indent-4 text-justify italic line-clamp-2 dark:text-dark-100">
                {description[0]}
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
