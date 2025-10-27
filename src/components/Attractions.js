import React from 'react';
import './Attractions.css';
import agra from '../logo/agra.png';
import varansi from '../logo/varansi.png';
import prayagraj from '../logo/prayagraj.png';
import chitrakoot from '../logo/chitrakoot.png';
import vrindavan from '../logo/vrindavan.png';
import ayodhya from '../logo/ayodhya.png';
import sarnath from '../logo/sarnath.png';
import doodhwa from '../logo/doodhwa.png';

// Data for the attractions
const attractionsData = [
  {
    name: 'Agar',
    imageUrl: agra,
    imageAlt: 'Taj Mahal in Agra',
    description: "The Taj Mahal in Agra, India, is a white marble mausoleum built by Emperor Shah Jahan in 1653 in memory of his wife, Mumtaz Mahal. Renowned for its beauty and symmetry, it symbolizes eternal lo... and blends Islamic, Persian, and Indian...",
  },
  {
    name: 'Varanasi',
    imageUrl: varansi,
    imageAlt: 'Boats on the Ganges in Varanasi',
    description: "Varanasi, also known as Banaras or Kashi, is one of India's oldest and most sacred cities, located on the banks of the Ganges River in Uttar Pradesh. Known for its ghats, temples, and vibrant cultural herita... it's a major pilgrimage site, especially for...",
  },
  {
    name: 'Prayagraj',
    imageUrl: prayagraj,
    imageAlt: 'Kumbh Mela in Prayagraj',
    description: "Prayagraj, also known as the City of Sangam, is where the Ganges, Yamuna, and mythical Saraswati rivers meet. It's a major Hindu pilgrimage site, famous for hosting the Kumbh Mela and home... ancient temples and the historic Allahabad Fort...",
  },
  {
    name: 'Chitrakoot',
    imageUrl: chitrakoot,
    imageAlt: 'Waterfalls in Chitrakoot',
    description: "Chitrakoot, on the Uttar Pradesh-Madhya Pradesh border, is a sacred town linked to the Ramayana, where Lord Rama, Sita, and Lakshmana are believed to have spent part of their exile. It's kno... for holy sites like Ramghat and Kamadgiri...",
  },
  {
    name: 'Vrindavan',
    imageUrl: vrindavan,
    imageAlt: 'Temple in Vrindavan',
    description: "Vrindavan, in Uttar Pradesh, India, is a sacred town known for its association with Lord Krishna's childhood. Held with temples like the Banke Bihari and ISKCON Temple, it's a major pilgrimage site, devotees, especially during festivals.",
  },
  {
    name: 'Ayodhya',
    imageUrl: ayodhya,
    imageAlt: 'Temple in Ayodhya',
    description: "Ayodhya, in Uttar Pradesh, India, is an ancient city revered as the birthplace of Lord Rama in Hindu tradition. It's home to numerous temples, including the famous Ram Janmabhoomi temple, and is major pilgrimage destination, especially...",
  },
  {
    name: 'Sarnath',
    imageUrl: sarnath,
    imageAlt: 'Dhamek Stupa in Sarnath',
    description: "Sarnath, near Varanasi in Uttar Pradesh, India, is a revered Buddhist site where Gautama Buddha delivered his first sermon after attaining enlightenment. It's home to the Dhamek Stu... ancient monasteries, and the Ashoka Pillar...",
  },
  {
    name: 'Doodhwa National Park',
    imageUrl: doodhwa,
    imageAlt: 'Wildlife in Doodhwa National Park',
    description: "Dudhwa National Park, located in Uttar Pradesh, India, is a protected area known for its rich biodiversity and dense forests. It houses endangered species like the Bengal tiger, Indi... rhinoceros, and swamp deer, as well as a...",
  },
];

// Placeholder component for attraction image (replace with actual image imports/paths)
const AttractionImage = ({ src, alt }) => (
  <div className="attraction-image-placeholder">
    {/* In a real application, you would use:  */}
    <img src={src} alt={alt} />
    {/* <p>Image Placeholder: {alt}</p> */}
  </div>
);

const AttractionCard = ({ name, imageUrl, imageAlt, description }) => (
  <div className="attraction-card">
    <AttractionImage src={imageUrl} alt={imageAlt} />
    <div className="card-content">
      <h3 className="attraction-name">{name}</h3>
      <p className="attraction-description">{description}</p>
      {/* <button className="read-more-button">
        Read more &rarr;
      </button> */}
    </div>
  </div>
);

const Attractions = () => {
  return (
    <section className="attractions-section" id="attractions">
      <h2 className="section-title">
        ATTRACTION NEARBY
      </h2>
      <div className="attractions-grid">
        {attractionsData.map((attraction, index) => (
          <AttractionCard
            key={index}
            imageUrl={attraction.imageUrl}
            name={attraction.name}
            imageAlt={attraction.imageAlt}
            description={attraction.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Attractions;