"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Image from "next/image";
import React, { useState } from "react";

function Blog() {
  const blogs = [
    {
      page: 1,
      headline: {
        place: "Tokyo",
        image: "/blog-4.svg",
        title: "Exploring Tokyo's Hidden Gems",
        date: "Mar 11, 2024",
      },
      contents: [
        {
          place: "Kyoto",
          image: "/blog-2.png",
          title: "Exploring the Enchanting Charms of Kyoto",
          date: "Mar 10, 2024",
        },
        {
          place: "Osaka",
          image: "/blog-6.svg",
          title: "Osaka Unveiled",
          date: "Mar 9, 2024",
        },
      ],
    },
    {
      page: 2,
      headline: {
        place: "Osaka",
        image: "/blog-6.svg",
        title: "Osaka Unveiled",
        date: "Mar 9, 2024",
      },
      contents: [
        {
          place: "Tokyo",
          image: "/blog-4.svg",
          title: "Exploring Tokyo's Hidden Gems",
          date: "Mar 11, 2024",
        },
        {
          place: "Kyoto",
          image: "/blog-2.png",
          title: "Exploring the Enchanting Charms of Kyoto",
          date: "Mar 10, 2024",
        },
      ],
    },
    {
      page: 3,
      headline: {
        place: "Kyoto",
        image: "/blog-2.png",
        title: "Exploring the Enchanting Charms of Kyoto",
        date: "Mar 10, 2024",
      },
      contents: [
        {
          place: "Osaka",
          image: "/blog-6.svg",
          title: "Osaka Unveiled",
          date: "Mar 9, 2024",
        },
        {
          place: "Tokyo",
          image: "/blog-4.svg",
          title: "Exploring Tokyo's Hidden Gems",
          date: "Mar 11, 2024",
        },
      ],
    },
  ];

  const [page, setPage] = useState(1);

  return (
    <section id="blog" className="mt-28 lg:mt-20 p-8 lg:p-16">
      <h1 className="text-[#A32F3F] text-center font-bold text-2xl lg:text-3xl mb-12">
        Our Blog
      </h1>
      <div className="flex flex-col gap-4 mb-12 lg:mb-20">
        <h3 className="text-[#A32F3F] font-semibold text-xl lg:text-2xl">
          {blogs.find((data) => data.page === page)!.headline.place}
        </h3>
        <hr className="border border-[#36393930]" />
        <Image
          src={blogs.find((data) => data.page === page)!.headline.image}
          alt="blog"
          width={1000}
          height={1000}
          priority
          className="w-full h-[300px] lg:h-[540px] object-cover rounded-md"
        />
        <div>
          <h2 className="font-semibold text-2xl lg:text-3xl mb-2">
            {blogs.find((data) => data.page === page)?.headline.title}
          </h2>
          <h4 className="opacity-70 text-sm lg:text-base">
            {blogs.find((data) => data.page === page)?.headline.date}
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 lg:mb-24">
        {blogs
          .find((data) => data.page === page)!
          .contents.map((data) => (
            <div key={data.title} className="flex flex-col gap-4">
              <h3 className="text-[#A32F3F] font-semibold text-xl lg:text-2xl">
                {data.place}
              </h3>
              <hr className="border border-[#36393930]" />
              <Image
                src={data.image}
                alt="blog"
                width={1000}
                height={1000}
                priority
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-md"
              />
              <div>
                <h2 className="font-semibold lg:text-3xl text-2xl mb-2">
                  {data.title}
                </h2>
                <h4 className="opacity-70 text-sm lg:text-base">{data.date}</h4>
              </div>
            </div>
          ))}
      </div>
      <div className="flex gap-4 justify-center items-center">
        <button
          className={page === 1 ? "opacity-50 pointer-events-none" : ""}
          onClick={() => setPage(page - 1)}
        >
          <CaretLeft size={28} />
        </button>
        <button
          className={`${
            page === 1 ? "bg-[#A32F3F] text-white" : "bg-transparent text-black"
          } rounded-md w-[40px] h-[44px] text-lg flex items-center justify-center`}
          onClick={() => setPage(1)}
        >
          1
        </button>
        <button
          className={`${
            page === 2 ? "bg-[#A32F3F] text-white" : "bg-transparent text-black"
          } rounded-md w-[40px] h-[44px] text-lg flex items-center justify-center`}
          onClick={() => setPage(2)}
        >
          2
        </button>
        <button
          className={`${
            page === 3 ? "bg-[#A32F3F] text-white" : "bg-transparent text-black"
          } rounded-md w-[40px] h-[44px] text-lg flex items-center justify-center`}
          onClick={() => setPage(3)}
        >
          3
        </button>
        <button
          className={page === 3 ? "opacity-50 pointer-events-none" : ""}
          onClick={() => setPage(page + 1)}
        >
          <CaretRight size={28} />
        </button>
      </div>
    </section>
  );
}

export default Blog;
