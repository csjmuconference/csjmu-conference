// 

// import React, { useEffect, useState, useCallback } from 'react';
// import './App.css';

// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import About from './components/About/About';
// import Committee from './components/Committee/Committee';
// import CallForPapers from './components/CallForPapers/CallForPapers';
// import ImportantDates from './components/ImportantDates/ImportantDates';
// import Registration from './components/Registration/Registration';
// import Contact from './components/Contact/Contact';
// import Attractions from './components/Attractions';
// import Gallery from './components/Gallery';
// import DownloadSection from './components/DownloadSection';
// import KeynoteSpeakers from './components/KeynoteSpeakers';
// import Publications from './components/Publications';
// import ArrowButton from './ArrowButton';

// function App() {
//   const [showUpArrow, setShowUpArrow] = useState(false);

//   // Scroll one viewport height up
//   const handleScrollPageUp = useCallback(() => {
//     window.scrollTo({
//       top: window.scrollY - window.innerHeight * 0.9,
//       behavior: 'smooth',
//     });
//   }, []);

//   // Scroll one viewport height down
//   const handleScrollPageDown = useCallback(() => {
//     window.scrollTo({
//       top: window.scrollY + window.innerHeight * 0.9,
//       behavior: 'smooth',
//     });
//   }, []);

// Toggle visibility of Up arrow
//   useEffect(() => {
//     const toggleVisibility = () => {
//       setShowUpArrow(window.scrollY > 300);
//     };
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <About />
//       <Committee />
//       <CallForPapers />
//       <ImportantDates />
//       <Registration />
//       <KeynoteSpeakers />
//       <Publications />
//       <Gallery />
//       <Attractions />
//       <DownloadSection />
//       <Contact />

//       {/* Fixed Scroll Buttons */}
//       <div className="scroll-buttons">
//         {showUpArrow && <ArrowButton direction="up" onClick={handleScrollPageUp} />}
//         <ArrowButton direction="down" onClick={handleScrollPageDown} />
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState, useCallback } from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Hero from './components/Hero/Hero';
// import About from './components/About/About';
// import Committee from './components/Committee/Committee';
// import CallForPapers from './components/CallForPapers/CallForPapers';
// import ImportantDates from './components/ImportantDates/ImportantDates';
// import Registration from './components/Registration/Registration';
// import Contact from './components/Contact/Contact';
// import Attractions from './components/Attractions';
// import Gallery from './components/Gallery';
// import DownloadSection from './components/DownloadSection';
// import KeynoteSpeakers from './components/KeynoteSpeakers';
// import Publications from './components/Publications';
// import ArrowButton from './ArrowButton';

// function App() {
//   const [showUpArrows, setShowUpArrows] = useState(false);

//   // --- Page scroll handlers ---
//   const handleScrollPageUp = useCallback(() => {
//     window.scrollTo({
//       top: window.scrollY - window.innerHeight * 0.9,
//       behavior: 'smooth',
//     });
//   }, []);

//   const handleScrollPageDown = useCallback(() => {
//     window.scrollTo({
//       top: window.scrollY + window.innerHeight * 0.9,
//       behavior: 'smooth',
//     });
//   }, []);

//   const handleScrollToTopAbsolute = useCallback(() => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   }, []);

//   const handleScrollToBottomAbsolute = useCallback(() => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth',
//     });
//   }, []);

//   // --- Control arrow visibility ---
//   useEffect(() => {
//     const toggleVisibility = () => setShowUpArrows(window.scrollY > 300);
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   return (
//     <div className="App">
//       <Header />
//       <Hero />
//       <About />
//       <Committee />
//       <CallForPapers />
//       <ImportantDates />
//       <Registration />
//       <KeynoteSpeakers />
//       <Publications />
//       <Gallery />
//       <Attractions />
//       <DownloadSection />
//       <Contact />

//       {/* Scroll Buttons Stack */}
//       <div className="scroll-buttons">
//         {showUpArrows && (
//           <div className="arrow-group">
//             <ArrowButton label="Scroll to Top" direction="up" isAbsolute onClick={handleScrollToTopAbsolute} />
//             <ArrowButton label="Page Up" direction="up" onClick={handleScrollPageUp} />
//           </div>
//         )}

//         <div className="arrow-group">
//           <ArrowButton label="Page Down" direction="down" onClick={handleScrollPageDown} />
//           <ArrowButton label="Scroll to Bottom" direction="down" isAbsolute onClick={handleScrollToBottomAbsolute} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Committee from './components/Committee/Committee';
import CallForPapers from './components/CallForPapers/CallForPapers';
import ImportantDates from './components/ImportantDates/ImportantDates';
import Registration from './components/Registration/Registration';
import Contact from './components/Contact/Contact';
import Attractions from './components/Attractions';
import Gallery from './components/Gallery';
import DownloadSection from './components/DownloadSection';
import KeynoteSpeakers from './components/KeynoteSpeakers';
import Publications from './components/Publications';

// Import MUI Icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

function App() {
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  // --- Page scroll handlers ---
  const handleScrollPageUp = useCallback(() => {
    window.scrollTo({
      top: window.scrollY - window.innerHeight * 0.9,
      behavior: 'smooth',
    });
  }, []);

  const handleScrollPageDown = useCallback(() => {
    window.scrollTo({
      top: window.scrollY + window.innerHeight * 0.9,
      behavior: 'smooth',
    });
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleScrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, []);

  // --- Show buttons when scrolled ---
  useEffect(() => {
    const toggleVisibility = () => setShowScrollButtons(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Committee />
      <CallForPapers />
      <ImportantDates />
      <Registration />
      {/* <KeynoteSpeakers /> */}
      {/* <Publications /> */}
      <Gallery />
      <Attractions />
      {/* <DownloadSection /> */}
      <Contact />

      {/* Floating Scroll Buttons */}
      <div className="scroll-buttons">
        {showScrollButtons && (
          <div className="arrow-group">
            <button className="scroll-btn purple" onClick={handleScrollToTop} title="Scroll to Top">
              <KeyboardDoubleArrowUpIcon />
            </button>
            <button className="scroll-btn blue" onClick={handleScrollPageUp} title="Page Up">
              <ArrowUpwardIcon />
            </button>
          </div>
        )}

        <div className="arrow-group">
          <button className="scroll-btn blue" onClick={handleScrollPageDown} title="Page Down">
            <ArrowDownwardIcon />
          </button>
          <button className="scroll-btn purple" onClick={handleScrollToBottom} title="Scroll to Bottom">
            <KeyboardDoubleArrowDownIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
