import React from "react";

import Image from "next/image";

//Importa los logos como archivos estáticos o define las rutas
import atpTourLogo from "../../public/sponsors/atp-tour.png";
import rallyJapanLogo from "../../public/sponsors/rally-japan.png";
import spartanRaceLogo from "../../public/sponsors/spartan-race.png";
import superFormulaLogo from "../../public/sponsors/super-formula.png";
import superGtLogo from "../../public/sponsors/super-gt.png";

const sponsors = [
  { name: "ATP Tour", logo: atpTourLogo, width: 150, height: 150 },
  { name: "Rally Japan", logo: rallyJapanLogo, width: 150, height: 150 },
  { name: "Spartan Race", logo: spartanRaceLogo, width: 150, height: 150 },
  { name: "Super Formula", logo: superFormulaLogo, width: 150, height: 150 },
  { name: "Super GT", logo: superGtLogo, width: 150, height: 150 },
];

const Sponsors = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 uppercase">
          Patrocinantes
        </h2>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={sponsor.width}
                height={sponsor.height}
                className="object-contain grayscale hover:grayscale-0 hover:scale-105 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
