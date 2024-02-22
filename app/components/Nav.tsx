"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { IoIosContacts, IoIosHome } from "react-icons/io";
import { MdCastForEducation, MdOutlineRoundaboutRight } from "react-icons/md";
import myLogo from "../assest/myLogo.png";
import { FaArrowUp } from "react-icons/fa";
const dataLinks: string[] = ["home", "about", "courses", "contact"];
const handleScroll = (nav: HTMLDivElement | null) => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      nav?.classList.add("activeNav");
    } else {
      nav?.classList.remove("activeNav");
    }
  });
};
export default function Nav() {
  const refNav = useRef<null | HTMLDivElement>(null);
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    handleScroll(refNav.current);
  }, []);
  return (
    <>
      <div
        ref={refNav}
        className="h-[80px] fixed top-0 left-0 right-0 z-50 w-full duration-300 border-transparent"
      >
        <div className="container h-full px-3 flex justify-between items-center mx-auto">
          <Link
            href={"/"}
            className="flex items-center cursor-pointer select-none gap-[8px]"
          >
            <div className="w-[45px] h-[45px] bg-[#FFC107] rounded-full overflow-hidden">
              <Image
                src={myLogo}
                alt="myLogo"
                className="w-full scale-150 h-full"
              />
            </div>
            <p className="text-[28px] uppercase">educa.</p>
          </Link>
          <ul className="hidden md:flex items-center gap-2 py-2 text-sm">
            {dataLinks.map((item) => (
              <Link
                key={Math.random()}
                href={item === "home" ? "/" : item}
                className="cursor-pointer text-[20px] py-2 px-2 rounded-md"
              >
                {item}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 px-3 bg-bgPrimary w-full z-50 border-t-[1px] border-solid border-crPrimary rounded-t-full">
        <ul className="md:hidden container mx-auto flex items-center justify-evenly h-[65px]">
          <Link
            href={"/"}
            className="group hover:text-[30px] duration-200 cursor-pointer relative w-[40px] h-[40px] rounded-full grid overflow-hidden place-items-center text-[22px]"
          >
            <i className="group-hover:text-crPrimary">
              <IoIosHome />
            </i>
            <span className="absolute w-full h-full pointer-events-none bg-crPrimary duration-300 group-hover:scale-0  -z-10"></span>
          </Link>
          <Link
            href={"/about"}
            className="group hover:text-[30px] duration-200 cursor-pointer relative w-[40px] h-[40px] rounded-full grid overflow-hidden place-items-center text-[22px]"
          >
            <i className="group-hover:text-green-500 ">
              <MdOutlineRoundaboutRight />
            </i>
            <span className="absolute w-full h-full pointer-events-none bg-green-500 duration-300 group-hover:scale-0  -z-10"></span>
          </Link>
          <Link
            href={"/courses"}
            className="group hover:text-[30px] duration-200 cursor-pointer relative w-[40px] h-[40px] rounded-full grid overflow-hidden place-items-center text-[22px]"
          >
            <i className="group-hover:text-blue-700 ">
              <MdCastForEducation />
            </i>
            <span className="absolute w-full h-full pointer-events-none bg-blue-700 duration-300 group-hover:scale-0  -z-10"></span>
          </Link>
          <Link
            href={"/contact"}
            className="group hover:text-[30px] duration-200 cursor-pointer relative w-[40px] h-[40px] rounded-full grid overflow-hidden place-items-center text-[22px]"
          >
            <i className="group-hover:text-red-600 ">
              <IoIosContacts />
            </i>
            <span className="absolute w-full h-full pointer-events-none bg-red-600 duration-300 group-hover:scale-0  -z-10"></span>
          </Link>
          <div
            onClick={backTop}
            className="group hover:text-[30px] duration-200 cursor-pointer relative w-[40px] h-[40px] rounded-full grid overflow-hidden place-items-center"
          >
            <i className="group-hover:text-orange-500 ">
              <FaArrowUp />
            </i>
            <span className="absolute w-full h-full pointer-events-none bg-orange-500 duration-300 group-hover:scale-0  -z-10"></span>
          </div>
        </ul>
      </div>
    </>
  );
}
