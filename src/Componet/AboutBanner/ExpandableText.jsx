import React, { useState } from 'react';
import './CSS/ExpandableText.css';

const ExpandableText = ({ children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`expandable-wrapper ${expanded ? 'expanded' : ''}`}>
      <div className="expandable-content">{children}</div>
      <button className="toggle-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
};

export default ExpandableText;
