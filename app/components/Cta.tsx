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
        className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] object-cover absolute top-0 -left-16 lg:-left-24"
      />
      <div className="bg-[#A83949] rounded-md relative overflow-hidden">
        <Image
          src="/cta-bg.svg"
          alt="bg"
          width={1000}
          height={1000}
          priority
          className="absolute -bottom-24 right-0 w-[170px] h-[225px] lg:w-[500px] lg:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-[#A8394970] rounded-md"></div>
        <div className="px-6 py-16 flex flex-col gap-8 items-center text-center z-10 relative lg:w-1/2 lg:items-start lg:text-left lg:px-12">
          <h1 className="text-white text-3xl lg:text-4xl font-medium">
            Booking Travel Now!
          </h1>
          <p className="opacity-70 text-white lg:text-lg">
            Discover Japan's wonders! Dive into rich culture, stunning
            landscapes, and vibrant cities. From Kyoto's temples to Tokyo's
            streets, there's something for every traveler. Book now and let
            Japan's beauty unfold!
          </p>
          <button className="py-2 px-4 rounded-md bg-white text-[#A83949] font-medium lg:text-lg">
            Get in touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
