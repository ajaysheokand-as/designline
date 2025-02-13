import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderData } from "./data/main";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <>
      <section className="w-full h-auto sm:h-[90vh] py-4 sm:p-8 relative">
        <img src="/images/logo1.png" className="w-24 h-24 rounded-md -top-8 left-4 md:w-48 md:h-48 border-4 border-blue-400 absolute z-10 md:-top-28 md:left-28" />
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000, 
            disableOnInteraction: false, 
          }}
          speed={900}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-full h-full bg-orange-400 flex justify-center items-center sm:rounded-xl overflow-hidden">
                    <img src={sliderData.slide2} className="w-full h-full bg-center" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-yellow-400 flex justify-center items-center sm:rounded-xl overflow-hidden">
            <img src={sliderData.slide3} className="w-full h-full bg-center" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-green-400 flex justify-center items-center sm:rounded-xl overflow-hidden">
            <img src={sliderData.slide4} className="w-full h-full bg-center" alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-blue-400 flex justify-center items-center sm:rounded-xl overflow-hidden">
            <img src={sliderData.slide1} className="w-full h-full bg-center" alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
