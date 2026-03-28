import { useEffect, useState } from 'react';
import { ArrowRightIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import Aurora from '../components/Aurora';
import MagicBento from '../components/MagicBento';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Backend Engineer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 120);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#030014] text-white">
      {/* HERO SECTION */}
      <section className="relative min-h-[100svh] flex flex-col justify-center items-center w-full px-4 sm:px-6 overflow-hidden">
        {/* Animated Aurora Background */}
        <div className="absolute inset-0 z-0 opacity-80">
           <Aurora 
            colorStops={['#1e1b4b', '#2e1065', '#0f172a']} 
            amplitude={1.2} 
            blend={0.5} 
            speed={0.5} 
           />
           {/* Gradient overlay for better text legibility */}
           <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/60 to-[#030014] pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-12 sm:mt-0">
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-purple-500/30 backdrop-blur-md mb-8 sm:mb-12 shadow-[0_0_15px_-5px_rgba(168,85,247,0.3)] animate-fade-in-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
            </span>
            <span className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200 uppercase">
              Available for new projects
            </span>
          </div>

          {/* Hero Typography */}
          <div className="space-y-4 mb-6 sm:mb-8 z-10">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[1.05] animate-fade-in-up delay-100">
              <span className="text-white">Sayyid Berryl</span>
              <br />
              <span className="text-gray-300">
                Musthofa
              </span>
            </h1>
          </div>

          {/* Dynamic Role & Tagline */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up delay-200 z-10 max-w-3xl">
            <div className="flex items-center justify-center gap-1 text-2xl sm:text-3xl md:text-4xl font-bold text-purple-200 tracking-tight h-10 sm:h-12">
              <span>{displayText}</span>
              <span className="w-1.5 h-6 sm:h-8 md:h-9 bg-purple-400 animate-blink"></span>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-gray-300 mx-auto leading-relaxed font-medium px-2">
              Architecting high-performance <span className="text-white font-semibold">backend systems</span> and scalable APIs. 
              Specializing in <span className="text-purple-300 font-semibold drop-shadow-sm">Laravel</span>, <span className="text-purple-300 font-semibold drop-shadow-sm">Spring Boot</span>, and <span className="text-purple-300 font-semibold drop-shadow-sm">Python</span> to drive enterprise solutions.
            </p>
          </div>

          {/* Premium Action Buttons - Properly stacked on mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-10 sm:mt-12 animate-fade-in-up delay-300 w-full sm:w-auto z-10">
            <button 
              onClick={() => document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-base sm:text-lg overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(168,85,247,0.4)]"
            >
               <div className="absolute inset-0 bg-purple-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <span className="relative z-10 flex items-center gap-2">
                 Explore Expertise
                 <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
               </span>
            </button>
            
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 hover:border-purple-500/40 rounded-full font-bold text-base sm:text-lg text-white transition-all hover:scale-105 active:scale-95 backdrop-blur-xl"
            >
              <DocumentTextIcon className="w-5 h-5 text-purple-300 group-hover:text-purple-400 transition-colors" />
              <span>View Resume</span>
            </button>
          </div>

        </div>


      </section>

      {/* EXPERTISE SECTION using MagicBento */}
      <section id="expertise" className="relative w-full py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#030014] z-10 border-t border-white/5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-white inline-block drop-shadow-sm">
              Core <span className="text-purple-400">Expertise</span>
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-4">
              Delivering robust and scalable solutions through modern architectures, secure data flows, and intelligent infrastructure setup.
            </p>
          </div>
          
          <MagicBento 
            textAutoHide={false} 
            enableStars={true} 
            enableSpotlight={true} 
            spotlightRadius={400} 
            glowColor="168, 85, 247" 
          />
        </div>
      </section>

      {/* Quick Stats Banner (moved to bottom as secondary info) */}
      <section className="border-y border-white/5 bg-white/[0.02] backdrop-blur-sm py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 sm:gap-12 md:gap-16">
            <div className="flex flex-col items-center justify-center text-center space-y-3">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">1+</span>
              <span className="text-xs sm:text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em]">Years Experience</span>
            </div>
            <div className="flex flex-col items-center justify-center text-center space-y-3">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">20+</span>
              <span className="text-xs sm:text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em]">Certifications</span>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col items-center justify-center text-center space-y-3">
              <span className="text-5xl sm:text-6xl md:text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">5+</span>
              <span className="text-xs sm:text-sm md:text-base font-bold text-gray-400 uppercase tracking-[0.2em]">Enterprise Projects</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
