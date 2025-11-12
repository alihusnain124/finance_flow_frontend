import React from "react";
import bannerPic from "@/assets/images/60e4a1e7380756458de7fb94_logo-company-1-crypto-template.svg.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col gap-8 items-center py-16 px-4 w-full">
      <div className="text-center max-w-2xl">
        <h1 className="text-3xl font-bold mb-2">Investors</h1>
        <p className="text-white/70 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
          lorem purus justo, ultricies.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl">
        {Array.from({ length: 5 }).map((_, i) => (
          <Image
            key={i}
            src={bannerPic}
            alt={`Company Logo ${i + 1}`}
            className="w-32 h-auto object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
