import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer merged">
      <div className="footer-merged-container">
        <div className="footer-merged-row">
          <div className="footer-merged-left">
            <h3>
              Let’s Collaborate <br />
              <a href="mailto:mc@anujchar.com" className="footer-email-link">mc@anujchar.com</a>
            </h3>

            <p className="secondary">
              From live shows to digital broadcasts — I’m always ready to collaborate. Let’s create something unforgettable.
            </p>

            <div className="footer-pills-container">
              <Link to="/" className="footer-pill">
                <span>Home</span>
                <span>&#8594;</span>
              </Link>

              <Link to="/events" className="footer-pill">
                <span>Events</span>
                <span>&#8594;</span>
              </Link>

              <Link to="/contact" className="footer-pill">
                <span>Contact</span>
                <span>&#8594;</span>
              </Link>

              <a href="https://www.instagram.com/anujchar/" target="_blank" rel="noreferrer" className="footer-pill">
                <span>Instagram</span>
                <span>&#8599;</span>
              </a>

              <a href="https://www.youtube.com/@AnujChar" target="_blank" rel="noreferrer" className="footer-pill">
                <span>YouTube</span>
                <span>&#8599;</span>
              </a>
            </div>
          </div>

          <div className="footer-merged-right">
            <div className="footer-form">
              <div className="form-item">
                <input type="text" placeholder="Name" />
              </div>

              <div className="form-item">
                <input type="text" placeholder="Email" />
              </div>

              <div className="form-item">
                <textarea rows={4} placeholder="Message" />
              </div>

              <div className="form-item">
                <button className="btn">Send Message</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright-line">
          <p className="primary sm footer-row-bottom-title">&copy; Anuj Char 2025</p>
          <p className="primary sm footer-row-bottom-title">Designed & Developed by Kevin Singh</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
