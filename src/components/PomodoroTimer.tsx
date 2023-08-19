import React, { useEffect, useState } from 'react';
import useInterval from '../hooks/useInterval';

import Button from './Button';
import Timer from './Timer';

import audioStart from '../sounds/src_sounds_bell-start.mp3';
import audioFinish from '../sounds/src_sounds_bell-finish.mp3';

import { secondsToTime } from '../utils/seconds-to-time';

const audioStartWorking = new Audio(audioStart);
const audioFinishWorking = new Audio(audioFinish);

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
  const [timerIsOn, setTimerIsOn] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cycles, setCycles] = useState(new Array(cycle - 1).fill(true));
  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  const startWorking = () => {
    setTimerIsOn(true);
    setWorking(true);
    setResting(false);
    setMainTime(pomodoroTimer);
    audioStartWorking.play();
  };

  const startResting = (long: boolean) => {
    setTimerIsOn(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(longRestTime);
    } else {
      setMainTime(shortRestTime);
    }

    audioFinishWorking.play();
  };

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');

    if (mainTime > 0) return;

    if (working && cycles.length > 0) {
      cycles.pop();
      startResting(false);
    } else if (working && cycles.length <= 0) {
      startResting(true);
      setCycles(new Array(cycle - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) startWorking();
  }, [working, resting, mainTime, cycle, cycles, completedCycles, numberOfPomodoros]);

  useInterval(() => {
    setMainTime(mainTime - 1);
    if (working) setFullWorkingTime(time => time += 1);
  }, timerIsOn ? 1000 : null);

  return (
    <div className="working pomodoro">
      <h2>Você está {!timerIsOn ? 'inativo' : working ? 'trabalhando' : 'descansando'}!</h2>
      <Timer mainTime={mainTime} />

      <div className="controls">
        <Button text="Start" onClick={() => startWorking()} />
        <Button text="Rest" onClick={() => startResting(false)} />
        <Button
          className={!working && !resting ? 'hidden' : ''}
          text={timerIsOn ? 'Pause' : ' Play '}
          onClick={() => setTimerIsOn(!timerIsOn)}
        />
      </div>

      <div className="details">
        <p>Ciclos concluídos: {completedCycles}</p>
        <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
        <p>Pomodoros concluídos: {numberOfPomodoros}</p>
      </div>
    </div>
  );
}
