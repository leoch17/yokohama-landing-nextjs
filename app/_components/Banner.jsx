"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <div
        id="banner"
        className="bg-gray-100 flex items-center justify-between"
      >
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 300000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="cursor-pointer px-20">
            <div className="container pt-8 pb-6 md:pt-20 md:pb-10 sm:pt-16 sm:pb-8">
              {/* **************** */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* **************** */}
                <div className="relative">
                  {/* **************** */}
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold py-2 sm:py-4">
                    Neumáticos de Altas Prestaciones, Ingeniería de Presición
                  </h1>
                  <p className="py-2 sm:py-4 text-sm sm:text-base">
                    Hay mucho en juego en sus neumáticos. Este es porqué
                    Yokohama esta dedicado a entregar los neumáticos definitivos
                    para tu auto, camión o SUV.
                  </p>
                </div>
                {/* **************** */}
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/tires/geolandar-at4.png"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    alt="Geolandar Neumático"
                  />
                </div>
                {/* **************** */}
              </div>
              {/* **************** */}
            </div>
          </SwiperSlide>
          {/* ***************************************** */}
          <SwiperSlide className="cursor-pointer px-20">
            <div className="container pt-8 pb-6 md:pt-20 md:pb-10 sm:pt-16 sm:pb-8">
              {/* **************** */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* **************** */}
                <div className="relative">
                  {/* **************** */}
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold py-2 sm:py-4">
                    Tecnología Japonesa, Seguridad sin Límites
                  </h1>
                  <p className="py-2 sm:py-4 text-sm sm:text-base">
                    Diseñados con compuestos de última generación para ofrecerte
                    un control total y un frenado superior en cualquier
                    condición climática.
                  </p>
                </div>
                {/* **************** */}
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/tires/avid-ascend-gt.png"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    alt="Geolandar Neumático"
                  />
                </div>
                {/* **************** */}
              </div>
              {/* **************** */}
            </div>
          </SwiperSlide>
          {/* ***************************************** */}
          <SwiperSlide className="cursor-pointer px-20">
            <div className="container pt-8 pb-6 md:pt-20 md:pb-10 sm:pt-16 sm:pb-8">
              {/* **************** */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* **************** */}
                <div className="relative">
                  {/* **************** */}
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold py-2 sm:py-4">
                    Domina Cualquier Terreno con Confianza
                  </h1>
                  <p className="py-2 sm:py-4 text-sm sm:text-base">
                    Rendimiento excepcional fuera de la carretera sin sacrificar
                    el confort en la ciudad. La durabilidad que tu aventura
                    necesita.
                  </p>
                </div>
                {/* **************** */}
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/tires/iceguard-g075.png"
                    width={600}
                    height={600}
                    className="w-full h-auto object-contain"
                    alt="Geolandar Neumático"
                  />
                </div>
                {/* **************** */}
              </div>
              {/* **************** */}
            </div>
          </SwiperSlide>
          {/* ***************************************** */}
        </Swiper>
      </div>
    </>
  );
};

export default Banner;
