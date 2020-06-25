import React from 'react';
import { UserOutlined } from '@ant-design/icons'
import './ClassCard.css';
import { useRecoilValue } from 'recoil';
import { emotionScoreState, currentStudentsState } from '../services/emotionService';
import { Tooltip } from 'antd';

function ScoreCard(props) {
  return (
    <div style={{ }}>
      <Tooltip title={props.tooltip} placement="left">
        <span>
          {props.label}
        </span>
      </Tooltip>
      <div>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{ props.score }</span>
        <span>{ ` / ${props.total}` }</span>
      </div>
    </div>
  )
}

export default function ClassCard() {

  const emotionData = useRecoilValue(emotionScoreState) || [];
  const studentsNames = useRecoilValue(currentStudentsState);
  const latestDataPoint = emotionData.slice().pop() ?? {};

  const {
    averageScore = 0,
    numActiveStudents = 0,
    students = [],
  } = latestDataPoint;

  const scoreData = [
    {
      label: 'Current Emotional Score',
      total: 100,
      score: averageScore,
    },
    {
      label: 'Active Students',
      total:  students.length,
      score: numActiveStudents,
      tooltip: studentsNames,
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
          scoreData.map(({ label, total, score, tooltip }) => (

              <ScoreCard
                key={ label }
                score={ score }
                total={ total }
                tooltip= {tooltip}
                label={ label } />

          ))
        }
      </span>
    </div>
  );
};