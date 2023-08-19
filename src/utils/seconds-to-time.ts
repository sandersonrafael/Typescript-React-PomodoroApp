export function secondsToTime(seconds: number): string {
  const sec = Math.round(seconds % 60);
  let min = Math.round(seconds / 60 - (seconds % 60 / 60));
  const hrs = Math.round(min / 60 - (min % 60 / 60));

  if (min >= 60) min = min % 60;

  return `${hrs>0?hrs>9?hrs:'0'+hrs:''}${hrs?':':''}${min>9?min:'0'+min}:${sec>9?sec:'0'+sec}`;
}
