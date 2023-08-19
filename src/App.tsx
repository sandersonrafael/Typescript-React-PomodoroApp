import React from 'react';

import PomodoroTimer from './components/PomodoroTimer';

export default function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTimer={1500}
        shortRestTime={300}
        longRestTime={900}
        cycle={4}
      />
    </div>
  );
}
