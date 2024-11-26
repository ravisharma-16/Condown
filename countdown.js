let endDate = new Date("1 Jan, 2025 00:00:00").getTime();
let startDate = new Date("1 Jan, 2024 00:00:00").getTime();

let countdownInterval = setInterval(updateTime, 1000);

function updateTime() {
  let currentTime = new Date().getTime();
  let distanceCov = currentTime - startDate;
  let distancePend = endDate - currentTime;

  let days = Math.floor(distancePend / (24 * 60 * 60 * 1000));
  let hrs = Math.floor((distancePend % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let min = Math.floor((distancePend % (60 * 60 * 1000)) / (60 * 1000));
  let sec = Math.floor((distancePend % (60 * 1000)) / 1000);

  document.querySelector(".days").innerHTML = `${days} Days`;
  document.querySelector(".hours").innerHTML = `${hrs} Hours`;
  document.querySelector(".mins").innerHTML = `${min} Minutes`;
  document.querySelector(".sec").innerHTML = `${sec} Seconds`;

  const totalDistance = endDate - startDate;
  const percentageDistance = (distanceCov / totalDistance) * 100;
  document.getElementById("progressbar").style.width = percentageDistance + "%";

  if (distancePend < 0) {
    clearInterval(countdownInterval);  
    document.querySelector(".containar").innerHTML = "<h1>EXPIRED</h1>";
    document.getElementById("progressbar").style.width = "100%";
  }
}
