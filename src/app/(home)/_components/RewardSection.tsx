import Image from "next/image";
import React from "react";
import groupPic from "@/assets/images/Group 2.png";
import pic from "@/assets/images/section-about-1-crypto-template.svg.png";

const RewardSection = () => {
  return (
    <section className="relative  px-4 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex justify-center lg:justify-start">
          <Image
            src={groupPic}
            alt="Reward group"
            height={430}
            className="w-auto h-auto max-w-xs md:max-w-md lg:max-w-full"
          />
        </div>

        <div className="flex flex-col items-start gap-6 z-10 text-white max-w-xl text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Earn daily rewards on your idle tokens
          </h1>

          <p className="text-sm text-white/80 max-w-md mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>

          <div
            className="absolute right-0 lg:right-110 top-40 -z-10 w-[700px] md:w-[950px] h-[500px] rounded-full 
              bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)]
              blur-3xl pointer-events-none"
          />

          <div className="flex flex-col gap-4 items-start">
            {[
              "Lowest fees in market",
              "Fast and secure transactions",
              "256-bit secure encryption",
            ].map((text, idx) => (
              <span key={idx} className="flex items-center gap-4">
                <Image
                  className="bg-blue rounded-md p-2 w-10 h-10 z-100"
                  src={pic}
                  alt=""
                />
                <p className="text-sm">{text}</p>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSection;
