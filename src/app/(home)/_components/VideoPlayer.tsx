"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({
  src = "/videos/sample.mp4",
  height = 350,
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      className="relative rounded-2xl w-[380px] md:w-[500px] mt-14 md:mt-0 overflow-hidden bg-blue-900 shadow-xl cursor-pointer"
      style={{ height: `${height}px` }}
      //   onClick={handleTogglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-contain"
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-dark-blue pointer-events-none">
          <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center text-white text-2xl font-bold pointer-events-auto transition hover:scale-105">
            ▶
          </div>
        </div>
      )}
    </div>
  );
}
