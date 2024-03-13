"use client";

import { useFirebaseContext } from "@/app/context/FirebaseProvider";
import Link from "next/link";
import React from "react";

function DetailBlogAdmin({ id }: { id: string }) {
  const { blog } = useFirebaseContext();

  const blogDetail = blog.find((data) => data.id === id);

  if (!blogDetail) return null;

  return (
    <section id="detail-blog-admin" className="p-8 lg:p-16">
      <div className="mb-16 flex justify-between">
        <Link
          href="/admin/blog"
          className="border-2 border-[#A32F3F] px-4 py-2 rounded-md text-[#A32F3F] text-lg font-medium"
        >
          Back
        </Link>
        <div className="flex gap-4">
          <button className="bg-[#A32F3F] px-4 py-2 rounded-md text-white text-lg font-medium">
            Edit
          </button>
          <button className="bg-[#A32F3F] px-4 py-2 rounded-md text-white text-lg font-medium">
            Delete
          </button>
        </div>
      </div>
      <img
        src={blogDetail.thumbnail}
        alt="thumbnail"
        width={1000}
        height={1000}
        className="object-cover w-full h-[300px]"
      />
      <h1 className="my-12 font-bold text-4xl">{blogDetail.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
    </section>
  );
}

export default DetailBlogAdmin;
