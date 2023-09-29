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

function egg_timer(how_many_minutes) {
  let minute_in_miliseconds = 60000;
  let total_miliseconds = minute_in_miliseconds * how_many_minutes;
  console.log(total_miliseconds);

  let seconds = Math.floor(total_miliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;

  let interval_id = setInterval(() => {
    total_miliseconds = total_miliseconds - 1000;
    seconds = Math.floor(total_miliseconds / 1000);
    minutes = Math.floor(seconds / 60);
    remainingSeconds = seconds % 60;
    console.log(seconds);

    document.querySelector(
      ".timer_display"
    ).innerHTML = `${minutes}:${remainingSeconds}`;
    function hasTwoDigits(integer) {
      const integerStr = Math.abs(integer).toString(); // Convert to a string
      return integerStr.length === 2;
    }

    if (hasTwoDigits(remainingSeconds) === false) {
      document.querySelector(
        ".timer_display"
      ).innerHTML = `${minutes}:0${remainingSeconds}`;
    }

    if (seconds === 0) {
      console.log("Timer done");
      clearInterval(interval_id);
    }
  }, 1000);
}

function slider() {
  const numericInput = document.querySelector(".timer_show");
  const numericSlider = document.getElementById("numeric-slider");
  window.addEventListener("DOMContentLoaded", () => {
    console.log("DOm content loaded");
    numericSlider.value = 600;
    numericInput.innerHTML = 6.0;
  });

  numericSlider.addEventListener("input", () => {
    console.log("input event");

    const sliderValue = numericSlider.value / 100;
    const yolk = document.querySelector("#yolkColor");
    yolk.style.backgroundColor = colors[Math.floor(Math.round(sliderValue))];

    numericInput.innerHTML = numericSlider.value / 100;
    const inputString = numericInput.innerHTML;
    const floatValue = parseFloat(inputString);
    numericInput.innerHTML = floatValue; // 3.25
  });

  let button = document.querySelector("button");
  button.addEventListener("click", () => {
    egg_timer(parseFloat(document.querySelector(".timer_show").innerHTML));
    document.querySelector(".timer_show").remove();
    let timer_display = document.createElement("div");
    timer_display.classList.add("timer_display");
    document.querySelector(".container").appendChild(timer_display);
    document.querySelector("input").remove();
    document.querySelector("button").remove();
  });
}
slider();
