"use client";
import { Search, Hash, TrendingUp } from "lucide-react";

export default function SearchX() {
  return (
    <div className="p-4 bg-black/90 min-h-screen pt-20">
      <div className="relative max-w-xl mx-auto mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" size={20} />
        <input 
          type="text" 
          placeholder="Search Sayanox Lab / Users / Exploits..." 
          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white outline-none focus:border-cyan-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.1)]"
        />
      </div>

      <div className="max-w-xl mx-auto space-y-4">
        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
          <TrendingUp size={14} /> Trending in Sayanox
        </h3>
        <div className="flex flex-wrap gap-2">
          {["#CyberSecurity", "#NextJS15", "#AionLanguage", "#ZeroTrust", "#Reels"].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-sm cursor-pointer hover:bg-cyan-500 hover:text-black transition-all">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
