import { Route, Routes } from "react-router-dom";
import "./App.css";
import Resume from "./Components/Resume";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Share/Navbar";

function App() {
  return (
    <div className="bg-slate-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
