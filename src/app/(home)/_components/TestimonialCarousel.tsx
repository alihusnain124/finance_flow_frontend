"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./TestimonialCarousel.module.css";
import styles from "./TestimonialCarousel.module.css";
import Button from "@/app/_components/Button";

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo dolor fermentum dignissim et pellentesque egestas mauris.",
    name: "JOHN CARTER",
    role: "ROLE, COMPANY",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    quote:
      "In convallis, augue in consectetur tincidunt, nisl tellus pretium nisi, a sollicitudin ipsum nulla in velit.",
    name: "SARAH DOE",
    role: "DEVELOPER, COMPANY",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    quote:
      "Integer et sem eu ligula pharetra tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    name: "JACKSON SMITH",
    role: "CEO, TECHSTART",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    quote:
      "Integer et sem eu ligula pharetra tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    name: "JACKSON SMITH",
    role: "CEO, TECHSTART",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    quote:
      "Integer et sem eu ligula pharetra tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.",
    name: "JACKSON SMITH",
    role: "CEO, TECHSTART",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className="relative">
      {/* BG Glow */}
      <div
        className="absolute right-[130px] top-60 -z-10 w-[950px] h-[400px] rounded-full 
          bg-[radial-gradient(circle,rgba(0,102,255,0.4)_0%,rgba(0,0,64,0)_70%)]
          blur-3xl pointer-events-none"
      ></div>

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-40 mt-20 gap-6">
        <h1 className="font-bold text-2xl text-center md:text-left">
          What our users say?
        </h1>
        <Button content="Download App" isBlue={true} />
      </div>

      {/* Swiper */}
      <div className={styles.carWrapper}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          className={styles.swiper}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className={styles.slide}>
              <div className={styles.card}>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <div className={styles.user}>
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <div className={styles.name}>{testimonial.name}</div>
                    <div className={styles.role}>{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
