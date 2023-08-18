import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

import Button from './Button';
import Timer from './Timer';

type Props = {
  defaultPomodoroTimer: number;
};

export default function PomodoroTimer({ defaultPomodoroTimer }: Props): React.JSX.Element {
  const [mainTime, setMainTime] = useState(defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button text="Teste" />
    </div>
  );
}
