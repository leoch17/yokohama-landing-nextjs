"use client";
import React from "react";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const X_AT = () => {
  return (
    <>
      <Header />
      {/* Sección Descripción */}
      <div className="relative">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="bg-[url('/products/geolandar_x-at/background-x-at.webp')] bg-cover bg-center text-white py-10 md:py-20">
          <div className="container mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between">
            {/* Sección Izquierda: Imagen del Neumático */}
            <div className="md:w-1/2 flex justify-center md:justify-start items-center mb-14 md:mb-0 md:-mt-12">
              {/* Reemplaza con tu componente de carrusel o imagen estática */}
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                {/* Ejemplo de una imagen estática */}
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
                  <SwiperSlide className="cursor-pointer">
                    <div className="container pt-8 pb-6 md:pt-20 md:pb-10 sm:pt-16 sm:pb-8">
                      {/* **************** */}
                      <div className="relative w-full h-full flex justify-center items-center">
                        <Image
                          src="/products/geolandar_x-at/tire-1.webp"
                          alt="Neumatico Geolandar X-AT"
                          width={600}
                          height={600}
                          className="w-64 h-64 object-contain"
                        />
                      </div>
                      {/* **************** */}
                    </div>
                  </SwiperSlide>
                  {/* ***************************************** */}
                  <SwiperSlide className="cursor-pointer px-20">
                    <div className="container pt-8 pb-6 md:pt-20 md:pb-10 sm:pt-16 sm:pb-8">
                      {/* **************** */}
                      <div className="relative w-full h-full flex justify-center items-center">
                        <Image
                          src="/products/geolandar_x-at/tire-2.webp"
                          alt="Neumatico Geolandar X-AT"
                          width={600}
                          height={600}
                          className="w-64 h-64 object-contain"
                        />
                      </div>
                      {/* **************** */}
                    </div>
                  </SwiperSlide>
                  {/* ***************************************** */}
                  <SwiperSlide className="cursor-pointer px-20">
                    <div className="container pt-8 pb-6 md:pt-20 md:pb-10 sm:pt-16 sm:pb-8">
                      {/* **************** */}
                      <div className="relative w-full h-full flex justify-center items-center">
                        <Image
                          src="/products/geolandar_x-at/tire-3.webp"
                          alt="Neumatico Geolandar X-AT"
                          width={600}
                          height={600}
                          className="w-64 h-64 object-contain"
                        />
                      </div>
                      {/* **************** */}
                    </div>
                  </SwiperSlide>
                  {/* ***************************************** */}
                  <SwiperSlide className="cursor-pointer px-20">
                    <div className="container pt-8 pb-6 md:pt-20 md:pb-10 sm:pt-16 sm:pb-8">
                      {/* **************** */}
                      <div className="relative w-full h-full flex justify-center items-center">
                        <Image
                          src="/products/geolandar_x-at/tire-4.webp"
                          alt="Neumatico Geolandar X-AT"
                          width={600}
                          height={600}
                          className="w-64 h-64 object-contain"
                        />
                      </div>
                      {/* **************** */}
                    </div>
                  </SwiperSlide>
                  {/* ***************************************** */}
                </Swiper>
              </div>
            </div>

            {/* Sección Derecha: Texto y Acciones */}
            <div className="md:w-1/2 text-center md:text-left relative z-0">
              {/* Título y Subtítulo */}
              <div className="mb-4">
                <div className="grid grid-cols-2">
                  <Image
                    src="/products/geolandar_x-at/logo-x-at.png"
                    alt="Titulo Geolandar X-AT"
                    width={150}
                    height={150}
                  />
                  <div className="grid grid-cols-7">
                    <div className="">
                      <Image
                        src="/products/geolandar_x-at/icon-1.svg"
                        alt="Icono 1 Geolandar X-AT"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/products/geolandar_x-at/icon-2.svg"
                        alt="Icono 2 Geolandar X-AT"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/products/geolandar_x-at/icon-3.svg"
                        alt="Icono 3 Geolandar X-AT"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/products/geolandar_x-at/icon-4.svg"
                        alt="Icono 4 Geolandar X-AT"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/products/geolandar_x-at/icon-5.svg"
                        alt="Icono 5 Geolandar X-AT"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/products/geolandar_x-at/icon-6.webp"
                        alt="Icono 6 Geolandar X-AT"
                        width={30}
                        height={30}
                      />
                    </div>
                    <div className="">
                      <Image
                        src="/products/geolandar_x-at/icon-7.webp"
                        alt="Icono 7 Geolandar X-AT"
                        width={30}
                        height={30}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Filtros (si son necesarios) */}
              <div className="mb-6">
                <button className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-sm mr-2 focus:outline-none uppercase">
                  Transversales/SUVS
                </button>
                <button className="bg-gray-800 text-gray-300 py-1 px-3 rounded-full text-sm focus:outline-none uppercase">
                  Camiones
                </button>
              </div>

              {/* Descripción */}
              <p className="text-gray-300 mb-8">
                De la cima al pavimento, El GEOLANDAR X-AT® ofrece el máximo
                rendimiento todoterreno sin sacrificar el confort en carretera.
                Y con un paseo más tranquilo y diseño único de doble pared
                lateral, el GEOLANDAR X-AT te permite concentrarte en lo
                importante: el viaje.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* *********************************************************************************************** */}
      {/* *********************************************************************************************** */}

      <div className="relative">
        {/* contenedor principal con la imagen de fondo (sin opacidad) */}
        <div className="bg-[url('/products/geolandar_x-at/background-2-x-at.webp')] bg-cover bg-center text-white py-10 md:py-20 relative z-0">
          {/* capa de fondo oscuro */}
          <div className="absolute inset-0 bg-black opacity-80"></div>

          {/* Contenedor principal para el texto y la imagen del neumático (encima de la capa oscura) */}
          <div className="relative z-0 text-white py-10 md:py-12">
            <div className="container mx-auto px-4 md:px-8 lg:px-16">
              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                GEOLANDAR X-AT® TAMAÑO & ESPECIFICACIONES
              </h2>

              {/* Showing Specs For */}
              <h3 className="text-lg font-semibold mb-8 text-center">
                Mostrando especificaciones para 31X10.50R15 109Q
              </h3>

              {/* Grid Layout para las dos columnas principales */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Sección de Especificaciones (columna izquierda) */}
                <div className="md:order-1">
                  <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-8">
                    {/* Part # */}
                    <div>
                      <p className="text-sm text-white">Parte #</p>
                      <p className="font-semibold">110116001</p>
                    </div>
                    {/* Overall Diameter (inches) */}
                    <div>
                      <p className="text-sm text-gray-100">
                        Diámetro en General (Pulgadas)
                      </p>
                      <p className="font-semibold">30.7</p>
                    </div>
                    {/* Load I.D. */}
                    <div>
                      <p className="text-sm text-white">
                        Identificación de la Carga
                      </p>
                      <p className="font-semibold">C</p>
                    </div>
                    {/* Tread Width (inches) */}
                    <div>
                      <p className="text-sm text-white">
                        Anchura de la Banda de Rodadura (Pulgadas)
                      </p>
                      <p className="font-semibold">8.4</p>
                    </div>
                    {/* UTQG Rating */}
                    <div>
                      <p className="text-sm text-white">Valoración UTQG</p>
                      <p className="font-semibold">NA</p>
                    </div>
                    {/* Tread Depth */}
                    <div>
                      <p className="text-sm text-white">
                        Profundidad de la Banda de Rodamiento
                      </p>
                      <p className="font-semibold">17</p>
                    </div>
                    {/* Unit Weight (lbs.) */}
                    <div>
                      <p className="text-sm text-white">
                        Peso de la Unidad (Libras)
                      </p>
                      <p className="font-semibold">46.3</p>
                    </div>
                    {/* Static Radius (inches) */}
                    <div>
                      <p className="text-sm text-white">
                        Radio Estático (Pulgadas)
                      </p>
                      <p className="font-semibold">13.6</p>
                    </div>
                    {/* Rim Width (Meas.) */}
                    <div>
                      <p className="text-sm text-white">
                        Anchura del Neumático (Medidas)
                      </p>
                      <p className="font-semibold">8.5</p>
                    </div>
                    {/* Rev/Mile */}
                    <div>
                      <p className="text-sm text-white">Revoluciones/Milla</p>
                      <p className="font-semibold">676</p>
                    </div>
                    {/* Rim Width (Appr.) */}
                    <div>
                      <p className="text-sm text-white">
                        Anchura del Neumático (Aprox.)
                      </p>
                      <p className="font-semibold">7.0 - 9.0</p>
                    </div>
                    {/* Max Load at Cold Inflation Pressure (Lbs. @PSI) Single */}
                    <div>
                      <p className="text-sm text-white">
                        Carga Máxima con Presión de Inflado en Frío (Libras.
                        @PSI) Individual
                      </p>
                      <p className="font-semibold">2270 @ 50</p>
                    </div>
                    {/* Overall Width (inches) */}
                    <div>
                      <p className="text-sm text-white">
                        Anchura Total (Pulgadas)
                      </p>
                      <p className="font-semibold">10.6</p>
                    </div>
                    {/* Type */}
                    <div>
                      <p className="text-sm text-white">Tipo</p>
                      <p className="font-semibold">BW</p>
                    </div>
                  </div>
                </div>

                {/* Sección de la Imagen del Neumático (columna derecha) */}
                <div className="md:order-2 flex justify-center">
                  <div className="relative w-64 h-64 md:w-80 md:h-80">
                    <Image
                      src="/products/geolandar_x-at/tire-1.webp" // Replace with your tire image
                      alt="Geolandar X-AT Tire"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default X_AT;
