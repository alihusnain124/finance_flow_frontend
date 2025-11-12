import React from "react";
import planet from "@/assets/images/planet.png";
import Image from "next/image";

const OurMission = () => {
  return (
    <section className=" text-white px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Text Content */}
        <div className="flex-1 space-y-12">
          {/* Our Mission */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </p>
            <p className="text-white/80">
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </p>
          </div>

          {/* Our Story */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Parturient lorem purus justo, ultricies. Sollicitudin odio
              elementum urna placerat lacus, vulputate. Non malesuada viverra et
              ultrices cras. Tincidunt tempor, blandit augue ac feugiat.
              Praesent arcu tempus ullamcorper quisque in. Magna fermentum,
              lacus, fermentum arcu.
            </p>
            <p className="text-white/80">
              Vulputate pellentesque proin facilisis dignissim gravida sed
              faucibus nunc. Nunc eget pharetra, in vitae porta lacus. Elit in
              nisl, in quis nulla tellus suscipit id. Semper velit odio cras
              pretium tristique habitant. Elit eu penatibus congue orci turpis.
              Enim diam id.
            </p>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex justify-center lg:justify-end flex-1">
          <Image
            src={planet}
            alt="Planet visual"
            className="w-full max-w-[550px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
