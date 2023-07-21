import React from "react";
import "../css/footer.css"; // Import CSS for styling
import playstoreLogo from "../photos/playstore.png";
import appstoreLogo from "../photos/appstore.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Footer component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="left-section">
        <div className="contactus">
          <p>Contact us</p>
          <div className="social-links">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="right-section">
        <div className="download-app">
          <p>Download the App</p>
          <div className="app-links">
            <a
              href="https://play.google.com/store/apps/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={playstoreLogo} alt="Play Store" className="app-links" />
            </a>
            <a
              href="https://apps.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={appstoreLogo} alt="App Store" className="app-links" />
            </a>
          </div>
        </div>
      </div>
      <div className="third-section">
        &copy; {new Date().getFullYear()} My E-Commerce App. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
