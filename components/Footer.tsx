import React from 'react';
import { RESUME_DATA } from '../constants';
import { Mail, Github, Linkedin, Copy } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Yellow Back Card */}
        <div className="absolute inset-0 bg-yellow-300 border-[3px] border-black rounded-none transform -rotate-2 scale-105 z-0"></div>
        
        {/* Main White Card */}
        <div className="relative bg-white border-[3px] border-black p-12 md:p-16 text-center transform rotate-1 z-10 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]">
          
          <h2 className="text-5xl md:text-7xl font-black mb-4 leading-[0.9]">
            Ready to Build the<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Future?</span>
          </h2>
          
          <p className="font-handwriting text-2xl text-gray-500 mb-8 max-w-lg mx-auto transform -rotate-1">
            I am currently available for internships and full-time positions. 
            Send me a message and let's create something epic.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            {/* Email Button */}
            <a 
              href={`mailto:${RESUME_DATA.contact.email}`}
              className="group relative inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-xl border-[3px] border-black hover:bg-gray-900 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_#22c55e] transition-all"
            >
              <Mail size={20} className="text-green-400 group-hover:animate-bounce" />
              <span className="font-bold text-lg">{RESUME_DATA.contact.email}</span>
            </a>

            {/* Social Buttons */}
            <div className="flex gap-4">
               <a 
                 href={`https://${RESUME_DATA.contact.github}`} 
                 target="_blank" 
                 rel="noreferrer"
                 className="bg-white p-4 border-[3px] border-black rounded-xl hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
               >
                 <Github size={24} />
               </a>
               <a 
                 href={`https://${RESUME_DATA.contact.linkedin}`} 
                 target="_blank" 
                 rel="noreferrer"
                 className="bg-white p-4 border-[3px] border-black rounded-xl hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-blue-600"
               >
                 <Linkedin size={24} />
               </a>
               <button 
                 className="bg-white p-4 border-[3px] border-black rounded-xl hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                 onClick={() => navigator.clipboard.writeText(RESUME_DATA.contact.phone)}
                 title="Copy Phone Number"
               >
                 <Copy size={24} />
               </button>
            </div>
          </div>
        </div>

      </div>

      <div className="text-center mt-20 text-gray-400 font-bold uppercase tracking-widest text-xs">
        © {new Date().getFullYear()} {RESUME_DATA.name}. Practice makes perfect.
      </div>
    </footer>
  );
};