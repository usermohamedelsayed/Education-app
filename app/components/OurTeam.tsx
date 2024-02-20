import Image from "next/image";
import { dataOurTeam } from "../../data";
import { FaInstagramSquare, FaFacebookF, FaTwitter } from "react-icons/fa";

export default function OurTeam() {
  return (
    <div className="pb-10">
      <h1 className="text-2xl text-center mb-[20px] mt-[100px]">
        meet our team
      </h1>
      <div className="grid cols-2 md:grid-cols-4 gap-[10px] items-stretch justify-center">
        {dataOurTeam.map((item) => (
          <div
            key={item.id}
            className="group relative p-[30px] bg-bgSubPrimary text-center overflow-hidden rounded-md flex flex-col gap-[10px]"
          >
            <span className="absolute bottom-0 left-0 w-0 h-0 opacity-50 pointer-events-none bg-white group-hover:duration-500 group-hover:w-full group-hover:h-full group-hover:opacity-0"></span>
            <div className="w-full h-[200px] overflow-hidden">
              <Image
                className="w-full h-full object-cover rounded-md grayscale-[1] duration-300 group-hover:grayscale-[0]"
                src={item.img}
                alt={"img" + item.name}
              />
            </div>
            <p className="pt-[10px] pb-15px">{item.name}</p>
            <span className="text-[14px] text-crTextMuted">{item.jop}</span>
            <div className="group-hover:right-0 duration-300 absolute top-[50%] translate-y-[-50%] border-solid border-crPrimary border-[1px] border-r-0 right-[-50%] bg-bgPrimary p-[10px] flex flex-col  h-[180px] justify-around rounded-l-[20px]">
              <i className="cursor-pointer bg-sky-800 w-[30px] h-[30px] rounded-md flex justify-center items-center">
                <FaFacebookF />
              </i>
              <i className="cursor-pointer bg-red-500 w-[30px] h-[30px] rounded-md flex justify-center items-center">
                <FaInstagramSquare />
              </i>
              <i className="cursor-pointer bg-sky-500 w-[30px] h-[30px] rounded-md flex justify-center items-center">
                <FaTwitter />
              </i>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
