let hour = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');


function setDate() {
    const now = new Date();
  
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    sec.style.transform = `rotate(${secondsDegrees}deg)`;
  
    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    min.style.transform = `rotate(${minsDegrees}deg)`;
  
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hour.style.transform = `rotate(${hourDegrees}deg)`;
  }
  
  setInterval(setDate, 1000);
  
  setDate();