import React from "react";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="pageTitle">Contact Us</h1>

      <p>
        Have questions, suggestions, or just want to say hello? We'd love to
        hear from you!
      </p>

      <form action="#" method="post" id="contactForm" className="contactForm">
        <label htmlFor="name" className="formLabel">
          Your Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="formInput"
          required
        />

        <label htmlFor="email" className="formLabel">
          Your Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="formInput"
          required
        />

        <label htmlFor="message" className="formLabel">
          Your Message:
        </label>
        <textarea
          id="message"
          name="message"
          className="formTextarea"
          rows="6"
          required
        ></textarea>

        <input type="submit" value="Send Message" className="submitButton" />
      </form>

      <div className="contactInfo">
        <p>Alternatively, you can reach us at:</p>
        <p>
          Email:{" "}
          <a href={`mailto:[Your Email]`} className="contactEmail">
            [Your Email]
          </a>
        </p>

        <p>Visit us at:</p>
        <p className="contactAddress">[Your Address]</p>
      </div>
    </div>
  );
};

export default Contact;
