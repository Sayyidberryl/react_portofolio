import { Suspense, lazy } from "react";
import Home from "./Home";

const About = lazy(() => import("./About"));
const Projects = lazy(() => import("./Projects"));
const Certificates = lazy(() => import("./Certificates"));
const Contact = lazy(() => import("./Contact"));

const HomeLayout = () => {
  return (
    <>
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
    </>
  );
};

export default HomeLayout;
