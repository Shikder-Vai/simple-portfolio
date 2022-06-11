import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useProjects from "../../../hooks/useProjects";

const ProjectDetails = () => {
  const { _id } = useParams();
  const [projects, setPojects] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Shikder-Vai/simple-portfolio/main/public/projects.json"
    )
      .then((res) => res.json())
      .then((data) => setPojects(data));
  }, []);

  const selectedProject = projects.find((project) => project?.id === _id);
  console.log(selectedProject);
  return (
    <div className="p-14">
      <h1>this is project </h1>
    </div>
  );
};

export default ProjectDetails;
