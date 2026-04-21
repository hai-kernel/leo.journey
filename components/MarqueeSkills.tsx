import React from 'react';
import { RESUME_DATA } from '../constants';
import { Terminal, Database, Globe, Code, Server, Coffee, Layers, Box } from 'lucide-react';

export const MarqueeSkills: React.FC = () => {
  // Get all unique technologies
  const allTech = Array.from(new Set(RESUME_DATA.experience.flatMap(exp => exp.technologies)));
  const displayTech = [...allTech, "Java", "Spring Boot", "System Design", "Algorithms"]; // Ensure core skills are present
  
  // Duplicate for seamless loop
  const marqueeItems = [...displayTech, ...displayTech];

  const getIcon = (tech: string) => {
    const t = tech.toLowerCase();
    if (t.includes('java')) return <Coffee size={18} />;
    if (t.includes('sql') || t.includes('data')) return <Database size={18} />;
    if (t.includes('react') || t.includes('html')) return <Globe size={18} />;
    if (t.includes('spring')) return <Layers size={18} />;
    return <Terminal size={18} />;
  };

  const colors = [
    'bg-blue-100', 'bg-green-100', 'bg-yellow-100', 'bg-blue-100', 'bg-cyan-100', 'bg-orange-100'
  ];

  return (
    <div className="w-full border-y-[3px] border-black bg-white overflow-hidden py-6 rotate-1 md:rotate-2 my-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)]">
      <div className="flex w-[200%] animate-scroll">
        {marqueeItems.map((tech, index) => (
          <div 
            key={`${tech}-${index}`} 
            className={`
              flex items-center gap-2 px-6 py-3 mx-3 
              border-[3px] border-black rounded-full 
              font-bold text-lg whitespace-nowrap
              ${colors[index % colors.length]}
              shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
              hover:-translate-y-1 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
              transition-all cursor-default
            `}
          >
            {getIcon(tech)}
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};