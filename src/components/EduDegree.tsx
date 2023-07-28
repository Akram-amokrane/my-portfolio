interface IEduDegree {
  date: string;
  title: string;
  from: string;
}

export default function EduDegree({ date, title, from }: IEduDegree) {
  return (
    <div className="w-72 sm:w-full flex flex-col justify-center items-start p-1 sm:p-3 gap-1 rounded-xl border-solid border-[1px] border-dark-300">
      <div className="sm text-dark-300 leading-4">{date}</div>
      <h5 className="font-bold uppercase leading-5">{title}</h5>
      <div className="sm text-dark-400 leading-4">{from}</div>
    </div>
  );
}
