import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="text-white max-w-7xl mx-auto py-12 px-6 overflow-hidden">
      {/* Section Header */}
      <div className="relative mb-16 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[100px] rounded-full"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
           <SparklesIcon className="w-4 h-4 text-gray-300" />
           <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Selected Works</span>
        </div>
        <h2 className="text-4xl md:text-7xl font-black mb-6 tracking-tighter leading-tight">
          <span className="text-white drop-shadow-sm">
            Featured
          </span>
          <br className="sm:hidden" />
          <span className="text-white"> Projects</span>
        </h2>
        <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium px-4">
          A collection of backend systems and full-stack applications built with modern architectural patterns.
        </p>
      </div>
      
      {/* Projects Grid - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Ambient Background Glow (Optimized for performance) */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-[2.5rem] blur-xl opacity-0 md:group-hover:opacity-20 transition-opacity duration-700 will-change-opacity`}></div>
            
            {/* Card Main */}
            <Link 
              to={`/project/${project.id}`} 
              className="block relative h-full bg-white/[0.03] border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.3)] flex flex-col focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer will-change-transform"
            >
              {/* Image Container with Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 md:group-hover:scale-105 transition-transform duration-1000 will-change-transform" 
                />
                
                {/* Gradient tint */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 md:opacity-60`}></div>
                
                {/* Tags over image for mobile aesthetic */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                   <span className="px-3 py-1 bg-black/60 border border-white/10 rounded-lg text-[10px] font-bold text-white/90 uppercase tracking-wider shadow-lg">
                      {project.role}
                   </span>
                </div>

                {/* Mobile-visible "View Details" hint */}
                <div className={`absolute top-4 right-4 p-2 md:opacity-0 bg-black/40 rounded-full border border-white/20 text-white shadow-xl transition-opacity duration-300 md:group-hover:opacity-100 z-10 group-active:scale-95 will-change-opacity ${hoveredIndex === index ? 'opacity-100' : ''}`}>
                  <ArrowRightIcon className="w-5 h-5 -rotate-45" />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex-1 flex flex-col relative z-20">
                <h3 className="text-xl md:text-2xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors pr-8">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-1 font-medium">
                  {project.shortDescription}
                </p>

                {/* Desktop Tags at bottom */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5 mt-auto">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-lg bg-white/5 border border-white/5 whitespace-nowrap md:group-hover:border-white/30 transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                     <span className="px-3 py-1.5 text-[10px] font-bold text-gray-500 bg-transparent border border-transparent flex items-center">
                       +{project.tags.length - 3}
                     </span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* VIEW ALL CTA */}
      <div className="text-center mt-20">
        <a 
          href="https://github.com/Sayyidberryl" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105 active:scale-95 group shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_-5px_rgba(168,85,247,0.5)] relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-white/50"
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity"></div>
          <span className="font-black text-xs uppercase tracking-[0.2em] relative z-10 text-white">Expand Your Horizons</span>
          <ArrowTopRightOnSquareIcon className="w-5 h-5 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
