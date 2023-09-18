function egg_timer(how_many_minutes){
    let minute_in_miliseconds = 60000;
    let total_miliseconds = (minute_in_miliseconds * how_many_minutes);

    
    let seconds = Math.floor(total_miliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    
    let interval_id = setInterval(() =>{
        total_miliseconds = total_miliseconds - 1000;
        seconds = Math.floor(total_miliseconds / 1000);
        minutes = Math.floor(seconds / 60);
        remainingSeconds = seconds % 60;
        console.log(seconds)

        document.querySelector(".timer_display").innerHTML = `${minutes},${remainingSeconds}`
        if(seconds === 0){
            console.log("Timer done");
            clearInterval(interval_id)
        }
    },1000)
}

egg_timer(3);