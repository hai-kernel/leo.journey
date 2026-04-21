import React from 'react';
import { RESUME_DATA } from '../constants';
import { SectionHeader } from './ui/SectionHeader';
import { Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  // Aggregate unique technologies from experience
  const allTech = Array.from(new Set(RESUME_DATA.experience.flatMap(exp => exp.technologies)));
  
  // Custom grouping for display
  const mainSkills = ["Java", "Spring Boot", "MySQL", "RESTful API", "Microservices"];
  const otherSkills = allTech.filter(t => !mainSkills.includes(t));

  return (
    <section id="skills" className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl md:text-5xl font-black bg-white border-2 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
          SKILLS & STACK
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Main Stack */}
        <div className="bg-green-100 border-[3px] border-black p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Cpu className="text-black" /> Backend Core
          </h3>
          <div className="flex flex-wrap gap-3">
            {mainSkills.map(skill => (
              <span key={skill} className="bg-white border-2 border-black px-3 py-1 font-bold text-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Other Tools */}
        <div className="bg-blue-100 border-[3px] border-black p-8 rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
           <h3 className="text-2xl font-bold mb-6">Tools & Frontend</h3>
           <div className="flex flex-wrap gap-3">
            {otherSkills.map(skill => (
              <span key={skill} className="bg-white border-2 border-black px-3 py-1 font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                {skill}
              </span>
            ))}
           </div>
        </div>
      </div>
    </section>
  );
};