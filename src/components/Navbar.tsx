import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 0; // Fixed offset to align with pt-20 padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setOpenNav(false);
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
        scrolled || openNav
          ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between text-white">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold tracking-tighter hover:text-purple-400 transition-colors"
          >
            Portfolio
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  activeSection === link.id ? "text-purple-400" : "text-gray-300"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

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
        </div>

        {/* Mobile Menu Overlay */}
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
                    : "text-gray-400 hover:text-white"
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
      </div>
    </nav>
  );
}
