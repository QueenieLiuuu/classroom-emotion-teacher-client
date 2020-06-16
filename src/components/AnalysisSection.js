import React from 'react';
import './AnalysisSection.css';

export default function AnalysisSection() {

  const analysisCards = [
    {
      score: 56.2,
      message: 'Students need more interaction'
    },
    {
      score: 36,
      message: 'Students need more interaction'
    },
    {
      score: 48,
      message: 'Students need more interaction'
    },
  ]

  return (
    <>
      <div style={{ textAlign: 'left' }}>
        Intelligence Analysis
      </div>
      <div className="analysis-section__cards">
        {
          analysisCards.map(card => (
            <div>
              {`${card.score}%`} - {card.message}
            </div>
          ))
        }
      </div>
    </>
  )
}