import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import Aurora from "./components/Aurora";
import { NavbarSimple } from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";

// Lazy load heavy components

const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Certificates = lazy(() => import("./pages/Certificates"));
const Contact = lazy(() => import("./pages/Contact"));

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-[#0a0a0a] overflow-x-hidden text-white font-sans selection:bg-purple-500/30">
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Aurora
            colorStops={["#7cff67", "#B19EEF", "#ff29a6"]}
            blend={0.5}
            amplitude={1.0}
            speed={1}
          />
        </div>
        
        <NavbarSimple />
        
        <main className="relative z-10 flex flex-col pb-32">
          {/* Hero Section - Full Screen */}
          <section id="home">
            <Home />
          </section>
          
          <div className="max-w-7xl mx-auto flex flex-col gap-24 sm:gap-32 w-full px-4 sm:px-6 lg:px-8">
            <Suspense fallback={<div className="h-96 flex items-center justify-center text-gray-500">Loading Content...</div>}>
              <section id="about">
                <About />
              </section>
              
              <section id="projects">
                <Projects />
              </section>

              <section id="certificates">
                  <Certificates />
              </section>
              
              <section id="contact">
                <Contact />
              </section>
            </Suspense>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
