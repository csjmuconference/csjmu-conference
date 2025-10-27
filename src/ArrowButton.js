// 

import React from 'react';
import './ArrowButton.css';

const ArrowButton = ({ direction, isAbsolute, onClick, label }) => {
  // Choose arrow symbol
  let arrowSymbol = direction === 'up' ? '▲' : '▼';
  if (isAbsolute) {
    arrowSymbol = direction === 'up' ? '⏫' : '⏬';
  }

  return (
    <button
      className={`arrow-btn ${isAbsolute ? 'absolute-btn' : 'page-btn'}`}
      onClick={onClick}
      title={label}
    >
      {arrowSymbol}
    </button>
  );
};

export default ArrowButton;
