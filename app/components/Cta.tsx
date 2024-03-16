import Image from "next/image";
import React from "react";

function Cta() {
  return (
    <section id="cta" className="relative px-8 py-24 lg:py-32 lg:px-16">
      <Image
        src="/cta-accent.svg"
        alt="accent"
        width={1000}
        height={1000}
        priority
        className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover absolute top-16 lg:top-20 left-0 lg:left-4 z-10"
      />
      <div className="bg-[#E19898] rounded-md relative overflow-hidden">
        <Image
          src="/cta-bg.svg"
          alt="bg"
          width={1000}
          height={1000}
          priority
          className="absolute -bottom-8 -right-16 lg:bottom-0 lg:right-0 w-[325px] h-[220px] lg:w-[500px] lg:h-[300px] object-cover"
        />
        <div className="absolute inset-0 bg-[#E1989870] rounded-md"></div>
        <div className="px-6 py-16 flex flex-col gap-8 items-center text-center z-10 relative lg:w-1/2 lg:items-start lg:text-left lg:px-12">
          <h1 className="text-white text-3xl lg:text-4xl font-medium">
            Booking Travel Now!
          </h1>
          <p className="opacity-70 text-white lg:text-lg">
            Discover Korea's wonders! Dive into rich culture, stunning
            landscapes, and vibrant cities. From Kyoto's temples to Tokyo's
            streets, there's something for every traveler. Book now and let
            Korea's beauty unfold!
          </p>
          <button className="py-2 px-4 rounded-md bg-white text-[#E19898] font-medium lg:text-lg">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
