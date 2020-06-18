import React from 'react';
import './AnalysisSection.css';

function ScoreDot(props) {

  const fillColor = {
    healthy: '#4D7CFE',
    alert: '#FFAB2B',
  }

  return (
    <div style={{
      width: '60px',
      height: '60px',
      backgroundColor: fillColor[props.level],
      borderRadius: '50%',
      border: '3px solid #D8D8D8'
    }} />
  );
}

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
      <div style={{ textAlign: 'left', fontSize: '18px', color: '#778CA2', margin: '8px 0'}}>
        Intelligence Analysis
      </div>
      <div className="analysis-section__cards">
        {
          analysisCards.map(card => (
            <div style={{
              padding: '12px',
              backgroundColor: '#FFFFFF',
              boxShadow: '0px 1px 1px 0px rgba(1, 1, 1, 0.3)',
              width: '30%',
              display: 'flex',
            }}>
              <ScoreDot
                level={ card.score >= 50 ? 'healthy' : 'alert' }/>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '18px',
                alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{card.score}%</span>
                <span>{ card.message }</span>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}