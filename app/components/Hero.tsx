"use client";

import React, { useEffect, useState } from "react";

function Hero() {
  const CAROUSEL_DATA = [
    {
      title: "Capturing Korean Cape Town",
      subtitle: "One of the most photogenic cities on the planet.",
      bg: "bg-[url('/hc-1.jpg')]",
    },
    {
      title: "Town Cape Capturing",
      subtitle: "Photogenic cities on the planet one of the most.",
      bg: "bg-[url('/hc-2.png')]",
    },
    {
      title: "Cape Capturing Town",
      subtitle: "The planet one of the most photogenic cities on.",
      bg: "bg-[url('/hc-3.jpg')]",
    },
    {
      title: "Nowt Epac Gnirutpac",
      subtitle: "The most photogenic cities on the planet one of.",
      bg: "bg-[url('/hc-4.jpg')]",
    },
  ];
  const maxIndex = CAROUSEL_DATA.length - 1;
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCarouselIndex(carouselIndex === maxIndex ? 0 : carouselIndex + 1);
    }, 5000);

    return () => {
      clearInterval(id);
    };
  }, [carouselIndex]);

  return (
    <section
      id="hero"
      className="h-screen flex items-center relative overflow-hidden text-white"
    >
      {CAROUSEL_DATA.map((data, index) => {
        let className = "translate-x-full opacity-0";

        if (index === carouselIndex) {
          className = "translate-x-0 opacity-100";
        }
        if (
          index === carouselIndex - 1 ||
          (index === maxIndex && carouselIndex === 0)
        ) {
          className = "-translate-x-full opacity-0";
        }

        return (
          <div
            key={data.title}
            className={`absolute inset-0 ${className} ${data.bg} bg-cover duration-300 ease-linear flex items-center p-8 lg:p-16`}
          >
            <div className="absolute inset-0 bg-black/75"></div>
            <div className="z-10 space-y-4">
              <h1 className="font-bold text-3xl lg:text-5xl">{data.title}</h1>
              <h3 className="lg:text-xl">{data.subtitle}</h3>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-12 inset-x-0 flex justify-center items-center gap-3">
        {CAROUSEL_DATA.map((data, index) => (
          <span
            key={data.title}
            className={`${
              index === carouselIndex
                ? "w-4 h-4 bg-black border-2 border-white"
                : "w-2 h-2 bg-white"
            } rounded-full`}
          ></span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
