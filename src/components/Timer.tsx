import React from 'react';
import { secondsToTime } from '../utils/seconds-to-time';

type Props = {
  mainTime: number;
};

export default function Timer({ mainTime }: Props): React.JSX.Element {
  return <div className="timer">{secondsToTime(mainTime)}</div>;
}
