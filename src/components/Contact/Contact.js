import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-details">
              <h3>Get in Touch</h3>
              <div className="contact-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Address</h4>
                  <p>Chhatrapati Shahu Ji Maharaj University</p>
                  <p>Kalyanpur, Kanpur</p>
                  <p>Uttar Pradesh - 208024</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <div>
                  <h4>Phone</h4>
                  <p>+91-512-2570301</p>
                  <p>+91-512-2570302</p>
                </div>
              </div>

              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <p>conference@csjmu.ac.in</p>
                  <p>info@csjmu.ac.in</p>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Us</h4>
                <div className="social-icons">
                  <a
                    href="https://www.facebook.com/csjmuofficial/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/csjmuofficial/"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/school/chatrapati-sahuji-maharaj-kanpur-university-kanpur/?originalSubdomain=in"
                    className="social-icon"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.4800439397047!2d80.26661089999999!3d26.496922399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c37ea522f9c0d%3A0xc0670941a068aea2!2sChhatrapati%20Shahu%20Ji%20Maharaj%20University%2C%20Kanpur!5e0!3m2!1sen!2sin!4v1696817149123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CSJMU Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;