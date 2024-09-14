import React from 'react';
import './Overview.css';  
import textWW from './text.js'; 

function Overview() {
  return (
    <div className="fullscreen-background">
      <div className="text-container">
        <div
          style={{
            maxWidth: "700px", 
            margin: "auto", 
          }}
        >
          <p>{textWW}</p>
          <p>{textWW}</p>
          <p>{textWW}</p>
        </div>
      </div>
    </div>
  );
}

export default Overview;
