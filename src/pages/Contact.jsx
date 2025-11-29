import React from 'react';

const Contact = () => {
  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
