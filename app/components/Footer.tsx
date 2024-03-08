import { Envelope, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <section
      id="footer"
      className="px-8 lg:px-16 pt-32 pb-40 lg:pb-8 text-center lg:text-left relative"
    >
      <Image
        src="/footer-accent-1.svg"
        alt="accent"
        width={1000}
        height={1000}
        priority
        className="absolute bottom-0 left-0 w-[500px] h-[100px] object-cover"
      />
      <Image
        src="/footer-accent-2.svg"
        alt="accent"
        width={1000}
        height={1000}
        priority
        className="absolute bottom-0 right-0 w-[430px] h-[250px] object-cover hidden lg:inline-block"
      />
      <div className="mb-16 lg:mb-48 lg:flex gap-60">
        <div className="flex flex-col gap-4 items-center lg:items-start mb-16 lg:mb-0">
          <h3 className="text-2xl lg:text-3xl font-semibold">
            Japan<span className="text-[#A83949]">Trip</span>
          </h3>
          <p className="font-light lg:text-lg">
            Your Seamless Gateway to <br /> Japanese Adventures!
          </p>
        </div>
        <div className="lg:flex gap-32">
          <div className="flex flex-col gap-4 items-center lg:items-start mb-16 lg:mb-0">
            <h3 className="font-semibold text-2xl lg:font-bold">Products</h3>
            <Link href="/" className="hover:underline lg:text-lg">
              Gallery
            </Link>
            <Link href="/" className="hover:underline lg:text-lg">
              Blog
            </Link>
          </div>
          <div className="flex flex-col gap-4 items-center lg:items-start">
            <h3 className="font-semibold text-2xl lg:font-bold">Company</h3>
            <Link href="/" className="hover:underline lg:text-lg">
              Career
            </Link>
            <Link href="/" className="hover:underline lg:text-lg">
              Contact
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center mb-16 lg:mb-0 lg:absolute bottom-40 left-16">
        <Link href="/" className="hover:underline lg:text-lg">
          <Envelope size={32} />
        </Link>
        <Link href="/" className="hover:underline lg:text-lg">
          <InstagramLogo size={32} />
        </Link>
      </div>
      <p className="opacity-50 text-center">
        © {new Date().getFullYear()} JapanTrip. All rights reserved.
      </p>
    </section>
  );
}

export default Footer;
