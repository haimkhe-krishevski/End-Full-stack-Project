import Project from "../components/Project";
import '../styles/AboutMe.css';

const AboutMe = () => {
  return (
    <div className="AboutMe-container">
      {/*
       כאן למטה תוגדר הקומפוננטה קצת עליי (AboutMe), היא תעוצב באופן שמתקשר
      עם העיצוב של שאר האתר, תכיל תוכן המחקה קומפוננטות דומות באתרים מוצלחים,
      בין השאר יהיה בה כמובן גם כותרת וטקסט, וכמובן גם תמונות,
      תהיה גם אפשרות לדפדף לעוד תמונות בצורה שמחקה שוב מאתרים מוצלחים
       */}

      <h1>About Me</h1>
      <p>
        I am a passionate student at Technion, majoring in computer science. I am
        currently in my second year of studies, and I am excited to continue my
        journey in the world of computer science.
      </p>

      <p>
        During my studies, I have had the opportunity to work with a wide range of
        technologies, including web development, machine learning, and artificial
        intelligence. I am particularly interested in the intersection of these fields,
        and I am eager to apply my knowledge to real-world problems.
      </p>

      <p>
        Outside of my studies, I enjoy playing video games, watching movies, and
        listening to music. These hobbies allow me to relax and unwind, and they      
        provide a sense of freedom and creativity.
      </p>

      <div className="images-container">

        <button className="left-browsing-btn"><img src="/assets/arrow-left.png" alt="גלה עוד תמונות " /></button>
        <button className="right-browsing-btn"><img src="/assets/arrow-right.png" alt="גלה עוד תמונות " /></button>


        <img src="/assets/project1.jpg" alt="Project Thumbnail" />
        <img src="/assets/project2.jpg" alt="Project Thumbnail" />
        <img src="/assets/project3.jpg" alt="Project Thumbnail" />
        <img src="/assets/project4.jpg" alt="Project Thumbnail" />
        <img src="/assets/project5.jpg" alt="Project Thumbnail" />
        <img src="/assets/project6.jpg" alt="Project Thumbnail" />
        <img src="/assets/project7.jpg" alt="Project Thumbnail" />

      </div>

    </div>
  );
};

export default AboutMe;
