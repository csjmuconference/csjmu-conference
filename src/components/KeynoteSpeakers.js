import React from 'react';
import './KeynoteSpeakers.css'; // Reusing the same CSS file for card/grid styles
import gallery1 from '../logo/gallery1.jpg';
import gallery2 from '../logo/gallery2.jpeg';
import gallery3 from '../logo/gallery3.jpg';
import gallery4 from '../logo/gallery4.jpg';
import gallery5 from '../logo/gallery5.jpeg';
import gallery6 from '../logo/gallery6.jpeg';
import gallery7 from '../logo/gallery7.jpeg';
import gallery8 from '../logo/gallery8.jpeg';
import gallery9 from '../logo/gallery9.jpeg';
import gallery10 from '../logo/gallery10.jpeg';
import gallery11 from '../logo/gallery11.jpeg';
import gallery12 from '../logo/gallery12.jpeg';
import gallery13 from '../logo/gallery13.jpeg';
import gallery14 from '../logo/gallery14.jpeg';
import gallery15 from '../logo/gallery15.jpeg';
import c15 from '../logo/c15.jpeg';
import c22 from '../logo/c22.jpeg';
import c29 from '../logo/c29.jpeg';
import c30 from '../logo/c30.jpeg';
import c31 from '../logo/c31.jpeg';


// Placeholder data for speakers (based on the latest screenshots)
const speakersData = [
    {
    name: 'Dr. Swapnil Tripathi',
    title: 'Lead – Charkha (Centre for Constitutional Law) | Advocate',
    affiliation: 'Vidhi Centre for Legal Policy, New Delhi, India',
    details: 'Lead at Charkha, Vidhi Centre for Legal Policy. DPhil in Law (University of Oxford) specialising in Public Interest Litigation and Constitutional law.',
    imageUrl: c15,
    isKeynote: true
},
  {
    name: 'Mr. James Reilly',
    title: '​Open Source Advocate & IT Consultant',
    affiliation: 'FOSS United and AlmaLinux',
    details: 'An open-source advocate and consultant actively involved with global FOSS communities including AlmaLinux and FOSS United',
    imageUrl: c22,
    isKeynote: true
},
     {
    name: 'Dr. Anand Handa',
    title: 'Chief Strategy Officer (CSO)',
    affiliation: 'C3iHub, IIT Kanpur',
    details: 'Chief Strategy Officer at C3iHub, IIT Kanpur, with expertise in malware analysis, memory forensics, intrusion detection, and DevSecOps.Ph.D. researcher with 25+ publications and strong experience in cybersecurity projects and professional training.',
    imageUrl: c29,
    isKeynote: true
},
 {
    name: 'Dr. Bishwa Dash',
    title: 'Associate Professor',
    affiliation: 'Department of Law, Forensic Justice and Policy Studies, National Forensic Sciences University, Bhubaneswar Campus',
    details: 'Ph.D. in Law from WBNUJS Kolkata with 7+ years of teaching experience in Cyber, Constitutional, and Environmental Laws, and publications in reputed journals. Has been working as an Editor of the Nirma University Law Journal, contributing to legal research, academic administration, and academic events.',
    imageUrl: c30,
    isKeynote: true
},
 {
    name: 'Dr. Atul Kumar Pandey',
    title: 'Professor of Cyber Law and Chairperson',
    affiliation: 'Rajiv Gandhi National Cyber Law Centre, NLIU, Bhopal',
    details: 'Professor of Cyber Law and Chairperson of the Rajiv Gandhi National Cyber Law Centre at National Law Institute University, Bhopal, with extensive academic experience in cyber law education and research.Ph.D. scholar with over 18 years of teaching experience across leading law universities, specializing in cyber law, information security, and technology law.',
    imageUrl: c31,
    isKeynote: true
},
    
];


const SpeakerCard = ({ speaker }) => {
    // Determine the card class based on the type of speaker if needed, 
    // but here we use a generic class for the main structure
    return (
        <div className="speaker-card" id="keynoteSpeakers">
            <div className="speaker-image-container">
                <img
                    src={speaker.imageUrl}
                    alt={`Portrait of ${speaker.name}`}
                    className="speaker-image"
                    // Fallback for missing images
                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100x100/ccc/333?text=Photo"; }}
                />
            </div>
            <div className="speaker-content">
                <h3 className="speaker-name">{speaker.name}</h3>
                <p className="speaker-title">{speaker.title}</p>
                <p className="speaker-affiliation">{speaker.affiliation}</p>

                {/* Optional: Detailed description for Keynote Speakers */}
                {speaker.details && (
                    <p className="speaker-details">
                        {speaker.details}
                    </p>
                )}
            </div>
        </div>
    );
};

const KeynoteSpeakers = () => {
    // Separate speakers based on type
    const keynoteSpeakers = speakersData.filter(s => s.isKeynote);
    const otherSpeakers = speakersData.filter(s => !s.isKeynote);

    return (
       <div className="speakers-section" id="keynote-speakers">
            <h2 className="speakers-title">KEYNOTE SPEAKERS</h2>

            <div className="speakers-grid">
                {keynoteSpeakers.map((speaker, index) => (
                    <SpeakerCard key={index} speaker={speaker} />
                ))}
            </div>

            {/* Optional section for other speakers if they exist */}
            {otherSpeakers.length > 0 && (
                <>
                    <h2 className="speakers-title" style={{ marginTop: '40px' }}>INVITED SPEAKERS</h2>
                    <div className="speakers-grid">
                        {otherSpeakers.map((speaker, index) => (
                            <SpeakerCard key={`inv-${index}`} speaker={speaker} />
                        ))}
                    </div>
                </>
            )}
        </div>

       

    );
};

export default KeynoteSpeakers;
