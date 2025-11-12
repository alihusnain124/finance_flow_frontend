import React from "react";
import laptopImg from "@/assets/images/laptop.jpeg.png";
import Image from "next/image";
import Button from "@/app/_components/Button";
const posts = [
  {
    image: laptopImg,
    tag: "Products",
    title: "The Basics about Cryptocurrency",
    description:
      "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    author: "Alex Turner",
    date: "August 2, 2021",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    image: laptopImg,
    tag: "Products",
    title: "The Basics about Cryptocurrency",
    description:
      "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    author: "Alex Turner",
    date: "August 2, 2021",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
  {
    image: laptopImg,
    tag: "Products",
    title: "The Basics about Cryptocurrency",
    description:
      "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
    author: "Alex Turner",
    date: "August 2, 2021",
    avatar: "https://i.pravatar.cc/40?img=12",
  },
];
const AllArticals = () => {
  return (
    <div className="text-center ">
      <div className="flex flex-col md:flex-row md:justify-between justify-start text-start md:px-31 px-5 mt-30">
        <h1 className="font-bold text-3xl">Browse our latest news</h1>
        <p className="w-[390px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla
          suspendisse tortor aene.
        </p>
      </div>
      <div className=" py-12 px-4 flex flex-wrap justify-center gap-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="w-[420px] h-full bg-dark-blue rounded-[20px] overflow-hidden  text-white shadow-lg"
          >
            <Image src={post.image} alt="" className="w-full" />
            <div className="p-5 flex flex-col justify-between gap-2 h-[calc(100%-160px)]">
              <span className="bg-blue-600 text-xs px-3 py-2 rounded-full font-medium uppercase w-fit mb-3 relative -top-8">
                {post.tag}
              </span>

              <h3 className="text-start font-semibold leading-snug mb-2">
                {post.title}
              </h3>

              <p className="text-[14px] text-start text-white/80 mb-5">
                {post.description}
              </p>

              <div className="border-t border-white/10 pt-4 mt-auto flex items-center gap-3">
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={8}
                  height={8}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold uppercase">
                    {post.author}
                  </p>
                  <p className="text-[12px] text-start text-white/50">
                    {post.date}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Button content="View All Articles" isBlue={false} />
    </div>
  );
};

export default AllArticals;
