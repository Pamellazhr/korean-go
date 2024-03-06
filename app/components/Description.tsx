import Image from "next/image";
import React from "react";

function Description() {
  return (
    <section id="description" className="relative px-8 py-24">
      <Image
        src="/country-shape.png"
        alt="shape"
        width={500}
        height={500}
        className="absolute top-16 right-0"
        priority
      />
      <Image
        src="/desc-1.png"
        alt="img"
        width={275}
        height={308}
        priority
        className="z-10 relative"
      />
      <Image
        src="/desc-2.png"
        alt="img"
        width={270}
        height={185}
        priority
        className="z-10 relative float-end -translate-y-24"
      />
      <h1 className="text-3xl font-black text-[#A32F3F] leading-[1.1] mb-8">
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
      <p className="text-[#363939]">
        We specialise in providing curious travellers with access to regions and
        communities that would otherwise prove challenging. We are committed to
        offering unique travel opportunities, to unusual destinations, that are
        mutually beneficial to all involved.
      </p>
    </section>
  );
}

export default Description;
