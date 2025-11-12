import React from "react";

const Section1 = () => {
  return (
    <div className="relative w-full px-4 md:px-8 py-16 flex flex-col justify-center items-start md:items-center gap-6 text-white text-start md:text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
        About Finance Flow
      </h1>

      <p className="text-sm sm:text-base leading-relaxed max-w-xl text-white/80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
        suspendisse tortor aenean dis placerat. Scelerisque imperdiet vitae
        dolor non aliquam. Malesuada.
      </p>

      <div
        className="absolute top-10 -left-40 w-[600px] md:w-[800px] lg:w-[950px] h-[600px] md:h-[800px] lg:h-[950px] 
          rounded-full bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)]
          blur-3xl pointer-events-none -z-10"
      ></div>
    </div>
  );
};

export default Section1;
