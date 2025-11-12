import Image from "next/image";
import React from "react";
import lpPic from "@/assets/images/Apple Computers.png";
import pic from "@/assets/images/section-about-1-crypto-template.svg.png";

const RewardSection2 = () => {
  return (
    <div className="relative overflow-hidden w-full">
      <div className="flex flex-col-reverse lg:flex-row items-start justify-start mt-10 lg:mt-30 lg:ms-48 lg:h-[500px] gap-10 px-4 lg:px-0">
        <div className="flex flex-col items-start gap-4 text-white">
          <h1 className="font-bold text-2xl lg:text-2xl lg:w-[270px]">
            Earn daily rewards on your idle tokens
          </h1>

          <p className="text-sm text-white/70 w-full max-w-[390px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>

          <div className="flex flex-col gap-4 items-start mt-2">
            {[
              "100% Private data",
              "99.99% Uptime guarantee",
              "24/7 Dedicated support",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-4">
                <Image
                  src={pic}
                  alt=""
                  className="bg-blue rounded-md p-2 w-10 h-10"
                />
                <p className="text-sm">{item}</p>
              </span>
            ))}
          </div>
        </div>

        <div className="w-full flex justify-center lg:block relative">
          <Image
            src={lpPic}
            alt=""
            height={430}
            className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-none lg:h-[430px] lg:w-auto lg:absolute lg:-right-20"
          />
        </div>
      </div>
    </div>
  );
};

export default RewardSection2;
