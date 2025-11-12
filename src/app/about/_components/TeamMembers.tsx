import React from "react";
import Image from "next/image";

import avatar1 from "@/assets/images/Rectangle 2.png";
import avatar2 from "@/assets/images/Rectangle 2.png";
import avatar3 from "@/assets/images/Rectangle 2.png";
const teamMembers = [
  {
    name: "John Carter",
    title: "CEO & Co-Founder",
    image: avatar1,
    highlighted: true,
  },
  {
    name: "Sophie Moore",
    title: "Community Lead",
    image: avatar2,
    highlighted: false,
  },
  {
    name: "Alex Turner",
    title: "Operations",
    image: avatar3,
    highlighted: false,
  },
  {
    name: "Alex Turner",
    title: "Operations",
    image: avatar3,
    highlighted: false,
  },
  {
    name: "Alex Turner",
    title: "Operations",
    image: avatar3,
    highlighted: false,
  },
];

const OurTeam = () => {
  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <h2 className="text-3xl font-bold">Our Team</h2>
          <p className="max-w-md text-white/70 text-sm mt-4 lg:mt-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Parturient
            lorem purus justo, ultricies.
          </p>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`w-60 bg-[#060d3b] rounded-2xl overflow-hidden text-white text-center pb-4 ${
                member.highlighted
                  ? "border-2 border-blue-500 shadow-[0_0_0_4px] shadow-blue-700"
                  : "bg-[#091250]"
              }`}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-full p-2 h-[300px] object-cover"
              />

              <div className="mt-4 ms-4 text-start">
                <h3 className="font-semibold text-[14px]">
                  {member.name.toUpperCase()}
                </h3>
                <p className="text-[12px] text-white/60">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
