import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div className="h-full bg-blue-50 border-[3px] border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 relative group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
      {/* Header Icon - Added group-hover:animate-bounce */}
      <div className="absolute -top-5 -left-5 bg-blue-300 border-[3px] border-black p-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-6deg] group-hover:rotate-0 group-hover:animate-bounce transition-transform z-10">
        <GraduationCap size={24} strokeWidth={2.5} />
      </div>

      <h3 className="text-2xl font-black uppercase mb-6 ml-4 border-b-2 border-black border-dashed pb-2 inline-block">Education</h3>

      <div className="space-y-6">
        {RESUME_DATA.education.map((edu, index) => (
          <div key={index} className="relative">
             <div className="flex flex-col md:flex-row justify-between md:items-start mb-3">
               <div>
                  <h4 className="text-xl font-bold leading-tight">{edu.degree}</h4>
                  <p className="font-bold text-blue-600 text-lg">{edu.institution}</p>
               </div>
               <span className="self-start md:self-auto mt-2 md:mt-0 bg-white border-2 border-black px-2 py-1 text-xs font-bold rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap">
                 {edu.duration}
               </span>
             </div>
             
             {/* Styled List */}
             <ul className="space-y-2 mt-4 bg-white/50 p-4 rounded-lg border-2 border-black/10">
               {edu.details.map((detail, i) => (
                 <li key={i} className="text-sm text-gray-800 font-medium flex items-start gap-2">
                   <span className="min-w-[6px] h-[6px] rounded-full bg-blue-500 mt-1.5"></span>
                   {detail}
                 </li>
               ))}
             </ul>
          </div>
        ))}
      </div>
    </div>
  );
};