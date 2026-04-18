import React from "react";

const Experience = () => {
  return (
    <section className=" relative text-white w-auto pt-0">
      <div className="absolute inset-0">
        <img
          src="/experience/experience-yokohama.png"
          className="w-full h-full object-cover"
          alt="Lema Experience"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-20 items-center mx-7 px-5 py-[80px] pb-20 z-10">
        <div className="relative">
          <div className="visible fade-in-100">
            <div className="flex w-auto">
              <div className="text-4xl sm:text-5xl uppercase leading-[1.1]">
                <span>Experiencia</span>
                <br />
                <strong>la Diferencia Yokohama</strong>
                <span className="pl-2">Hoy</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-auto w-auto mx-auto">
          <p className="max-w-full mb-4 leading-[1.67] font-medium">
            Vuelve a encender tu pasión por la conducción con los neumáticos
            Yokohama y experimenta el rendimiento superior que te mereces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
