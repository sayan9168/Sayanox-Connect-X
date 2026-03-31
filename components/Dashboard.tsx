"use client";
import { motion } from "framer-motion";
import { Shield, Zap, Terminal, MessageSquare, Video, Settings, User } from "lucide-react";

export default function SayanoxDashboard() {
  return (
    <div className="min-h-screen bg-[#050505] text-cyan-400 font-mono selection:bg-cyan-500/30">
      {/* --- Top Status Bar --- */}
      <div className="border-b border-cyan-500/20 p-4 flex justify-between items-center bg-black/50 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="h-3 w-3 bg-red-600 rounded-full animate-ping"></div>
          <h1 className="text-xl font-black tracking-widest text-white">SAYANOX_CONNECT_X</h1>
        </div>
        <div className="flex gap-6 text-xs uppercase tracking-tighter">
          <span className="hidden md:block opacity-50">System: Online</span>
          <span className="text-cyan-400">Signal: Encrypted</span>
          <span className="text-purple-500 font-bold">User: Sayan_the_Researcher</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[calc(100vh-64px)] overflow-hidden">
        
        {/* --- Left Sidebar (Navigation) --- */}
        <aside className="w-full md:w-20 border-r border-cyan-500/10 flex flex-row md:flex-col items-center justify-center gap-8 p-4 bg-black/20">
          <NavIcon icon={<Video size={24} />} label="Reels" />
          <NavIcon icon={<MessageSquare size={24} />} label="Whisper" />
          <NavIcon icon={<Terminal size={24} />} label="Dev_Mode" />
          <NavIcon icon={<Shield size={24} />} label="Secure" />
          <div className="mt-auto hidden md:block">
             <NavIcon icon={<Settings size={24} />} label="Config" />
          </div>
        </aside>

        {/* --- Main Content (The Reels/Feed Area) --- */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 scroll-smooth">
          <section className="max-w-2xl mx-auto">
            {/* Post/Status Box */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md mb-10">
              <textarea 
                placeholder="What's on your encrypted mind, Researcher?" 
                className="w-full bg-transparent outline-none text-white placeholder:text-gray-600 resize-none mb-4"
              />
              <div className="flex justify-between items-center">
                <div className="flex gap-4 text-gray-400">
                  <Zap size={18} className="cursor-pointer hover:text-yellow-400" />
                  <Terminal size={18} className="cursor-pointer hover:text-green-400" />
                </div>
                <button className="px-6 py-2 bg-cyan-600 text-black font-bold rounded-lg hover:bg-cyan-400 transition-all uppercase text-xs">
                  Transmit Data
                </button>
              </div>
            </div>

            {/* Reel Preview Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative aspect-[9/16] max-h-[700px] w-full bg-neutral-900 rounded-3xl overflow-hidden border border-cyan-500/30 group"
            >
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
               {/* Video Placeholder */}
               <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <Video size={100} />
               </div>
               
               <div className="absolute bottom-8 left-8 z-20 space-y-2">
                 <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-cyan-500 rounded-full border-2 border-white/20"></div>
                    <span className="font-bold text-white uppercase tracking-widest">Sayanox_Lab</span>
                 </div>
                 <p className="text-gray-300 text-sm">Deploying Zero-Trust Authentication Protocols. #CyberSecurity #NextJS</p>
               </div>
            </motion.div>
          </section>
        </main>

        {/* --- Right Sidebar (Activity Log) --- */}
        <aside className="hidden lg:block w-80 border-l border-cyan-500/10 p-6 bg-black/40">
           <h3 className="text-sm font-bold mb-6 flex items-center gap-2">
             <Terminal size={16} /> LIVE_FEED_LOG
           </h3>
           <div className="space-y-4 text-[10px] opacity-70">
              <LogItem time="12:44" msg="User_0x91 signed in from WB_Server" color="text-green-400" />
              <LogItem time="12:45" msg="Encrypted packet sent to Node_3" color="text-cyan-400" />
              <LogItem time="12:48" msg="Vulnerability Scan: 0 Threats found" color="text-yellow-400" />
              <LogItem time="12:50" msg="New Reel uploaded by @Sayanox" color="text-purple-400" />
           </div>
        </aside>
      </div>
    </div>
  );
}

function NavIcon({ icon, label }: { icon: any; label: string }) {
  return (
    <div className="group relative cursor-pointer p-3 hover:bg-cyan-500/10 rounded-xl transition-all">
      <div className="text-gray-500 group-hover:text-cyan-400 transition-colors">{icon}</div>
      <span className="absolute left-16 bg-cyan-500 text-black px-2 py-1 text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
        {label}
      </span>
    </div>
  );
}

function LogItem({ time, msg, color }: { time: string; msg: string; color: string }) {
  return (
    <div className="flex gap-3 font-mono">
      <span className="text-gray-600">[{time}]</span>
      <span className={color}>{msg}</span>
    </div>
  );
          }
