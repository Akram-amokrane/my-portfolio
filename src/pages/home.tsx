import Image from "next/image"


export default function Home() {
  return (
    <div className="h-screen w-full flex justify-between items-center bg-white">
        <div className="z-10">
            <div>
            <div className="D1 font-semibold whitespace-nowrap">HEY, I AM</div>
            <div className="D1 font-semibold text-primary-500 whitespace-nowrap">AKRAM AMOKRANE</div>
            </div>
            <h2 className="text-dark-500 whitespace-nowrap" >Software Engineer / Full Stack developer</h2>
        </div>
        <div className="w-[600px] h-[600px] absolute right-0">
            <Image src={"/images/me-draw-f.png"} alt="me drawed" fill={true} ></Image>
        </div>
    </div>
  )
}
