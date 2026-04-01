"use client";
import { motion } from "framer-motion";
import { Users, Activity, BarChart3, Globe, ShieldAlert, Cpu } from "lucide-react";

const stats = [
  { label: "Active Users", value: "1,248", change: "+12%", icon: <Users className="text-cyan-400" /> },
  { label: "Reels View Count", value: "45.2k", change: "+24%", icon: <Activity className="text-purple-400" /> },
  { label: "Data Encrypted", value: "1.2 TB", change: "Secure", icon: <ShieldAlert className="text-green-400" /> },
  { label: "System Load", value: "14%", change: "Stable", icon: <Cpu className="text-yellow-400" /> },
];

export default function AdminAnalytics() {
  return (
    <div className="p-6 bg-[#050505] min-h-screen text-white font-mono">
      {/* Header */}
      <header className="mb-10 flex justify-between items-center border-b border-white/10 pb-6">
        <div>
          <h2 className="text-2xl font-black tracking-tighter text-cyan-400 italic">SYSTEM_ANALYTICS [v1.0]</h2>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Monitoring Sayanox Connect X Traffic</p>
        </div>
        <div className="flex gap-2">
           <div className="h-2 w-2 bg-cyan-500 rounded-full animate-pulse shadow-[0_0_10px_#06b6d4]"></div>
           <span className="text-[10px] text-cyan-500 font-bold uppercase">Live Sync</span>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, i) => (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            key={stat.label} 
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:border-cyan-500/50 transition-all group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${stat.change.includes('+') ? 'bg-green-500/20 text-green-400' : 'bg-cyan-500/20 text-cyan-400'}`}>
                {stat.change}
              </span>
            </div>
            <h4 className="text-xs text-gray-500 uppercase font-bold mb-1">{stat.label}</h4>
            <p className="text-3xl font-black text-white tracking-tighter">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* --- Live Traffic Map / Visualization Placeholder --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-6 h-80 flex flex-col justify-center items-center relative overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent"></div>
           <Globe size={80} className="text-cyan-500/20 animate-spin-slow" />
           <p className="text-xs text-gray-500 mt-4 uppercase tracking-widest font-bold">Mapping Global Nodes...</p>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
           <h3 className="text-sm font-bold mb-6 flex items-center gap-2 tracking-tighter uppercase"><BarChart3 size={16} /> Recent Activity</h3>
           <div className="space-y-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="flex justify-between items-center text-[10px] border-b border-white/5 pb-2">
                  <span className="text-gray-400">Node_ID: 0x{Math.random().toString(16).slice(2,6)}</span>
                  <span className="text-cyan-400">UPLOAD_REEL</span>
                  <span className="text-gray-600">Just Now</span>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
                    }
