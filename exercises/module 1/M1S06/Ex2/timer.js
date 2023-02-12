const showCurrentTime = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  return `${hours}:${minutes}:${seconds}`
}

setInterval(() => console.log(showCurrentTime()), 1000)