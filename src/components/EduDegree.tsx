interface IEduDegree {
  date: string;
  title: string;
  from: string;
}

export default function EduDegree({ date, title, from }: IEduDegree) {
  return (
    <div className="w-72 sm:w-36  md:w-full flex flex-col justify-center items-start p-1 sm:p-3 gap-1 rounded-xl border-solid border-[1px] border-dark-300">
      <div className="text-[10px] md:text-xs text-dark-300 leading-snug md:leading-4">
        {date}
      </div>
      <div className="text-sm md:text-lg font-bold uppercase md:leading-5">
        {title}
      </div>
      <div className="text-[10px] md:text-xs text-dark-400 md:leading-4">
        {from}
      </div>
    </div>
  );
}
