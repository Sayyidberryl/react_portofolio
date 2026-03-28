import { useState } from 'react';
import { 
  AcademicCapIcon, 
  MagnifyingGlassIcon, 
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ComputerDesktopIcon,
  Square3Stack3DIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

// Real Asset Imports
import certDataVisual from "../assets/sertifikat/data_visual.png";
import certWeb from "../assets/sertifikat/web.png";
import certJava from "../assets/sertifikat/java.png";
import certPandas from "../assets/sertifikat/pandas.png";
import certIgdx from "../assets/sertifikat/igdx.png";
import certUnity from "../assets/sertifikat/unity.png";
import certSolid from "../assets/sertifikat/solid.png";
import certK3 from "../assets/sertifikat/keselamatan.png";
import certLiterasi from "../assets/sertifikat/literasi.png";
import certPKL from "../assets/sertifikat/serti_pkl.png";
import certPertamina from "../assets/sertifikat/pertamina.png";


// Wadhwani Foundation Screenshots
import w1 from "../assets/sertifikat/Screenshot 2026-02-03 233604.png";
import w2 from "../assets/sertifikat/Screenshot 2026-02-03 233624.png";
import w3 from "../assets/sertifikat/Screenshot 2026-02-03 233639.png";
import w4 from "../assets/sertifikat/Screenshot 2026-02-03 233654.png";
import w5 from "../assets/sertifikat/Screenshot 2026-02-03 233709.png";
import w6 from "../assets/sertifikat/Screenshot 2026-02-03 233721.png";
import w7 from "../assets/sertifikat/Screenshot 2026-02-03 233733.png";
import w8 from "../assets/sertifikat/Screenshot 2026-02-03 233744.png";
import w9 from "../assets/sertifikat/Screenshot 2026-02-03 233754.png";
import w10 from "../assets/sertifikat/Screenshot 2026-02-03 233806.png";
import w11 from "../assets/sertifikat/Screenshot 2026-02-03 233817.png";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<number | null>(null);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Backend', 'Foundations', 'Data', 'Specialized', 'Game Dev'];

  const certificates = [
    {
      id: 1,
      title: "Backend Development (Java)",
      issuer: "Dicoding Indonesia",
      date: "2023",
      link: "#",
      image: certJava,
      category: "Backend",
      color: "from-orange-500 to-red-600",
      icon: <ComputerDesktopIcon className="w-5 h-5 text-white" />
    },
    {
      id: 2,
      title: "Web Development Fundamentals",
      issuer: "Wadhwani Foundation",
      date: "2023",
      link: "#",
      image: certWeb,
      category: "Foundations",
      color: "from-purple-500 to-pink-600",
       icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
      id: 3,
      title: "Data Visualization & Analytics",
      issuer: "Dicoding Indonesia",
      date: "2024",
      link: "#",
      image: certDataVisual,
      category: "Data",
      color: "from-blue-500 to-indigo-600",
       icon: <Square3Stack3DIcon className="w-5 h-5 text-white" />
    },
    {
      id: 4,
      title: "Data Analysis with Pandas",
      issuer: "Dicoding Indonesia",
      date: "2024",
      link: "#",
      image: certPandas,
      category: "Data",
      color: "from-teal-500 to-emerald-600",
       icon: <Square3Stack3DIcon className="w-5 h-5 text-white" />
    },
    {
      id: 5,
      title: "SOLID Programming Principles",
      issuer: "Dicoding Indonesia",
      date: "2024",
      link: "#",
      image: certSolid,
      category: "Backend",
      color: "from-rose-500 to-pink-600",
       icon: <ShieldCheckIcon className="w-5 h-5 text-white" />
    },
    {
      id: 6,
      title: "Game Development with Unity",
      issuer: "Unity Technologies",
      date: "2023",
      link: "#",
      image: certUnity,
      category: "Game Dev",
      color: "from-gray-500 to-gray-800",
       icon: <ComputerDesktopIcon className="w-5 h-5 text-white" />
    },
    {
      id: 7,
      title: "IGDX Game Career",
      issuer: "Ministry of Communication (Kemenkominfo)",
      date: "2023",
      link: "#",
      image: certIgdx,
      category: "Game Dev",
      color: "from-purple-600 to-blue-600",
       icon: <RocketLaunchIcon className="w-5 h-5 text-white" />
    },
    {
      id: 8,
      title: "Digital Literacy Specialization",
      issuer: "Digital Talent Scholarship",
      date: "2023",
      link: "#",
      image: certLiterasi,
      category: "Foundations",
      color: "from-cyan-400 to-blue-500",
       icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 9,
       title: "Occupational Health and Safety (K3)",
       issuer: "National Certification Authority",
       date: "2024",
       link: "#",
       image: certK3,
       category: "Specialized",
       color: "from-yellow-400 to-orange-600",
        icon: <ShieldCheckIcon className="w-5 h-5 text-white" />
    },
    {
       id: 10,
       title: "Internship Achievement Record",
       issuer: "Industry Partner",
       date: "2024",
       link: "#",
       image: certPKL,
       category: "Specialized",
       color: "from-green-400 to-blue-500",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 11,
       title: "Mentorship & Professional Development",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w1,
       category: "Foundations",
       color: "from-indigo-400 to-purple-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 12,
       title: "Enterprise Architecture Readiness",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w2,
       category: "Foundations",
       color: "from-blue-600 to-cyan-500",
        icon: <ShieldCheckIcon className="w-5 h-5 text-white" />
    },
    {
       id: 13,
       title: "Strategic Problem Solving",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w3,
       category: "Foundations",
       color: "from-purple-400 to-indigo-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 14,
       title: "Digital Productivity Suite",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w4,
       category: "Foundations",
       color: "from-pink-500 to-rose-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 15,
       title: "Corporate Mentorship Program",
       issuer: "Pertamina",
       date: "2024",
       link: "#",
       image: certPertamina,
       category: "Specialized",
       color: "from-red-500 to-orange-400",
        icon: <RocketLaunchIcon className="w-5 h-5 text-white" />
    },
    {
       id: 16,
       title: "Advanced Communication Skills",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w5,
       category: "Foundations",
       color: "from-amber-400 to-orange-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 17,
       title: "Customer Centricity Masterclass",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w6,
       category: "Foundations",
       color: "from-emerald-400 to-teal-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 18,
       title: "Team Collaboration Excellence",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w7,
       category: "Foundations",
       color: "from-sky-400 to-blue-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 19,
       title: "Project Execution Frameworks",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w8,
       category: "Foundations",
       color: "from-violet-400 to-purple-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 20,
       title: "Innovation & Design Thinking",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w9,
       category: "Foundations",
       color: "from-fuchsia-400 to-pink-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 21,
       title: "Data Driven Decision Making",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w10,
       category: "Foundations",
       color: "from-lime-400 to-green-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    },
    {
       id: 22,
       title: "Professional Ethics & Values",
       issuer: "Wadhwani Foundation",
       date: "2024",
       link: "#",
       image: w11,
       category: "Foundations",
       color: "from-rose-400 to-red-600",
        icon: <AcademicCapIcon className="w-5 h-5 text-white" />
    }
  ];

  const filteredCerts = certificates.filter(cert => {
    const matchesFilter = filter === 'All' || cert.category === filter;
    const matchesSearch = cert.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          cert.issuer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const nextCert = () => {
    if (selectedCert === null) return;
    setSelectedCert((selectedCert + 1) % filteredCerts.length);
  };

  const prevCert = () => {
    if (selectedCert === null) return;
    setSelectedCert((selectedCert - 1 + filteredCerts.length) % filteredCerts.length);
  };

  return (
    <div className="text-white max-w-7xl mx-auto py-12 px-4 selection:bg-white/30">
      
      {/* SECTION HEADER */}
      <div className="relative mb-16 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 blur-[100px] rounded-full"></div>
        <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
          <span className="text-white drop-shadow-sm">
            Professional
          </span>
          <br className="md:hidden" />
          <span className="text-white"> Recognition</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
          A validation of my technical competence and commitment to continuous learning in software architecture and modern development.
        </p>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 justify-center bg-white/5 p-1.5 rounded-2xl border border-white/10 backdrop-blur-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-white/10 text-white shadow-lg border border-white/20' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80 group">
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-white transition-colors" />
          <input 
            type="text" 
            placeholder="Search certificates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-4 text-sm focus:outline-none focus:border-white/50 transition-all placeholder:text-gray-600"
          />
        </div>
      </div>

      {/* COMPACT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCerts.map((cert, index) => (
          <div 
            key={cert.id}
            onClick={() => setSelectedCert(index)}
            className="group relative cursor-pointer h-full"
          >
            <div className={`absolute -inset-0.5 bg-white/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
            <div className="relative bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300 flex flex-col h-full shadow-2xl">
              {/* Thumbnail */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
                
                {/* Visual Accent Icon */}
                <div className={`absolute top-4 right-4 p-2 bg-white/10 rounded-lg shadow-lg opacity-90 backdrop-blur-sm border border-white/10`}>
                   {cert.icon}
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="px-2.5 py-1 bg-white/10 backdrop-blur-md rounded-md text-[10px] font-black uppercase tracking-widest text-white/90 border border-white/10">
                    {cert.date}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-white transition-colors">
                  {cert.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-bold uppercase tracking-tighter mb-4">
                   {cert.issuer}
                </p>
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-md bg-white/10 text-gray-300 uppercase tracking-widest`}>
                    {cert.category}
                  </span>
                  <div className="p-1 rounded-full bg-white/5 group-hover:bg-white/20 transition-colors">
                    <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5 text-gray-600 group-hover:text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* EMPTY STATE */}
      {filteredCerts.length === 0 && (
        <div className="text-center py-20 bg-white/[0.02] rounded-3xl border border-dashed border-white/10">
          <MagnifyingGlassIcon className="w-12 h-12 text-gray-700 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-500">No matching certificates</h3>
          <p className="text-gray-600 mt-2">Try different search terms or categories</p>
          <button 
            onClick={() => {setFilter('All'); setSearchQuery('');}}
            className="mt-6 text-white font-bold underline decoration-white/30 underline-offset-4"
          >
            Reset filters
          </button>
        </div>
      )}

      {/* MODAL LIGHTBOX */}
      {selectedCert !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8">
          <div 
            className="absolute inset-0 bg-black/98 backdrop-blur-2xl"
            onClick={() => setSelectedCert(null)}
          ></div>
          
          <div className="relative w-full max-w-5xl">
            {/* Header / Info */}
            <div className="absolute -top-20 left-4 right-4 flex justify-between items-end text-white">
               <div className="space-y-1">
                  <span className={`px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] shadow-lg mb-2 inline-block`}>
                     {filteredCerts[selectedCert].category}
                  </span>
                  <h4 className="font-black text-2xl sm:text-3xl tracking-tight leading-tight">{filteredCerts[selectedCert].title}</h4>
                  <p className="text-gray-400 text-sm font-medium">{filteredCerts[selectedCert].issuer} • {filteredCerts[selectedCert].date}</p>
               </div>
               <button 
                onClick={() => setSelectedCert(null)}
                className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl transition-all border border-white/10 shadow-xl"
               >
                 <XMarkIcon className="w-8 h-8" />
               </button>
            </div>

            {/* Main Image View */}
            <div className="bg-white/5 p-1 rounded-[2.5rem] border border-white/10 shadow-3xl relative overflow-hidden group/modal animate-zoom-in">
               <img 
                src={filteredCerts[selectedCert].image} 
                alt="Certificate Detail" 
                className="w-full h-auto rounded-[2.2rem] shadow-2xl"
               />
               
               {/* Navigation Controls */}
               <div className="absolute inset-y-0 left-6 right-6 flex items-center justify-between pointer-events-none">
                  <button 
                    onClick={(e) => {e.stopPropagation(); prevCert();}}
                    className="p-5 bg-black/60 hover:bg-black/90 text-white rounded-2xl backdrop-blur-md pointer-events-auto transition-all hover:scale-110 active:scale-90 border border-white/10 shadow-2xl"
                  >
                    <ChevronLeftIcon className="w-8 h-8" />
                  </button>
                  <button 
                    onClick={(e) => {e.stopPropagation(); nextCert();}}
                    className="p-5 bg-black/60 hover:bg-black/90 text-white rounded-2xl backdrop-blur-md pointer-events-auto transition-all hover:scale-110 active:scale-90 border border-white/10 shadow-2xl"
                  >
                    <ChevronRightIcon className="w-8 h-8" />
                  </button>
               </div>
            </div>

            {/* Actions Bar */}
            <div className="absolute -bottom-24 left-0 right-0 flex justify-center gap-4">
               <a 
                href={filteredCerts[selectedCert].link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-10 py-4 bg-white/10 border border-white/20 hover:bg-white/20 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:scale-105 transition-all shadow-2xl shadow-white/10"
               >
                 Verify Credential <ArrowTopRightOnSquareIcon className="w-5 h-5" />
               </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificates;
