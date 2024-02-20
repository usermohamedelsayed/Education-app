"use client";
import { FaArrowUp } from "react-icons/fa";

export default function BtnUp() {
  const backTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={backTop}
      className="fixed bottom-[20px] right-[20px] w-[40px] h-[40px] rounded-md hidden md:grid place-items-center bg-bgSubPrimary text-white z-50 border-[1px] border-crPrimary active:scale-[.9] duration-200 cursor-pointer"
    >
      <FaArrowUp />
    </div>
  );
}
