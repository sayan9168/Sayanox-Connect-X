import Navbar from "@/components/Navbar";
import StoryBar from "@/components/StoryBar";
import ReelsFeed from "@/components/ReelsFeed"; // আগের বানানো সেই রিলস ফিড

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white pb-20">
      {/* Top Section */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-black italic tracking-tighter text-cyan-400">SAYANOX</h1>
        <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></div>
      </div>

      {/* Stories */}
      <StoryBar />

      {/* Vertical Reels Section */}
      <div className="max-w-md mx-auto md:max-w-none">
        <ReelsFeed />
      </div>

      {/* Navigation */}
      <Navbar />
    </main>
  );
}
