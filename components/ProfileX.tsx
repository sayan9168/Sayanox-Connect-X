"use client";
import { Settings, Grid, Bookmark, ShieldCheck } from "lucide-react";

export default function ProfileX() {
  return (
    <div className="bg-black min-h-screen text-white pt-10 pb-24">
      {/* Header Area */}
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="relative">
          <div className="h-32 w-32 rounded-full border-2 border-cyan-500 p-1">
            <div className="h-full w-full bg-gradient-to-br from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-3xl font-black italic">
              SM
            </div>
          </div>
          <div className="absolute bottom-1 right-1 bg-cyan-500 p-1 rounded-full border-4 border-black">
             <ShieldCheck size={16} className="text-black" />
          </div>
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <h2 className="text-2xl font-bold font-mono tracking-tighter">sayan_the_researcher</h2>
            <div className="flex gap-2 justify-center">
              <button className="px-6 py-1.5 bg-white text-black font-bold rounded-lg text-sm">Edit Profile</button>
              <button className="p-1.5 bg-white/10 rounded-lg"><Settings size={20} /></button>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-8 text-sm">
            <span><strong className="text-cyan-400">128</strong> posts</span>
            <span><strong className="text-cyan-400">1.2k</strong> followers</span>
            <span><strong className="text-cyan-400">450</strong> following</span>
          </div>

          <p className="text-sm opacity-80 max-w-md">
            Founder of **Sayanox Tech** | Cybersecurity Researcher 🛡️ | Developing Aion Language & NovaQL.
          </p>
        </div>
      </div>

      {/* Profile Tabs */}
      <div className="max-w-4xl mx-auto border-t border-white/10">
        <div className="flex justify-center gap-12 -mt-px">
          <button className="border-t border-white py-4 flex items-center gap-2 text-xs font-bold tracking-widest"><Grid size={16}/> POSTS</button>
          <button className="py-4 flex items-center gap-2 text-xs font-bold tracking-widest text-gray-500"><Bookmark size={16}/> SAVED</button>
        </div>

        {/* Post Grid (Reels Style) */}
        <div className="grid grid-cols-3 gap-1 md:gap-4 px-1 md:px-0">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="aspect-square bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/50 transition-all flex items-center justify-center">
               <span className="text-[10px] opacity-20">ENCRYPTED_POST_{i}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
