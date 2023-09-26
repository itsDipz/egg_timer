function slider(){
    
    const numericInput = document.querySelector(".timer_show");
    const numericSlider = document.getElementById("numeric-slider");
    window.addEventListener("DOMContentLoaded", () =>{
        numericSlider.value = 600;
        numericInput.innerHTML = 6.0;
    })
    numericSlider.addEventListener("input", () => {
      numericInput.innerHTML = numericSlider.value / 100;
      console.log(numericInput.value)
    });
}
slider()