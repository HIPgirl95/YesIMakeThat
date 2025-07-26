"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const image = "https://placehold.co/400x400/png";

export default function ColoringBooksCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={3}
      navigation
      loop
    >
      <SwiperSlide>
        <Image src={image} alt="Slide 1" width={400} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={image} alt="Slide 2" width={400} height={400} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={image} alt="Slide 3" width={400} height={400} />
      </SwiperSlide>
            <SwiperSlide>
        <Image src={image} alt="Slide 4" width={400} height={400} />
      </SwiperSlide>
            <SwiperSlide>
        <Image src={image} alt="Slide 5" width={400} height={400} />
      </SwiperSlide>
    </Swiper>
  );
}
