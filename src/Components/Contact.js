import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setMessage("");
    }, 3000);
  };

  return (
    <div className="contactContainer">
      <h1 className="contactHeader">Contact Us</h1>
      <p className="Contactdescription">Ready to Order or Want to Learn More? Contact Us Today!</p>
      <form onSubmit={handleSubmit} className="contactForm">
        <div className="formGroup">
          <label htmlFor="name" className="formLabel">
            Name:
          </label>{" "}
          <input
            placeholder="Enter name"
            type="text"
            id="name"
            name="name"
            className="formInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" className="formLabel">
            Email:
          </label>
          <input
          placeholder="Enter email"
            type="email"
            id="email"
            name="email"
            className="formInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" className="formLabel">
            Message:
          </label>
          <textarea
          placeholder="Write message here..."
            id="message"
            name="message"
            className="formTextArea"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submitButton">
          {isSubmitted ? "Submitting..." : "Send Message"}
        </button>
      </form>
      {isSubmitted && (
        <p className="submissionMessage">
          Thank you for your message! We'll get back to you soon.
        </p>
      )}
    </div>
  );
};

export default Contact;
