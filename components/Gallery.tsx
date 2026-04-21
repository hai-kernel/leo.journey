import React from 'react';
import { RESUME_DATA } from '../constants';

export const Gallery: React.FC = () => {
  if (!RESUME_DATA.personalPhotos || RESUME_DATA.personalPhotos.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="py-20 px-6 md:px-12 bg-yellow-50 border-t-[3px] border-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter inline-block relative">
            <span className="bg-white border-[3px] border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-2 hover:rotate-0 transition-transform">
              Life & Vibes
            </span>
          </h2>
          <p className="font-handwriting text-2xl text-gray-600 mt-8">Beyond the code...</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
          {RESUME_DATA.personalPhotos.map((photo, index) => {
            // Apply different rotation to each photo for a casual, polaroid look
            const rotations = ['-rotate-6', 'rotate-3', '-rotate-2'];
            const hoverRotations = ['hover:rotate-0', 'hover:-rotate-2', 'hover:rotate-2'];
            const zIndices = ['z-10', 'z-20', 'z-10'];
            const margins = ['mt-0', 'md:mt-12', 'mt-0']; // Middle photo drops down a bit

            return (
              <div 
                key={index} 
                className={`group relative ${rotations[index % rotations.length]} ${hoverRotations[index % hoverRotations.length]} transition-all duration-300 hover:scale-105 hover:z-30 ${zIndices[index % zIndices.length]} ${margins[index % margins.length]}`}
              >
                {/* Polaroid Frame */}
                <div className="bg-white p-4 pb-12 md:pb-16 border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] w-64 md:w-80 transition-shadow duration-300">
                  {/* Tape */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/50 backdrop-blur-sm border border-gray-200 shadow-sm rotate-2 z-20"></div>
                  
                  {/* Image Container */}
                  <div className="aspect-[3/4] md:aspect-square w-full overflow-hidden border-[3px] border-black bg-gray-100 flex items-center justify-center relative">
                    <div className="absolute inset-0 border-4 border-black/10 z-10 pointer-events-none"></div>
                    <img 
                      src={photo} 
                      alt={`Personal memory ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    />
                  </div>
                  
                  {/* Doodle / Text */}
                  <div className="absolute bottom-4 left-0 w-full text-center">
                    <span className="font-handwriting text-xl font-bold text-gray-800 opacity-80 group-hover:opacity-100 transition-opacity">
                      {index === 0 ? "Me & my code" : index === 1 ? "Just vibing" : "Always learning"}
                    </span>
                  </div>
                </div>
                
                {/* Decorative sticker on some photos */}
                {index === 1 && (
                  <div className="absolute -bottom-6 -right-6 text-5xl animate-bounce" style={{ animationDuration: '3s' }}>
                    ✨
                  </div>
                )}
                {index === 0 && (
                  <div className="absolute -top-6 -left-6 bg-yellow-300 border-2 border-black rounded-full w-12 h-12 flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] rotate-12">
                    #1
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
