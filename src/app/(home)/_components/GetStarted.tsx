import Image from "next/image";
import React from "react";
import pic from "@/assets/images/section-about-1-crypto-template.svg.png";
import VideoPlayer from "./VideoPlayer";

const GetStarted = () => {
  return (
    <div
      className=" px-4 md:px-10 py-16 
      flex flex-col lg:flex-row items-center justify-around "
    >
      <div className="flex flex-col items-start gap-6 text-white w-full max-w-xl">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl w-full lg:w-[270px]">
          Get started today
        </h1>

        <p className="text-sm text-white/70 w-full lg:w-[390px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>

        <div className="flex flex-col gap-4 items-start">
          {[
            "Lowest fees in market",
            "Fast and secure transactions",
            "256-bit secure encryption",
          ].map((text, index) => (
            <div key={index} className="flex items-center gap-4">
              <Image
                src={pic}
                alt=""
                className="w-10 h-10 p-2 bg-blue rounded-md object-contain"
              />
              <p className="text-sm">{text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full max-w-md ">
        <VideoPlayer src="/videos/sample.mp4" />
      </div>
    </div>
  );
};

export default GetStarted;
