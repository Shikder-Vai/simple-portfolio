import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./Components/Resume";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/Home/Projects/ProjectDetails";
import Navbar from "./Pages/Share/Navbar";

function App() {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projectDetails/:_id" element={<ProjectDetails />} />
        <Route path="/test" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
