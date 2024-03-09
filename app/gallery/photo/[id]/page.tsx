import Photo360 from "@/app/components/Photo360";
import React, { Suspense } from "react";

function page({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={
        <div className="w-full h-screen flex items-center justify-center text-3xl font-semibold text-[#A32F3F]">
          <span>Loading Image...</span>
        </div>
      }
    >
      <Photo360 id={params.id} />
    </Suspense>
  );
}

export default page;
