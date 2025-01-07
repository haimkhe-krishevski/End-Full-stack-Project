// src/pages/ContactUs.jsx
import React from "react";
import ContactForm from "../components/ContactForm";
// import "../styles/contactUs.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div className="page">
      <Header />
    <div className="contact-us-page">
      <ContactForm />
    </div>
      <Footer />
    </div>
  );
};

export default ContactUs;


