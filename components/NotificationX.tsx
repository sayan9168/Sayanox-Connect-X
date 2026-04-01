"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Zap, Info } from "lucide-react";
import { useState, useEffect } from "react";

export default function NotificationX({ message, type = "info" }: { message: string, type?: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 300, opacity: 0 }}
          className="fixed top-20 right-4 z-[100] w-72 bg-black/80 backdrop-blur-2xl border-l-4 border-cyan-500 p-4 shadow-[0_0_20px_rgba(6,182,212,0.2)] rounded-r-xl"
        >
          <div className="flex items-start gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-lg">
              {type === "alert" ? <Zap size={18} className="text-yellow-400" /> : <Bell size={18} className="text-cyan-400" />}
            </div>
            <div className="flex-1">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">System_Signal</h4>
              <p className="text-sm text-white font-mono">{message}</p>
            </div>
          </div>
          {/* Progress Bar */}
          <motion.div 
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 4 }}
            className="absolute bottom-0 left-0 h-0.5 bg-cyan-500"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
