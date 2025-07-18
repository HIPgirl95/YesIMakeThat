"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";

const image = "https://placehold.co/1400x800/png";

export default function GalleryCarousel() {
  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop
    >
      <SwiperSlide>
        <Image src={image} alt="Slide 1" width={1400} height={800} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={image} alt="Slide 2" width={1400} height={800} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={image} alt="Slide 3" width={1400} height={800} />
      </SwiperSlide>
    </Swiper>
  );
}
