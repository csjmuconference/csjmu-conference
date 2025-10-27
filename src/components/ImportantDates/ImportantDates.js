import React from 'react';
import './ImportantDates.css';

const ImportantDates = () => {
  const dates = [
    {
      event: "Last Date for Abstract Submission",
      date: "January 15, 2026"
    },
    {
      event: "Notification of Abstract Acceptance",
      date: "January 31, 2026"
    },
    {
      event: "Early Bird Registration (optional)",
      date: "March 1, 2026"
    },
    {
      event: "Last Date for Full Paper Submission & Registration",
      date: "April 1, 2026"
    },
    {
      event: "Conference Dates",
      date: "April 17–18, 2026"
    }
  ];

  // const dates = [
  //   {
  //     event: "Abstract Submission Deadline",
  //     date: "July 15, 2025"
  //   },
  //   {
  //     event: "Abstract Acceptance Notification",
  //     date: "July 30, 2025"
  //   },
  //   {
  //     event: "Full Paper Submission",
  //     date: "August 30, 2025"
  //   },
  //   {
  //     event: "Early Bird Registration",
  //     date: "September 15, 2025"
  //   },
  //   {
  //     event: "Regular Registration Deadline",
  //     date: "September 30, 2025"
  //   },
  //   {
  //     event: "Conference Dates",
  //     date: "October 15-17, 2025"
  //   }
  // ];

  return (
    <section className="important-dates section" id="important-dates">
      <div className="container">
        <h2 className="section-title">Important Dates</h2>
        <div className="timeline">
          {dates.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <h3>{item.event}</h3>
                <p>{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;