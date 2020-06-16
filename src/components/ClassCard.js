import React from 'react';
import './ClassCard.css';

export default function ClassCard() {
  return (
    <div className="class-card">
      <span>Teacher's name/course Info</span>
      <span className="class-card__score-section">
        <div>Active score</div>
        <div>Attendance</div>
        <div>Duration</div>
      </span>
    </div>
  );
};