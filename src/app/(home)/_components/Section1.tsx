import Button from "@/app/_components/Button";
import Image from "next/image";
import lpPic from "@/assets/images/Apple Computers.png";

const Section1 = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between overflow-hidden text-white px-6 md:px-12 lg:px-20 py-20 md:py-28">
      <div className="flex flex-col gap-6 max-w-xl z-10 lg:ms-24 text-center lg:text-left">
        <h1 className="text-4xl text-start md:text-5xl font-bold leading-tight">
          Buy, trade, and hold 350+ cryptocurrencies
        </h1>

        <p className="text-gray-300 text-md text-start leading-relaxed max-w-md mx-auto lg:mx-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aenean dis placerat.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center lg:justify-start">
          <Button content="Download App" isBlue={true} />
          <Button content="View Pricing" isBlue={false} />
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center mt-10 lg:mt-0 w-full">
        <div
          className="absolute hidden md:block right-0 lg:-right-60 top-0 w-[600px] md:w-[750px] lg:w-[950px] h-full rounded-full 
            bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)]
            blur-3xl pointer-events-none"
        ></div>

        <Image
          src={lpPic}
          alt="Laptop"
          className="relative w-[300px] md:w-[500px] lg:w-[800px] h-auto object-contain lg:-right-80"
          priority
        />
      </div>
    </section>
  );
};

export default Section1;
