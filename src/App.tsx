import React, { useEffect, useRef, useState } from 'react';
import './App.scss';
import ProgressBar from "./components/ProgressBar/ProgressBar";
import Snowfall from 'react-snowfall'
import Statistics from "./components/Statistics/Statistics";
import moment from "moment";

const App: React.FC = () => {
  const [, setRandom] = useState(Math.random());
  const animation = useRef<number>();

  const today = moment();
  const birthday = moment('14th Oct 1993', "Do MMM YYYY");
  // https://nypost.com/2020/01/13/study-finds-when-middle-age-misery-hits-the-hardest/
  const peak_depression = birthday.clone().add(47, 'years').add(73, 'days');

  const journey = peak_depression.diff(birthday, 'seconds');
  const alive = today.diff(birthday, 'seconds');

  const progress = (alive / journey * 100);

  const until = moment.duration(peak_depression.diff(today));

  useEffect(() => {
    const calculate = () => {
      setRandom(Math.random());

      setTimeout(() => {
        animation.current = requestAnimationFrame(calculate);
      }, 10)
    };

    animation.current = requestAnimationFrame(calculate);

    return () => {
      if (animation.current) {
        cancelAnimationFrame(animation.current);
      }
    }
  }, []);

  return (
    <div className="App">
			<Snowfall  />
      <ProgressBar progress={progress} />
      <Statistics birthday={birthday.format('Do MMM YYYY')}
                  peak_depression={peak_depression.format('Do MMM YYYY')}
                  until={until} />
    </div>
  );
};

export default App;