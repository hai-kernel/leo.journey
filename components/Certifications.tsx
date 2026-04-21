import React from 'react';
import { RESUME_DATA } from '../constants';
import { ScrollText, CheckCircle } from 'lucide-react';

export const Certifications: React.FC = () => {
  return (
    <div className="bg-cyan-50 border-[3px] border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 relative group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
       {/* Header Icon - Added group-hover:animate-bounce */}
      <div className="absolute -top-5 -left-5 bg-cyan-300 border-[3px] border-black p-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[3deg] group-hover:rotate-0 group-hover:animate-bounce transition-transform z-10">
        <ScrollText size={24} strokeWidth={2.5} />
      </div>

      <h3 className="text-2xl font-black uppercase mb-6 ml-4 border-b-2 border-black border-dashed pb-2 inline-block">Certifications</h3>

      <div className="space-y-3">
        {RESUME_DATA.certifications.map((cert, index) => (
          <div 
            key={index} 
            className="flex items-start gap-3 bg-white border-2 border-black p-3 rounded-lg shadow-sm hover:scale-[1.02] transition-transform"
          >
             <CheckCircle size={20} className="text-cyan-500 shrink-0 mt-0.5" />
             <div>
               <h4 className="font-bold text-sm leading-tight">{cert.name}</h4>
               <p className="text-xs text-gray-500 font-bold mt-1">{cert.date}</p>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};