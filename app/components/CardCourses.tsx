import Image from "next/image";
import Link from "next/link";

export default function CardCourses({ item }: any) {
  return (
    <div className="bg-bgSubPrimary text-center rounded-l-[5px] rounded-r-[5px] overflow-hidden">
      <div className="relative overflow-hidden w-full h-[210px]">
        <Image
          className="absolute object-cover w-full h-full"
          src={item.img}
          alt="imgPopuplar"
        />
      </div>
      <div className="group popularCards relative py-[40px] px-[10px]">
        <span
          style={{ background: item.color }}
          className={`
        absolute w-0 h-0 duration-500 top-0 right-0 opacity-50 -z-0 pointer-events-auto
        group-hover:w-full group-hover:h-full group-hover:opacity-0 
        `}
        ></span>
        <span
          style={{ background: item.color }}
          className={`
        absolute w-0 h-0 duration-500 bottom-0 left-0 opacity-50 -z-0
        group-hover:w-full group-hover:h-full group-hover:opacity-0 
        `}
        ></span>
        <p className="text-[18px] relative z-10">{item.title}</p>
        <span className="text-xs pt-[10px] relative z-10 block leading-5 max-w-[300px] mx-auto text-center text-gray-400">
          {item.desc.slice(1, 100) + ".."}
        </span>
        <Link
          href={"/courses/" + item.id}
          className="inline-block bg-red-500 hover:bg-red-600 capitalize relative z-10 py-[10px] px-[20px] rounded-md mt-[15px]"
        >
          read more
        </Link>
      </div>
    </div>
  );
}
