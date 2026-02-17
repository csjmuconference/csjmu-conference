import React from 'react';
import './Registration.css';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import qrcode1 from '../../logo/qrcode1.png';
import qrcode2 from '../../logo/qrcode2.png';
import RegistrationModal from './RegistrationModal';
import  { useState } from 'react';
import RegistrationFormModal from './RegistrationFormModal';

const Registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const fees = [
    {
      category: "Students / Research Scholars",
      academic: "INR 1000",
      industry: "INR 2000",
      // student: "₹1,500",
      // international: "$200"
    },
    {
      category: " Academicians / Professionals / others",
      academic: "INR 2000",
      industry: "INR 3000",
      // student: "₹2,000",
      // international: "$250"
    },
    {
      category: " International Delegates",
      academic: "USD 50",
      industry: "USD 50",
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
            {/* <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf5Y1_TDAg2yxIY_ZppQeDiRODfaUQRzIhOwCTbiOA9fVeXOw/viewform?usp=header"
              className="register-button"
              // onClick={handleClick}
            >
              Register Now
            </a> */}
         <div className="cta-button-group">
          <button className="register-button" onClick={() => setIsModalOpen(true)}>
          Abstract Submission
       </button>
         <button className="register-button" onClick={() => setIsFormModalOpen(true)}>
          Full Paper Submission
       </button>
       </div>

       {/* 3. Component ko end mein call karein */}
       <RegistrationModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
       />
       <RegistrationFormModal 
          isOpen={isFormModalOpen} 
          onClose={() => setIsFormModalOpen(false)} 
       />
          </div>

          {/* ===== Payment Details Section ===== */}
          <div className="payment-info">
            <h3>
              <AccountBalanceIcon className="icon"/> Registeration & Payment Process
            </h3>
            <div className="payment-details">
              <div className="bank-details">
                {/* <p>Paper Submission & Registration Process</p> */}
                {/* <p>Note :</p> */}
                <ol>
              <li><p><strong>Abstract Submission:</strong></p>
                  <p>Abstracts must be submitted through the online portal by using the 'Abstract Submission' button provided in the website.</p></li>
              <li><p><strong>Abstract Review & Notification:</strong></p>
                  <p>Within one week of abstract submission, authors will receive an email regarding the status of their abstract (acceptance/rejection).</p></li>
               <li><p><strong>Full Paper Submission:</strong></p>
                  <p> After receiving the acceptance confirmation for the abstract, authors may proceed with the full paper submission as per the conference guidelines.</p></li>
                   <li><p><strong>Registration & Payment:</strong></p>
                  <p>Authors must complete their registration before the deadline through the official registration link.</p></li>
                   <li><p><strong>Payment Process:</strong></p>
                  <p>Complete the payment using the Payment Link provided below or by scanning the QR code:
                      Payment Link: <a href="https://p.ppsl.io/PYTMPS/fQicqk">https://p.ppsl.io/PYTMPS/fQicqk</a></p></li>
                   <li><p><strong>Confirmation of Registration:</strong></p>
                  <p>Registration will be confirmed only after successful payment.</p></li>
                   <li><p><strong>Support & Queries:</strong></p>
                  <p>If you face any issues regarding abstract submission, registration, or payment, please contact us at:
conference.abvsls@csjmu.ac.in</p></li>
      
              </ol>
              <p><strong>Note:</strong> Authors are requested to adhere strictly to the mentioned dates, deadlines, and submission guidelines.</p>
                 {/* <p><strong>Organisation:</strong> CSJM UNIVERSITY</p> 
                <p><strong>Bank Name:</strong> State Bank of India</p>
                <p><strong>Bank Address:</strong> CSJM UNIVERSITY, KALYANPUR, KANPUR</p>
                <p><strong>Account Number:</strong> 40465185585</p>
                <p><strong>IFSC Code:</strong> SBIN0064085</p>
                <p><strong>BIC/SWIFT:</strong> SBININBB499</p>
                <p><strong>IBAN:</strong> 40465185585</p> */}
                {/* <p className="note">* Please send the payment confirmation to <a href="mailto:conference@csjmu.ac.in">conference@csjmu.ac.in</a></p> */}
              </div>

              <div className="qr-section">
                <div className="phone-frame">
                  <div className="notch"></div>
                  <div className="phone-screen">
                    <p className="scan-text"><QrCode2Icon /> Scan To Pay</p>
                    <div className="qr-container">
                      <img
                        src={qrcode2}
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
          </div>

        </div>
      </div>
    </section>
  );
};

export default Registration;
