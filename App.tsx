import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeSkills } from './components/MarqueeSkills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Honors } from './components/Honors';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { ResumeContent } from './components/ResumeContent';
import { Gallery } from './components/Gallery';
import { Background } from './components/ui/Background';

const App: React.FC = () => {
  return (
    <>
      {/* 
        WEB VIEW: 
        Visible only on screen. Contains the interactive portfolio.
      */}
      <div className="web-view min-h-screen bg-[#eff6ff] selection:bg-blue-300 selection:text-black overflow-x-hidden relative">
        
        {/* Animated Background */}
        <Background />
        
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <MarqueeSkills />
          <Projects />
          <Experience />
          
          {/* Compact Grid for Credentials */}
          <section id="credentials" className="max-w-7xl mx-auto px-6 md:px-12 py-12">
            <h2 className="text-4xl font-black text-center mb-12 uppercase tracking-tighter">
              <span className="bg-white border-[3px] border-black px-4 py-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                Credentials & Awards
              </span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
               {/* Left Column: Education (Takes full height of column) */}
               <div className="h-full">
                  <Education />
               </div>

               {/* Right Column: Stacked Certs & Honors */}
               <div className="flex flex-col gap-8">
                  <Certifications />
                  <Honors />
               </div>
            </div>
          </section>

          <Gallery />
          <Footer />
        </div>
      </div>

      {/* 
        PRINT VIEW: 
        Visible only when printing. Contains the A4 Resume paper layout.
      */}
      <div className="print-view hidden">
        <div className="print-container bg-white text-black p-[20mm] w-full">
           <ResumeContent />
        </div>
      </div>
    </>
  );
};

export default App;