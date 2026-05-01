import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Let’s create together</p>
        </div>
        <div className="contact-form-row-copy-item"></div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2026</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Award-Winning Energy</h3>

            <p>
              Planning an event or show? Let’s make it unforgettable. I’d love to hear your vision and explore how we can work together.
            </p>
          </div>

          <div className="contact-form-availability">
            <p className="primary sm">Taking up projects WORLDWIDE</p>
            <p className="primary sm">Clients worldwide</p>
          </div>

          <div style={{ display: "flex", gap: "1em", marginTop: "1em", flexWrap: "wrap" }}>
            <a href="https://www.instagram.com/anujchar/" target="_blank" rel="noreferrer" className="btn" style={{ padding: "0.5em 1em", fontSize: "0.9rem", textDecoration: "none" }}>Instagram</a>
            <a href="https://www.youtube.com/@AnujChar" target="_blank" rel="noreferrer" className="btn" style={{ padding: "0.5em 1em", fontSize: "0.9rem", textDecoration: "none" }}>YouTube</a>
            <a href="mailto:mc@anujchar.com" className="btn" style={{ padding: "0.5em 1em", fontSize: "0.9rem", textDecoration: "none" }}>Email</a>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Name" />
          </div>

          <div className="form-item">
            <input type="text" placeholder="Email" />
          </div>

          <div className="form-item">
            <textarea type="text" rows={6} placeholder="Message" />
          </div>

          <div className="form-item">
            <button className="btn">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
