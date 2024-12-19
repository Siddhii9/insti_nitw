import React, { useState } from 'react';
import "./recenteventcard.css";

export default function Recenteventcard({recenteventdata}) {
  const [isExpanded, setIsExpanded]=useState(false);

  const toggleDescription=() =>{
    setIsExpanded((isExpanded)=>!isExpanded);
  };

  return (
    <div className="card">
        <img src={recenteventdata.eventImage} alt="Event"/>
          <h2 className="card-title">{recenteventdata.eventName}</h2>
          <p className={`card-description ${isExpanded ? "expanded" :""}`}>
            {recenteventdata.eventDescription}
          </p>

        <div className="card-footer">
        <span>{recenteventdata.eventOrganizer.clubName || "Club Name"}</span>
        <button onClick={toggleDescription}>
          {isExpanded ? "Show Less" : "Show More"}
          </button>
      </div>
      </div>
  );
}
