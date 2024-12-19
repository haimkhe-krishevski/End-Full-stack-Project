import React, { useState } from 'react';
import '../styles/ContactUs.css';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // שליחה לשרת או טיפול בנתונים
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-us">
      <h2>צור קשר</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="fullName">שם מלא:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="email">מייל:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <label htmlFor="phone">טלפון:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        
        <label htmlFor="message">הודעה:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        
        <button type="submit">שלח</button>
      </form>
    </div>
  );
};

export default ContactUs;
