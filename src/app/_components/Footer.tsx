"use client";

import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { usePathname } from "next/navigation";

const content = ["Home", "About", "Pricing", "Tokens", "Blog", "Contact Us"];

const Footer = () => {
  const pathname = usePathname();
  const hideFooter =
    pathname?.includes("not-found") || pathname?.startsWith("/auth");

  if (hideFooter) return null;

  return (
    <footer className="bg-[#010e43] text-white px-6 lg:px-20 py-14 w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div className="flex-1 flex flex-col gap-8 w-full">
          <div className="flex items-center justify-center md:justify-start  gap-2">
            <Image src={logo} alt="Logo" height={10} width={150} />
          </div>
          <div className=" flex justify-center">
            <div className="flex md:hidden gap-4">
              <a
                href="#"
                className="bg-white rounded-full p-2 text-[#010e43] hover:scale-110 transition"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 text-[#010e43] hover:scale-110 transition"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="#"
                className="bg-white rounded-full p-2 text-[#010e43] hover:scale-110 transition"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="uppercase text-sm font-semibold mb-2">Menu</h4>
            <div className="w-[365px] md:w-[250px] text-slate-600 border mt-2 mb-5"></div>
            <div className="grid grid-cols-2 gap-y-2 text-white/80 text-sm max-w-[250px]">
              {content.map((item) => (
                <a
                  href="#"
                  key={item}
                  className="relative w-fit cursor-pointer transition-colors duration-300
                    after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white 
                    after:left-0 after:-bottom-1 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 w-full flex flex-col gap-6 items-start md:items-end">
          <div className="md:flex hidden gap-4">
            <a
              href="#"
              className="bg-white rounded-full p-2 text-[#010e43] hover:scale-110 transition"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-2 text-[#010e43] hover:scale-110 transition"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="#"
              className="bg-white rounded-full p-2 text-[#010e43] hover:scale-110 transition"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>

          <div className="bg-[#0c1e6c] rounded-2xl px-6 py-6 w-full max-w-sm text-white">
            <h5 className="uppercase text-sm font-semibold mb-2">
              Download Our Application
            </h5>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              sed nulla integer
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-[#1958f6] to-[#0628dd] px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition w-full"
              >
                <FaApple className="text-lg" />
                APP STORE
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 bg-linear-to-r from-[#1958f6] to-[#0628dd] px-5 py-2.5 rounded-full text-sm font-medium hover:opacity-90 transition w-full"
              >
                <FaGooglePlay className="text-lg" />
                PLAY STORE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/60 text-center md:text-left">
        All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
