
import React from "react";
export default function Contact() {
  return (
    <div className="container mt-5 ">
      <style>
        {`
      .container {
          display: flex;
                    padding: 100px;
                    background-color: #fff;
                    border-radius: 8px;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
                    margin-bottom: 30px;
                }
                    `}
      </style>
      <div className="col-mt-6 contact-info ">
        <h2>We’re Here to Help You with All Your Garage Needs!</h2>
        <p>
          Whether you need a repair, service, or simply have a question, our
          friendly team is ready to assist you. Get in touch today!
        </p>

        <h4>Our Location</h4>
        <p>
          <strong>[Garage Name]</strong>
          <br />
          [Street Address], [City, State, Zip Code]
        </p>
        <p>
          <strong>Opening Hours:</strong>
          <br />
          Monday - Friday: 8:00 AM - 6:00 PM
          <br />
          Saturday: 9:00 AM - 2:00 PM
          <br />
          Sunday: Closed
        </p>

        <h4>Contact Information</h4>
        <p>
          <strong>Phone:</strong>{" "}
          <a href="tel:[Phone Number]">[Phone Number]</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:[Email Address]">[Email Address]</a>
        </p>
        <p>
          <strong>Website:</strong> <a href="[Website URL]">[Website URL]</a>
        </p>

        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="[Facebook URL]" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="[Instagram URL]" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="[Twitter URL]" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="[YouTube URL]" className="social-icon">
            <i className="fab fa-youtube"></i>
          </a>
        </div>

        <h4>Emergency Contact</h4>
        <p>
          For urgent or after-hours emergencies, please call us directly at{" "}
          <strong>[Emergency Phone Number]</strong> for immediate assistance.
        </p>
      </div>
    </div>
  );
}
