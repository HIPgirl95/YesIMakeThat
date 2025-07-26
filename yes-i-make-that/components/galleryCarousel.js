"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import { useWindowSize } from "react-use";

const image = "https://placehold.co/1400x800/png";

export default function GalleryCarousel() {

  const { width } = useWindowSize();
  const galleryWidth = width * 0.9; // 90% of the viewport width
  const galleryHeight = galleryWidth * (800 / 1400); // Maintain aspect ratio

  return (
    <Swiper
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      loop
      style={{ width: galleryWidth, height: galleryHeight  }}
    >
      <SwiperSlide>
        <Image src={image} alt="Slide 1" width={galleryWidth} height={galleryHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={image} alt="Slide 2" width={galleryWidth} height={galleryHeight} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={image} alt="Slide 3" width={galleryWidth} height={galleryHeight} />
      </SwiperSlide>
    </Swiper>
  );
}
