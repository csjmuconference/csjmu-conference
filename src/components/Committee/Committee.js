import React from 'react';
import './Committee.css';
import c1 from '../../logo/c1.jpg';
import c2 from '../../logo/c2.jpg';
import c3 from '../../logo/c3.jpg';
import c4 from '../../logo/c4.jpeg';
import c5 from '../../logo/c5.jpeg';
import c6 from '../../logo/c6.jpeg';
import c7 from '../../logo/c7.jpeg';
import c8 from '../../logo/c8.jpeg';
import c9 from '../../logo/c9.jpeg';
import c10 from '../../logo/c10.jpeg';
import c11 from '../../logo/c11.jpeg';
import c12 from '../../logo/c12.jpeg';
import c14 from '../../logo/c14.jpeg';
import c15 from '../../logo/c15.jpeg';
// import c16 from '../../logo/c16.jpeg';
// import c17 from '../../logo/c17.jpeg';
import c18 from '../../logo/c18.jpeg';
import c19 from '../../logo/c19.jpeg';
import c20 from '../../logo/c20.jpeg';
import c21 from '../../logo/c21.jpeg';
const Committee = () => {
  const committees = {
    organizing: [
      {
        name: "Prof. Vinay Kumar Pathak",
        role: "Chief Patron",
        title: "Hon’ble Vice Chancellor, CSJM University, Kanpur",
        imageUrl: c1,
        isKeynote: true
      },
      {
        name: "Prof. Sudhir Kumar Awasthi",
        role: "Patron",
        title: "Pro Vice Chancellor, CSJM University, Kanpur",
        imageUrl: c2,
        isKeynote: true
      },
       {
        name: "Shri Ashok Kumar Tripathi",
        role: "Patron",
        title: "	Finance Officer, CSJM University, Kanpur",
        imageUrl: c21,
        isKeynote: true
      },
      {
        name: "Shri Rakesh Kumar Mishra",
        role: "Patron",
        title: "Registrar, CSJM University, Kanpur",
        imageUrl: c3,
        isKeynote: true
      },
      {
        name: "Prof. R.K. Dwivedi",
        role: "Patron",
        title: "Director, CDC, CSJM University, Kanpur",
        imageUrl: c4,
        isKeynote: true
      },
      {
        name: "Dr. ShashiKant Tripathi",
        role: "Academics Conference Chair",
        title: "Associate Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur",
        imageUrl: c6,
        isKeynote: true
      },
       {
        name: "Dr. Rahul Tiwari",
        role: "Academics Conference Co-Chair",
        title: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur",
        imageUrl: c12,
        isKeynote: true
      },
      {
        name: "Dr. Smriti Roy",
        role: "Convenor",
        title: "Director, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur",
        imageUrl: c8,
        isKeynote: true
      },
       {
        name: "Dr. Divyansh Shukla",
        role: "Convenor",
        title: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur",
        imageUrl: c7,
        isKeynote: true
      },
      {
        name: "Ms. Kaushiki Trivedi",
        role: "Co-Convenor",
        title: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur",
        imageUrl: c20,
        isKeynote: true
      },
      {
        name: "Ms.Vidhi Katiyar",
        role: "Co-Convenor",
        title: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur",
        imageUrl: c18,
        isKeynote: true
      },
    ]
    ,
    // technical: [
    //   {
    //     name: "Prof. Dr. Suresh Kumar",
    //     institution: "Indian Law Institute, New Delhi"
    //   },
    //   {
    //     name: "Prof. Dr. Meera Sharma",
    //     institution: "National Law University, Delhi"
    //   },
    //   {
    //     name: "Prof. Dr. Rajiv Khare",
    //     institution: "NALSAR University of Law, Hyderabad"
    //   },
    //   {
    //     name: "Dr. Amit Kumar",
    //     institution: "IIT Kanpur"
    //   }
    // ]
    technical: [
      {
        name: "Prof. Uday Shankar",
        institution: "Rajiv Gandhi School of Intellectual Property Law, IIT Kharagpur"
      },

      {
        name: "Prof. (Dr.) Manish Singh",
        institution: "Dr. Ram Manohar Lohiya National Law University, Lucknow"
      },
  
  
      {
        name: "Dr. Amandeep Singh",
        institution: "Dr. Ram Manohar Lohiya National Law University, Lucknow"
      },
    
      {
        name: "Dr. Manvandra Kumar Singh",
        institution: "Associate Professor, Department of Mechanical Engineering, Graphic Era University, Dehradun"
      }
    ],

    organizingcommittee: [

      { name: "Dr. Pramod Kumar", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Dr. Samiuddin", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Mrs. Mayuri Singh", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Mr. Ashok Kumar", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Mr. Rishi Srivastava", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Mr. Mohit Awasthi ", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Ms. Meghna Bajpai", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Ms. Deeksha Bajpai", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Mr. Sudhanshu Kumar Viplav", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Ms. Hemlata Ninoriya", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Mr. Prerit Narayan Mishra", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Ms. Shailja Sachan", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Ms. Aparna", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Ms. Minakshi", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Dr. Nitesh Kumar", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Dr. Vishnu Pati Tripathi", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Mrs. Akriti Daksh", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
      { name: "Ms. Pia Shukla", institution: "Assistant Professor, Atal Bihari Vajpayee School of Legal Studies, CSJM University, Kanpur" },
   
    ]


  };

  return (
    <section className="committee section" id="committee">
      <div className="container">
        <h2 className="section-title">Conference Committee</h2>

        <div className="committee-section">
          {/* <h3 className="section-subtitle">Steering Committee</h3> */}
          <div className="committee-grid">
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

        <div className="committee-section">
          <h3 className="section-subtitle">Advisory Committee</h3>
          <div className="committee-grid">
            {committees.technical.map((member, index) => (
              <div className="committee-card" key={index}>
                <h4>{member.name}</h4>
                <p className="institution">{member.institution}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="committee-section">
          <h3 className="section-subtitle">Organizing Committee</h3>
          <div className="committee-grid">
            {committees.organizingcommittee.map((member, index) => (
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

export default Committee;