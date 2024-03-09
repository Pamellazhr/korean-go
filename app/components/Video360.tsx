"use client";

import { CaretLeft } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReactPlayer from "react-player/youtube";

function Video360({ id }: { id: string }) {
  const sources = [
    {
      id: "1",
      src: "https://youtu.be/FPiZ7z6lU54?si=jYVNVfCt_WRw23qG",
    },
    {
      id: "2",
      src: "https://youtu.be/hEdzv7D4CbQ?si=Be3YV-TD1Wb15zb5",
    },
    {
      id: "3",
      src: "https://youtu.be/kyN623RzFe0?si=obGXgqW_vG_umo1n",
    },
  ];

  return (
    <div className="h-screen relative">
      <div className="absolute top-0 inset-x-0 h-[3.75rem] bg-white flex items-center text-[#A32F3F] rounded-bl-[45px] font-medium px-8 text-lg">
        <Link href="/gallery" className="flex items-center gap-2">
          <CaretLeft size={32} />
          <span>Back to gallery</span>
        </Link>
      </div>
      <ReactPlayer
        url={sources.find((data) => data.id === id)?.src}
        width="100%"
        height="100%"
        loop={true}
        playing={true}
        muted={true}
        controls={true}
      />
    </div>
  );
}

export default Video360;
