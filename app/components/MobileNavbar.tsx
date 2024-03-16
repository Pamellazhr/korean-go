"use client";

import { X } from "@phosphor-icons/react";
import React from "react";
import { useTogglerContext } from "../context/TogglerProvider";

function MobileNavbar() {
  const { mobileNavbar, setMobileNavbar } = useTogglerContext();

  return (
    <section
      id="mobile-navbar"
      className={`fixed inset-y-0 right-0 bg-white ${
        mobileNavbar ? "left-0" : "left-[150%]"
      } z-50 transition-all duration-300 ease-linear p-8 flex flex-col justify-between`}
    >
      <div className="flex justify-between items-center">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileNavbar(false);
          }}
          className="font-bold text-2xl"
        >
          Korean<span className="text-[#E19898]">Go</span>
        </button>
        <button onClick={() => setMobileNavbar(false)}>
          <X size={32} />
        </button>
      </div>
      <div className="flex flex-col gap-8 font-medium text-2xl">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setMobileNavbar(false);
          }}
          className="border-b border-[#E19898] text-center pb-4"
        >
          Home
        </button>
        <a
          href="/gallery"
          className="border-b border-[#E19898] text-center pb-4"
          onClick={() => {
            setMobileNavbar(false);
          }}
        >
          Gallery
        </a>
        <a
          href="/blog"
          className="border-b border-[#E19898] text-center pb-4"
          onClick={() => {
            setMobileNavbar(false);
          }}
        >
          Blog
        </a>
      </div>
      <a
        href="/#contact"
        className="w-full py-3 text-lg border-2 border-black text-center rounded-md"
        onClick={() => {
          setMobileNavbar(false);
        }}
      >
        Contact us
      </a>
    </section>
  );
}

export default MobileNavbar;
