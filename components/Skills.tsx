import React from 'react';
import { RESUME_DATA } from '../constants';
import { Code, Layers, Database, MessageSquare, Cloud, Wrench, Cpu } from 'lucide-react';

// Colour and icon for each skill group from the CV's "Technical Skills" section
const GROUP_STYLES: Record<string, { color: string; icon: React.ReactNode }> = {
  'Languages': { color: 'bg-yellow-300', icon: <Code size={20} strokeWidth={2.5} /> },
  'Frameworks': { color: 'bg-green-300', icon: <Layers size={20} strokeWidth={2.5} /> },
  'Databases': { color: 'bg-blue-300', icon: <Database size={20} strokeWidth={2.5} /> },
  'Messaging': { color: 'bg-orange-300', icon: <MessageSquare size={20} strokeWidth={2.5} /> },
  'Cloud Services': { color: 'bg-cyan-300', icon: <Cloud size={20} strokeWidth={2.5} /> },
  'Tools': { color: 'bg-pink-300', icon: <Wrench size={20} strokeWidth={2.5} /> },
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 md:px-12 py-12 scroll-mt-28">
      {/* Header */}
      <div className="relative mb-12 inline-block group">
        <div className="absolute -top-12 -left-2 md:-top-6 md:-left-6 bg-yellow-300 border-[3px] border-black p-2 md:p-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12 z-20 animate-float">
          <Cpu size={28} strokeWidth={2.5} />
        </div>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter relative inline-block z-10 text-black">
          Skills
          <span className="absolute bottom-2 left-0 w-full h-4 bg-yellow-300 -z-10 group-hover:h-8 transition-all duration-300"></span>
        </h2>
        <p className="font-handwriting text-2xl text-gray-500 mt-2 ml-2 transform -rotate-2">
          My everyday toolbox...
        </p>
      </div>

      {/* Skill groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESUME_DATA.skills.map(group => {
          const style = GROUP_STYLES[group.category] ?? { color: 'bg-gray-200', icon: <Cpu size={20} strokeWidth={2.5} /> };
          return (
            <div
              key={group.category}
              className="bg-white border-[3px] border-black rounded-xl p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`${style.color} border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                  {style.icon}
                </span>
                <h3 className="text-lg font-black uppercase tracking-wide">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map(item => (
                  <span
                    key={item}
                    className="bg-gray-50 border-2 border-black rounded-full px-3 py-1 text-sm font-bold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
