import React from "react";

const Project = ({ project }) => {
  const { name, img, description, url } = project;
  return (
    <div class="flex justify-center h-96">
      <div class="rounded-lg shadow-lg bg-white max-w-sm">
        <div className="flex items-center justify-center">
          <img class="rounded-t-lg w-64 h-40 p-3" src={img} alt="" />
        </div>
        <div class="p-6">
          <h5 class="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p class="text-gray-700 text-base mb-4">{description}</p>
          <button
            type="button"
            class=" px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            <a href={url} target={"blank"}>
              Live Link
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
