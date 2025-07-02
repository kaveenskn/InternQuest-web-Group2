import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
import "../styles/Empslider.css"

export default function Empslider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://i.pinimg.com/736x/7a/6d/bc/7a6dbcc2f795d3a2351627013e7870ab.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide> <img src="https://i.pinimg.com/736x/d6/d8/07/d6d807ee73c420e11ff8730a249f704f.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://i.pinimg.com/736x/ba/a8/86/baa886435f4d5a558ec35265699ce8c6.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://i.pinimg.com/736x/38/85/2a/38852ad11ee5da93c09d103966fb2cad.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://i.pinimg.com/736x/2e/6d/82/2e6d82123a4ef5422984ea07fa6ad0cd.jpg" alt="" /></SwiperSlide>
        <SwiperSlide> <img src="https://i.pinimg.com/736x/06/b3/19/06b3195210be78e692bc70884a01f120.jpg" alt="" /></SwiperSlide>

      </Swiper>
    </>
  );
}
