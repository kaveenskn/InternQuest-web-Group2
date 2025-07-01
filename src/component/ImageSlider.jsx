import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/ImageSlider.css";

export default function ImageSlider() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="slider-wrapper">
    <Swiper
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src="https://www.usnews.com/object/image/00000191-80a0-d21f-a595-f3ed9f4d0000/gettyimages-2105091005.jpg?update-time=1724440047982&size=responsive640"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://assets.ascendientlearning.com/assets/CourseImages/2021-it-training-2__PadWzgwMCw0NTAsIkZGRkZGRiIsMF0_BGColorWzI1NSwyNTUsMjU1XQ.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://i.pinimg.com/736x/54/92/93/549293c9cb0b3bcd5874ad38d2a5fac2.jpg"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
    </div>
  );
}
