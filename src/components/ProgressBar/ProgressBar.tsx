import React, { useEffect, useState } from 'react';

import './ProgressBar.scss';

const ProgressBar = ({ progress }: { progress: number }) => {
  const [right, setRight] = useState('100%');

  useEffect(() => {
    setTimeout(() => {
      setRight(`${100 - progress}%`);
    }, 1000);
  }, [progress]);

  return (
    <div className='ProgressBar' style={{ right }}>
      <div className='Percent'>{progress.toFixed(7)}%</div>
    </div>
  )
};

export default ProgressBar;
