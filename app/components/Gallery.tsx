import Link from "next/link";
import React from "react";

function Gallery() {
  return (
    <section id="gallery" className="mt-28 lg:mt-20 p-8 lg:p-16">
      <h1 className="text-[#A32F3F] text-center font-bold text-2xl lg:text-3xl mb-12">
        360° Virtual Gallery
      </h1>
      <Link
        href="/gallery/photo/1"
        className="block w-full h-[300px] lg:h-[485px] bg-[url('/gallery-1.svg')] bg-cover rounded-md flex items-center justify-center text-white text-center font-semibold relative mb-4 lg:mb-8"
      >
        <div className="absolute inset-0 bg-black/75 rounded-md"></div>
        <div className="z-10 relative">
          <h2 className="text-3xl mb-2 lg:text-4xl">360°</h2>
          <h3 className="text-2xl">Virtual Photo</h3>
        </div>
      </Link>
      <div className="grid grid-cols-2 gap-4 lg:gap-8 lg:grid-cols-3">
        <Link
          href="/gallery/video/1"
          className="block w-full h-[200px] lg:h-[370px] bg-[url('/gallery-2.svg')] bg-cover rounded-md flex items-center justify-center text-white text-center font-semibold relative mb-4"
        >
          <div className="absolute inset-0 bg-black/40 rounded-md"></div>
          <div className="z-10 relative">
            <h2 className="text-xl mb-1 lg:text-3xl">360°</h2>
            <h3 className="lg:text-xl">Video Tour</h3>
          </div>
        </Link>
        <Link
          href="/gallery/photo/2"
          className="block w-full h-[200px] lg:h-[370px] bg-[url('/gallery-3.svg')] bg-cover rounded-md flex items-center justify-center text-white text-center font-semibold relative mb-4"
        >
          <div className="absolute inset-0 bg-black/40 rounded-md"></div>
          <div className="z-10 relative">
            <h2 className="text-xl mb-1 lg:text-3xl">360°</h2>
            <h3 className="lg:text-xl">Virtual Photo</h3>
          </div>
        </Link>
        <Link
          href="/gallery/photo/3"
          className="block w-full h-[200px] lg:h-[370px] bg-[url('/gallery-4.svg')] bg-cover rounded-md flex items-center justify-center text-white text-center font-semibold relative mb-4"
        >
          <div className="absolute inset-0 bg-black/40 rounded-md"></div>
          <div className="z-10 relative">
            <h2 className="text-xl mb-1 lg:text-3xl">360°</h2>
            <h3 className="lg:text-xl">Virtual Photo</h3>
          </div>
        </Link>
        <Link
          href="/gallery/video/2"
          className="block w-full h-[200px] lg:h-[370px] bg-[url('/gallery-5.svg')] bg-cover rounded-md flex items-center justify-center text-white text-center font-semibold relative mb-4"
        >
          <div className="absolute inset-0 bg-black/40 rounded-md"></div>
          <div className="z-10 relative">
            <h2 className="text-xl mb-1 lg:text-3xl">360°</h2>
            <h3 className="lg:text-xl">Video Tour</h3>
          </div>
        </Link>
        <Link
          href="/gallery/video/3"
          className="block w-full h-[200px] lg:h-[370px] bg-[url('/gallery-6.svg')] bg-cover rounded-md flex items-center justify-center text-white text-center font-semibold relative mb-4"
        >
          <div className="absolute inset-0 bg-black/40 rounded-md"></div>
          <div className="z-10 relative">
            <h2 className="text-xl mb-1 lg:text-3xl">360°</h2>
            <h3 className="lg:text-xl">Video Tour</h3>
          </div>
        </Link>
        <Link
          href="/gallery/photo/4"
          className="block w-full h-[200px] lg:h-[370px] bg-[url('/gallery-7.svg')] bg-cover rounded-md flex items-center justify-center text-white text-center font-semibold relative mb-4"
        >
          <div className="absolute inset-0 bg-black/40 rounded-md"></div>
          <div className="z-10 relative">
            <h2 className="text-xl mb-1 lg:text-3xl">360°</h2>
            <h3 className="lg:text-xl">Virtual Photo</h3>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default Gallery;
