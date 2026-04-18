"use client";
import React from "react";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { DynamicIcon } from "lucide-react/dynamic";

const Zulia = () => {
  return (
    <>
      <div className="bg-[url('/states/fondo-shop.jpg')] bg-center bg-cover">
        <Header />
        <h1 className="flex font-bold uppercase items-center justify-center py-10 text-xl sm:text-5xl md:text-4xl">
          Redes de Distribución del&nbsp;
          <span className="text-red-600">Zulia</span>
        </h1>
        <Accordion
          variant="shadow"
          className="bg-black shadow-lg shadow-gray-400 rounded-md w-full max-w-md mx-auto my-8 px-4 sm:px-8 md:max-w-lg lg:max-w-xl" // Fondo oscuro y redondeado
        >
          <AccordionItem
            className="text-white border-b border-zinc-700" // Texto blanco y separador oscuro
            key="1"
            aria-label="Ruedas La Mundial 72, C.A."
            title={
              <div className="flex items-center justify-between w-full cursor-pointer hover:text-red-600">
                <span className="font-medium">Ruedas La Mundial 72, C.A.</span>
              </div>
            }
          >
            <p className="text-white text-center md:text-center uppercase">
              CALLE 72 GILBERTO CORREA, ENTRE AV. 13 Y AV. 12 AL LADO DE
              FARMACIA FARMAEXPRESS.
            </p>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="phone" size={20} />
              <span>:</span>
              <a href="tel:+584122618392">
                <span className="hover:text-red-600">0412-2618392</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="instagram" size={20} />
              <span>:</span>
              <a
                href="https://www.instagram.com/ruedaslamundial/?hl=en"
                target="_blank"
              >
                <span className="hover:text-red-600">@ruedaslamundial</span>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1165.6725454123161!2d-71.61633391569153!3d10.669566449657264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999d446d6317d%3A0x6b5846a8095c79d5!2sRuedas%20La%20Mundial%2072%2C%20C.A.!5e0!3m2!1ses!2sve!4v1746233579403!5m2!1ses!2sve"
              className="flex justify-center mx-2 my-2 rounded-lg w-full h-64 sm:h-96 md:h-96"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AccordionItem>
          <AccordionItem
            className="text-white border-b border-zinc-700"
            key="2"
            aria-label="Ruedas La Mundial Cecilio Acosta, C.A."
            title={
              <div className="flex items-center justify-between w-full cursor-pointer hover:text-red-600">
                <span className="font-medium">
                  Ruedas La Mundial Cecilio Acosta, C.A.
                </span>
              </div>
            }
          >
            <p className="text-white text-center md:text-center uppercase">
              AV. 9B CON CALLE 67 CECILIO ACOSTA.
            </p>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="phone" size={20} />
              <span>:</span>
              <a href="tel:+584122618392">
                <span className="hover:text-red-600">0412-2618392</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="instagram" size={20} />
              <span>:</span>
              <a
                href="https://www.instagram.com/ruedaslamundial/?hl=en"
                target="_blank"
              >
                <span className="hover:text-red-600">@ruedaslamundial</span>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d582.8216825570604!2d-71.61344385594104!3d10.677176674381407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89994e59916691%3A0xfe5933d950b31512!2sRuedas%20La%20Mundial!5e0!3m2!1ses!2sve!4v1746233849069!5m2!1ses!2sve"
              className="flex justify-center mx-2 my-2 rounded-lg w-full h-64 sm:h-96 md:h-96"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AccordionItem>
          <AccordionItem
            className="text-white border-b border-zinc-700 last:border-b-0"
            key="3"
            aria-label="Ruedas La Mundial Sabaneta, C.A."
            title={
              <div className="flex items-center justify-between w-full cursor-pointer hover:text-red-600">
                <span className="font-medium">
                  Ruedas La Mundial Sabaneta, C.A.
                </span>
              </div>
            }
          >
            <p className="text-white text-center md:text-center uppercase">
              DIAGONAL AL MONUMENTO LA CHINITA DE LA C1.
            </p>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="phone" size={20} />
              <span>:</span>
              <a href="tel:+584122618392">
                <span className="hover:text-red-600">0412-2618392</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="instagram" size={20} />
              <span>:</span>
              <a
                href="https://www.instagram.com/ruedaslamundial/?hl=en"
                target="_blank"
              >
                <span className="hover:text-red-600">@ruedaslamundial</span>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.3667013946351!2d-71.64159747079884!3d10.62826019526409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999beca66dc79%3A0x36e5800889123875!2sRuedas%20La%20Mundial%20Sabaneta!5e0!3m2!1ses!2sve!4v1746234024849!5m2!1ses!2sve"
              className="flex justify-center mx-2 my-2 rounded-lg w-full h-64 sm:h-96 md:h-96"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AccordionItem>
          <AccordionItem
            className="text-white border-b border-zinc-700 last:border-b-0"
            key="4"
            aria-label="Ruedas La Mundial Veritas, C.A."
            title={
              <div className="flex items-center justify-between w-full cursor-pointer hover:text-red-600">
                <span className="font-medium">
                  Ruedas La Mundial Veritas, C.A.
                </span>
              </div>
            }
          >
            <p className="text-white text-center md:text-center uppercase">
              CALLE 90, CON AV. 8 (DIAGONAL A LA ESTACIÓN DE SERVICIO NUEVO
              CIRCO), LAS VERITAS, MARACAIBO.
            </p>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="phone" size={20} />
              <span>:</span>
              <a href="tel:+584122618392">
                <span className="hover:text-red-600">0412-2618392</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="instagram" size={20} />
              <span>:</span>
              <a
                href="https://www.instagram.com/ruedaslamundial/?hl=en"
                target="_blank"
              >
                <span className="hover:text-red-600">@ruedaslamundial</span>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d693.1617457870316!2d-71.61054093861542!3d10.648175840926644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999e5e16eec79%3A0xcafe6474ff2d41b3!2sRuedas%20la%20Mundial%20Veritas!5e0!3m2!1ses!2sve!4v1746234125191!5m2!1ses!2sve"
              className="flex justify-center mx-2 my-2 rounded-lg w-full h-64 sm:h-96 md:h-96"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AccordionItem>
          <AccordionItem
            className="text-white border-b border-zinc-700 last:border-b-0"
            key="5"
            aria-label="Ruedas La Mundial Sur, C.A."
            title={
              <div className="flex items-center justify-between w-full cursor-pointer hover:text-red-600">
                <span className="font-medium">Ruedas La Mundial Sur, C.A.</span>
              </div>
            }
          >
            <p className="text-white text-center md:text-center uppercase">
              UBICADA A 200 METROS DE LA ESCUELA DE POLICÍAS DE SAN FRANCÍSCO.
            </p>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="phone" size={20} />
              <span>:</span>
              <a href="tel:+584122618392">
                <span className="hover:text-red-600">0412-2618392</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="instagram" size={20} />
              <span>:</span>
              <a
                href="https://www.instagram.com/ruedaslamundial/?hl=en"
                target="_blank"
              >
                <span className="hover:text-red-600">@ruedaslamundial</span>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.5650902950781!2d-71.62427561110734!3d10.55878758552123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89979e7bbb8271%3A0xd9b6b8ffb13d653a!2sRuedas%20La%20Mundial%20Sur!5e0!3m2!1ses!2sve!4v1746234314907!5m2!1ses!2sve"
              className="flex justify-center mx-2 my-2 rounded-lg w-full h-64 sm:h-96 md:h-96"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AccordionItem>
          <AccordionItem
            className="text-white border-b border-zinc-700 last:border-b-0"
            key="6"
            aria-label="Ruedas La Mundial Delicias, C.A."
            title={
              <div className="flex items-center justify-between w-full cursor-pointer hover:text-red-600">
                <span className="font-medium">
                  Ruedas La Mundial Delicias, C.A.
                </span>
              </div>
            }
          >
            <p className="text-white text-center md:text-center uppercase">
              Av. Principal, Las Delicias entre calle 82 y calle 83
            </p>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="phone" size={20} />
              <span>:</span>
              <a href="tel:+584122618392">
                <span className="hover:text-red-600">0412-2618392</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="instagram" size={20} />
              <span>:</span>
              <a
                href="https://www.instagram.com/ruedaslamundial/?hl=en"
                target="_blank"
              >
                <span className="hover:text-red-600">@ruedaslamundial</span>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1386.2728489137605!2d-71.61952334964096!3d10.659302302890469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8999b1109655b3%3A0x7f9b178f3de214ff!2sRuedas%20La%20Mundial%20Delicias!5e0!3m2!1ses!2sve!4v1746234372186!5m2!1ses!2sve"
              className="flex justify-center mx-2 my-2 rounded-lg w-full h-64 sm:h-96 md:h-96"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AccordionItem>
          <AccordionItem
            className="text-white border-b border-zinc-700 last:border-b-0" // No border-b en el último elemento
            key="7"
            aria-label="Ruedas La Mundial Sierra Maestra, C.A."
            title={
              <div className="flex items-center justify-between w-full cursor-pointer hover:text-red-600">
                <span className="font-medium">
                  Ruedas La Mundial Sierra Maestra, C.A.
                </span>
              </div>
            }
          >
            <p className="text-white text-center md:text-center uppercase">
              Av. 15, entre calle 20 y calle 19, al lado de lubricantes la
              mundial
            </p>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="phone" size={20} />
              <span>:</span>
              <a href="tel:+584122618392">
                <span className="hover:text-red-600">0412-2618392</span>
              </a>
            </div>
            <div className="flex items-center justify-center md:justify-center space-x-2 mt-2">
              <DynamicIcon className="text-center" name="instagram" size={20} />
              <span>:</span>
              <a
                href="https://www.instagram.com/ruedaslamundial/?hl=en"
                target="_blank"
              >
                <span className="hover:text-red-600">@ruedaslamundial</span>
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d980.5016122480525!2d-71.63577737319187!3d10.57866768765489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89972e59c7b27d%3A0xc3d89e8c2b7ad7cf!2sRuedas%20la%20Mundial%20SM!5e0!3m2!1ses!2sve!4v1746234601452!5m2!1ses!2sve"
              className="flex justify-center mx-2 my-2 rounded-lg w-full h-64 sm:h-96 md:h-96"
              width="400"
              height="300"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </AccordionItem>
        </Accordion>
        <Footer />
      </div>
    </>
  );
};

export default Zulia;
