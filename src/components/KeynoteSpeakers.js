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


// Placeholder data for speakers (based on the latest screenshots)
const speakersData = [
    {
    name: 'Swapnil Tripathi',
    title: 'Lead – Charkha (Centre for Constitutional Law) | Advocate',
    affiliation: 'Vidhi Centre for Legal Policy, New Delhi, India',
    details: 'Lead at Charkha, Vidhi Centre for Legal Policy. DPhil in Law (University of Oxford) specialising in Public Interest Litigation and Constitutional law.',
    imageUrl: c15,
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
