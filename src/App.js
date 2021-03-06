import { Route, Routes } from "react-router-dom";
import "./App.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/Home/Projects/ProjectDetails";
import Navbar from "./Pages/Share/Navbar";
import { ToastContainer } from "react-toastify";
import Blogs from "./Pages/Blogs";
import AboutMe from "./Pages/AboutMe";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // console.log(container);
  };
  return (
    <div className="">
      <Particles
        id="tsparticles"
        url="particles.json"
        init={particlesInit}
        loaded={particlesLoaded}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projectDetails/:_id" element={<ProjectDetails />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
