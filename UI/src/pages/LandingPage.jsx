import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/LandingPage.css';
import ContactForm from '../components/ContactForm';


export const LandingPage = () => {
    return (
        <div className="landing-page">
            <Header />
            <main className="main-content">
                <p>Welcome to the official page of Yossi Shpigler!</p>
                <section className="projects">
                    <div className="project">
                        <img src="/assets/project1.jpg" alt="Project Thumbnail" />
                        <p>Project 1 - Amazing Soundtrack</p>
                    </div>
                    <div className="project">
                        <img src="/assets/project2.jpg" alt="Project Thumbnail" />
                        <p>Project 2 - Film Score</p>
                    </div>
                </section>
            </main>
            <ContactForm />
            <Footer />
        </div>
    );
};


export const Comments = () => {
    const [comments, setComments] = useState([]);
  
    useEffect(() => {
      const fetchComments = async () => {
        try {
          const response = await fetch("http://localhost:3000/comments");
          const data = await response.json();
          setComments(data);
        } catch (error) {
          console.error("Error fetching comments:", error);
        }
      };
  
      fetchComments();
    }, []);
  
    return (
      <div>
        <h2>Comments</h2>
        {comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.name}</p>
            <p>{comment.text}</p>
            <small>{comment.date}</small>
          </div>
        ))}
      </div>
    );
  };

