import { create_scroll } from "./utils.js";

window.localStorage.clear();
window.localStorage.setItem("egg_size", "small")
console.log(window.localStorage);

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
      <div class="scroll_container"></div>
      <div class="settings_container">
        <div class="egg_sizes">
          <div class="small" id="selected_size">S</div>
          <div class="medium">M</div>
          <div class="large">L</div>
        </div>
        <div class="egg_type">
          <div class="normal_egg" id="selected_type">Normal Egg</div>
          <div class="eco_egg">Eco egg</div>
        </div>
      <button>Start</button>
  `;
  create_scroll();
  select_options_size();
  check_settings();
  start();
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


function select_options_size(){
  function remove_all_selected_size(){
    document.querySelectorAll("#selected_size").forEach((index) =>{
      index.id = "";
    })
  }
    let small = document.querySelector(".small")
    let medium = document.querySelector(".medium")
    let large = document.querySelector(".large")

    small.addEventListener("click", () => {
      if(window.localStorage.getItem("egg_size") !== null){
        window.localStorage.removeItem("egg_size")
      }
      remove_all_selected_size()
      window.localStorage.setItem("egg_size", "small")
      small.id = "selected_size"
      console.log(window.localStorage)
      check_settings()
    })

    medium.addEventListener("click", () => {
      if(window.localStorage.getItem("egg_size") !== null){
        window.localStorage.removeItem("egg_size")
      }
      remove_all_selected_size()
      window.localStorage.setItem("egg_size", "medium")
      medium.id = "selected_size"
      console.log(window.localStorage)
      check_settings();
    })

    large.addEventListener("click", () => {
      if(window.localStorage.getItem("egg_size") !== null){
        window.localStorage.removeItem("egg_size")
      }
      remove_all_selected_size()
      window.localStorage.setItem("egg_size", "large")
      large.id = "selected_size"
      console.log(window.localStorage)
      check_settings();
    })
}


export function check_settings(){
  let egg_size = window.localStorage.getItem("egg_size");
  let selected_size = document.querySelector(".selected").innerHTML;

  if(egg_size == "small" && selected_size == "Normal"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "5:00";
  }
  if(egg_size == "medium" && selected_size == "Normal"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "6:00";
  }
  if(egg_size == "large" && selected_size == "Normal"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "7:00";
  }


  if(egg_size == "small" && selected_size == "Soft"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "3:00";
  }
  if(egg_size == "medium" && selected_size == "Soft"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "4:00";
  }
  if(egg_size == "large" && selected_size == "Soft"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "5:00";
  }


  if(egg_size == "small" && selected_size == "Hard"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "6:00";
  }
  if(egg_size == "medium" && selected_size == "Hard"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "8:00";
  }
  if(egg_size == "large" && selected_size == "Hard"){
    console.log("yes")
    document.querySelector(".timer_show").innerHTML = "9:00";
  }
}

function start() {

  let button = document.querySelector("button");
  console.log(button)
  button.addEventListener("click", start_function1);
}

function start_function1(){
  if(document.querySelector(".scroll_container") !== null) {
    document.querySelector(".scroll_container").remove();
  }
  if(document.querySelector(".egg_sizes") !== null) {
    document.querySelector(".egg_sizes").remove();
  }
  if(document.querySelector(".egg_type") !== null) {
    document.querySelector(".egg_type").remove();
  }
  
  document.querySelector("button").id = "stop_button";
  document.querySelector("button").innerHTML = "Stop"
  let timer_value = document.querySelector(".timer_show").innerHTML

  function timeStringToFloat(timeString) {
    if (timeString.includes(":")) {
      const [minutes, seconds] = timeString.split(":").map(Number);
      return minutes + seconds / 60;
    } else {
      return parseInt(timeString, 10);
    }
  }
  let test = timeStringToFloat(timer_value)
  console.log(test);
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
select_options_size();
check_settings();
start();

