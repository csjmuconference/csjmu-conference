import React from 'react';
// Assuming the CSS from previous components can handle the main grid and button styling
import './Publications.css';

// Data for the publications section
const publicationsData = [
    {
        title: 'CURRENT MEDICAL IMAGING',
        issn: '( ISSN / eISSN: 1573-4056 / 1875-6603 )',
        publisher: '( BENTHAM SCIENCE PUBLISHER )',
        index: 'SCIE Indexed Journal',
        imageUrl: 'https://placehold.co/200x300/c0392b/ffffff?text=Medical+Imaging',
        journalLink: 'https://www.benthamscience.com/journal/33/indexing-agency'
        // '#current-medical-imaging'
    },
    {
        title: 'CURRENT COMPUTER-AIDED DRUG DESIGN',
        issn: '( eISSN: 1573-4099 / 1875-6697 )',
        publisher: '( BENTHAM SCIENCE PUBLISHER )',
        index: 'SCIE Indexed Journal',
        imageUrl: 'https://placehold.co/200x300/34495e/ffffff?text=Computer-Aided+Drug+Design',
        journalLink: 'https://www.benthamscience.com/journal/6/indexing-agency'
        // '#drug-design'
    },
    {
        title: 'FRANKLIN OPEN',
        issn: '( ISSN / Print ISSN: 1879-2693 / 0016-0032 )',
        publisher: '( ELSEVIER PUBLISHER )',
        index: 'Scopus Indexed Journal',
        imageUrl: 'https://placehold.co/200x300/e67e22/ffffff?text=Franklin+Open',
        journalLink: ' https://www.journals.elsevier.com/franklin-open'
        // '#franklin-open'
    },
    // Adding placeholder for the "COMING SOON" card
    {
        title: 'COMING SOON',
        issn: null,
        publisher: null,
        index: null,
        imageUrl: 'https://placehold.co/200x100/7f8c8d/ffffff?text=COMING+SOON',
        journalLink: '#coming-soon',
        isComingSoon: true
    }
];

const PublicationCard = ({ publication }) => {
    const isComingSoon = publication.isComingSoon;

    if (isComingSoon) {
        return (
            <div className="publication-card coming-soon-card">
                <img
                    src={publication.imageUrl}
                    alt={publication.title}
                    className="publication-image coming-soon-image"
                />
            </div>
        );
    }

    return (
        <div className="publication-card">
            <h3 className="publication-card-title">{publication.title}</h3>

            <div className="image-wrapper">
                <img
                    src={publication.imageUrl}
                    alt={`Cover of ${publication.title}`}
                    className="publication-image"
                />
            </div>

            <div className="publication-details">
                {publication.issn && <p className="detail-text">{publication.issn}</p>}
                {publication.publisher && <p className="detail-text bold-text">{publication.publisher}</p>}
                {publication.index && <p className="detail-text bold-text">{publication.index}</p>}
            </div>

            <a
                href={publication.journalLink}
                target="_blank"
                rel="noopener noreferrer"
                className="visit-journal-button"
            >
                Visit Journal
            </a>
        </div>
    );
};

const Publications = () => {
    return (
        <div className="publications-section" id="publications">
            <div className="publication-header-content">
                <h2 className="publications-title">PUBLICATIONS</h2>
                <p className="publications-intro">
                    High-quality selected and extended papers presented at ICRAECCT 2025 will be invited for publication in the special issues of reputed international journals and edited volumes.
                    Further details regarding partnering journals and publication opportunities will be announced soon.
                </p>
            </div>

            {/* <div className="publications-grid">
                {publicationsData
                    .filter(p => !p.isComingSoon)
                    .map((pub, index) => (
                        <PublicationCard key={index} publication={pub} />
                    ))}
            </div>

            <p className="publications-footer-text">
                Selected papers of ICRAECCT-2025 will be published as a Book Chapters in **Scopus Indexed Edited Books with IGI Global, Bentham Science, CRC Press, Wiley-Scrivener Publishers.** (Exact Edited Book Details and Guidelines will be shared via mail to selected paper ids.)
            </p>
            
            <div className="publications-grid coming-soon-grid">
                {publicationsData
                    .filter(p => p.isComingSoon)
                    .map((pub, index) => (
                        <PublicationCard key={`cs-${index}`} publication={pub} />
                    ))}
            </div> */}
        </div>
    );
};

export default Publications;
