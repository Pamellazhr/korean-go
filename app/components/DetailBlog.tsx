"use client";

import React from "react";
import { useFirebaseContext } from "../context/FirebaseProvider";

function DetailBlog({ id }: { id: string }) {
  const { blog } = useFirebaseContext();

  const blogDetail = blog.find((data: any) => data.id === id);

  if (!blogDetail) return null;

  return (
    <section id="detail-blog" className="mt-28 lg:mt-20 p-8 lg:p-16">
      <img
        src={blogDetail.thumbnail}
        alt="thumbnail"
        width={1000}
        height={1000}
        className="object-cover w-full h-[400px]"
      />
      <h1 className="my-12 font-bold text-4xl">{blogDetail.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogDetail.content }} />
    </section>
  );
}

export default DetailBlog;
