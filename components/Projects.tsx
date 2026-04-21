import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, ExternalLink, Code, Check } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-white border-t-[3px] border-black relative">
      <div className="absolute top-0 left-0 w-full h-4 bg-green-200 border-b-[3px] border-black"></div>
      
      <div className="max-w-7xl mx-auto pt-8">
        <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter relative inline-block group cursor-default">
              Typical Projects
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-black transition-all group-hover:w-1/2"></span>
              <span className="absolute -bottom-4 left-2 w-full h-2 bg-green-400 transition-all group-hover:w-3/4 group-hover:left-8"></span>
            </h2>
            <p className="font-handwriting text-2xl text-gray-500 mt-6 animate-pulse">Code that actually compiles.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {RESUME_DATA.projects.map((project, index) => (
            <div key={index} className="relative group">
               {/* Card Top Tab */}
               <div className="absolute -top-3 left-4 bg-black text-white px-4 py-1 rounded-t-lg font-bold text-xs uppercase z-10 transition-transform group-hover:-translate-y-1">
                 {project.role}
               </div>

               {/* Main Card */}
               <div className="bg-white border-[3px] border-black rounded-b-xl rounded-tr-xl p-0 h-full flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:-translate-x-1 transition-all duration-300">
                  
                  {/* Image Area - Updated for Small Images */}
                  <div className="h-64 bg-gray-900 border-b-[3px] border-black flex items-center justify-center relative overflow-hidden transition-colors">
                     
                     {/* Background Pattern (Grid) */}
                     <div 
                        className="absolute inset-0 opacity-20" 
                        style={{ 
                          backgroundImage: 'radial-gradient(#ffffff 2px, transparent 2px)', 
                          backgroundSize: '24px 24px' 
                        }}
                     ></div>

                     {project.imageUrl ? (
                       <div className="relative z-10 w-full h-full flex items-center justify-center p-6">
                          {/* The Image Container - Prevents stretching */}
                          <img 
                            src={project.imageUrl} 
                            alt={project.company} 
                            className="max-w-full max-h-full object-contain border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] group-hover:scale-105 group-hover:rotate-1 transition-all duration-500 bg-gray-800"
                          />
                       </div>
                     ) : (
                       /* Fallback Icon */
                       <Code size={48} className="text-green-400 group-hover:scale-125 transition-transform duration-500 z-10" />
                     )}

                     {/* Badge in image corner */}
                     <div className="absolute bottom-3 right-3 bg-white border-2 border-black px-2 py-1 font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-3 transition-transform z-20">
                       {project.technologies[0]}
                     </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-4">
                      <div className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                        {project.duration}
                      </div>
                      <div className="flex gap-2">
                        {project.link && (
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="p-2 bg-yellow-100 rounded-full border border-black hover:bg-yellow-300 transition-all hover:-translate-y-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                            title="Live Demo"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        <a 
                          href={project.github || `https://${RESUME_DATA.contact.github}`} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="p-2 hover:bg-green-100 rounded-full border border-transparent hover:border-black transition-all hover:rotate-12"
                          title="View Code"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>

                    <h3 className="text-3xl font-black mb-4 leading-none group-hover:text-green-600 transition-colors">
                      {project.company}
                    </h3>
                    
                    <p className="text-gray-700 font-medium text-base mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6 space-y-2">
                      {project.keyContributions.map((contrib, i) => (
                        <div key={i} className="flex gap-3 items-start text-sm text-gray-600">
                          <Check size={16} className="text-green-500 mt-1 shrink-0" />
                          <span>{contrib}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-gray-200 border-dashed">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-2 py-1 border border-black text-xs font-bold bg-gray-50 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-green-200 hover:-translate-y-0.5 transition-all cursor-default">
                          #{tech}
                        </span>
                      ))}
                    </div>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};