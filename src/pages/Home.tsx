import { useEffect, useState } from 'react';
import { ArrowDownIcon, CodeBracketIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Backend Developer';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 sm:px-6 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 pointer-events-none opacity-20 hidden md:block">
        <div className="absolute top-1/4 left-1/4 text-purple-400 text-6xl font-mono animate-float">&lt;/&gt;</div>
        <div className="absolute top-1/3 right-1/4 text-pink-400 text-5xl font-mono animate-float-delayed">&#123; &#125;</div>
        <div className="absolute bottom-1/3 left-1/3 text-blue-400 text-4xl font-mono animate-float-slow">[ ]</div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center space-y-6 sm:space-y-8 max-w-5xl mx-auto pb-48 sm:pb-32">
        {/* Greeting Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm animate-fade-in shadow-xl">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-xs sm:text-sm text-gray-300 font-medium">Available for opportunities</span>
        </div>

        {/* Name with Gradient */}
        <h1 className="text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight animate-fade-in-up leading-[1.1]">
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white pb-2 selection:text-white">
            Sayyid Berryl
          </span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient-x px-2">
            Mustofa
          </span>
        </h1>

        {/* Typing Effect Role */}
        <div className="h-12 sm:h-16 flex items-center justify-center">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-300">
            {displayText}
            <span className="inline-block w-1 h-6 sm:h-8 ml-1 bg-purple-400 animate-blink"></span>
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-base sm:text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-4 animate-fade-in-up delay-300 font-medium">
          Crafting robust <span className="text-white">backend systems</span> with <span className="text-purple-400">Laravel</span>, 
          <span className="text-blue-400"> Spring Boot</span>, and 
          <span className="text-green-400"> Python</span>. 
          Specialized in building secure, scalable APIs.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 sm:pt-8 px-6 sm:px-0 animate-fade-in-up delay-500">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-full font-bold text-base sm:text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-lg shadow-purple-500/50"
          >
            <span className="relative z-10 flex items-center gap-2 justify-center">
              <CodeBracketIcon className="w-5 h-5" />
              Know Me Better
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-white/5 border-2 border-white/20 rounded-2xl sm:rounded-full font-bold text-base sm:text-lg hover:bg-white/10 transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2 justify-center">
              <EnvelopeIcon className="w-5 h-5" />
              Get In Touch
            </span>
          </button>
        </div>
      </div>

      {/* Stats Bar - Redesigned for Mobile */}
      <div className="absolute bottom-0 left-0 right-0 py-4 sm:py-8 bg-gradient-to-t from-black via-black/80 to-transparent backdrop-blur-sm z-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-2 sm:gap-4 text-center">
          <div className="group">
            <div className="text-xl sm:text-4xl font-black text-purple-400 group-hover:scale-110 transition-transform">1+</div>
            <div className="text-[10px] sm:text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Year</div>
          </div>
          <div className="group">
            <div className="text-xl sm:text-4xl font-black text-pink-400 group-hover:scale-110 transition-transform">20+</div>
            <div className="text-[10px] sm:text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Certs</div>
          </div>
          <div className="group">
            <div className="text-xl sm:text-4xl font-black text-blue-400 group-hover:scale-110 transition-transform">5+</div>
            <div className="text-[10px] sm:text-sm text-gray-500 font-bold uppercase tracking-widest mt-1">Projects</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Above Stats Bar (Hidden on small mobile height) */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 animate-bounce z-20 hidden sm:block">
        <ArrowDownIcon className="w-6 h-6 text-gray-600/50" />
      </div>
    </div>
  );
};

export default Home;
