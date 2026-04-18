"use client";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const BackToTop = () => {
  const [height, setHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [clientWindow, setClientWindow] = useState();

  const handleEvent = useCallback(() => {
    setHeight(window.innerHeight);
    setScrollY(window.scrollY);
    setClientWindow(window);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleEvent);
    handleEvent();
    return () => {
      window.removeEventListener("scroll", handleEvent);
    };

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const showArrowTop = scrollY > height ? true : false;
  const handleClick = () => {
    clientWindow?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      className={`${
        showArrowTop
          ? "fixed text-black cursor-pointer bottom-0 right-0 bg-red-600 z-50 rounded-full h-10 w-10 mb-10 mr-3 p-2 me-1 shadow-lg shadow-gray-400 hover:bg-white"
          : "hidden"
      }`}
    >
      <span>
        <Image src={"/arrowhead-up.png"} height={50} width={50} alt="top" />
      </span>
    </button>
  );
};

export default BackToTop;
