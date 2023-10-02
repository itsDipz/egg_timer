import { create_scroll } from "./utils.js";




const colors = [
  "#f88b26",
  "#f99229",
  "#fa992c",
  "#faa02f",
  "#fba733",
  "#fbae38",
  "#fcb43c",
  "#fcbb41",
  "#fdc147",
  "#fdc84c",
  "#fdce52",
  "#fed559",
];

function init_first_page(){
  clearInterval(window.localStorage.getItem("interval_id"));
  document.querySelector(".container").innerHTML = "";
  document.querySelector(".container").innerHTML = `
      <div class="timer_show">6:00</div>
      <div id="eggDisplay">
        <div id="yolkColor"></div>
      </div>
      <div class="default_boil_scroll"></div>
      <input
        type="range"
        id="numeric-slider"
        min="100"
        max="1200"
        step="1"
        value="200"
      />
      <button>Start</button>
  `;

  slider();
}


function egg_timer(how_many_minutes) {
  if(document.querySelector(".back_to_first_page") === null){
    let back_to_first_page = document.createElement("div");
    back_to_first_page.innerHTML = "back"
    back_to_first_page.classList.add("back_to_first_page");
    back_to_first_page.addEventListener("click", () => {
      init_first_page();
    })
    document.querySelector(".container").appendChild(back_to_first_page);
  }
  document.querySelector("#stop_button").removeEventListener("click", start_function1)

  let minute_in_miliseconds = 60000;
  let total_miliseconds = minute_in_miliseconds * how_many_minutes;
  console.log(total_miliseconds);

  let seconds = Math.floor(total_miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;



  let stop_button = document.querySelector("#stop_button");

  let interval_id = setInterval(() => {

    total_miliseconds = total_miliseconds - 1000;
    seconds = Math.floor(total_miliseconds / 1000);
    minutes = Math.floor(seconds / 60);
    remainingSeconds = seconds % 60;
    console.log(seconds);
    if(window.localStorage.getItem("seconds") !== null){
      window.localStorage.removeItem("seconds")
    }
    window.localStorage.setItem("seconds", seconds);
    console.log(window.localStorage)
    document.querySelector(
      ".timer_show"
    ).innerHTML = `${minutes}:${remainingSeconds}`;
    function hasTwoDigits(integer) {
      const integerStr = Math.abs(integer).toString(); // Convert to a string
      return integerStr.length === 2;
    }

    if (hasTwoDigits(remainingSeconds) === false) {
      document.querySelector(
        ".timer_show"
      ).innerHTML = `${minutes}:0${remainingSeconds}`;
    }

    if (seconds === 0) {
      console.log("Timer done");
      clearInterval(interval_id);
    }
  }, 1000);
  
  window.localStorage.setItem("interval_id", interval_id);

  if(document.querySelector("#stop_button") !== null){
    stop_button.addEventListener("click", stop_function)
  }
}




function slider() {
  const numericInput = document.querySelector(".timer_show");
  const numericSlider = document.getElementById("numeric-slider");
  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOm content loaded");
    numericSlider.value = 600;
    numericInput.innerHTML = "6:00";
  });

  numericSlider.addEventListener("input", () => {
    console.log("input event");

    const sliderValue = numericSlider.value / 100;
    const yolk = document.querySelector("#yolkColor");
    yolk.style.backgroundColor = colors[Math.floor(Math.round(sliderValue))];

    numericInput.innerHTML = numericSlider.value / 100;
    const inputString = numericInput.innerHTML;
    const floatValue = parseFloat(inputString);
    numericInput.innerHTML = floatValue; 
  });

  let button = document.querySelector("button");
  console.log(button)
  button.addEventListener("click", start_function1);
}

function start_function1(){
  if(document.querySelector("input") !== null){
    document.querySelector("input").remove();
  }

  document.querySelector("button").id = "stop_button";
  document.querySelector("button").innerHTML = "Stop"
  console.log(document.querySelector(".timer_show").innerHTML)
  let timer_value = document.querySelector(".timer_show").innerHTML

  function timeStringToFloat(timeString) {
    if (timeString.includes(":")) {
      const [minutes, seconds] = timeString.split(":").map(Number);
      return minutes + seconds / 60;
    } else {
      return parseInt(timeString, 10);
    }
  }
  egg_timer(timeStringToFloat(timer_value));
}

function stop_function(){
  let interval_id = window.localStorage.getItem("interval_id");
  clearInterval(interval_id)
  window.localStorage.clear();
  document.querySelector("#stop_button").removeEventListener("click", stop_function)
  document.querySelector("button").id = "";
  document.querySelector("button").innerHTML = "start";
  document.querySelector("button").addEventListener("click", start_function1)
}

function convert_seconds_to_minutes(seconds){
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  let the_return_minutes = parseFloat(`${minutes}.${remainingSeconds}`);
  return the_return_minutes;
}



create_scroll();
slider();
