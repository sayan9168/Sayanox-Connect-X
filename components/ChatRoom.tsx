"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Shield, Lock, Trash2, Image as ImageIcon, Mic } from "lucide-react";

export default function ChatRoom() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Payload received. Initialization complete.", sender: "system", time: "12:00" },
    { id: 2, text: "Hey! Did you check the new Aion-Lang update?", sender: "me", time: "12:05" },
    { id: 3, text: "Yeah, the memory safety is insane. 🛡️", sender: "other", time: "12:06" },
  ]);

  return (
    <div className="flex flex-col h-screen bg-[#050505] text-white max-w-2xl mx-auto border-x border-white/5">
      {/* --- Chat Header --- */}
      <header className="p-4 bg-black/60 backdrop-blur-xl border-b border-white/10 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-cyan-600 to-purple-600 border border-white/20 flex items-center justify-center font-bold">SD</div>
          <div>
            <h3 className="font-bold text-sm tracking-tight">Sayanox_Dev</h3>
            <span className="text-[10px] text-green-500 flex items-center gap-1 font-mono uppercase tracking-widest"><div className="h-1.5 w-1.5 bg-green-500 rounded-full animate-pulse"></div> Active Tunnel</span>
          </div>
        </div>
        <div className="flex gap-4 text-gray-500">
           <Lock size={18} className="hover:text-cyan-400 cursor-pointer transition-colors" />
           <Trash2 size={18} className="hover:text-red-500 cursor-pointer transition-colors" />
        </div>
      </header>

      {/* --- Message Stream --- */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6 scroll-smooth">
        <div className="text-center text-[10px] text-gray-600 uppercase tracking-widest my-4">
           --- End-to-End Encrypted Tunnel Established ---
        </div>
        
        {messages.map((msg) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={msg.id} 
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-mono shadow-lg ${
              msg.sender === 'me' 
                ? 'bg-cyan-600 text-black font-bold rounded-tr-none border-l-2 border-cyan-400' 
                : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
            }`}>
              {msg.text}
              <div className="text-[9px] opacity-40 mt-1 flex justify-between gap-4">
                 <span>{msg.time}</span>
                 {msg.sender === 'me' && <Shield size={10} className="text-black" />}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Message Input (Glassmorphism) --- */}
      <div className="p-4 bg-black/80 backdrop-blur-md border-t border-white/10">
        <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-2 focus-within:border-cyan-500/50 transition-all">
          <button className="p-2 text-gray-500 hover:text-cyan-400 transition-colors"><ImageIcon size={20} /></button>
          <input 
            type="text" 
            placeholder="Type an encrypted message..." 
            className="flex-1 bg-transparent border-none outline-none text-sm text-white placeholder:text-gray-600"
          />
          <button className="p-2 text-gray-500 hover:text-purple-400 transition-colors"><Mic size={20} /></button>
          <button className="p-3 bg-cyan-600 text-black rounded-xl hover:bg-cyan-400 transition-all">
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
