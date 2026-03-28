import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarSimple } from "./components/Navbar";
import HomeLayout from "./pages/HomeLayout";
import ProjectDetail from "./pages/ProjectDetail";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* Set the unified global background to #030014 */}
      <div className="relative min-h-screen bg-[#030014] overflow-x-hidden text-white font-sans selection:bg-white/30">
        
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 blur-[120px] rounded-full"></div>
        </div>

        <NavbarSimple />
        
        <main className="relative z-10 flex flex-col pb-32">
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
