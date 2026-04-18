"use client";

import { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";

{
  /* **************** headlessui *************** */
}
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";

{
  /* **************** heroicons *************** */
}
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  ShoppingBagIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

{
  /* ******************************* */
}
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";

{
  /* **************** Products *************** */
}
const products = [
  {
    name: "Amazonas",
    description: "Get a better understanding of your traffic",
    href: "#",
    // icon: ChartPieIcon,
    imageSrc: "/states/amazonas.png",
  },
  {
    name: "Anzoátegui",
    description: "Speak directly to your customers",
    href: "#",
    // icon: CursorArrowRaysIcon,
    imageSrc: "/states/anzoategui.png",
  },
  {
    name: "Apure",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    // icon: FingerPrintIcon,
    imageSrc: "/states/apure.png",
  },
  {
    name: "Aragua",
    description: "Connect with third-party tools",
    href: "#",
    // icon: SquaresPlusIcon,
    imageSrc: "/states/aragua.png",
  },
  {
    name: "Barinas",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/barinas.png",
  },
  {
    name: "Bolívar",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/bolivar.png",
  },
  {
    name: "Carabobo",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/carabobo.png",
  },
  {
    name: "Cojedes",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/cojedes.png",
  },
  {
    name: "Delta Amacuro",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/delta-amacuro.png",
  },
  {
    name: "Distrito Capital",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/caracas.png",
  },
  {
    name: "Falcón",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/falcon.png",
  },
  {
    name: "Guárico",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/guarico.png",
  },
  {
    name: "Lara",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/lara.png",
  },
  {
    name: "Mérida",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/merida.png",
  },
  {
    name: "Miranda",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/miranda.png",
  },
  {
    name: "Monagas",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/monagas.png",
  },
  {
    name: "Nueva Esparta",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/nueva-esparta.png",
  },
  {
    name: "Portuguesa",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/portuguesa.png",
  },
  {
    name: "Sucre",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/sucre.png",
  },
  {
    name: "Táchira",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/tachira.png",
  },
  {
    name: "Trujillo",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/trujillo.png",
  },
  {
    name: "Vargas",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/vargas.png",
  },
  {
    name: "Yaracuy",
    description: "Build strategic funnels that will convert",
    href: "#",
    // icon: ArrowPathIcon,
    imageSrc: "/states/yaracuy.png",
  },
  {
    name: "Zulia",
    description: "Build strategic funnels that will convert",
    href: "/Shop/Zulia/",
    // icon: ArrowPathIcon,
    imageSrc: "/states/zulia.png",
  },
];
{
  /* **************** Header Start *************** */
}
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-100">
      <header className="container mx-auto">
        <nav
          aria-label="Global"
          className="flex items-center justify-between py-6 lg:px-8"
        >
          {/* ******************************* */}
          <div className="flex lg:flex-1">
            <Link href="/#" className="-m-1 p-1.5">
              <svg
                id="Layer_1"
                className=""
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 73.04"
                width={200}
                height={80}
              >
                <polygon
                  fill="#e31f26"
                  points="7.05 0.01 0.98 0 35.55 34.58 35.69 34.7 35.55 34.85 1.23 69.17 7.31 69.17 41.76 34.7 7.05 0.01"
                ></polygon>
                <polygon
                  fill="#e31f26"
                  points="17.72 0.01 11.64 0.01 46.2 34.58 46.35 34.7 46.2 34.85 11.9 69.16 17.99 69.16 52.43 34.7 17.72 0.01"
                ></polygon>
                <polygon
                  fill="#e31f26"
                  points="28.4 0 22.34 0.01 56.89 34.58 57.01 34.7 56.89 34.85 22.58 69.16 28.66 69.16 63.13 34.7 28.4 0"
                ></polygon>
                <polygon
                  fill="#e31f26"
                  points="39.08 0 32.99 0 67.56 34.56 67.7 34.7 67.56 34.85 33.24 69.16 39.33 69.17 73.79 34.7 39.08 0"
                ></polygon>
                <path
                  fill="#e31f26"
                  d="M81.55,31.52l-.14.14-.13-.14-2-2-.13-.16.13-.13L108.49,0h-6.08L76.22,26.19l-.15.15-.13-.15-2-2L73.79,24l.14-.13L97.81,0H91.73L70.89,20.86l-.14.15-.15-.15-2-2-.15-.14.15-.16L87.14,0H81.06L65.55,15.52l-.15.15-.14-.16-2-2-.14-.15.14-.13L76.45,0H70.39L60.2,10.17l-.13.14-.13-.14L49.77,0h-6.1L78.24,34.56l.12.14-.12.15L43.93,69.16H50c.13-.1,34.59-34.58,34.59-34.58L119.17,0h-6.09Z"
                ></path>
                <polygon
                  fill="#000"
                  points="159.4 8.65 149.58 8.65 138.53 31.31 127.47 8.65 117.65 8.65 134.2 41.55 134.2 61.18 142.83 61.17 142.83 41.55 159.4 8.65"
                ></polygon>
                <path
                  fill="#000"
                  d="M161,34.92a18,18,0,1,0,18-18,18,18,0,0,0-18,18M179,8.21A26.71,26.71,0,1,1,152.3,34.92,26.71,26.71,0,0,1,179,8.21"
                ></path>
                <path
                  fill="#000"
                  d="M244.92,34.89a18,18,0,1,0,18-18,18,18,0,0,0-18,18m18-26.7a26.72,26.72,0,1,1-26.74,26.7,26.75,26.75,0,0,1,26.74-26.7"
                ></path>
                <polygon
                  fill="#000"
                  points="244.73 8.21 233.25 8.21 217.11 30.57 217.11 8.21 207.97 8.21 207.97 60.74 217.11 60.74 217.11 39.09 232.49 60.74 243.97 60.74 224.43 34.99 244.73 8.21"
                ></polygon>
                <polygon
                  fill="#000"
                  points="320.13 8.62 320.13 30.93 301.28 30.93 301.28 8.62 291.91 8.62 291.91 61.17 301.28 61.17 301.28 39.94 320.13 39.94 320.13 61.17 329.47 61.17 329.47 8.66 320.13 8.62"
                ></polygon>
                <path
                  fill="#000"
                  d="M349,40.39l6.6-17.87,6.62,17.87Zm20.87,20.78h9.82L360.22,8.62h-9.34l-19.4,52.55h9.8l4.83-13.39H365Z"
                ></path>
                <path
                  fill="#000"
                  d="M455.83,40.39l6.61-17.89,6.62,17.89ZM476.7,61.17h9.83L467.14,8.62h-1l-8,0h-.4L438.35,61.17h9.85L453,47.76h18.88Z"
                ></path>
                <polygon
                  fill="#000"
                  points="432.97 8.62 426.08 8.62 424.1 8.66 408.62 48.91 393.13 8.62 391.13 8.66 384.28 8.62 381.58 8.66 381.58 61.17 390.97 61.17 391.13 26.83 404.23 61.17 404.64 61.17 412.56 61.17 412.97 61.17 426.09 26.83 426.25 61.17 435.66 61.17 435.66 8.62 432.97 8.62"
                ></polygon>
                <path
                  fill="#000"
                  d="M489.94,56.3a4.74,4.74,0,1,1,4.73,4.75,4.74,4.74,0,0,1-4.73-4.75m-.6,0A5.33,5.33,0,1,0,494.67,51a5.33,5.33,0,0,0-5.33,5.32"
                ></path>
                <path
                  fill="#000"
                  d="M493.32,55.94h1.44a1.65,1.65,0,0,0,.71-.12.84.84,0,0,0,.4-.37,1.14,1.14,0,0,0,.15-.56,1,1,0,0,0-.28-.75,1.14,1.14,0,0,0-.82-.26h-1.6Zm-.69,3.48V53.19h2.26a2.53,2.53,0,0,1,1.05.16,1.35,1.35,0,0,1,.55.58,2,2,0,0,1,.22,1,1.79,1.79,0,0,1-.36,1.14,1.69,1.69,0,0,1-1.07.56,1.45,1.45,0,0,1,.43.35,3.68,3.68,0,0,1,.54.79l.88,1.7h-.85l-.67-1.29a7,7,0,0,0-.6-1,1.07,1.07,0,0,0-.39-.36,1.25,1.25,0,0,0-.53-.1h-.77v2.78Z"
                ></path>
              </svg>
            </Link>
          </div>
          {/* ******************************* */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="m-3 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* ******************************* */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              href="/"
              className="text-lg font-medium leading-6 text-gray-900 hover:text-red-600"
            >
              Inicio
            </Link>
            <Link
              href="/#about"
              className="text-lg font-medium leading-6 text-gray-900 hover:text-red-600"
            >
              Nosotros
            </Link>
            <Link
              href="/#location"
              className="text-lg font-medium leading-6 text-gray-900 hover:text-red-600"
            >
              Ubícanos
            </Link>
            <Link
              href="/products"
              className="text-lg font-medium leading-6 text-gray-900 hover:text-red-600"
            >
              Productos
            </Link>
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-lg font-medium leading-6 cursor-pointer text-gray-900 hover:text-red-600">
                Tiendas
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-400"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4 max-h-96 overflow-y-auto">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                    >
                      <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          src={item.imageSrc}
                          alt={item.name}
                          className="size-8 rounded-lg object-cover"
                        />
                        {/* <item.icon
                            aria-hidden="true"
                            className="size-6 text-gray-600 group-hover:text-indigo-600"
                          /> */}
                      </div>
                      <div className="flex-auto">
                        <Link
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          {/* ******************************* */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="https://www.instagram.com/yokohamatire/?hl=en"
              target="_blank"
              className="text-sm/6 font-semibold mx-3 bg-gray-900 leading-6 rounded-full p-2 shadow-lg shadow-gray-400 hover:bg-red-600 hover:scale-105 transition-all"
            >
              <DynamicIcon name="instagram" color="white" size={25} />
            </Link>
            <Link
              href="https://x.com/YokohamaTC"
              target="_blank"
              className="text-sm/6 font-semibold mx-3 bg-gray-900 rounded-full p-2 shadow-lg shadow-gray-400 hover:bg-red-600 hover:scale-105 transition-all"
            >
              <DynamicIcon name="twitter" color="white" size={25} />
            </Link>
            <Link
              href="https://www.facebook.com/yokohamatire/"
              target="_blank"
              className="text-sm/6 font-semibold mx-3 bg-gray-900 rounded-full p-2 shadow-lg shadow-gray-400 hover:bg-red-600 hover:scale-105 transition-all"
            >
              <DynamicIcon name="facebook" color="white" size={25} />
            </Link>
            <Link
              href="https://www.youtube.com/user/yokohamamotorsports"
              target="_blank"
              className="text-sm/6 font-semibold mx-3 bg-gray-900 rounded-full p-2 shadow-lg shadow-gray-400 hover:bg-red-600 hover:scale-105 transition-all"
            >
              <DynamicIcon name="youtube" color="white" size={25} />
            </Link>
          </div>
          {/* ******************************* */}
        </nav>
        {/* ******************************* */}
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="/#" className="-m-1.5 p-1.5">
                <svg
                  id="Layer_1"
                  className=""
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 500 73.04"
                  width={200}
                  height={80}
                >
                  <polygLinkn
                    fill="#e31f26"
                    points="7.05 0.01 0.98 0 35.55 34.58 35.69 34.7 35.55 34.85 1.23 69.17 7.31 69.17 41.76 34.7 7.05 0.01"
                  ></polygLinkn>
                  <polygon
                    fill="#e31f26"
                    points="17.72 0.01 11.64 0.01 46.2 34.58 46.35 34.7 46.2 34.85 11.9 69.16 17.99 69.16 52.43 34.7 17.72 0.01"
                  ></polygon>
                  <polygon
                    fill="#e31f26"
                    points="28.4 0 22.34 0.01 56.89 34.58 57.01 34.7 56.89 34.85 22.58 69.16 28.66 69.16 63.13 34.7 28.4 0"
                  ></polygon>
                  <polygon
                    fill="#e31f26"
                    points="39.08 0 32.99 0 67.56 34.56 67.7 34.7 67.56 34.85 33.24 69.16 39.33 69.17 73.79 34.7 39.08 0"
                  ></polygon>
                  <path
                    fill="#e31f26"
                    d="M81.55,31.52l-.14.14-.13-.14-2-2-.13-.16.13-.13L108.49,0h-6.08L76.22,26.19l-.15.15-.13-.15-2-2L73.79,24l.14-.13L97.81,0H91.73L70.89,20.86l-.14.15-.15-.15-2-2-.15-.14.15-.16L87.14,0H81.06L65.55,15.52l-.15.15-.14-.16-2-2-.14-.15.14-.13L76.45,0H70.39L60.2,10.17l-.13.14-.13-.14L49.77,0h-6.1L78.24,34.56l.12.14-.12.15L43.93,69.16H50c.13-.1,34.59-34.58,34.59-34.58L119.17,0h-6.09Z"
                  ></path>
                </svg>
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Cerrar menú</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <Link
                    href="/#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Inicio
                  </Link>
                  <Link
                    href="#about"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Nosotros
                  </Link>
                  <Link
                    href="#location"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Ubícanos
                  </Link>
                  <Link
                    href="/products"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Productos
                  </Link>
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                      Tiendas
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="size-5 flex-none group-data-open:rotate-180"
                      />
                    </DisclosureButton>
                    <DisclosurePanel className="mt-2 space-y-2">
                      {[...products].map((item) => (
                        <DisclosureButton
                          key={item.name}
                          as="a"
                          href={item.href}
                          className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </DisclosureButton>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
        {/* ******************************* */}
      </header>
    </div>
  );
};
{
  /* **************** Header End *************** */
}

export default Header;
