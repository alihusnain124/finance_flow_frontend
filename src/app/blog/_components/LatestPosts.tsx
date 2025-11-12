"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import { Button } from "@/components/ui/button";
import laptopPic from "@/assets/images/laptop.jpeg.png";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Apps", "Products", "Tutorial"];

export const posts = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "The Basics about Cryptocurrency",
  description:
    "Lorem ipsum dolor sit ametero irseo, consectetur adipiscing elit. Scelerisque viverra donec diammeo.",
  category: "Products",
  date: "August 2, 2021",
  author: "Alex Turner",
  avatar: "https://i.pravatar.cc/40?img=12",
  image: laptopPic,
}));

export default function LatestPosts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("All");

  const filteredPosts = posts.filter((post) =>
    category === "All" ? true : post.category === category
  );

  const postsPerPage = 6;
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const goToPage = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <section className=" text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row justify-between">
          <h2 className="text-2xl font-bold mb-6">Latest Posts</h2>
          <div className="flex gap-2 mb-10 flex-wrap">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-4 py-1 text-sm rounded-full ${
                  category === cat
                    ? "bg-blue text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20"
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {paginatedPosts.length > 0 ? (
            paginatedPosts.map((post) => <PostCard key={post.id} {...post} />)
          ) : (
            <div className="col-span-full flex items-center justify-center py-16">
              <h1 className="text-xl font-semibold text-white/70">
                No Results Found
              </h1>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-6 px-4 py-2 rounded-md">
            {paginatedPosts.length > 0 && (
              <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={cn(
                  "w-8 h-8 rounded-full bg-[#101935] text-white text-sm",
                  currentPage === 1 && "opacity-50"
                )}
              >
                &lt;
              </button>
            )}
            {Array.from({ length: totalPages }).map((_, i) => {
              const page = i + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={cn(
                    "text-md font-medium text-white",
                    page === currentPage
                      ? "text-blue-500"
                      : "text-white/60 hover:text-white transition"
                  )}
                >
                  {page}
                </button>
              );
            })}
            {paginatedPosts.length > 0 && (
              <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={cn(
                  "w-8 h-8 rounded-full bg-[#0a1f5c] text-white text-sm",
                  currentPage === totalPages && "opacity-50"
                )}
              >
                &gt;
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
