import React from 'react';
import { RESUME_DATA } from '../constants';
import { Award, Star, Camera } from 'lucide-react';

export const Honors: React.FC = () => {
  return (
    <div className="bg-orange-50 border-[3px] border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 relative group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all h-full flex flex-col">
       {/* Header Icon - Bounce on hover */}
      <div className="absolute -top-5 -left-5 bg-orange-300 border-[3px] border-black p-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] group-hover:rotate-0 group-hover:animate-bounce transition-transform z-10">
        <Award size={24} strokeWidth={2.5} />
      </div>

      <h3 className="text-2xl font-black uppercase mb-6 ml-4 border-b-2 border-black border-dashed pb-2 inline-block">Honors</h3>

      {/* List of Awards */}
      <div className="space-y-3 mb-8">
        {RESUME_DATA.awards.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-3 bg-white border-2 border-black p-3 rounded-lg shadow-sm hover:scale-[1.02] transition-transform"
          >
             <div className="bg-yellow-400 border border-black p-1 rounded-full shrink-0">
               <Star size={14} className="text-black fill-white" />
             </div>
             <div>
               <h4 className="font-bold text-sm leading-tight">{item.name}</h4>
               <p className="text-xs text-gray-500 font-bold mt-0.5">{item.date}</p>
             </div>
          </div>
        ))}
      </div>


    </div>
  );
};