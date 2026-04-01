"use client";
import { Home, Search, Video, MessageCircle, User } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-t border-white/10 md:left-0 md:top-0 md:w-20 md:h-full md:border-r md:border-t-0">
      <div className="flex justify-around items-center h-16 md:flex-col md:h-full md:py-10">
        <NavLink icon={<Home size={28} />} href="/" label="Home" />
        <NavLink icon={<Search size={28} />} href="/explore" label="Explore" />
        <NavLink icon={<Video size={28} className="text-cyan-400" />} href="/reels" label="Reels" />
        <NavLink icon={<MessageCircle size={28} />} href="/messages" label="Chat" />
        <NavLink icon={<User size={28} />} href="/profile" label="Profile" />
      </div>
    </nav>
  );
}

function NavLink({ icon, href, label }: { icon: any; href: string; label: string }) {
  return (
    <Link href={href} className="group relative flex flex-col items-center text-gray-400 hover:text-white transition-all">
      {icon}
      <span className="text-[10px] mt-1 md:hidden">{label}</span>
      <span className="absolute hidden md:block left-16 bg-cyan-500 text-black px-2 py-1 text-xs font-bold rounded opacity-0 group-hover:opacity-100 transition-all">
        {label}
      </span>
    </Link>
  );
}
