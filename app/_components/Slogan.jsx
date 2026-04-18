import React from "react";

const Slogan = () => {
  return (
    <>
      <section className="relative text-white bg-black pt-0 w-auto">
        <img
          src="/slogan/home-yokohama.png"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Lema-Precision"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        {/*Overlay oscuro para legibilidad */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 items-center mx-4 sm:mx-7 px-4 sm:px-5 py-16 sm:pb-20 -mt-25 z-10">
          <div className="relative">
            <div className="mb-2 sm:mb-4 text-lg font-bold">
              ¿Porqué Yokohama?
            </div>
            <div className="visible fade-in-100">
              <div className="flex-auto w-auto">
                <div className="uppercase text-4xl sm:text-5xl md:text-6xl font-bold leading-tight sm:leading-snug">
                  Neumáticos de presición diseñados para{" "}
                  <br className="hidden sm:block" />
                  <strong className="text-red-600">Rendimiento</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-auto w-auto mt-4 md:mt-8 sm:mt-auto mx-auto">
            <p className="max-w-full mb-4 sm:mb-6 leading-relaxed sm:leading-[1.67] font-medium text-sm sm:text-base">
              Yokohama aprovecha la tecnología de nombres de primera clase para
              diseñar neumáticos de alto rendimiento encendiendo su pasión por
              la conducción. Experiencia en control de precisión y confianza
              inquebrantable, en cualquier terreno o clima, respaldado por
              nuestra tecnología innovadora.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slogan;
