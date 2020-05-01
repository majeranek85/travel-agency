export const formatTime = (sec) => {
  if(sec == undefined || isNaN(sec) || sec < 0) {
    return null;
  } else {
    const seconds = Math.floor(sec % 60).toString();
    const minutes = Math.floor((sec/60) % 60).toString();
    const hours = Math.floor(sec/3600).toString();

    return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
  }
};