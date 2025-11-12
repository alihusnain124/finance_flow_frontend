import React from "react";
import Image from "next/image";
import bannerPic from "@/assets/images/60e4a1e7380756458de7fb94_logo-company-1-crypto-template.svg.png";

const Banner = () => {
  return (
    <div className="flex flex-col gap-6 items-center py-10 px-4 text-center">
      {/* Title */}
      <p className="text-white text-sm md:text-base">
        Finance Flow has been featured on
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-24 mt-4 max-w-8xl">
        <Image src={bannerPic} alt="Company Logo" className="w-42 h-auto" />
        <Image src={bannerPic} alt="Company Logo" className="w-42 h-auto" />
        <Image src={bannerPic} alt="Company Logo" className="w-42 h-auto" />
        <Image src={bannerPic} alt="Company Logo" className="w-42 h-auto" />
        <Image src={bannerPic} alt="Company Logo" className="w-42 h-auto" />
      </div>
    </div>
  );
};

export default Banner;
