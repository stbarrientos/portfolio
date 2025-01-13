import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const StaticPages = ({ message }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("/api/projects").then((res) => {
      setProjects(res.data);
    });
  }, []);

  return (
    <div>
      <h1>{message}</h1>
      <h3>Projects:</h3>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

StaticPages.prop_types = {
  message: PropTypes.string,
};
export default StaticPages;
