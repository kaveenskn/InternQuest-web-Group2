
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import React, { useRef, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import "../../styles/ImageSlider.css";

export default function ImageSlider() {
  

  return (
    <div className="slider-wrapper">
      <Swiper
  effect="coverflow"
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  loop={true}
  loopedSlides={9} // Set this to total number of SwiperSlide items
  initialSlide={2}
  coverflowEffect={{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  }}
  pagination={{ clickable: true }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  modules={[EffectCoverflow, Pagination, Autoplay]}
  className="mySwiper"
>
        <SwiperSlide>
          <img src="https://cdn.leonardo.ai/users/bc687ae9-58de-4c67-ac57-345cde20882f/generations/897e8edd-718b-442e-b5fd-1e74c178c657/Leonardo_Phoenix_09_Create_an_image_for_InternQuest_to_showcas_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.leonardo.ai/users/bc687ae9-58de-4c67-ac57-345cde20882f/generations/3d9cb71a-3a5b-4948-863b-cc6b8b38c157/Leonardo_Phoenix_09_Create_a_realistic_vibrant_and_modern_digi_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.leonardo.ai/users/bc687ae9-58de-4c67-ac57-345cde20882f/generations/a3594c85-a7a5-4aba-9ccd-87e57a895555/Leonardo_Phoenix_09_Create_a_realistic_image_showcasing_the_In_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.leonardo.ai/users/bc687ae9-58de-4c67-ac57-345cde20882f/generations/b2e087cd-b46a-4afd-aeb2-c3e5d804035b/Leonardo_Phoenix_09_Create_an_internquest_image_showcasing_men_2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://cdn.leonardo.ai/users/1e6ba8a7-4e01-405b-8f5a-a482ac2ebe67/generations/71c484cf-f662-4457-9b81-1118ab7136d7/segments/4:4:1/Flux_Dev_A_modern_banner_for_InternQuest_showing_a_profilebuil_3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.nightcafe.studio/jobs/mA98JOay7cK8YlrgHhNO/mA98JOay7cK8YlrgHhNO--0--ozkf0.jpg?tr=w-1600,c-at_max" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.nightcafe.studio/jobs/toYn9RNAwZoW4WSWySXt/toYn9RNAwZoW4WSWySXt--0--frjbu.jpg?tr=w-1600,c-at_max" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.nightcafe.studio/jobs/44hTRPI8NLcxsX8AhTx7/44hTRPI8NLcxsX8AhTx7--0--7nmq8.jpg?tr=w-1600,c-at_max" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://images.nightcafe.studio/jobs/8p2kp4RzZTFPZPmKsiQz/8p2kp4RzZTFPZPmKsiQz--0--j2ks7.jpg?tr=w-1600,c-at_max" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
