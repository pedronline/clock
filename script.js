const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");

const deg = num => (num / 60) * 360 + 90;

const setDate = () => {
  const now = new Date();
  const sec = deg(now.getSeconds());
  const min = deg(now.getMinutes());
  const hour = deg(now.getHours()*60/12);
  console.log(hour, min, sec);

  secHand.style.transform = `rotate(${sec}deg)`;
  minHand.style.transform = `rotate(${min}deg)`;
  hourHand.style.transform = `rotate(${hour}deg)`;
};

setInterval(setDate, 1000);
