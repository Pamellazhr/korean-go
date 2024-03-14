"use client";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import Link from "next/link";
import React, { useState } from "react";
import { useFirebaseContext } from "../context/FirebaseProvider";

function Blog() {
  const { blog } = useFirebaseContext();

  const dividedBlog = blog.reduce((resultArray: any, item: any, index: any) => {
    const chunkIndex = Math.floor(index / 3);
    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);
    return resultArray;
  }, []);

  const [page, setPage] = useState(0);

  return (
    <section id="blog" className="mt-28 lg:mt-20 p-8 lg:p-16">
      <h1 className="text-[#A32F3F] text-center font-bold text-2xl lg:text-3xl mb-12">
        Our Blog
      </h1>
      {dividedBlog.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        <div className="space-y-12 mb-16 lg:mb-24">
          {dividedBlog[page].map((data: any) => (
            <div key={data.title} className="flex flex-col gap-4">
              <h3 className="text-[#A32F3F] font-semibold text-xl lg:text-2xl">
                {data.place}
              </h3>
              <hr className="border border-[#36393930]" />
              <img
                src={data.thumbnail}
                alt="blog"
                width={1000}
                height={1000}
                className="w-full h-[300px] lg:h-[400px] object-cover rounded-md"
              />
              <div>
                <Link
                  href={`/blog/${data.id}`}
                  className="w-full block font-semibold lg:text-3xl text-2xl mb-2"
                >
                  {data.title}
                </Link>
                <h4 className="opacity-70 text-sm lg:text-base">
                  {new Date(data.time?.seconds * 1000).toLocaleDateString(
                    "en-GB",
                    {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }
                  )}
                </h4>
              </div>
            </div>
          ))}
        </div>
      )}
      {dividedBlog.length !== 0 && (
        <div className="flex gap-4 justify-center items-center">
          <button
            className={page === 0 ? "opacity-50 pointer-events-none" : ""}
            onClick={() => setPage(page - 1)}
          >
            <CaretLeft size={28} />
          </button>
          {dividedBlog.map((data: any, index: number) => (
            <button
              key={data[0].id}
              className={`${
                page === index
                  ? "bg-[#A32F3F] text-white"
                  : "bg-transparent text-black"
              } rounded-md w-[40px] h-[44px] text-lg flex items-center justify-center`}
              onClick={() => setPage(index)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className={
              page === dividedBlog.length - 1
                ? "opacity-50 pointer-events-none"
                : ""
            }
            onClick={() => setPage(page + 1)}
          >
            <CaretRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
}

export default Blog;
