import photoProfile from "../assets/photo_profile/photo_profile.jpeg";
import { 
  ServerIcon, 
  CircleStackIcon, 
  ShieldCheckIcon, 
  WrenchScrewdriverIcon,  
  CodeBracketIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BriefcaseIcon,
  MapPinIcon,
  UserIcon,
  PaintBrushIcon
} from '@heroicons/react/24/outline';

const About = () => {
  const stats = [
    { label: "Experience", value: "1+ Year", icon: <CodeBracketIcon className="w-5 h-5" />, gradient: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30" },
    { label: "Projects", value: "5+", icon: <RocketLaunchIcon className="w-5 h-5" />, gradient: "from-blue-500/20 to-cyan-500/20", border: "border-blue-500/30" },
    { label: "Certificate", value: "20+", icon: <SparklesIcon className="w-5 h-5" />, gradient: "from-green-500/20 to-emerald-500/20", border: "border-green-500/30" },
  ];

  const skills = [
    { title: 'Backend Core', desc: 'Laravel, Spring Boot, FastAPI', icon: <ServerIcon className="w-6 h-6" />, color: 'purple' },
    { title: 'Database', desc: 'MySQL, PostgreSQL, Redis, JPA', icon: <CircleStackIcon className="w-6 h-6" />, color: 'blue' },
    { title: 'Security', desc: 'JWT, Sanctum, RBAC, OAuth2', icon: <ShieldCheckIcon className="w-6 h-6" />, color: 'green' },
    { title: 'Tools', desc: 'Git, Github, Gitlab, Postman', icon: <WrenchScrewdriverIcon className="w-6 h-6" />, color: 'orange' },
    { title: 'Architecture', desc: 'MVC, RESTful, Microservices', icon: <CodeBracketIcon className="w-6 h-6" />, color: 'pink' },
    { title: 'Frontend', desc: 'React, Bootstrap, TailwindCSS', icon: <PaintBrushIcon className="w-6 h-6" />, color: 'cyan' }
  ];

  const experiments = [
    {
      company: "PT. Jann Azzam Mandiri",
      role: "Backend Developer",
      period: "2025",
      tech: ["Laravel", "PostgreSQL","Cyclone"],
      desc: "Architected Hajj/Umrah systems, managed 40+ endpoints, high-availability focus."
    },
    {
      company: "Freelance Projects",
      role: "Fullstack Developer",
      period: "2023 - 2026",
      tech: ["Laravel", "Spring Boot", "FastAPI", "PostgreSQL", "React"],
      desc: "Developed attendance systems (Hadir.IN) and pharmacy inventory dashboards."
    }
  ];

  return (
    <div className="text-white max-w-7xl mx-auto py-12 px-4 selection:bg-purple-500/30">
      
      {/* SECTION HEADER */}
      <div className="relative mb-20 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 blur-[100px] rounded-full"></div>
        <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            About
          </span>
          <span className="text-white"> Me</span>
        </h2>
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-500/50"></div>
          <span className="uppercase tracking-[0.3em] text-[10px] font-bold">The Architect Behind the Code</span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-500/50"></div>
        </div>
      </div>

      {/* NEW COMPACT BENTO GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-16">
        
        {/* LEFT: PROFILE & QUICK INFO */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Profile Card */}
          <div className="group relative overflow-hidden bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-md border border-white/10 rounded-3xl p-6 transition-all duration-500 hover:border-purple-500/40">
            <div className="relative z-10">
              <div className="relative w-full aspect-square mb-6 group-hover:scale-[1.02] transition-transform duration-700">
                <img 
                  src={photoProfile} 
                  alt="Profile" 
                  className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-white/10 shadow-2xl" 
                />
                <div className="absolute -bottom-2 -right-2 px-3 py-1 bg-green-500 text-black text-[10px] font-black uppercase rounded-lg shadow-lg">
                  Available
                </div>
              </div>
              <div className="space-y-1">
                <h3 className="text-2xl font-bold tracking-tight">Sayyid Berryl M.</h3>
                <p className="text-purple-400 font-medium text-sm">Backend Systems Engineer</p>
                <div className="pt-3 flex items-center gap-3 text-gray-400 text-xs">
                   <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/5">
                      <MapPinIcon className="w-3.5 h-3.5" />
                      <span>Bogor, ID</span>
                   </div>
                   <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/5 rounded-lg border border-white/5">
                      <UserIcon className="w-3.5 h-3.5" />
                      <span>{new Date().getFullYear() - 2004}+ Years Old</span>
                   </div>
                </div>
              </div>
            </div>
            {/* Background Decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[60px] rounded-full group-hover:bg-purple-600/20 transition-colors"></div>
          </div>

          {/* Socials & Contact Card */}
          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-5 flex items-center justify-between group hover:border-blue-500/40 transition-all">
             <span className="text-xs font-bold text-gray-500 uppercase tracking-widest pl-2">Social Connect</span>
             <div className="flex gap-2">
                <a 
                  href="https://github.com/Sayyidberryl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/40 transition-all text-gray-400 hover:text-purple-400"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a 
                  href="https://wa.me/6285158148997" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-green-500/40 transition-all text-gray-400 hover:text-green-500"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.982-.36-1.747-.74-2.872-2.512-2.958-2.628-.088-.116-.71-.945-.71-1.803 0-.858.451-1.274.61-1.441.159-.166.347-.209.462-.209s.231.007.332.012c.117.007.242-.045.355.223.114.269.404.985.441 1.06.037.075.061.163.011.263-.05.1-.075.162-.15.25-.075.087-.157.194-.225.26-.075.071-.153.148-.066.297.086.148.384.635.822 1.026.566.505 1.046.662 1.194.737.149.075.236.062.323-.04.087-.101.373-.434.472-.582.099-.148.198-.125.331-.075.132.05.839.395.985.467.147.072.245.108.281.171.035.062.035.361-.108.767zM12 0a12 12 0 1 1 0 24 12 12 0 0 1 0-24z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.linkedin.com/in/sayyidberrylm" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-blue-500/40 transition-all text-gray-400 hover:text-blue-500"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/mzxx._/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-pink-500/40 transition-all text-gray-400 hover:text-pink-500"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.412.558.216.957.475 1.377.896.421.42.68.819.896 1.377.163.422.358 1.057.412 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.249 1.805-.412 2.227-.216.558-.475.957-.896 1.377-.42.421-.819.68-1.377.896-.422.163-1.057.358-2.227.412-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.805-.249-2.227-.412-.558-.216-.957-.475-1.377-.896-.421-.42-.68-.819-.896-1.377-.163-.422-.358-1.057-.412-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.249-1.805.412-2.227.216-.558.475-.957.896-1.377.42-.421.819-.68 1.377-.896.422-.163 1.057-.358 2.227-.412 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.26-2.911.557-.789.306-1.459.717-2.126 1.384-.667.667-1.078 1.337-1.384 2.126-.297.763-.5 1.634-.557 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.26 2.148.557 2.911.306.789.717 1.459 1.384 2.126.667.667 1.337 1.078 2.126 1.384.763.297 1.634.5 2.911.557 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.26 2.911-.557.789-.306 1.459-.717 2.126-1.384.667-.667 1.078-1.337 1.384-2.126.297-.763.5-1.634.557-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.26-2.148-.557-2.911-.306-.789-.717-1.459-1.384-2.126-.667-.667-1.337-1.078-2.126-1.384-.763-.297-1.634-.5-2.911-.557-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
             </div>
          </div>
        </div>

        {/* RIGHT: BIO INTERACTIVE TERMINAL */}
        <div className="lg:col-span-8 flex flex-col gap-5">
          <div className="bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col h-full group hover:border-pink-500/30 transition-all duration-500">
            {/* Terminal Top Bar */}
            <div className="bg-white/5 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/50"></div>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono italic">
                 <RocketLaunchIcon className="w-3 h-3" />
                 <span>sayyid@backend: ~/root/biography.sh</span>
              </div>
            </div>
            
            {/* Terminal Body */}
            <div className="p-8 font-mono text-sm space-y-6 flex-1 bg-gradient-to-b from-transparent to-purple-500/[0.02]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-purple-400 opacity-60">
                   <span>$</span> <span className="text-gray-500">whoami</span>
                </div>
                <p className="text-white/90 leading-relaxed text-base">
                  Hi! I'm <span className="text-purple-400 font-bold">Sayyid Berryl Mustofa</span>. 
                  A passionate Backend Developer based in <span className="border-b border-white/20">Bogor, Indonesia</span>. 
                  My focus is on translating complex logic into high-performance, maintainable ecosystems.
                </p>
              </div>

              <div className="space-y-1">
                 <div className="flex items-center gap-2 text-pink-400 opacity-60">
                    <span>$</span> <span className="text-gray-500">specialization --list</span>
                 </div>
                 <p className="text-white/80 leading-relaxed">
                   I specialize in building <span className="text-pink-400">robust and scalable systems</span> using 
                   <span className="text-white"> Laravel, Spring Boot, </span> and 
                   <span className="text-green-400"> Python (FastAPI)</span>. 
                   Designing secure RESTful APIs and optimizing query performance is where I thrive.
                 </p>
              </div>

              <div className="space-y-1">
                 <div className="flex items-center gap-2 text-blue-400 opacity-60">
                    <span>$</span> <span className="text-gray-500">cat philosophy.txt</span>
                 </div>
                 <p className="text-white/70 leading-relaxed">
                   "Clean code isn't just a goal; it's the foundation of reliability." 
                   I love solving core business problems and experimenting with new backend solutions 
                   whenever I'm not pushing to production.
                 </p>
              </div>

              <div className="pt-4 flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                 <span className="text-green-500">$</span>
                 <span className="w-2 h-4 bg-white/20 animate-pulse"></span>
              </div>
            </div>

            {/* Quick Stats Bar (Condensed inside Terminal area) */}
            <div className="grid grid-cols-3 divide-x divide-white/5 bg-white/5 py-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group/stat px-2">
                   <div className="text-lg font-black text-white group-hover/stat:text-purple-400 transition-colors uppercase tracking-widest">{stat.value}</div>
                   <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TECH ARCHITECTURE (SKILLS) - ENLARGED */}
      <div className="mb-16">
         <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-black border-l-4 border-purple-500 pl-6 tracking-tight">System Arsenal</h3>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/20 via-white/5 to-transparent"></div>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((s, i) => (
              <div key={i} className="group relative p-8 bg-white/[0.03] border border-white/10 rounded-[2rem] hover:bg-white/[0.06] hover:border-purple-500/40 transition-all duration-500 flex flex-col items-center text-center overflow-hidden">
                 {/* Decorative background glow */}
                 <div className="absolute -top-10 -right-10 w-24 h-24 bg-purple-500/5 blur-3xl group-hover:bg-purple-500/15 transition-colors"></div>
                 
                 <div className="mb-6 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <div className="p-5 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl shadow-xl text-purple-400">
                        {/* Enlarged Icon */}
                        <div className="w-8 h-8">
                           {s.icon}
                        </div>
                    </div>
                 </div>
                 
                 <h4 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-purple-400 transition-colors">
                    {s.title}
                 </h4>
                 <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    {s.desc}
                 </p>
                 
                 {/* Bottom accent light */}
                 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500/50 transition-all duration-700"></div>
              </div>
            ))}
         </div>
      </div>

      {/* ENLARGED CAREER HISTORY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="md:col-span-2 flex items-center gap-4 mb-8">
            <h3 className="text-2xl font-black border-l-4 border-pink-500 pl-6 tracking-tight text-white">Career History</h3>
            <div className="flex-1 h-[2px] bg-gradient-to-r from-pink-500/20 via-white/5 to-transparent"></div>
         </div>
         {experiments.map((exp, idx) => (
           <div key={idx} className="group relative bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 overflow-hidden">
              {/* Decorative background glow */}
              <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-6">
                   <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1 tracking-tight">{exp.role}</h4>
                      <div className="flex items-center gap-2">
                         <span className="text-sm text-pink-400 font-bold uppercase tracking-wider">{exp.company}</span>
                      </div>
                   </div>
                   <div className="px-4 py-1.5 bg-white/5 rounded-full text-xs font-bold text-gray-400 border border-white/10 backdrop-blur-md">
                      {exp.period}
                   </div>
                </div>
                
                <p className="text-gray-400 mb-8 leading-relaxed text-base font-medium">
                   {exp.desc}
                </p>
                
                <div className="flex flex-wrap gap-2.5">
                   {exp.tech.map(t => (
                     <span key={t} className="text-[11px] font-black text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-blue-500/20 group-hover:text-blue-300 transition-all uppercase tracking-tighter">
                        {t}
                     </span>
                   ))}
                </div>
              </div>

              {/* Decorative side icon */}
              <div className="absolute bottom-6 right-6 opacity-5 translate-y-4 group-hover:translate-y-0 group-hover:opacity-20 transition-all duration-700">
                 <BriefcaseIcon className="w-16 h-16 text-blue-400" />
              </div>
           </div>
         ))}
      </div>
    </div>
  );
};

export default About;
