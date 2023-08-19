import React, { useState } from 'react';
import useInterval from '../hooks/useInterval';

import Button from './Button';
import Timer from './Timer';

type Props = {
  pomodoroTimer: number;
  shortRestTime: number;
  longRestTime: number;
  cycle: number;
};

export default function PomodoroTimer({
  pomodoroTimer,
  shortRestTime,
  longRestTime,
  cycle,
}: Props): React.JSX.Element {
  const [mainTime, setMainTime] = useState(pomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="working pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Teste" />
        <Button text="Teste" />
        <Button text="Teste" />
      </div>

      <div className="details">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur libero officia porro sed numquam cum quas molestiae earum vero magni distinctio aliquam ea tempora, ut velit cumque iste nobis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur libero officia porro sed numquam cum quas molestiae earum vero magni distinctio aliquam ea tempora, ut velit cumque iste nobis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur libero officia porro sed numquam cum quas molestiae earum vero magni distinctio aliquam ea tempora, ut velit cumque iste nobis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur libero officia porro sed numquam cum quas molestiae earum vero magni distinctio aliquam ea tempora, ut velit cumque iste nobis?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur libero officia porro sed numquam cum quas molestiae earum vero magni distinctio aliquam ea tempora, ut velit cumque iste nobis?</p>
      </div>
    </div>
  );
}
