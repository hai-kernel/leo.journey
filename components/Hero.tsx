import React, { useEffect, useState } from 'react';
import { RESUME_DATA } from '../constants';
import { Button } from './ui/Button';
import { Download, Layers } from 'lucide-react';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "robust backends and secure APIs.";
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    // Check if a static CV URL is provided in constants.ts
    if (RESUME_DATA.cvUrl && RESUME_DATA.cvUrl.trim() !== "") {
      const link = document.createElement('a');
      link.href = RESUME_DATA.cvUrl;
      link.download = `${RESUME_DATA.name.replace(/\s+/g, '_')}_CV.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // Default: Trigger browser print to PDF
      window.print();
    }
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen pt-40 pb-12 px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto relative">
      {/* Left Content */}
      <div className="flex-1 max-w-2xl relative order-2 lg:order-1 mt-8 lg:mt-0">
        
        {/* Sticker - Positioned carefully to not be cut off */}
        <div className="absolute -top-16 -right-2 md:right-10 rotate-[6deg] bg-yellow-400 border-[3px] border-black px-5 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 z-30 hover:scale-110 transition-transform cursor-pointer animate-float">
          <span className="font-handwriting font-bold text-lg md:text-xl">Hello there! I'm {RESUME_DATA.name}</span>
          <span className="text-2xl">👋</span>
        </div>

        {/* High Contrast Headline */}
        <div className="relative mb-8 leading-[0.85]">
          {/* BACKEND */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white text-stroke-black relative z-10 hover:scale-105 transition-transform origin-left duration-300 cursor-default">
            BACKEND
          </h1>
          
          {/* DEVELOPER - Blue Fill, Black Stroke, Heavy Shadow */}
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-[#3b82f6] text-stroke-black relative z-20 -mt-2 md:-mt-4 hover:translate-x-2 transition-transform duration-300 cursor-default drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            DEVELOPER
          </h1>

          <div className="relative inline-block z-10 -mt-2 md:-mt-4">
             {/* Green Underline / Swash */}
             <svg className="absolute w-[110%] h-6 -bottom-2 -left-2 text-[#4ade80] -z-10 animate-wiggle" viewBox="0 0 200 20" preserveAspectRatio="none">
               <path d="M0 10 Q 100 25 200 10" stroke="currentColor" strokeWidth="15" fill="none" strokeLinecap="round" />
             </svg>
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-xl md:text-2xl font-bold text-gray-800 mb-10 leading-relaxed max-w-lg relative z-20">
          <div className="mb-2">I build</div>
          <div className="relative inline-block">
             {/* Yellow circle decoration behind */}
             <div className="absolute -top-6 -left-4 w-12 h-12 bg-yellow-200 rounded-full border-2 border-black -z-10 opacity-80"></div>
             
             {/* Green Box */}
             <div className="bg-[#4ade80] border-[3px] border-black px-3 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-1 hover:rotate-0 transition-transform cursor-default">
                {typedText}
                <span className="animate-pulse ml-1">|</span>
             </div>
          </div>
          <div className="mt-3">
             Turning business logic into buttery smooth performance.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 relative z-30">
          <Button onClick={scrollToProjects} className="text-lg py-4 px-8" icon={<Layers size={20} />}>
            View My Work
          </Button>
          <Button variant="secondary" onClick={handleDownloadCV} className="text-lg py-4 px-8" icon={<Download size={20} />}>
            Download CV
          </Button>
        </div>
      </div>

      {/* Right Content - Monitor Graphic */}
      <div className="flex-1 flex justify-center w-full max-w-lg order-1 lg:order-2">
        <div className="relative w-full aspect-square max-w-[500px]">
          {/* Background Gradient Square */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-cyan-200 to-yellow-200 border-[3px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] z-0 rounded-xl animate-float-delayed"></div>
          
          {/* Computer Monitor */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
             <div className="flex flex-col items-center">
                {/* Monitor Head */}
                <div className="bg-[#f0f0f0] border-[3px] border-black rounded-3xl p-4 w-72 md:w-96 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] relative hover:scale-[1.02] transition-transform duration-300">
                   {/* Cute ears/decoration */}
                   <div className="absolute -top-3 left-8 w-6 h-6 bg-black rounded-full z-0"></div>
                   <div className="absolute -top-3 right-8 w-6 h-6 bg-black rounded-full z-0"></div>

                   <div className="bg-[#111111] border-[3px] border-black rounded-xl aspect-[4/3] w-full p-5 relative overflow-hidden flex flex-col justify-between items-start z-10 font-mono text-left shadow-inner">
                      {/* Terminal UI */}
                      <div className="w-full border-b border-gray-700 pb-2 mb-2 flex justify-between items-center">
                         <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                         </div>
                         <div className="text-[10px] text-gray-400">terminal</div>
                      </div>

                      <div className="w-full text-center border-b border-gray-700 border-dashed pb-4 mb-2 mt-2">
                        <h2 className="text-green-400 font-black text-3xl tracking-widest drop-shadow-[0_0_10px_rgba(74,222,128,0.6)]">
                           {RESUME_DATA.name.toUpperCase()}
                        </h2>
                        <h3 className="text-yellow-400 font-black text-lg tracking-[0.2em] inline-block px-2 mt-1 border border-yellow-400 rounded">
                           BACKEND DEV
                        </h3>
                      </div>

                      <div className="text-[11px] md:text-sm leading-snug w-full font-bold">
                         <div className="text-blue-400">class <span className="text-yellow-300">Leo</span> {'{'}</div>
                         <div className="pl-4 text-blue-300">role = <span className="text-green-300">"Backend"</span>;</div>
                         <div className="pl-4 text-blue-300">stack = <span className="text-green-300">["Java", "Spring"]</span>;</div>
                         <div className="pl-4">
                           <span className="text-blue-400">void</span> <span className="text-yellow-300">build</span>() {'{'}
                         </div>
                         <div className="pl-8 text-gray-500">// Let's code!</div>
                         <div className="pl-4">{'}'}</div>
                         <div className="text-blue-400">{'}'}</div>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-green-400">➜</span>
                        <span className="w-3 h-5 bg-green-400 animate-pulse block"></span>
                      </div>
                   </div>
                </div>

                {/* Neck */}
                <div className="w-20 h-8 bg-gray-300 border-x-[3px] border-black relative z-0"></div>

                {/* Stand */}
                <div className="w-48 h-12 bg-[#e5e5e5] border-[3px] border-black rounded-2xl flex items-center justify-center gap-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative z-10">
                   <div className="w-4 h-4 rounded-full bg-red-400 border border-black hover:bg-red-300 cursor-pointer"></div>
                   <div className="w-4 h-4 rounded-full bg-yellow-400 border border-black hover:bg-yellow-300 cursor-pointer"></div>
                   <div className="w-4 h-4 rounded-full bg-green-400 border border-black hover:bg-green-300 cursor-pointer"></div>
                </div>
             </div>
          </div>

          {/* Floating Sticker Badge */}
          <div className="absolute bottom-12 right-0 bg-white border-[3px] border-black p-4 rotate-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-20 hover:rotate-12 transition-transform cursor-default animate-float-delayed">
             <div className="text-yellow-400 text-4xl mb-1">★</div>
             <div className="font-bold text-lg leading-none">&lt; 1 Year</div>
             <div className="text-xs font-bold text-gray-500">Fresher</div>
          </div>
        </div>
      </div>
    </section>
  );
};