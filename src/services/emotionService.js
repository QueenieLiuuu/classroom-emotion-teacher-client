import { atom, selector } from 'recoil';

const BASE_URL = process.env.NODE_ENV === 'development' ?
                  'http://localhost:8080'
                  : 'https://smart-classroom-server.wl.r.appspot.com';


export const fetchEmotionData = (startDate, endDate) => {
  const url = new URL(`${BASE_URL}/emotion`);
  const query = { startDate, endDate };
  Object.keys(query).forEach(key => url.searchParams.append(key, query[key]));
  return fetch(url).then(resp => resp.json());
}

export const emotionScoreState = atom({
  key: 'emotionScore',
  default: [],
});

export const chartDataState = selector({
  key: 'chartData',
  get: ({ get }) => {
    return (get(emotionScoreState)||[]).slice(-30).map((emotionData, i) => ({
      x: i,
      y: emotionData.averageScore,
      timeStamp: emotionData.timeStamp,
    }))
  }
});

export const classTimestampState = atom({
  key: 'classTimeStamp',
  default: new Date(),
});

export const currentStudentsState = selector({
  key: 'currentStudents',
  get: ({ get }) => {
    const lastEmotionData = get(emotionScoreState).slice().pop();
    if(!lastEmotionData) {
      return '';
    }

    return (lastEmotionData.students || []).join(', ');
  }
})
