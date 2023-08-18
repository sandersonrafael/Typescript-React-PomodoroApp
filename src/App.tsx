import React from 'react';

import PomodoroTimer from './components/PomodoroTimer';

export default function App() {
  return (
    <div>
      <PomodoroTimer defaultPomodoroTimer={1500} />
    </div>
  );
}
