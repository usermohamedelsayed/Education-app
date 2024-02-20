import Image from "next/image";
import Stars from "../assest/OIP.jpeg";
import bgHeader from "../assest/bgHeader.jpg";
export default function HeaderHome() {
  return (
    <header className="h-[100vh] container px-3 mx-auto grid grid-cols-1 items-center md:grid-cols-2 md:gap-2">
      <Image
        className="absolute bg-gradient-to-tr from-bgPrimary to-transparent left-0 right-0 bottom-0 top-0 w-full h-full object-cover -z-10"
        src={Stars}
        alt="bgHeader"
      />
      <Image
        className="absolute bg-gradient-to-tr from-bgPrimary to-transparent left-0 right-0 bottom-0 top-0 w-full h-full object-cover -z-10"
        src={Stars}
        alt="bgHeader"
      />
      <Image
        className="absolute bg-gradient-to-tr from-bgPrimary to-transparent left-0 right-0 bottom-0 top-0 w-full h-full object-cover -z-10"
        src={Stars}
        alt="bgHeader"
      />
      <Image
        className="absolute left-0 right-0 bottom-0 top-0 w-full h-full object-cover -z-20"
        src={bgHeader}
        alt="bgHeader"
      />
      <section>
        <h2 className="mb-3 font-bold leading-relaxed text-[25px] md:text-[35px]">
          grow your skills to advance <br /> your career path
        </h2>
        <span className="text-xs mt-2 text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing <br /> elit. At
          dolorum tempora quis doloribus! Facilis maxime blanditiis <br />
        </span>
        <button className="py-3 px-4 capitalize bg-red-500 duration-150 hover:bg-red-600 rounded-md mt-5">
          get started
        </button>
      </section>
    </header>
  );
}
