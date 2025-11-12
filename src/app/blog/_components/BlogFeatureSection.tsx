import Image from "next/image";
import laptopImage from "@/assets/images/laptop.jpeg.png";

export default function BlogFeatureSection() {
  return (
    <section className="text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-10 gap-4">
          <h2 className="text-3xl font-bold">Blog</h2>
          <p className="text-sm text-white/70 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            nulla suspendisse tortor aenean dis placerat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  rounded-2xl overflow-hidden">
          <div className="bg-dark-blue p-6 md:p-10 flex flex-col justify-center gap-4">
            <span className="bg-blue-600 text-xs font-semibold uppercase px-4 py-1 rounded-full w-fit">
              Featured
            </span>
            <h3 className="text-lg md:text-xl font-bold leading-snug max-w-md">
              Cryptocurrency Explained With Pros and Cons for Investment
            </h3>
            <p className="text-sm text-white/70 max-w-md">
              Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit.
              Scelerisque viverra donec diammeo.
            </p>
          </div>
          <div>
            <Image
              src={laptopImage}
              alt="Blog image"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
