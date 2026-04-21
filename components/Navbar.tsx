import React, { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Logo } from './ui/Logo';
import { ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 h-1.5 z-[60] bg-gray-100 w-full">
        <div 
          className="h-full bg-gradient-to-r from-green-400 via-yellow-400 to-cyan-500"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fff5f7]/95 backdrop-blur-sm border-b-[3px] border-black py-2 px-6 md:px-12 flex justify-between items-center h-24 mt-1.5">
        <div className="flex items-center pt-2">
          <Logo />
        </div>

        <div className="hidden md:flex items-center gap-8 font-bold text-sm">
          <button onClick={() => scrollToSection('skills')} className="hover:text-blue-600 hover:underline decoration-2 underline-offset-4 uppercase tracking-wide transition-colors">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-green-600 hover:underline decoration-2 underline-offset-4 uppercase tracking-wide transition-colors">Projects</button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-cyan-600 hover:underline decoration-2 underline-offset-4 uppercase tracking-wide transition-colors">Experience</button>
        </div>

        <Button variant="secondary" className="hidden md:flex py-2 px-4 text-sm" onClick={() => scrollToSection('contact')} icon={<ArrowRight size={16}/>}>
          Let's Talk
        </Button>
      </nav>
    </>
  );
};