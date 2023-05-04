const dayElement = document.querySelector(".day");
const hourElement = document.querySelector(".hour");
const minuteElement = document.querySelector(".minute");
const secondElement = document.querySelector(".second");
const body = document.querySelector("body");

const clockInterval = setInterval(() => {
  const now = new Date();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const day = days[now.getDay()];
  const hour = now.getHours().toString().padStart(2, "0");
  const minute = now.getMinutes().toString().padStart(2, "0");
  const second = now.getSeconds().toString().padStart(2, "0");
  
  dayElement.textContent = day;
  hourElement.textContent = hour;
  minuteElement.textContent = minute;
  secondElement.textContent = second;
}, 1000);

const setBackground = () => {
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 6 && hour < 18) {
    body.style.backgroundImage = "url('day.jpeg')";
  } else {
    body.style.backgroundImage = "url('night.jpeg')";
  }
}

setBackground();

const setBackgroundInterval = setInterval(setBackground, 60 * 60 * 1000);