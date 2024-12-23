// // src/components/ContactForm.jsx
// import React, { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // try {
//       const response = await fetch("http://localhost:3000/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });
// console.log({response});

//       if (response.ok) {
//         alert("Message sent successfully!");
//         setFormData({ fullName: "", email: "", phone: "", message: "" });
//       } else {
//         alert("Failed to send message.");
//       }
//     // } catch (error) {
//     //   console.error("Error:", error);
//     //   alert("An error occurred.");
//     // }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Contact Us</h2>
//       <input
//         type="text"
//         name="fullName"
//         value={formData.fullName}
//         onChange={handleChange}
//         placeholder="Full Name"
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <input
//         type="tel"
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//         placeholder="Phone"
//       />
//       <textarea
//         name="message"
//         value={formData.message}
//         onChange={handleChange}
//         placeholder="Your Message"
//       ></textarea>
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactForm;







// src/components/ContactForm.jsx
import React, { useState } from "react";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // **שליחה לדאטה בייס (להוסיף בקוד ה-backend המתאים)** 
    console.log("Form submitted:", formData);
    setIsSubmitted(true); // הצגת הודעת הצלחה
  };

  if (isSubmitted) {
    return (
      <div className="success-message">
        <h2>Thank you!</h2>
        <p>Your message has been sent successfully.</p>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Us</h2>
      <div className="form-group">
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button">Send</button>
    </form>
  );
};

export default ContactForm;
