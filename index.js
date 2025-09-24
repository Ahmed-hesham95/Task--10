let ison = false;
let currentSpeed = 0;
let currentMode = "Cooling";
let temperature = 24;

const MIN_TEMP = 20;
const MAX_TEMP = 28;

function updatescreen() {
  const screen = document.getElementById("screen");
  screen.innerHTML = `<div>${
    ison ? "conditioner is off" : "conditioner is on"
  }</div>
      <div>Mode : ${currentMode}</div>
      <div>Speed : ${currentSpeed}</div>
      <div>Heat : ${temperature}°C</div>`;
}
function togglePower() {
  if (ison === false) {
    ison = true;
  } else if (ison === true) {
    ison = false;
  }
  updatescreen();
}
function changeSpeed() {
  if (ison === false) {
    alert("Turn on the air conditioner first");
  } else if (ison === true && currentSpeed < 3) {
    currentSpeed++;
  } else if (ison === true && currentSpeed >= 3) {
    currentSpeed = 1;
  }
  updatescreen();
}
function changeMode() {
  if (ison === false) {
    alert("Turn on the air conditioner first");
  } else if (ison === true && currentMode === "Cooling") {
    currentMode = "heating";
  } else if (ison === true && currentMode === "heating") {
    currentMode = "Cooling";
  }
  updatescreen();
}
function increaseTemp() {
  if (ison === false) {
    alert("Turn on the air conditioner first");
  } else if (ison === true && temperature < MAX_TEMP) {
    temperature++;
  } else if (ison === true && temperature >= MAX_TEMP) {
    alert("The temperature cannot be raised more than" + MAX_TEMP + "°C");
  }
  updatescreen();
}
function decreaseTemp() {
  if (ison === false) {
    alert("Turn on the air conditioner first");
  } else if (ison === true && temperature > MIN_TEMP) {
    temperature--;
  } else if (ison === true && temperature <= MIN_TEMP) {
    alert("The temperature cannot be lowered more than" + MIN_TEMP + "°C");
  }
  updatescreen();
}
