import React from 'react';
import { Coffee, Code } from 'lucide-react';

export const Logo: React.FC = () => {
  return (
    <div className="flex flex-col items-center select-none transform hover:scale-105 transition-transform duration-300">
      {/* Main Name Block */}
      <div className="relative flex items-end">
        {/* Decorative Elements behind */}
        <div className="absolute -top-3 -right-4 text-blue-600 rotate-12 animate-pulse">
          <Code size={24} strokeWidth={3} />
        </div>
        <div className="absolute -bottom-2 -left-4 text-yellow-500 -rotate-12">
          <Coffee size={24} strokeWidth={3} />
        </div>

        {/* Letters - Using Bolder Colors (400 shades instead of 300) */}
        <div className="flex -space-x-1">
          <span className="relative z-10 bg-green-400 border-[3px] border-black px-2 pt-0.5 rounded-sm text-3xl font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-3 hover:-translate-y-1 transition-transform">
            L
          </span>
          <span className="relative z-20 bg-blue-400 border-[3px] border-black px-2 pt-0.5 rounded-sm text-3xl font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:-translate-y-1 transition-transform">
            E
          </span>
          <span className="relative z-10 bg-yellow-400 border-[3px] border-black px-2 pt-0.5 rounded-sm text-3xl font-black text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:-translate-y-1 transition-transform">
            O
          </span>
        </div>
      </div>

      {/* Subtext */}
      <div className="mt-2 bg-black text-white px-2 py-0.5 text-[10px] font-bold tracking-widest uppercase border-2 border-transparent transform -skew-x-6">
        Backend Developer
      </div>
    </div>
  );
};
