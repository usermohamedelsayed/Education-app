"use client";
import user01 from "../assest/user01.png";
import user02 from "../assest/user02.png";
import user03 from "../assest/user03.png";
import user04 from "../assest/user04.png";
import user05 from "../assest/user05.png";
import user06 from "../assest/user06.png";
import user07 from "../assest/user07.png";
import user08 from "../assest/user08.png";
import user09 from "../assest/user09.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { dataTestimonials } from "../../data";

import Image from "next/image";
export default function Testimonials() {
  return (
    <div className="Testimonials relative z-10">
      <div className="container mx-auto pb-10 px-3 pt-14">
        <h2 className="text-2xl text-center mb-[30px]">student testimonials</h2>
        <Swiper
          loop
          spaceBetween={50}
          pagination={{
            type: "bullets",
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            767: {
              slidesPerView: 2,
            },
          }}
        >
          {dataTestimonials.map((item) => (
            <SwiperSlide key={item.id} className="text-center">
              <div className="mx-auto p-[5px] bg-gray-500 w-[45px] h-[45px] rounded-full overflow-hidden">
                <Image
                  className="w-full h-full rounded-full object-cover"
                  src={item.img}
                  alt="photoUser"
                />
              </div>
              <p className="text-[15px] my-[4px]">{item.name}</p>
              <p className="text-[12px] text-crTextMuted">{item.job}</p>
              <div className="p-[40px] mt-[20px] relative bg-bgSubPrimary">
                <span className="w-[30px] h-[30px] bg-bgSubPrimary absolute left-[50%] translate-x-[-50%] top-[-10px] rotate-[45deg]"></span>
                <span className="relative z-10 text-[13px] text-crTextMuted ">
                  {item.comment}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
