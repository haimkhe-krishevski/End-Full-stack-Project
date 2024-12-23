import Project from "../components/Project";
import '../styles/projects.css';
import ProjectsContainerHeader from "../components/ProjectsContainerHeader";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="ProjectsContainerHeader">
        <ProjectsContainerHeader />
      </div>
      <Project
        name="My First Project"
        description="This is a manually added project."
        link="https://example.com"
        image="https://via.placeholder.com/400x200"
        comment="This is a comment for the first project."
      />

    </div>
  );
};

export default Projects;





// import React, { useEffect, useState } from "react";
// import Project from "../components/Project";
// import "../styles/projects.css";
// import ProjectsContainerHeader from "../components/ProjectsContainerHeader";

// const Projects = () => {
//   const [projects, setProjects] = useState([]); // סטייט לפרויקטים
//   const [loading, setLoading] = useState(true); // סטייט לטיפול בזמן טעינה

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch("http://localhost:5000/api/projects"); // הנתיב ל-API
//         const data = await response.json();
//         setProjects(data);
//         setLoading(false); // עדכון סטטוס טעינה
//       } catch (err) {
//         console.error("Error fetching projects:", err);
//         setLoading(false); // במקרה של שגיאה נסיים את מצב הטעינה
//       }
//     };

//     fetchProjects();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>; // בזמן שהנתונים בטעינה
//   }

//   return (
//     <div className="projects-container">
//       <div className="ProjectsContainerHeader">
//         <ProjectsContainerHeader />
//       </div>
//       {projects.length > 0 ? (
//         projects.map((project) => (
//           <Project
//             key={project.id}
//             name={project.name}
//             description={project.description}
//             link={project.link}
//             image={project.image}
//             comment={
//               project.comments.length > 0
//                 ? project.comments.map((c, index) => (
//                     <div key={index}>
//                       <strong>{c.name}:</strong> {c.comment}
//                     </div>
//                   ))
//                 : "No comments yet."
//             }
//           />
//         ))
//       ) : (
//         <div>No projects found.</div> // במקרה שאין פרויקטים
//       )}
//     </div>
//   );
// };

// export default Projects;
