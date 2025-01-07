import React, { useEffect, useState } from "react";
import Project from "./Project";
import '../styles/projectsBody.css';
import ProjectsContainerHeader from "./ProjectsContainerHeader";

const ProjectsBody = () => {
  const [projects, setProjects] = useState([]); // סטייט לפרויקטים
  const [loading, setLoading] = useState(true); // סטייט לטיפול בזמן טעינה
  const [currentProjectId, setCurrentProjectId] = useState(null); // ID הפרויקט הנוכחי להוספת תגובה

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:3000"); // הנתיב ל-API
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);


  if (loading) {
    return <div className="wrapper">Loading...</div>;
  }

  return (

    <div className="projectsBody-container wrapper">
      {/* <div className="ProjectsContainerHeader">
        <ProjectsContainerHeader />
      </div> */}
      {console.log({ projects })
      }
      <div className="projects-list">
        {projects.length > 0 ? (
          projects.map((project) => (
            <div key={project.id} className="project-item">
              <Project
                id={project.id}
                name={project.name}
                description={project.description}
                link={project.link}
                image={project.image}
                setProjects={setProjects}
                comment={
                  project.comments.length > 0 ? (
                    project.comments.map((c, index) => (
                      <div key={index}>
                        <strong>{c.name}:</strong> {c.comment}
                      </div>
                    ))
                  ) : (
                    "No comments yet."
                  )

                }
              />

            </div>

      ))
      ) : (
      <div>No projects found.</div>
      )}
      </div>
    </div>

  );
};

export default ProjectsBody;






// import React, { useEffect, useState } from "react";
// import Project from "../components/Project";
// import '../styles/projects.css';
// import ProjectsContainerHeader from "../components/ProjectsContainerHeader";

// const Projects = () => {

//   const [projects, setProjects] = useState([]); // סטייט לפרויקטים
//   const [loading, setLoading] = useState(true); // סטייט לטיפול בזמן טעינה

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         const response = await fetch("http://localhost:3000"); // הנתיב ל-API
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