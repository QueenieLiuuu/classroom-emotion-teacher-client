import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { XYPlot, LineSeries, XAxis, YAxis } from 'react-vis';
import './ScoreChart.css'
import {
  emotionScoreState,
  fetchEmotionData,
  chartDataState,
  classTimestampState,
} from '../services/emotionService';

export default function ScoreChart() {

  const [, setEmotionData ] = useRecoilState(emotionScoreState);
  const chartData = useRecoilValue(chartDataState);
  const classStartTimestamp = useRecoilValue(classTimestampState);
  let interval;

  const updateEmotionData = () => {
    fetchEmotionData(
      classStartTimestamp.toISOString(),
      (new Date()).toISOString()
    ).then((emotionData) => {
      setEmotionData(emotionData)
    });
  }

  useEffect(() => {
    interval = setInterval(() => {
      updateEmotionData();
    }, 3000);

    return () => clearInterval(interval);
  }, [setEmotionData]);

  const xAxisLabels = chartData.map(({timeStamp}) => {
    const date = new Date(timeStamp);
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  });

  return (
    <div className="score-chart">
      <XYPlot height={300} width= {900}>
        <XAxis tickFormat={v => xAxisLabels[v]} tickLabelAngle={45} />
        <YAxis />
        <LineSeries data={chartData} />
      </XYPlot>
    </div>
  )
}
