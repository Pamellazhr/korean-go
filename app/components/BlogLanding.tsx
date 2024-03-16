import Image from "next/image";
import React from "react";

function BlogLanding() {
  return (
    <section
      id="blog-landing"
      className="bg-[#E19898] px-8 py-16 lg:py-24 lg:px-16 text-white"
    >
      <h1 className="font-semibold text-2xl lg:text-3xl lg:mb-16 mb-12">
        Latest Travel Stories
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="flex items-center gap-6 lg:flex-col lg:items-start">
          <Image
            src="/blog-1.png"
            alt="img"
            width={1000}
            height={1000}
            priority
            className="w-[120px] h-[120px] lg:w-full lg:h-[330px] object-cover rounded-md"
          />
          <div>
            <h3 className="font-medium mb-2 lg:text-xl">
              Capture Perfect Korean Capture
            </h3>
            <h6 className="opacity-70 text-sm lg:text-lg">Mar 7, 2024</h6>
          </div>
        </div>
        <div className="flex items-center gap-6 lg:flex-col lg:items-start">
          <Image
            src="/blog-2.png"
            alt="img"
            width={1000}
            height={1000}
            priority
            className="w-[120px] h-[120px] lg:w-full lg:h-[330px] object-cover rounded-md"
          />
          <div>
            <h3 className="font-medium mb-2 lg:text-xl">
              Journey Through Korean's Through
            </h3>
            <h6 className="opacity-70 text-sm lg:text-lg">Mar 6, 2024</h6>
          </div>
        </div>
        <div className="flex items-center gap-6 lg:flex-col lg:items-start">
          <Image
            src="/blog-3.png"
            alt="img"
            width={1000}
            height={1000}
            priority
            className="w-[120px] h-[120px] lg:w-full lg:h-[330px] object-cover rounded-md"
          />
          <div>
            <h3 className="font-medium mb-2 lg:text-xl">
              Exploring the Essence of Korean
            </h3>
            <h6 className="opacity-70 text-sm lg:text-lg">Mar 5, 2024</h6>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogLanding;
