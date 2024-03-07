import Image from "next/image";
import React from "react";

function Description() {
  return (
    <section id="description" className="relative px-8 py-24 lg:py-48 lg:px-16">
      <Image
        src="/country-shape.png"
        alt="shape"
        width={500}
        height={500}
        className="absolute top-16 right-0"
        priority
      />
      <div className="z-10 relative lg:flex items-start gap-16">
        <Image
          src="/desc-1.png"
          alt="img"
          width={275}
          height={308}
          priority
          className="lg:w-[450px] lg:h-[470px] object-cover"
        />
        <h1 className="text-[3rem] font-black text-[#A32F3F] py-8 leading-[1.25] w-[750px] hidden lg:block">
          <span
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStrokeWidth: "1.5px",
            }}
          >
            Experience adventures
          </span>
          <br />
          with handpicked departures to hidden gems across Japan.
        </h1>
      </div>
      <div className="z-10 relative float-end -translate-y-24 lg:-translate-y-48 lg:flex items-center gap-16">
        <Image
          src="/desc-2.png"
          alt="img"
          width={270}
          height={185}
          priority
          className="lg:w-[375px] lg:h-[260px] object-cover"
        />
        <p className="text-[#363939] hidden lg:block text-lg w-[680px] bg-white p-6 rounded border border-[#7c7c7c50] shadow-lg">
          We specialise in providing curious travellers with access to regions
          and communities that would otherwise prove challenging. We are
          committed to offering unique travel opportunities, to unusual
          destinations, that are mutually beneficial to all involved.
        </p>
      </div>
      <h1 className="text-3xl font-black text-[#A32F3F] leading-[1.1] mb-8 lg:hidden z-10 relative">
        <span
          className="text-4xl"
          style={{
            WebkitTextFillColor: "transparent",
            WebkitTextStrokeWidth: "1.5px",
          }}
        >
          Experience adventures
        </span>
        <br />
        with handpicked departures to hidden gems across Japan.
      </h1>
      <p className="text-[#363939] lg:hidden z-10 relative">
        We specialise in providing curious travellers with access to regions and
        communities that would otherwise prove challenging. We are committed to
        offering unique travel opportunities, to unusual destinations, that are
        mutually beneficial to all involved.
      </p>
    </section>
  );
}

export default Description;
