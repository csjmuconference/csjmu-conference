import React from 'react';
import './SessionChair.css';

import c23 from '../../logo/c23.jpeg';
import c24 from '../../logo/c24.jpg';
import c25 from '../../logo/c25.jpeg';
import c26 from '../../logo/c26.jpeg';
import c27 from '../../logo/c27.jpeg';
import c28 from '../../logo/c28.jpeg';

const SessionChair = () => {
  const committees = {
    organizing: [
      {
        name: "Dr. Navtika Nautiyal",
        role: "Assistant Professor",
        title: "National Forensic Sciences University, Gandhinagar",
        imageUrl: c23,
        isKeynote: true
      },
      {
        name: "Dr. Bhavna MAHADEW",
        role: "Lecturer",
        title: "University of Technology, Mauritius",
        imageUrl: c24,
        isKeynote: true
      },
       {
        name: "Mr. Rahul Sangwan",
        role: "Senior Associate",
        title: "Khaitan & Co.",
        imageUrl: c25,
        isKeynote: true
      },
      {
        name: "Dr. Anumeet Kaur",
        role: "Assistant Professor",
        title: "Karnavati University",
        imageUrl: c26,
        isKeynote: true
      },
      {
        name: "Dr Abhilasha Khare",
        role: "Assistant Professor",
        title: "Symbiosis Law School, Nagpur",
        imageUrl: c28,
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
              <div className="committee-card" key={index}>
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