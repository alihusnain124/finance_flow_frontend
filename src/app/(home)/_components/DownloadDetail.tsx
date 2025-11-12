import React from "react";
import Image from "next/image";
import iosPhoneImg from "@/assets/images/iPhones.png";
import androidPhoneImg from "@/assets/images/iPhones.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const DownloadDetails = () => {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-32 text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start mb-16 gap-6">
        <h2 className="text-3xl font-bold text-center lg:text-left">
          Download our app
        </h2>
        <p className="max-w-md text-white/80 md:text-center text-start lg:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit non neque
          orci amet, amet.
        </p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-24">
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx}
            className="bg-[#00113A] text-white rounded-[20px] p-6 w-full sm:w-[320px] md:w-[360px] flex flex-col"
          >
            <h3 className="text-xl font-semibold mb-2">
              Download for <span className="text-white">Android</span>
            </h3>
            <p className="text-sm text-white/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer in pellentesque tortor semper elementum. Felis.
            </p>

            <a
              href="#"
              className="bg-blue-600 hover:bg-blue-700 transition text-sm px-5 py-2 rounded-full inline-flex items-center gap-2 mb-6 w-fit"
            >
              <FaGooglePlay className="text-lg" />
              PLAY STORE
            </a>

            <Image
              src={androidPhoneImg}
              alt="Phone App"
              className="w-full -mb-6 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default DownloadDetails;
