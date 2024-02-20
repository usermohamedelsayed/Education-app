import Image from "next/image";
import imgAbout from "../assest/aboutHeader.png";
import Stars from "../assest/OIP.jpeg";
import { aboutHeader } from "../../data";
export default function HeaderAbout() {
  return (
    <div className="max-auto grid items-center grid-cols-1 md:grid-cols-2">
      <Image
        className="absolute bg-gradient-to-tr from-bgPrimary to-transparent left-0 right-0 bottom-0 top-0 w-full h-full object-cover -z-10"
        src={Stars}
        alt="bgHeader"
      />
      <section>
        <Image
          className="mt-[-20px] md:mt-0 scale-x-[-1]"
          src={imgAbout}
          alt={"image"}
        />
      </section>
      <section>
        <h1 className="text-[25px] md:text-[35px]">achievements</h1>
        <p className="text-crTextMuted mt-[10px] mb-[30px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
          eligendi commodi atque provident voluptates! Animi facilis non
          quibusdam earum ad.
        </p>
        <div className="grid grid-cols-2 gap-[10px] items-stretch">
          {aboutHeader.map((item) => (
            <div
              key={item.id}
              className="w-full  flex flex-col gap-[10px] justify-center items-center bg-bgSubPrimary p-[20px] rounded-md"
            >
              <i
                style={{ background: item.color }}
                className="w-[50px] h-[56px] text-[30px] flex justify-center items-center rounded-lg"
              >
                {item.icons}
              </i>
              <p className="text-[25px]">{item.percn}</p>
              <p className="text-crTextMuted">{item.cat}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
