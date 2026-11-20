import React from 'react';
import { RESUME_DATA } from '../constants';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <div className="bg-blue-50 border-[3px] border-black rounded-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 relative group hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
      {/* Header Icon - Added group-hover:animate-bounce */}
      <div className="absolute -top-5 -left-5 bg-blue-300 border-[3px] border-black p-2 rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] rotate-[-6deg] group-hover:rotate-0 group-hover:animate-bounce transition-transform z-10">
        <GraduationCap size={24} strokeWidth={2.5} />
      </div>

      <h3 className="text-2xl font-black uppercase mb-6 ml-4 border-b-2 border-black border-dashed pb-2 inline-block">Education</h3>

      <div className="space-y-4">
        {RESUME_DATA.education.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 bg-white border-2 border-black rounded-lg p-5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
          >
            {/* Degree and school */}
            <div>
              <h4 className="text-xl md:text-2xl font-black leading-tight">{edu.degree}</h4>
              <p className="font-bold text-blue-600 text-lg">{edu.institution}</p>
            </div>

            {/* GPA and dates as badges */}
            <div className="flex flex-wrap items-center gap-3">
              {edu.details.map((detail, i) => (
                <span
                  key={i}
                  className="bg-yellow-300 border-2 border-black px-3 py-1 rounded-full text-sm font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-nowrap"
                >
                  {detail}
                </span>
              ))}
              <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                {edu.duration}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
