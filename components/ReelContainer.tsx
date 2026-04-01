"use client";
import { motion } from "framer-motion";
import VideoPlayer from "./VideoPlayer"; // আগের দেওয়া ভিডিও প্লেয়ারটি এখানে কাজ করবে

const demoVideos = [
  { id: "1", url: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-at-night-40134-large.mp4", user: "sayanox_tech" },
  { id: "2", url: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-a-hacker-40141-large.mp4", user: "sentinel_guard" }
];

export default function ReelContainer() {
  return (
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory bg-black scrollbar-hide">
      {demoVideos.map((video) => (
        <div key={video.id} className="h-screen w-full snap-start relative">
          <VideoPlayer url={video.url} />
          
          {/* Overlay Info */}
          <div className="absolute bottom-24 left-4 z-20 text-white">
            <h2 className="font-bold text-lg">@{video.user}</h2>
            <p className="text-sm opacity-80">Testing the Sayanox-Connect X engine... ⚡</p>
          </div>
        </div>
      ))}
    </div>
  );
}
