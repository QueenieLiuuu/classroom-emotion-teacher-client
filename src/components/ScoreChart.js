import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import './ScoreChart.css'
import { emotionScoreState } from '../services/emotionService';

export default function ScoreChart() {

  const [ chartData, setEmotionScore ] = useRecoilState(emotionScoreState);

  let x = 10;
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setEmotionScore((currentValue) => {
  //       const prevData = [ ...currentValue ];
  //       if(prevData.length >= 15) {
  //         prevData.shift();
  //       }
  //       x++;
  //       const newPoint = {
  //         x,
  //         y: Math.random()*10,
  //       };
  //       return [...prevData, newPoint]
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [x, setEmotionScore]);

  return (
    <div className="score-chart">
      <div style={{fontSize: '18px', color: '#778CA2', margin: '8px 0px'}}>
        Emotion Score Trend
      </div>
      <div>
        <XYPlot height={300} width= {900}>
          <XAxis />
          <YAxis />
          <LineSeries data={chartData} />
        </XYPlot>
      </div>
    </div>
  )
}
