import { dataPopular } from "../../../data";
import Image from "next/image";
export default function page({ params }: any) {
  const currItem = dataPopular.filter(
    (item) => +item.id === +params.details
  )[0];

  if (!currItem) return;
  return (
    <div>
      <div className="container px-3 mx-auto mt-[90px] pb-10 md:min-h-[90vh] md:grid grid-cols-2 items-center">
        <div className="my-[20px]">
          <p className="text-[30px]">{currItem.title}</p>
          <span className="text-crTextMuted">{currItem.desc}</span>
        </div>
        <div className="max-w-[500px] w-[100%] h-[400px] mx-auto md:p-[20px] overflow-hidden">
          <Image
            className="w-[100%] h-[100%] object-cover rounded-md"
            src={currItem.img}
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
}
