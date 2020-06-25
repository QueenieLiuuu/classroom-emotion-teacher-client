import React, { useState } from 'react';
import { Button } from 'antd';
import './ScoreSection.css'
import ScoreChart from './ScoreChart';
import dot from '../pulsingdot.gif';

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
        {running && <img src={dot} style={{ marginLeft: '10px', width: '20px' }}/> }
      </div>
      <Control />
      <div className="score-section__chart">
        { running && <ScoreChart />}
      </div>
    </div>
  )
}