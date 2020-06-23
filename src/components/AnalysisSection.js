import React from 'react';
import './AnalysisSection.css';
import { useRecoilValue } from 'recoil';
import { emotionScoreState } from '../services/emotionService';

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

  const emotionData = useRecoilValue(emotionScoreState) || [];
  const latestDataPoint = emotionData.slice().pop() ?? {};
  const {
    numEngagedStudents = 0,
    numActiveStudents = 0,
    students = [],
  } = latestDataPoint;
  const happyStudentsPercentage = students.length ? Math.round((numEngagedStudents / students.length) * 100) : 0;
  const inFrameStudentsPercentage =  students.length ? Math.round((numActiveStudents / students.length) * 100) : 0;

  const analysisCards = [
    {
      score: happyStudentsPercentage,
      message: 'Students are happy'
    },
    {
      score: inFrameStudentsPercentage,
      message: 'Students in front of camera'
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