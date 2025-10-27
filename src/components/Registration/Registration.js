import React from 'react';
import './Registration.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import qrcode1 from '../../logo/qrcode1.png';

const Registration = () => {
  const fees = [
    {
      category: "Students/ Research Scholars",
      academic: "INR 1500",
      industry: "INR 3000",
      // student: "₹1,500",
      // international: "$200"
    },
    {
      category: " Academicians and others",
      academic: "INR 2000",
      industry: "INR 4000",
      // student: "₹2,000",
      // international: "$250"
    },
    {
      category: " International Delegates",
      academic: "50 USD",
      industry: "50 USD",
      // student: "₹2,000",
      // international: "$250"
    }
  ];

  const includes = [
    "Conference Kit",
    "Conference Proceedings",
    "Lunch and Refreshments",
    "Certificate of Participation",
    "Access to All Sessions",
    "Networking Events"
  ];

  const handleClick = () => {
    alert('Registeration will start soon!');
  };
  // QR Code image URL (replace this with your actual QR)
  const qrCodeUrl = 'https://placehold.co/300x300/1e293b/white?text=Your+QR+Code+Here';


  return (
    <section className="registration section" id="registration">
      <div className="container">
        <h2 className="section-title">Registration</h2>

        <div className="registration-content">
          {/* ===== Fee Structure ===== */}
          <div className="fee-structure">
            <h3 className="section-subtitle">Registration Fees</h3>
            <div className="fee-table">
              <table>
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Single Authorship</th>
                    <th>Co-authored Paper</th>


                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr key={index}>
                      <td>{fee.category}</td>
                      <td>{fee.academic}</td>
                      <td>{fee.industry}</td>
                      {/* <td>{fee.student}</td>
                      <td>{fee.international}</td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* ===== Registration Includes ===== */}
          {/* <div className="registration-benefits">
            <h3 className="section-subtitle">Registration Includes</h3>
            <div className="benefits-grid">
              {includes.map((item, index) => (
                <div className="benefit-card" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div> */}

          {/* ===== CTA Section ===== */}
          <div className="registration-cta">
            <h3>Ready to Join?</h3>
            <p>Register now to secure your spot at the conference</p>
            <a
              // href="https://docs.google.com/forms/d/e/1FAIpQLSeCzsqfL9feuHP44JlxmpqYp6SXxiGuRVLopLqmR4ZI4RgDwg/viewform"
              className="register-button"
              onClick={handleClick}
            >
              Register Now
            </a>
          </div>

          {/* ===== Payment Details Section ===== */}
          {/* <div className="payment-info">
            <h3>
              <AccountBalanceIcon className="icon" /> Payment Details
            </h3>
            <div className="payment-details">
              <div className="bank-details">
                 <p><strong>Organisation:</strong> CSJM UNIVERSITY</p> 
                <p><strong>Bank Name:</strong> State Bank of India</p>
                <p><strong>Bank Address:</strong> CSJM UNIVERSITY, KALYANPUR, KANPUR</p>
                <p><strong>Account Number:</strong> 40465185585</p>
                <p><strong>IFSC Code:</strong> SBIN0064085</p>
                <p><strong>BIC/SWIFT:</strong> SBININBB499</p>
                <p><strong>IBAN:</strong> 40465185585</p>
                <p className="note">* Please send the payment confirmation to <a href="mailto:conference@csjmu.ac.in">conference@csjmu.ac.in</a></p>
              </div>

              <div className="qr-section">
                <div className="phone-frame">
                  <div className="notch"></div>
                  <div className="phone-screen">
                    <p className="scan-text"><QrCode2Icon /> Scan To Pay</p>
                    <div className="qr-container">
                      <img
                        src={qrcode1}
                        alt="Payment QR Code"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://placehold.co/150x150/ef4444/white?text=QR+Error';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </section>
  );
};

export default Registration;
