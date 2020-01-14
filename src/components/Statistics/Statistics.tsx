import React, { useState } from 'react';
import moment from 'moment';

import './Statistics.scss';

const names = [
  'Jack',
  'Zoomer',
  'Muscles Boy',
  'TheVegan™️',
  '🍆'
];

const Statistics = ({ birthday, peak_depression, until }: { birthday: string, peak_depression: string, until: moment.Duration }) => {
  const [name, setName] = useState(0);

  const onClick = () => {
    setName(name >= names.length - 1 ? 0 : name + 1);
  };

  return (
    <div className='Statistics'>
      <div className='Left'>{birthday}</div>
      <div className='Center'>
        <div><span className='Name' onClick={onClick}>{names[name]}</span> will hit <span className='Peak'>peak depression</span> in</div>
        <div className='Countdown'>
          {until.asSeconds().toFixed()} seconds
        </div>
        <div className='Humanize'>
          ({until.humanize()})
        </div>
      </div>
      <div className='Right'>{peak_depression}</div>
    </div>
  )
};

export default Statistics;
