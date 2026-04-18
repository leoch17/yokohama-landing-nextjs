"use client";
import React, { useState } from "react";
import Header from "../_components/Header";
import Footer from "../_components/Footer";
import Image from "next/image";
import Link from "next/link";

const products = () => {
  const [isInfoHovered_AT, setIsInfoHovered_AT] = useState(false);
  const [isInfoHovered_MT, setIsInfoHovered_MT] = useState(false);

  return (
    <>
      <Header />
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          {/* First Image Section with Hover */}
          <div
            className="mb-8 rounded-lg shadow-md overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:scale-105"
            onMouseEnter={() => setIsInfoHovered_AT(true)}
            onMouseLeave={() => setIsInfoHovered_AT(false)}
          >
            <div className="relative aspect-[16/6] md:aspect-[16/4]">
              <Image
                src="/products/geolandar_x-at/background-x-at.webp" // Reemplaza con tu ruta de imagen
                alt="Geolandar X-AT Banner"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
            <div className="absolute inset-0 flex items-start justify-start p-6 md:p-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-md p-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  GEOLANDAR
                </h2>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  X-AT
                </h3>
              </div>
            </div>
            {/* Initially hidden Info Panel */}
            <Link href="/products/geolandar-x-at/">
              <div
                className={`absolute inset-y-0 right-0 flex items-center bg-red-600 text-white text-sm font-semibold px-auto rounded-tl-md rounded-bl-md transition-all duration-300 ${
                  isInfoHovered_AT ? "w-auto" : "w-0 overflow-hidden"
                }`}
              >
                <div className="px-2 leading-[1.67]">
                  <p className="uppercase">Más</p>
                  <p className="uppercase">Información</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Second Image Section with Hover and Info Panel */}
          <div
            className="rounded-lg shadow-md overflow-hidden group relative transition-all duration-300 hover:shadow-lg hover:scale-105"
            onMouseEnter={() => setIsInfoHovered_MT(true)}
            onMouseLeave={() => setIsInfoHovered_MT(false)}
          >
            <div className="relative aspect-[16/6] md:aspect-[16/4]">
              <Image
                src="/products/geolandar_x-mt/background-x-mt.webp" // Reemplaza con tu ruta de imagen
                alt="Geolandar X-MT Banner"
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-300 group-hover:opacity-80"
              />
            </div>
            <div className="absolute inset-0 flex items-start justify-start p-6 md:p-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-md p-4">
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                  GEOLANDAR
                </h2>
                <h3 className="text-lg md:text-xl font-semibold text-gray-700">
                  X-MT
                </h3>
              </div>
            </div>
            {/* Initially hidden Info Panel */}
            <Link href="/products/geolandar-x-mt/">
              <div
                className={`absolute inset-y-0 right-0 flex items-center bg-red-600 text-white text-sm font-semibold px-auto rounded-tl-md rounded-bl-md transition-all duration-300 ${
                  isInfoHovered_MT ? "w-auto" : "w-0 overflow-hidden"
                }`}
              >
                <div className="px-2 leading-[1.67]">
                  <p className="uppercase">Más</p>
                  <p className="uppercase">Información</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default products;
