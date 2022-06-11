import { useEffect, useState } from "react";

const useProjects = () => {
  const [projects, setPojects] = useState([]);
  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => setPojects(data));
  }, []);

  return [projects, setPojects];
};

export default useProjects;
