import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ProjectDetailPage from "./components/ProjectDetailPage";
import Career from "./components/Career";
import History from "./components/History";
import ProjectDetail from "./components/ProjectDetail";
import { Services } from "./components/Services";
import { useEffect } from "react";
import Gallery from "./components/Gallery";
function App() {
  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  },[])
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<ProjectDetailPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/history" element={<History />} />
        <Route path="/gallery" element={<Gallery/>} />
        <Route path="/project/:id" element={<ProjectDetail />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
