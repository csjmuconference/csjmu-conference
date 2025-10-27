import React, { useState } from 'react';
import './Gallery.css';
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
import g1 from '../logo/g1.JPG';
import g2 from '../logo/g2.JPG';
import g3 from '../logo/g3.JPG';
import g4 from '../logo/g4.JPG';
import g5 from '../logo/g5.JPG';
import g6 from '../logo/g6.jpg';
import g7 from '../logo/g7.webp';
import g8 from '../logo/g8.JPG';
import g9 from '../logo/g9.JPG';
import g10 from '../logo/g10.jpg';
import g11 from '../logo/g11.jpg';


// --- Placeholder Data ---
// In a real application, replace these URLs with your actual image imports or paths.
const allGalleryImages = [
    { url: g1, alt: 'image' },
    { url: g2, alt: 'image' },
    { url: g3, alt: 'image' },
    { url: g4, alt: 'image' },
    { url: g5, alt: 'image' },
    { url: g6, alt: 'image' },
    { url: g7, alt: 'image' },
    { url: g8, alt: 'image' },
    { url: g9, alt: 'image' },
    { url: g10, alt: 'image' },
    { url: g11, alt: 'image' },
    // { url: gallery1 , alt: 'image' },
    { url: gallery2, alt: 'image' },
    // { url: gallery3, alt: 'image' },
    // { url: gallery4, alt: 'image' },
    // { url: gallery5, alt: 'image' },
    // { url: gallery6, alt: 'image' },
    // { url: gallery7, alt: 'image' },
    // { url: gallery8, alt: 'image' },
    // { url: gallery9, alt: 'image' },
    // { url: gallery10, alt: 'image' },
    // { url: gallery11, alt: 'image' },
    // { url: gallery12, alt: 'image' },
    // { url: gallery13, alt: 'image' },
    // { url: gallery14, alt: 'image' },
    // { url: gallery15, alt: 'image' },

];

const INITIAL_VISIBLE_COUNT = 9;

const Gallery = () => {
    // State to track if the gallery is expanded
    const [isExpanded, setIsExpanded] = useState(false);

    // Determine which images to display
    const imagesToShow = isExpanded
        ? allGalleryImages
        : allGalleryImages.slice(0, INITIAL_VISIBLE_COUNT);

    // Toggle function for the button
    const toggleGallery = () => {
        setIsExpanded(prev => !prev);
    };

    // Determine if we need to show the button at all (only if there are hidden images)
    const showToggleButton = allGalleryImages.length > INITIAL_VISIBLE_COUNT;

    return (
        <div className="gallery-section" id="gallery">
            <h2 className="gallery-title">GALLERY</h2>

            <div className="gallery-grid">
                {imagesToShow.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img
                            src={image.url}
                            alt={image.alt}
                            className="gallery-image"
                        />
                    </div>
                ))}
            </div>

            {showToggleButton && (
                <div className="gallery-button-container">
                    <button onClick={toggleGallery} className="gallery-toggle-button">
                        {isExpanded ? 'Show less' : 'Show More'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
