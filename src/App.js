import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import ProjectDetails from "./Pages/Home/Projects/ProjectDetails";
import Navbar from "./Pages/Share/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projectDetails/:_id" element={<ProjectDetails />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
