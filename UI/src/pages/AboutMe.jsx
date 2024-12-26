import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutBody from "../components/AboutBody";
import '../styles/Page.css';
function AboutMe() {
  return (
    <div className="page">
      <Header />
      <AboutBody />
      <Footer />
    </div>
  )
}

export default AboutMe;









// const AboutMe = () => {
//   return (
//     <div className="AboutMe-container">
//       {/*
//        כאן למטה תוגדר הקומפוננטה קצת עליי (AboutMe), היא תעוצב באופן שמתקשר
//       עם העיצוב של שאר האתר, תכיל תוכן המחקה קומפוננטות דומות באתרים מוצלחים,
//       בין השאר יהיה בה כמובן גם כותרת וטקסט, וכמובן גם תמונות,
//       תהיה גם אפשרות לדפדף לעוד תמונות בצורה שמחקה שוב מאתרים מוצלחים
//        */}
//       <h1>About Me</h1>
//       <p>
//         I am a passionate student at Technion, majoring in computer science. I am
//         currently in my second year of studies, and I am excited to continue my
//         journey in the world of computer science.
//       </p>

//       <p>
//         During my studies, I have had the opportunity to work with a wide range of
//         technologies, including web development, machine learning, and artificial
//         intelligence. I am particularly interested in the intersection of these fields,
//         and I am eager to apply my knowledge to real-world problems.
//       </p>

//       <p>
//         Outside of my studies, I enjoy playing video games, watching movies, and
//         listening to music. These hobbies allow me to relax and unwind, and they      
//         provide a sense of freedom and creativity.
//       </p>

//       <p>Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

// Why do we use it?
// It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


// Where does it come from?
// Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

// The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

// Where can I get some?
// There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

//       </p>

//       <div className="images-container">

//         <button className="left-browsing-btn"><img src="/assets/arrow-left.png" alt="גלה עוד תמונות " /></button>
//         <button className="right-browsing-btn"><img src="/assets/arrow-right.png" alt="גלה עוד תמונות " /></button>


//         <img className="carier-img" src="C:\Users\User\Documents\Full stack\Code folders\End-Full-stack-Project\UI\src\media\פרופיל יוסי שפיגלר.jpg" alt="פרופיל" />
//         <img src="/assets/project2.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project3.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project4.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project5.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project6.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project7.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project1.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project2.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project3.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project4.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project5.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project6.jpg" alt="Project Thumbnail" />
//         <img src="/assets/project7.jpg" alt="Project Thumbnail" />
//       </div>

//     </div>
//   );
// };