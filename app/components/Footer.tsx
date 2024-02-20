import { FaFacebookF, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { dataFooter } from "../../data";
export default function Footer() {
  return (
    <div className="pb-[80px] md:pb-[30px] py-[30px] relative z-10 border-t-2 border-solid border-gray-500 bg-gray-900">
      <div className="px-3 py-3 container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto gap-[10px]">
        {dataFooter.map((item) => (
          <div key={item.id}>
            <p className="text-lg">{item.title}</p>
            <ul className="mt-3 flex flex-col gap-2">
              {item.links.map((item) => (
                <li
                  key={Math.random()}
                  className="text-xs max-w-40 cursor-pointer duration-200 hover:text-white text-gray-400"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-lg">contact us</p>
          <ul className="mt-3 flex flex-col gap-2">
            <li className="cursor-pointer duration-200 hover:text-white text-sm text-gray-400">
              +123 456 789 10
            </li>
            <li className="cursor-pointer duration-200 hover:text-white text-sm text-gray-400">
              test@gmail.com
            </li>
          </ul>
          <ul className="flex mt-3 items-center gap-3">
            <li className="w-8 h-8 duration-100 hover:bg-blue-900 hover:border-0 bg-gray-800 flex justify-center items-center rounded-full border-2 border-solid border-gray-700 cursor-pointer">
              <FaFacebookF />
            </li>
            <li className="w-8 h-8 duration-100 hover:bg-red-600 hover:border-0 bg-gray-800 flex justify-center items-center rounded-full border-2 border-solid border-gray-700 cursor-pointer">
              <FaInstagramSquare />
            </li>
            <li className="w-8 h-8 duration-100 hover:bg-blue-800 hover:border-0 bg-gray-800 flex justify-center items-center rounded-full border-2 border-solid border-gray-700 cursor-pointer">
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
