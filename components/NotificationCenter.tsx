"use client";
import { Heart, UserPlus, MessageSquare } from "lucide-react";

const alerts = [
  { id: 1, type: "like", user: "dev_titan", text: "liked your reel", time: "2m ago" },
  { id: 2, type: "follow", user: "cyber_ghost", text: "started following you", time: "15m ago" },
  { id: 3, type: "comment", user: "nova_ql", text: "commented: 'Insane security!'", time: "1h ago" },
];

export default function NotificationCenter() {
  return (
    <div className="w-80 bg-neutral-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden overflow-y-auto max-h-[400px]">
      <div className="p-4 border-b border-white/5 bg-white/5">
        <h3 className="text-sm font-bold tracking-tighter">NOTIFICATIONS</h3>
      </div>
      <div className="divide-y divide-white/5">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-4 flex items-center gap-3 hover:bg-white/5 transition-all cursor-pointer">
            <div className="h-10 w-10 bg-gradient-to-br from-cyan-600 to-blue-700 rounded-full flex items-center justify-center text-xs font-bold">
              {alert.user[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <p className="text-xs text-white">
                <span className="font-bold">@{alert.user}</span> {alert.text}
              </p>
              <span className="text-[10px] text-gray-500">{alert.time}</span>
            </div>
            {alert.type === "like" && <Heart size={14} className="text-red-500 fill-red-500" />}
          </div>
        ))}
      </div>
    </div>
  );
}
