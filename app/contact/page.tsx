import Image from "next/image";
import imgContact from "../assest/header.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { Metadata } from "next";
import Stars from "../assest/OIP.jpeg";

export const metadata: Metadata = {
  title: "Contact",
  description: "Website education by create mohammed elsayed 👩‍💻",
};
export default function page() {
  return (
    <div className="relative md:min-h-[100vh] mt-[80px] md:mt-[30px] flex items-center justify-center">
      <Image
        className="absolute w-[100%] h-[100%] bg-gradient-to-tr from-bgPrimary to-transparent object-cover"
        src={Stars}
        alt="bgHeader"
      />
      <div className="max-w-[1000px] w-[100%] relative md:border-[1px] border-crPrimary rounded-md bg-bgSubPrimary md:h-[65vh] mx-auto px-3 flex flex-col md:flex-row items-center justify-center gap-[10px]">
        <section className="flex flex-col justify-center p-[14px] md:absolute left-[40px] rounded-md md:bg-crPrimary w-[100%] md:w-[300px] md:min-h-[75vh]">
          <div className="hidden md:block mx-auto shrink-1 w-[200px] md:w-[180px] h-[180px] md:h-[200px] ">
            <Image
              className="w-full h-full object-contain"
              src={imgContact}
              alt="imag"
            />
          </div>
          <h2 className="text-2xl">contact us</h2>
          <p className="text-[13px] pt-[4px] pb-[15px] max-w-[300px] w-[100%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis officia eaque cum corporis error magni illo quia itaque
            quidem id.
          </p>
          <div className="flex mb-[12px] items-center text-[13px] gap-[10px]">
            <i>
              <FaPhoneAlt />
            </i>
            <span>+1122131239</span>
          </div>
          <div className="flex mb-[12px] items-center text-[13px] gap-[10px]">
            <i>
              <BiLogoGmail />
            </i>
            <span>mohamed@gmail.com</span>
          </div>
          <div className="flex mb-[12px] items-center text-[13px] gap-[10px]">
            <i>
              <FaLocationDot />
            </i>
            <span>cario, egypt</span>
          </div>
        </section>
        <form
          action={""}
          className="flex-1 flex flex-col items-center p-[10px] md:ml-[350px] max-w-[600px] w-[100%] h-[100%]"
        >
          <div className="flex w-full gap-[10px]">
            <input
              required
              className="outline-none focus:border-crPrimary duration-300 bg-bgPrimary rounded-md w-full p-[10px] border-[1px] border-crBorer"
              type="text"
              placeholder="frist name"
            />
            <input
              required
              className="outline-none focus:border-crPrimary duration-300 bg-bgPrimary rounded-md w-full p-[10px] border-[1px] border-crBorer"
              type="text"
              placeholder="last name"
            />
          </div>
          <input
            required
            className="outline-none focus:border-crPrimary duration-300 bg-bgPrimary rounded-md w-full my-[10px] p-[10px] border-[1px] border-crBorer"
            type="email"
            placeholder="your email address"
          />
          <textarea
            required
            className="outline-none focus:border-crPrimary duration-300 bg-bgPrimary rounded-md resize-none h-[200px] w-full md:flex-1 p-[10px] border-[1px] border-crBorer"
            placeholder="write your message"
          ></textarea>
          <button className="py-[10px] px-[30px] mt-[10px] rounded-md cursor-pointer hover:bg-red-700 duration-300 capitalize bg-red-500">
            send
          </button>
        </form>
      </div>
    </div>
  );
}
