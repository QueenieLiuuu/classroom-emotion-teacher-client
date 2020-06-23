import React, { useState } from 'react';
import { Button } from 'antd';
import './ScoreSection.css'
import ScoreChart from './ScoreChart';

export default function ScoreSection() {
  const [ running, setRunning ] = useState(false);

  const toggleChartRunning = () => {
    setRunning(!running)
  };

  const Control = () => {
    const label = running ? 'Pause Analysis' : 'Start Analysis';
    return (
      <Button type="primary" onClick={ toggleChartRunning }>{label}</Button>
    );
  };

  return (
    <div className="score-section">
      <div style={{fontSize: '18px', color: '#778CA2', margin: '8px 0px'}}>
        Emotion Score Trend
      </div>
      <Control />
      <div className="score-section__chart">
        { running && <ScoreChart />}
      </div>
    </div>
  )
}