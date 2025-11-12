import Image from "next/image";
import groupPic from "@/assets/images/Iphones-half.png";
import Button from "@/app/_components/Button";

const ExploreSection = () => {
  return (
    <div
      className="bg-blue relative w-full 
      flex flex-col lg:flex-row items-center justify-between
      h-[628px] lg:h-[350px] px-6 md:px-16 py-12 gap-10 lg:gap-0 mt-24"
    >
      <div className="flex flex-col items-start gap-4 max-w-xl text-white text-center lg:text-left">
        <h1 className="font-bold text-2xl lg:text-3xl w-full lg:w-[500px]">
          Explore endless possibilities with FinanceFlow
        </h1>
        <p className="text-sm text-white/80 w-full lg:w-[450px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
        <Button content="Download App" isBlue={false} />
      </div>

      <div className="flex justify-center items-end">
        <Image
          src={groupPic}
          alt="Phone Mockup"
          height={360}
          className="w-auto h-auto mb-4 lg:mb-3"
        />
      </div>
    </div>
  );
};

export default ExploreSection;
