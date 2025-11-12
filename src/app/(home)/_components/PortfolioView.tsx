import React from "react";
import Image from "next/image";
import pic1 from "@/assets/images/section-about-1-crypto-template.svg.png";
import iPhone from "@/assets/images/iPhones.png";
import Button from "@/app/_components/Button";

const PortfolioView = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-20 text-white relative overflow-hidden ">
      <div className="flex flex-col justify-center items-center text-center mb-16 relative z-10">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
          Build your crypto portfolio
        </h1>
        <p className="text-gray-300 max-w-md md:max-w-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>

        <div
          className="absolute -right-30 top-5 -z-10 w-[700px] md:w-[950px] h-[500px] md:h-[600px] 
          rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)]
          blur-3xl pointer-events-none"
        ></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#031956] p-6 rounded-2xl shadow-lg">
          <Image src={pic1} className="bg-blue rounded-md p-2 mb-4" alt="" />
          <h3 className="font-semibold text-lg mb-2">Send & Receive</h3>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 bg-blue flex flex-col items-center gap-4 rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-lg text-center">
            iOS & ANDROID APP
          </h3>
          <p className="text-sm text-gray-200 text-center max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
          <Image
            src={iPhone}
            alt="iPhone App"
            className="w-[250px] h-auto relative top-6"
          />
        </div>

        <div className="bg-[#031956] p-6 rounded-2xl shadow-lg">
          <Image src={pic1} className="bg-blue rounded-md p-2 mb-4" alt="" />
          <h3 className="font-semibold text-lg mb-2">Trading Charts</h3>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="bg-[#031956] p-6 rounded-2xl shadow-lg">
          <Image src={pic1} className="bg-blue rounded-md p-2 mb-4" alt="" />
          <h3 className="font-semibold text-lg mb-2">100% Secure Wallet</h3>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        <div className="bg-[#031956] p-6 rounded-2xl shadow-lg">
          <Image src={pic1} className="bg-blue rounded-md p-2 mb-4" alt="" />
          <h3 className="font-semibold text-lg mb-2">Real Time Trading</h3>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <Button content="Download App" isBlue={true} />
      </div>
    </section>
  );
};

export default PortfolioView;
