import React from 'react';
import { UserOutlined } from '@ant-design/icons'
import './ClassCard.css';

function ScoreCard(props) {
  return (
    <div style={{ }}>
      <span>
        {props.label}
      </span>
      <div>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{ props.score }</span>
        <span>{ ` / ${props.total}` }</span>
      </div>
    </div>
  )
}

export default function ClassCard() {

  const currentScore = 56;
  const currentActiveStudents = 10;

  const scoreData = [
    {
      label: 'Current Emotional Score',
      total: 100,
      score: currentScore,
    },
    {
      label: 'Active Students',
      total:  currentActiveStudents,
      score: currentActiveStudents,
    }
  ]

  return (
    <div className="class-card">
      <span className="class-card__teacher-section">
        <UserOutlined style={{ fontSize: '40px', marginRight: '30px' }} />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}>
          <span style={{ fontSize: '26px' }}>
            Internet of Things
          </span>
          <span>
            49788   |   Spring 2020
          </span>
        </div>
      </span>
      <span className="class-card__score-section">
        {
          scoreData.map(({ label, total, score }) => (
            <ScoreCard
              key={ label }
              score={ score }
              total={ total }
              label={ label } />
          ))
        }
      </span>
    </div>
  );
};