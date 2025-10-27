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


// Placeholder data for speakers (based on the latest screenshots)
const speakersData = [
    {
        name: 'Prof. Alvaro Rocha',
        title: 'Professor of Information Systems',
        affiliation: 'ISEG, University of Lisbon, Portugal',
        details: 'World\'s Top 1% Scientist, according to Stanford University and Elsevier ISEM\'s Book Series Scientific Manager at Springer Nature. Chair of ITIMA, Information and Technology Management Association. Founder and Vice Chair of IEEE SMC Portugal Chapter. Invited Professor at University of Calabria, Italy. CEO of SMART-iTS Consulting, Dubai',
        imageUrl: gallery1,
        isKeynote: true
    },
    {
        name: 'Prof. Sergei Levashkin',
        title: 'Professor',
        affiliation: 'Director at Artificial Intelligence Lab, Russia',
        details: 'Director at Artificial Intelligence Lab. Leading researcher in ML and AI applications.',
        imageUrl: gallery2,
        isKeynote: true
    },
    {
        name: 'Dr. Hari Mohan Pandey',
        title: 'Associate Professor (Sr. Lecturer) Data Science and Artificial Intelligence',
        affiliation: 'Bournemouth University, U.K.',
        details: 'Top 2% scientist (2022 World Ranking list by Stanford University). Published extensively in high-impact journals.',
        imageUrl: gallery3,
        isKeynote: true
    },
    {
        name: 'Dr. Govind P Gupta',
        title: 'NIT Raipur',
        affiliation: 'Enlisted in Global ADI (Albert-Dogan) Scientific Index 2024 list.',
        details: 'Enlisted in Global ADI (Albert-Dogan) Scientific Index 2024 list.',
        imageUrl: gallery4,
        isKeynote: true
    },
    {
        name: 'Dr. Rajeev K Shakya',
        title: 'Department of Electrical Engineering & Computing Engineering',
        affiliation: 'Adama Science & Technology University, Adama Ethiopia',
        details: 'Expert in renewable energy and power systems optimization.',
        imageUrl: gallery5,
        isKeynote: true
    },
    {
        name: 'Dr. Vinay Kumar Kasula',
        title: 'Sr. Systems Application Analyst',
        affiliation: 'Visca Inc, Ashburn, Virginia, USA',
        details: 'Specializes in systems security and data analytics.',
        imageUrl: gallery6,
        isKeynote: true
    },
    // Adding non-keynote speakers from the second screenshot (Screenshot 68) for completeness
    {
        name: 'Dr. Akhila Reddy Yadulla',
        title: 'Department of Information Technology',
        affiliation: 'University of the Cumberlands, Williamsburg, Kentucky, USA',
        imageUrl: gallery7,
        isKeynote: false
    },
    {
        name: 'Er. Abhinav Tripathi',
        title: 'Senior Director',
        affiliation: 'Smarsh Inc, UK',
        imageUrl: gallery8,
        isKeynote: false
    },
    {
        name: 'Er. Anupama Aggarwal',
        title: 'Lead Data Scientist / Product Owner',
        affiliation: 'ZeroG Lufthansa Group, Germany',
        imageUrl: gallery9,
        isKeynote: false
    },
];

const SpeakerCard = ({ speaker }) => {
    // Determine the card class based on the type of speaker if needed, 
    // but here we use a generic class for the main structure
    return (
        <div className="speaker-card">
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
