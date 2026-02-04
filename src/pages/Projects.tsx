import { useState } from 'react';
import { ArrowTopRightOnSquareIcon, CodeBracketSquareIcon, SparklesIcon } from '@heroicons/react/24/outline';
import project1 from "../assets/project/apotek.png";
import project2 from "../assets/project/hadirin.png";
import project3 from "../assets/project/sodik.png";
import project4 from "../assets/project/img5.png";
import project5 from "../assets/project/loder.png";
import project6 from "../assets/project/court.png";

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Sodik - Hajj & Umrah Backend",
      description: "Built the backend system from scratch using Laravel Sanctum. Developed 40+ endpoints for user authentication, RBAC, and content management.",
      tags: ["Laravel", "PostgreSQL", "Sanctum", "RBAC"],
      gradient: "from-purple-600 to-pink-600",
      image: project3,
      github: "#",
      demo: "#"
    },
    {
      title: "Hadir.IN - Attendance System",
      description: "Backend system for teacher attendance (web & mobile), implementing secure user authentication, role management, and attendance data processing.",
      tags: ["PHP", "Laravel", "PostgreSQL", "REST API", "Database Design"],
      gradient: "from-blue-600 to-cyan-600",
      image: project2,
      github: "#",
      demo: "#"
    },
    {
      title: "Pharmacy Management",
      description: "A comprehensive dashboard for managing pharmacy inventory and sales, featuring real-time data tracking.",
      tags: ["Laravel", "PostgreSQL", "Bootstrap", "Javascript"],
      gradient: "from-orange-600 to-red-600",
      image: project1,
      github: "#",
      demo: "#"
    },
    {
      title: "Pengaduan Masyarakat",
      description: "Aplikasi pengaduan masyarakat berbasis web dan mobile, memudahkan masyarakat melaporkan keluhan dan aspirasi kepada pemerintah.",
      tags: ["PHP", "Laravel", "PostgreSQL", "Database Design"],
      gradient: "from-green-600 to-emerald-600",
      image: project4,
      github: "#",
      demo: "#"
    },
    {
      title: "Valex",
      description: "Aplikasi management pengantaran dan expedisi",
      tags: ["PHP", "Laravel", "Bootstrap", "Javascript"],
      gradient: "from-green-600 to-emerald-600",
      image: project5,
      github: "#",
      demo: "#"
    },
    {
      title: "Sport court booking",
      description: "Aplikasi booking lapangan olahraga berbasis mobile, mempermudah pelanggan untuk booking lapangan olahraga secara online",
      tags: ["flutter"],
      gradient: "from-green-600 to-emerald-600",
      image: project6,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="text-white max-w-7xl mx-auto py-12 px-6 overflow-hidden">
      {/* Section Header */}
      <div className="relative mb-20 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600/10 blur-[100px] rounded-full"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
           <SparklesIcon className="w-4 h-4 text-pink-400" />
           <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Selected Works</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Featured
          </span>
          <br className="sm:hidden" />
          <span className="text-white"> Projects</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          A collection of backend systems and full-stack applications built with modern architectural patterns.
        </p>
      </div>
      
      {/* Projects Grid - Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Ambient Background Glow */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-20 transition-all duration-700`}></div>
            
            {/* Card Main */}
            <div className="relative h-full bg-[#0a0a0a]/40 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl flex flex-col">
              
              {/* Image Container with Overlay */}
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000" 
                />
                
                {/* Gradient tint */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60`}></div>
                
                {/* Mobile-visible Actions Overlay */}
                <div className={`absolute inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center gap-6 transition-all duration-500 md:opacity-0 md:group-hover:opacity-100 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'}`}>
                  <a 
                    href={project.github}
                    className="p-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
                  >
                    <CodeBracketSquareIcon className="w-7 h-7" />
                  </a>
                  <a 
                    href={project.demo}
                    className="p-4 bg-white/10 hover:bg-white/20 rounded-full border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
                  >
                    <ArrowTopRightOnSquareIcon className="w-7 h-7" />
                  </a>
                </div>

                {/* Tags over image for mobile aesthetic */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                   {project.tags.slice(0, 2).map((tag, tIdx) => (
                     <span key={tIdx} className="px-2 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold text-white/80">
                        {tag}
                     </span>
                   ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-sm mb-6 flex-1 font-medium">
                  {project.description}
                </p>

                {/* Desktop Tags at bottom */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1.5 text-[10px] font-bold tracking-widest uppercase rounded-lg bg-white/5 border border-white/5 whitespace-nowrap group-hover:border-purple-500/30 transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VIEW ALL CTA */}
      <div className="text-center mt-20">
        <a 
          href="https://github.com/Sayyidberryl" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all hover:scale-105 active:scale-95 group shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <span className="font-black text-xs uppercase tracking-[0.2em] relative z-10">Expand Your Horizons</span>
          <ArrowTopRightOnSquareIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
