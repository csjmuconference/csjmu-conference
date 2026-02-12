import React from 'react';
import './StudentCoordinator.css';

const StudentCoordinator = () => {
  const committees = {
  
   
    technical: [
      {
        name: "Piyush Pandey",
        institution: "Student (BBA.LLB.(H)), Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur"
      },

      {
        name: "Khushi Singh",
        institution: "Student (BA.LLB.(H)), Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur"
      },
  
  
      {
        name: "Pragati Awasthi",
        institution: "Student (LLB.(H)), Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur"
      },
    
      {
        name: "Harsh Tiwari",
        institution: "Student (LLB.(H)), Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur"
      }
    ],

   

  };

  return (
    <section className="committee section" >
      <div className="container">
        {/* <h2 className="section-title">Conference Committee</h2> */}

        <div className="committee-section">
          <h3 className="section-subtitle">Student Coordinator</h3>
          <div className="committee-grid">
            {committees.technical.map((member, index) => (
              <div className="committee-card" key={index}>
                <h4>{member.name}</h4>
                <p className="institution">{member.institution}</p>
              </div>
            ))}
          </div>
        </div>

    
      </div>
    </section>
  );
};

export default StudentCoordinator;