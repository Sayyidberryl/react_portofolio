import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const isProjectDetail = location.pathname.startsWith('/project');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      if (!isProjectDetail) {
        // Update active section based on scroll position
        const sections = ["home", "about", "projects", "certificates", "contact"];
        const current = sections.find(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 150 && rect.bottom >= 150;
          }
          return false;
        });
        if (current) setActiveSection(current);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isProjectDetail]);

  useEffect(() => {
    // If there's a hash in the URL when landing on home, scroll to it
    if (!isProjectDetail && location.hash) {
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }, 100);
    } else if (!isProjectDetail && !location.hash) {
       // Only scroll to top if we literally hit "/"
       if(location.pathname === '/' && !location.hash) {
         window.scrollTo({ top: 0, behavior: "smooth" });
       }
    }
  }, [location.pathname, location.hash, isProjectDetail]);

  const scrollToSection = (id: string) => {
    setOpenNav(false);
    if (isProjectDetail) {
      if (id === 'home') {
        navigate('/');
      } else {
        navigate(`/#${id}`);
      }
    } else {
      if (id === 'home') {
        navigate('/');
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(`/#${id}`);
        // The useEffect will handle the scrolling, or we can force it here
        const element = document.getElementById(id);
        if (element) {
          const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
      }
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || openNav || isProjectDetail
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between text-white">
          {isProjectDetail ? (
             <button 
               onClick={() => navigate(-1)}
               className="flex items-center gap-2 text-xl font-bold tracking-tighter hover:text-white transition-colors"
             >
               <ArrowLeftIcon className="w-5 h-5" /> Back
             </button>
          ) : (
             <button
              onClick={() => scrollToSection("home")}
              className="text-xl font-bold tracking-tighter hover:text-white transition-colors"
             >
              Portfolio
             </button>
          )}

          {!isProjectDetail && (
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                    activeSection === link.id ? "text-purple-400 font-semibold" : "text-gray-400"
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          )}

          {!isProjectDetail && (
            <button
              onClick={() => setOpenNav(!openNav)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </button>
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {!isProjectDetail && (
          <div
            className={`fixed inset-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-xl lg:hidden transition-all duration-500 ease-in-out ${
              openNav ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
            style={{ top: "0" }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-3xl font-bold transition-all duration-300 transform ${
                    openNav ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  } ${
                    activeSection === link.id
                      ? "text-purple-400 scale-110"
                      : "text-gray-500 hover:text-white"
                  }`}
                  style={{ transitionDelay: `${navLinks.indexOf(link) * 100}ms` }}
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <button 
               onClick={() => setOpenNav(false)}
               className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
