import React from "react";
import "./MySkills.css";

const MySkills = () => {
  return (
    <div className=" relative">
      <h1
        className="text-2xl font-semibold text-white text-center 
       pt-8 font-sans"
      >
        MY SKILLS
      </h1>
      <div className="p-10 flex flex-col items-center space-y-3">
        <div className="w-full sm:w-1/2">
          <span className=" text-blue-300">HTML</span>
          <div className="relative  bg-gray-200  rounded">
            <div
              style={{ width: "95%" }}
              className="absolute top-0 h-4 rounded shim-green"
            ></div>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <span className=" text-blue-300">CSS</span>
          <div className=" relative rounded bg-gray-200">
            <div
              style={{ width: "90%" }}
              className="absolute top-0 h-4 rounded shim-blue"
            ></div>
          </div>
        </div>

        <div className=" w-full sm:w-1/2  ">
          <span className=" text-blue-300">JavaScript</span>
          <div className=" relative rounded bg-gray-200">
            <div
              style={{ width: "89%" }}
              className="absolute top-0 h-4 rounded shim-red"
            ></div>
          </div>
        </div>
        <div className=" w-full sm:w-1/2  ">
          <span className=" text-blue-300">React JS</span>
          <div className=" relative rounded bg-gray-200">
            <div
              style={{ width: "93%" }}
              className="absolute top-0 h-4 bg-teal-400 rounded shim-skill"
            ></div>
          </div>
        </div>
        <div className=" w-full sm:w-1/2  ">
          <span className=" text-blue-300">Express JS</span>
          <div className=" relative rounded bg-gray-200">
            <div
              style={{ width: "70%" }}
              className="absolute top-0 h-4 rounded bg-orange-300 shim-skill"
            ></div>
          </div>
        </div>
        <div className=" w-full sm:w-1/2  ">
          <span className=" text-blue-300">MongoDB</span>
          <div className=" relative rounded bg-gray-200">
            <div
              style={{ width: "75%" }}
              className="absolute top-0 h-4 rounded bg-green-900 shim-skill"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySkills;
