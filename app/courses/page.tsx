import { CardCourses } from "../components";
import Stars from "../assest/OIP.jpeg";
import Image from "next/image";
import { Metadata } from "next";
import { dataPopular } from "../../data";
export const metadata: Metadata = {
  title: "Courses",
  description: "Website courses by create mohammed elsayed 👩‍💻",
};

function page() {
  return (
    <div className="mt-[100px] pb-10 mx-auto px-3">
      <h2 className="text-2xl text-center mb-5">our courses</h2>
      <Image
        className="absolute bg-gradient-to-tr from-bgPrimary to-transparent left-0 right-0 bottom-0 top-0 w-full h-full object-cover -z-10"
        src={Stars}
        alt="bgHeader"
      />
      <div className=" grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-3 justify-center items-stretch">
        {dataPopular.map((item) => (
          <CardCourses key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default page;
