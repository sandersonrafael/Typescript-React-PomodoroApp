export function secondsToTime(seconds: number): string {
  const min = Math.round(seconds / 60 - (seconds % 60 / 60));
  const sec = Math.round(seconds % 60);
  return `${min>9?min:'0'+min}:${sec>9?sec:'0'+sec}`;
}
