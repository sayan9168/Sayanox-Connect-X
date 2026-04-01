"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageCircle, Share2, Search, Home, Video, User, PlusSquare, ShieldCheck, Zap } from 'lucide-react';

export default function SayanoxInterface() {
  const [activeTab, setActiveTab] = useState('reels');

  return (
    <div className="h-screen w-full bg-black text-white font-sans overflow-hidden flex flex-col md:flex-row">
      
      {/* --- Desktop Sidebar (Instagram Style) --- */}
      <aside className="hidden md:flex flex-col w-64 border-r border-white/10 p-6 bg-[#050505]">
        <h1 className="text-2xl font-black italic tracking-tighter text-cyan-400 mb-10">SAYANOX</h1>
        <nav className="space-y-6 flex-1">
          <NavItem icon={<Home size={24}/>} label="Home" active={activeTab === 'home'} onClick={() => setActiveTab('home')} />
          <NavItem icon={<Search size={24}/>} label="Explore" active={activeTab === 'search'} onClick={() => setActiveTab('search')} />
          <NavItem icon={<Video size={24}/>} label="Reels" active={activeTab === 'reels'} onClick={() => setActiveTab('reels')} />
          <NavItem icon={<MessageCircle size={24}/>} label="Messages" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')} />
          <NavItem icon={<User size={24}/>} label="Profile" active={activeTab === 'profile'} onClick={() => setActiveTab('profile')} />
        </nav>
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-2xl flex items-center gap-3">
          <ShieldCheck className="text-cyan-400" size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Sentinel Active</span>
        </div>
      </aside>

      {/* --- Main Content Area --- */}
      <main className="flex-1 relative overflow-y-auto no-scrollbar snap-y snap-mandatory">
        
        {/* Mobile Header */}
        <header className="md:hidden absolute top-0 w-full z-50 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
          <h1 className="text-xl font-black italic text-cyan-400">SAYANOX</h1>
          <div className="flex gap-4">
            <PlusSquare size={24} />
            <Heart size={24} />
          </div>
        </header>

        {/* --- Reels Feed (TikTok Style) --- */}
        <section className="h-full w-full snap-start relative flex flex-col items-center justify-center bg-neutral-900">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-10 pointer-events-none"></div>
          
          {/* Video Placeholder Content */}
          <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
             <Zap size={80} className="text-cyan-500/20 animate-pulse" />
             <div className="absolute bottom-24 left-4 md:left-12 z-20 space-y-3 max-w-[80%]">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 border border-white/20"></div>
                  <span className="font-bold text-sm tracking-tight text-white uppercase">sayanox_lab <span className="text-cyan-400 text-[10px] ml-2">FOLLOW</span></span>
                </div>
                <p className="text-sm text-gray-200 leading-snug">Implementing Zero-Trust Architecture in Next.js 15. The future is encrypted. 🛡️ #cybersecurity #tech</p>
                <div className="flex items-center gap-2 text-xs opacity-60 italic">
                   <Video size={12} /> Original Audio - Phonk Mix v2.4
                </div>
             </div>

             {/* Side Actions (Like, Comment, Share) */}
             <div className="absolute right-4 bottom-24 md:right-12 z-20 flex flex-col gap-6 items-center">
                <ActionButton icon={<Heart size={32} className="hover:fill-red-500 transition-all hover:text-red-500"/>} count="12.5k" />
                <ActionButton icon={<MessageCircle size={32} />} count="1.2k" />
                <ActionButton icon={<Share2 size={32} />} count="Share" />
                <div className="h-10 w-10 rounded-full border-2 border-white/50 animate-spin-slow overflow-hidden">
                   <div className="h-full w-full bg-cyan-900 flex items-center justify-center text-[8px]">DISK</div>
                </div>
             </div>
          </div>
        </section>
      </main>

      {/* --- Mobile Bottom Nav --- */}
      <nav className="md:hidden h-16 border-t border-white/10 bg-black flex justify-around items-center px-4">
         <Home size={24} onClick={() => setActiveTab('home')} className={activeTab === 'home' ? "text-cyan-400" : "text-gray-500"} />
         <Search size={24} onClick={() => setActiveTab('search')} className={activeTab === 'search' ? "text-cyan-400" : "text-gray-500"} />
         <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center">
            <PlusSquare size={24} className="text-black" />
         </div>
         <Video size={24} onClick={() => setActiveTab('reels')} className={activeTab === 'reels' ? "text-cyan-400" : "text-gray-500"} />
         <div className="h-8 w-8 rounded-full border-2 border-cyan-500 bg-neutral-800" onClick={() => setActiveTab('profile')}></div>
      </nav>

    </div>
  );
}

/* --- Sub-Components --- */

function NavItem({ icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-4 cursor-pointer p-3 rounded-2xl transition-all ${active ? 'bg-white/5 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)]' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
    >
      {icon}
      <span className="font-bold text-sm tracking-tight">{label}</span>
    </div>
  );
}

function ActionButton({ icon, count }: { icon: any, count: string }) {
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer group">
      <div className="p-2 transition-transform group-active:scale-90">
        {icon}
      </div>
      <span className="text-[10px] font-bold tracking-widest">{count}</span>
    </div>
  );
      }
    
