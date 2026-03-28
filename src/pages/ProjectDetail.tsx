import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftIcon, ArrowTopRightOnSquareIcon, CodeBracketSquareIcon } from "@heroicons/react/24/outline";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
        <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
        <p className="text-gray-400 mb-8">The project you are looking for does not exist.</p>
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
      {/* Header Info */}
      <div className="mb-12">
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-gradient-to-r ${project.gradient} text-white`}>
            {project.role}
          </span>
          <span className="px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full bg-white/10 border border-white/10 text-gray-300">
            {project.year}
          </span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight text-white leading-tight">
          {project.title}
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 font-medium leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>
      </div>

      {/* Main Image */}
      <div className="relative rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl group">
        <div className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-auto object-cover transform hover:scale-[1.02] transition-transform duration-700"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        {/* Left Col: Details */}
        <div className="lg:col-span-2 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-white/50 rounded-full"></span>
              Overview
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-white/50 rounded-full"></span>
              Key Features
            </h2>
            <ul className="space-y-4">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                  <div className={`mt-1 w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient} flex-shrink-0`}></div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-white/50 rounded-full"></span>
              Challenges & Solutions
            </h2>
            <div className="space-y-4">
              {project.challenges.map((challenge, idx) => (
                <p key={idx} className="text-gray-400 leading-relaxed p-6 rounded-2xl bg-[#111111] border border-white/5">
                  {challenge}
                </p>
              ))}
            </div>
          </section>
        </div>

        {/* Right Col: Meta & Links */}
        <div className="space-y-10">
          {/* Tech Stack */}
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
            <h3 className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1.5 text-xs font-bold text-white bg-white/10 rounded-lg border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-col gap-4">
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 p-4 rounded-2xl bg-gradient-to-r ${project.gradient} text-white font-bold hover:shadow-lg hover:shadow-white/10 transition-all hover:-translate-y-1`}
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              Live Demo
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-4 rounded-2xl bg-white/10 text-white font-bold hover:bg-white/20 border border-white/10 transition-all hover:-translate-y-1"
            >
              <CodeBracketSquareIcon className="w-5 h-5" />
              View Source
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
