import React from "react";
import "./DownloadSection.css";
import Test1 from '../logo/Test1.pdf';
import Test2 from '../logo/Test2.pdf';

const DownloadSection = () => {
  const downloads = [
    { name: "PAPER PRESENTATION SCHEDULE", url: Test1 },
    { name: "PAPER PRESENTATION TEMPLATE FORMAT", url: Test2 },
  ];

  return (
    <div className="download-container" id="downloads">
      <h1 className="download-header">DOWNLOADS</h1>
      <ul className="download-list">
        {downloads.map((item, index) => (
          <li key={index} className="download-item">
            <a
              href={item.url}
              className="download-link"
              target="_blank"
              rel="noopener noreferrer"
            ><u>
                {item.name}
              </u>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DownloadSection;
