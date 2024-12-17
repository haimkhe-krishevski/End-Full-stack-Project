import React from "react";
import "../styles/project.css";

const Project = ({ name, description, link, image, comment }) => {
  return (
    <div className="project-container">
      <div className="project-top">
        <h2 className="project-title">{name}</h2>
        <p className="project-description">{description}</p>
        <a href={link} className="project-link" target="_blank" rel="noopener noreferrer">
          Watch/Listen
        </a>
        <img src={image} alt={`${name}`} className="project-image" />
      </div>
      <div className="project-bottom">
        <p className="project-comment">{comment}</p>
      </div>
    </div>
  );
};

export default Project;
