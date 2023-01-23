function timeToWalk(steps, footprintLength, speed) {
  const distance = steps * footprintLength;
  const speedInMeters = speed / 3.6;
  const breaks = Math.floor(distance / 500) * 60;
  const time = distance / speedInMeters + breaks;

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time % 60);
  console.log(
    `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`
  );
}

timeToWalk(4000, 0.6, 5);
timeToWalk(2564, 0.7, 5.5);
