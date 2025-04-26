import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { HourSelectors, MinuteAtoms } from './atoms';

function App() {
  const [Hours, setHours] = useRecoilState(HourSelectors);
  const [Minutes, setMinutes] = useRecoilState(MinuteAtoms);

  const HoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(event.currentTarget.value);
  };

  const MinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(event.currentTarget.value);
  };

  return (
    <div>
      <h3>시간 단위 변환계</h3>
      <div>
        <label>시 Hour</label>
        <input 
          type='text' 
          placeholder='Hours' 
          value={Hours}
          onChange={HoursChange}
        />
      </div>
      <div>
        <label>분 Minute</label>
        <input 
          type='text' 
          placeholder='Minutes'
          value={Minutes}
          onChange={MinutesChange}
        />
      </div>
    </div>
  );
}

export default App;
