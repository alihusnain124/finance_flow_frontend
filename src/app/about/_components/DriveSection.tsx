import Image from "next/image";
import React from "react";
import pic from "@/assets/images/section-about-1-crypto-template.svg.png";

const features = [
  {
    title: "OPEN SOURCE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
    icon: pic,
  },
  {
    title: "WORLDWIDE",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
    icon: pic,
  },
  {
    title: "TRANSPARENT",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
    icon: pic,
  },
  {
    title: "COMMUNITY DRIVEN",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et nibh urna in proin dui purus bibendum cras. Morbi cursus nunc.",
    icon: pic,
  },
];

export default function DrivesSection() {
  return (
    <section className="relative isolate w-full px-4 md:px-6 py-16">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header: title and description */}
        <div className="grid gap-6 md:grid-cols-12">
          <h2 className="md:col-span-6 text-2xl md:text-4xl font-semibold text-white">
            What drives Finance Flow?
          </h2>
          <p className="md:col-span-6 text-white/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aene.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {features.map((f) => (
            <article
              key={f.title}
              className="group rounded-2xl bg-dark-blue p-6 flex gap-4 items-start"
            >
              <div className="shrink-0">
                <Image
                  src={f.icon}
                  alt={f.title}
                  className="w-10 h-10 object-contain bg-blue rounded-md p-2"
                />
              </div>
              <div>
                <h4 className="text-[13px] font-bold tracking-widest text-white/70 uppercase">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-white/75">
                  {f.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
