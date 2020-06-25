import React from 'react';
import { Collapse } from 'antd';
import { useRecoilValue } from 'recoil';
import { emotionScoreState } from '../services/emotionService';

export function DebugPanel() {

  const emotionData = useRecoilValue(emotionScoreState) || [];
  const latestDataPoint = emotionData.slice().pop() ?? {};

  return (
    <>
      <Collapse>
        <Collapse.Panel header="Debug panel" key="1">
          {
            (latestDataPoint.uniqueEmotions || []).map(e => {
              return (
                <pre key={e.studentName}>
                  {`${e.studentName} happiness: ${e.happiness}; face detected: ${e.faceDetected}`}
                </pre>
              )
            })
          }
        </Collapse.Panel>
      </Collapse>
    </>
  )
}
