import React from 'react';
import { RESUME_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 md:px-12 py-12">
      {/* Header */}
      <div className="relative mb-20 inline-block group">
        <div className="absolute -top-6 -left-6 bg-blue-300 border-[3px] border-black p-3 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12 z-20 animate-float">
          <Briefcase size={28} strokeWidth={2.5} />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter relative inline-block z-10 text-black">
            Experience
            <span className="absolute bottom-2 left-0 w-full h-4 bg-blue-400 -z-10 group-hover:h-8 transition-all duration-300"></span>
          </h2>
        </div>
        
        <p className="font-handwriting text-2xl text-gray-500 mt-2 ml-2 transform -rotate-2">
          Where I've been cooking...
        </p>
      </div>

      <div className="relative border-l-[3px] border-black ml-4 md:ml-8 space-y-12">
        {RESUME_DATA.experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-16">
            {/* Timeline Dot */}
            <div className="absolute -left-[11px] top-8 w-5 h-5 bg-blue-300 border-[3px] border-black rounded-full z-10 group-hover:bg-blue-500 transition-colors"></div>
            
            <div className="group bg-white border-[3px] border-black rounded-xl p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:rotate-[0.5deg] transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black group-hover:text-blue-700 transition-colors">{exp.role}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-2 h-2 bg-black rounded-full group-hover:bg-blue-500 transition-colors"></span>
                    <span className="font-bold text-lg">{exp.company}</span>
                    {exp.location && (
                      <>
                        <span className="text-gray-400">•</span>
                        <span className="font-medium text-gray-600">{exp.location}</span>
                      </>
                    )}
                  </div>
                </div>
                <span className="bg-black text-white px-4 py-1.5 rounded-full font-bold text-sm self-start md:self-center border-2 border-transparent group-hover:border-blue-400 group-hover:bg-blue-600 transition-all">
                  {exp.duration}
                </span>
              </div>
              
              {exp.description && (
                <p className="text-gray-700 font-medium mb-4 leading-relaxed">
                  {exp.description}
                </p>
              )}

              <ul className="space-y-2 mb-6">
                {exp.keyContributions.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
                    <span className="min-w-[6px] h-[6px] mt-1.5 bg-blue-500 rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-dashed border-gray-200">
                {exp.technologies.map(tech => (
                  <span key={tech} className="px-3 py-1 border-2 border-black rounded-lg text-xs font-bold uppercase hover:bg-blue-200 transition-colors bg-gray-50 transform hover:scale-110 duration-200 cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};