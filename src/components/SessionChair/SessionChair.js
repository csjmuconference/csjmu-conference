import React from 'react';
import './SessionChair.css';

import c23 from '../../logo/c23.jpeg';
import c24 from '../../logo/c24.jpg';
import c25 from '../../logo/c25.jpeg';
import c26 from '../../logo/c26.jpeg';
import c27 from '../../logo/c27.jpeg';
import c28 from '../../logo/c28.jpeg';
import c32 from '../../logo/c32.jpg';
import c33 from '../../logo/c33.jpeg';
import c34 from '../../logo/c34.jpeg';
import c38 from '../../logo/c38.jpeg';
import c39 from '../../logo/c39.jpg';
import c40 from '../../logo/c40.jpg';
import c41 from '../../logo/c41.jpeg';
import c42 from '../../logo/c42.jpeg';
import c47 from '../../logo/c47.jpeg';


const SessionChair = () => {
  const committees = {
    organizing: [
       {
        name: "Dr. Abhilasha Khare",
        role: "Assistant Professor of Law",
        title: "Symbiosis Law School, Nagpur",
        imageUrl: c28,
        isKeynote: true
      },
      {
        name: "Ms. Anamika Shukla",
        role: "Assistant Professor of Law",
        title: "Gujarat National Law University, Gandhinagar",
        imageUrl: c47,
        isKeynote: true
      },
        {
        name: "Dr. Anumeet Kaur",
        role: "Assistant Professor of Law",
        title: "Karnavati University",
        imageUrl: c26,
        isKeynote: true
      },
      
      {
        name: "Adv. Avantika Shukla",
        role: "Legal Consultant",
        title: "Enforcement Directorate, Mumbai",
        imageUrl: c38,
        isKeynote: true
      },
        {
        name: "Dr. Bhavna Mahadew",
        role: "Lecturer of Law",
        title: "Department of Business Management and Law, University of Technology, Mauritius",
        imageUrl: c24,
        isKeynote: true
      },
      //  {
      //   name: "Dr. JAWWAD Ali",
      //   role: "Lecturer of Law",
      //   title: "Universiti Utara Malaysia",
      //   imageUrl: c42,
      //   isKeynote: true
      // },
      {
        name: "Dr. Navtika Nautiyal",
        role: "Assistant Professor",
        title: "Department of Law, Forensic Justice and Policy Studies,National Forensic Sciences University, Gandhinagar",
        imageUrl: c23,
        isKeynote: true
      },
      {
        name: "Dr. Niyati Pandey",
        role: "Assistant Professor of Law",
        title: "Gujarat National Law University",
        imageUrl: c32,
        isKeynote: true
      },
        {
        name: "Dr. Neelesh Shukla",
        role: "Assistant Professor of Law",
        title: "Nirma University, Ahmedabad",
        imageUrl: c33,
        isKeynote: true
      },
      {
        name: "Dr. Pramod Tiwari ",
        role: "Sr. Assistant Professor of Law",
        title: "Law Center II,Faculty of Law, University of Delhi",
        imageUrl: c39,
        isKeynote: true
      },
       {
        name: "Dr. Prasenjit Kundu",
        role: "Assistant Professor of Law",
        title: "Dr. Ram Manohar Lohiya National Law University,Lucknow",
        imageUrl: c34,
        isKeynote: true
      },
    
       {
        name: "Adv. Rahul Sangwan",
        role: "Senior Associate",
        title: "Khaitan & Co.",
        imageUrl: c25,
        isKeynote: true
      },
      
       {
        name: "Dr. Shashya Mishra",
        role: "Dean",
        title: "School of Law, Forensic Justice And Policy Studies",
        imageUrl: c40,
        isKeynote: true
      },
    
      
     
    ]
  };

  return (
    <section className="sessionchair section" id="sessionchair">
      <div className="container">
        <h2 className="section-title">Session Chair</h2>

        <div className="committee-section">
          {/* <h3 className="section-subtitle">Steering Committee</h3> */}
          <div className="session-grid">
            {committees.organizing.map((member, index) => (
              <div className="session-card" key={index}>
                <div className="speaker-image-container">
                  <img
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    className="speaker-image"
                    // Fallback for missing images
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/ccc/333?text=Photo"; }}
                  />
                </div>
                <h4>{member.name}</h4>
                <p className="role">{member.role}</p>
                <p className="title">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default SessionChair;