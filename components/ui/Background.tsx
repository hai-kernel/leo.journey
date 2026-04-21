import React from 'react';
import { Database, Server, Code, Coffee, Braces, Terminal } from 'lucide-react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Base Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Floating Code/Tech Icons (Backend Theme) */}
      {/* Top Left - Database */}
      <div className="absolute top-20 left-[10%] opacity-10 animate-float-delayed">
        <Database size={64} className="text-blue-600 rotate-12" />
      </div>

      {/* Bottom Right - Server */}
      <div className="absolute bottom-40 right-[15%] opacity-10 animate-float">
        <Server size={80} className="text-blue-600 -rotate-12" />
      </div>

      {/* Middle Right - Curly Braces */}
      <div className="absolute top-[40%] right-[5%] opacity-10 animate-wiggle">
        <Braces size={96} className="text-green-600 rotate-6" />
      </div>

      {/* Bottom Left - Terminal */}
      <div className="absolute bottom-20 left-[5%] opacity-10 animate-float-delayed">
        <Terminal size={72} className="text-black -rotate-6" />
      </div>

      {/* Top Right - Java Coffee */}
      <div className="absolute top-32 right-[20%] opacity-10 animate-float">
        <Coffee size={56} className="text-orange-600 rotate-12" />
      </div>

      {/* 3. Floating Neo-Brutalist Shapes */}
      {/* Yellow Circle */}
      <div className="absolute top-[60%] left-[20%] w-16 h-16 bg-yellow-300 rounded-full border-[3px] border-black opacity-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] animate-float-delayed"></div>
      
      {/* Pink Square */}
      <div className="absolute top-[15%] left-[40%] w-12 h-12 bg-cyan-300 border-[3px] border-black opacity-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] animate-wiggle rotate-12"></div>
      
      {/* Green Triangle (CSS clip-path) */}
      <div className="absolute bottom-[30%] right-[35%] w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-b-green-300 opacity-20 animate-float transform rotate-45"></div>

      {/* 4. Large Faded Text Watermarks */}
      <div className="absolute top-[80%] left-[50%] -translate-x-1/2 text-[10rem] font-black text-black opacity-[0.02] whitespace-nowrap select-none pointer-events-none">
        BACKEND
      </div>
      <div className="absolute top-[10%] left-[0%] text-[8rem] font-black text-black opacity-[0.02] whitespace-nowrap select-none pointer-events-none rotate-90">
        JAVA
      </div>
    </div>
  );
};