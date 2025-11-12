"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const content = ["Home", "About", "Pricing", "Tokens", "Blog", "Contact Us"];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="relative z-50">
      {pathname === "/contact_us" && (
        <div
          className="absolute -top-56 left-40 w-[950px] h-[950px] rounded-full 
          bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)]
          blur-3xl pointer-events-none"
        ></div>
      )}
      {pathname === "/" && (
        <div
          className="absolute -top-130 -left-120 w-[950px] h-[950px] rounded-full 
          bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)]
          blur-3xl pointer-events-none"
        ></div>
      )}

      <nav className="w-full px-4">
        <div className="flex justify-around items-center flex-wrap mt-8">
          <div className="flex items-center gap-10 md:gap-16 z-50">
            <Image src={logo} alt="Logo" height={10} width={150} />
            <div className="hidden md:block border h-16 border-dark-blue"></div>
            <div className="hidden md:block">
              <ul className="flex flex-wrap gap-6 text-sm text-center">
                {content.map((item) => {
                  const href =
                    item.toLowerCase() === "home"
                      ? "/"
                      : item.toLowerCase() === "contact us"
                      ? "/contact_us"
                      : `/${item.toLowerCase()}`;

                  const isActive = pathname === href;

                  return (
                    <li
                      key={item}
                      className={`text-shadow-amber-300 relative cursor-pointer transition-colors duration-300
                      after:content-[''] after:absolute after:h-0.5 after:bg-white 
                      after:left-0 after:-bottom-1 after:transition-all after:duration-300
                      ${
                        isActive
                          ? "after:w-full"
                          : "after:w-0 hover:after:w-full"
                      }`}
                    >
                      <Link href={href}>{item.toUpperCase()}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="hidden md:block mt-4 md:mt-0">
            <Button content="Download App" isBlue={true} />
          </div>

          <div className="md:hidden z-50">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-4 text-sm bg-[#030b34] p-4 rounded-xl shadow">
            {content.map((item) => {
              const href =
                item.toLowerCase() === "home"
                  ? "/"
                  : item.toLowerCase() === "contact us"
                  ? "/contact_us"
                  : `/${item.toLowerCase()}`;

              const isActive = pathname === href;

              return (
                <li
                  key={item}
                  className={`relative w-fit cursor-pointer transition-colors duration-300
                  after:content-[''] after:absolute after:h-0.5 after:bg-white 
                  after:left-0 after:-bottom-1 after:transition-all after:duration-300
                    ${
                      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                    }`}
                >
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-1"
                  >
                    {item.toUpperCase()}
                  </Link>
                </li>
              );
            })}
            <li className="mt-4">
              <Button content="Download App" isBlue={true} />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
