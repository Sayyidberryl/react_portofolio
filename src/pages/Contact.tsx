import { EnvelopeIcon, MapPinIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  return (
    <div className="text-white max-w-7xl mx-auto py-12 px-6 overflow-hidden">
      
      {/* SECTION HEADER */}
      <div className="relative mb-16 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 backdrop-blur-sm">
           <RocketLaunchIcon className="w-4 h-4 text-blue-400" />
           <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Ready to build?</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Let's
          </span>
          <span className="text-white"> Talk</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Have a vision for a robust backend system? Let's turn your architecture diagrams into production-ready code.
        </p>
      </div>
        
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: INFO CARDS */}
          <div className="lg:col-span-5 space-y-6">
              <div className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-purple-500/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl group-hover:bg-purple-500/10 transition-all"></div>
                  <div className="flex items-start gap-6 relative z-10">
                      <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shadow-xl group-hover:scale-110 transition-transform">
                           <EnvelopeIcon className="w-8 h-8" />
                      </div>
                      <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Send an Email</p>
                          <p className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">sayyid@example.com</p>
                          <p className="text-sm text-gray-500 mt-2 font-medium">I usually reply within 24 hours.</p>
                      </div>
                  </div>
              </div>
              
              <div className="group p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-blue-500/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
                  <div className="flex items-start gap-6 relative z-10">
                      <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shadow-xl group-hover:scale-110 transition-transform">
                           <MapPinIcon className="w-8 h-8" />
                      </div>
                      <div>
                          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-1">Based In</p>
                          <p className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Bogor, West Java, ID</p>
                          <p className="text-sm text-gray-500 mt-2 font-medium">Open to remote work worldwide.</p>
                      </div>
                  </div>
              </div>

              {/* SOCIAL BADGE */}
              <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-purple-600/10 to-transparent border-l-4 border-purple-500 rounded-r-3xl">
                 <SparklesIcon className="w-5 h-5 text-purple-400" />
                 <span className="text-sm font-bold text-gray-300">Available for freelance & full-time roles</span>
              </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-7">
              <form className="group space-y-6 p-8 sm:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 backdrop-blur-md relative overflow-hidden shadow-2xl">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-pink-600/5 blur-[100px] rounded-full"></div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Name</label>
                        <input 
                          type="text" 
                          className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-[2px] focus:outline-offset-0 focus:outline-purple-500/50 transition-all text-white placeholder:text-gray-700 font-medium" 
                          placeholder="John Doe" 
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-[2px] focus:outline-offset-0 focus:outline-purple-500/50 transition-all text-white placeholder:text-gray-700 font-medium" 
                          placeholder="john@example.com" 
                        />
                      </div>
                  </div>

                  <div className="space-y-2 relative z-10">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Subject</label>
                      <input 
                        type="text" 
                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-[2px] focus:outline-offset-0 focus:outline-purple-500/50 transition-all text-white placeholder:text-gray-700 font-medium" 
                        placeholder="Project Inquiry" 
                      />
                  </div>
                  
                  <div className="space-y-2 relative z-10">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-2">Your Message</label>
                      <textarea 
                        className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 focus:outline-[2px] focus:outline-offset-0 focus:outline-purple-500/50 transition-all text-white placeholder:text-gray-700 min-h-[160px] font-medium" 
                        placeholder="Tell me about your project or just say hi!"
                      ></textarea>
                  </div>

                  <button className="relative w-full group overflow-hidden py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-xl shadow-purple-600/20 active:shadow-none">
                     <span className="relative z-10">Deploy Message</span>
                     <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  </button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default Contact;
