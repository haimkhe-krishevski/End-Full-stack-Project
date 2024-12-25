import React, { useEffect, useState } from "react";
import "../styles/project.css";

const Project = ({ id, name, description, link, image, comment ,setProjects}) => {

  const [newComment, setNewComment] = useState({ name: "", comment: "" }); // סטייט עבור הטופס

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddComment = async (projectId) => {
    if (!newComment.name || !newComment.comment) {
      alert("Please fill in both name and comment.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/${projectId}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newComment),
      });

      if (!response.ok) {
        throw new Error("Failed to add comment");
      }

      const addedComment = await response.json();

      // עדכון התגובות בפרויקט הנוכחי
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === projectId
            ? {
              ...project,
              comments: [...project.comments, addedComment],
            }
            : project
        )
      );

      // איפוס שדות הטופס
      setNewComment({ name: "", comment: "" });
    } catch (err) {
      console.error("Error adding comment:", err);
    }
  };


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
        <div className="add-comment-section">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={newComment.name}
            onChange={handleInputChange}
          />
          <textarea
            name="comment"
            placeholder="Your comment"
            value={newComment.comment}
            onChange={handleInputChange}
          ></textarea>
          <button onClick={() => handleAddComment(id)}>
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
