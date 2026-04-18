import Image from "next/image";
import React from "react";

const Explore = () => {
  return (
    <>
      <div id="about" className="bg-gray-50">
        <div className="container py-20 mx-auto sm:px-6 lg:px-8">
          {/* ******************************* */}
          <div className="grid grid-cols-6 text-center mb-8 md:py-16">
            <div className="col-start-2 col-span-4">
              <h1 className="text-5xl font-bold">
                Bienvenidos a Nuestro Mundo
              </h1>
            </div>
          </div>
          {/* ******************************* */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 w-full sm:w-4/5 mx-auto">
            {/* ******************************* */}
            <div className="shadow-xl px-6 py-8 rounded-lg hover:scale-105 transition-all">
              <h1 className="text-md sm:text-lg font-semibold text-gray-700">
                Avanzamos en el diseño y desarrollo de neumáticos desde nuestra
                fundación en 1917
              </h1>
              <p className="py-2 text-gray-500 text-sm text-justify">
                Fuimos el primer fabricante japonés de neumáticos al que se
                concedió la certificación ISO9001 en reconocimiento a un modelo
                de empresa que garantiza la calidad en el diseño, el desarrollo,
                la fabricación, la instalación y los servicios relacionados.
              </p>
              <div className="text-center">
                <Image
                  src="/about/1-About.jpg"
                  width={350}
                  height={350}
                  className="py-6 mx-auto rounded-lg"
                  alt="Historia-1"
                />
              </div>
            </div>
            {/* ******************************* */}
            <div className="shadow-xl px-6 py-8 rounded-lg hover:scale-105 transition-all">
              <h1 className="text-md sm:text-lg font-semibold text-gray-700">
                Yokohama Tire Corporation es líder en tecnología e innovación
              </h1>
              <p className="py-2 text-gray-500 text-sm text-justify">
                Yokohama Tire Corporation es la división norteamericana de
                fabricación y comercialización de Yokohama Rubber Co., Ltd., con
                sede en Tokio (Japón). Desde su expansión a los Estados Unidos
                en 1969, hemos sido líderes del sector en tecnología e
                innovación de neumáticos en todo el mundo.
              </p>
              <div className="text-center">
                <Image
                  src="/about/2-About.jpg"
                  width={350}
                  height={350}
                  className="py-6 rounded-lg mx-auto"
                  alt="Historia-2"
                />
              </div>
            </div>
            {/* ******************************* */}
            <div className="shadow-xl px-6 py-8 rounded-lg hover:scale-105 transition-all">
              <h1 className="text-md sm:text-lg font-semibold text-gray-700">
                Nuestro hogar para la tecnología y la innovación
              </h1>
              <p className="py-2 text-gray-500 text-sm text-justify">
                Gran parte de nuestra plantilla de 2.100 empleados en EE.UU.
                procede de nuestro centro de investigación y desarrollo de
                Cornelius (Carolina del Norte) y de las plantas de fabricación
                de Salem (Virginia) y West Point (Mississippi). Juntas, producen
                millones de neumáticos al año para nuestras divisiones comercial
                y de consumo.
              </p>
              <div className="text-center">
                <Image
                  src="/about/3-About.jpg"
                  width={350}
                  height={350}
                  className="py-6 rounded-lg mx-auto"
                  alt="Historia-3"
                />
              </div>
            </div>
            {/* ******************************* */}
          </div>
          {/* ******************************* */}
        </div>
      </div>
    </>
  );
};

export default Explore;
