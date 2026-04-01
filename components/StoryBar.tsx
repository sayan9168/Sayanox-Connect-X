"use client";
import { Plus } from "lucide-react";

const stories = [
  { id: 1, user: "Your Story", img: "SM", isMe: true },
  { id: 2, user: "sayanox_dev", img: "SD", hasUpdate: true },
  { id: 3, user: "nova_ql", img: "NQ", hasUpdate: true },
  { id: 4, user: "sentinel", img: "SG", hasUpdate: false },
  { id: 5, user: "aion_lang", img: "AL", hasUpdate: true },
];

export default function StoryBar() {
  return (
    <div className="flex gap-4 p-4 overflow-x-auto scrollbar-hide bg-black/40 backdrop-blur-md border-b border-white/5">
      {stories.map((story) => (
        <div key={story.id} className="flex flex-col items-center gap-1 min-w-[75px]">
          <div className={`relative h-16 w-16 rounded-full p-[2px] ${story.hasUpdate ? 'bg-gradient-to-tr from-cyan-500 via-purple-500 to-red-500' : 'bg-white/10'}`}>
            <div className="h-full w-full bg-black rounded-full p-1">
              <div className="h-full w-full bg-neutral-800 rounded-full flex items-center justify-center text-xs font-bold text-cyan-400 border border-white/10 italic">
                {story.img}
              </div>
            </div>
            {story.isMe && (
              <div className="absolute bottom-0 right-0 bg-cyan-500 rounded-full p-1 border-2 border-black">
                <Plus size={12} className="text-black" />
              </div>
            )}
          </div>
          <span className="text-[10px] text-gray-400 truncate w-16 text-center">{story.user}</span>
        </div>
      ))}
    </div>
  );
}
