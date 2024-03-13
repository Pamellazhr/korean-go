import DetailBlogAdmin from "@/app/components/DetailBlogAdmin";
import React from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <main>
      <DetailBlogAdmin id={params.id} />
    </main>
  );
}

export default page;
