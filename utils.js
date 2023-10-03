export function create_scroll(){
    let array_of_defaults = [];
    let scroll_container = document.querySelector(".scroll_container")
    scroll_container.innerHTML = `
        <div class="back_arrow">back</div>
        <div class="options_container">
            <div class="hard_boiled">Hard boiled</div>
            <div class="default">Default boiled</div>
            <div class="soft_boiled">Soft boiled</div>
        </div>
        <div class="front_arrow">front</div>
    `;
    let hard_boiled = document.querySelector(".hard_boiled");
    let default_boiled = document.querySelector(".default");
    let soft_boiled = document.querySelector(".soft_boiled");
    
    array_of_defaults.push(hard_boiled);
    array_of_defaults.push(default_boiled);
    array_of_defaults.push(soft_boiled);
    array_of_defaults[0].classList.add("not_selected");
    array_of_defaults[1].classList.add("selected");
    array_of_defaults[2].classList.add("not_selected");

    document.querySelector(".back_arrow").addEventListener("click", () =>{
        let temp1 = array_of_defaults[0];
        let temp2 = array_of_defaults[1];
        let temp3 = array_of_defaults[2];
        array_of_defaults[0] = temp2;
        array_of_defaults[1] =  temp3;
        array_of_defaults[2] = temp1;
        
        let all_nodes_selected = document.querySelectorAll(".selected");
        let all_nodes_not_selected = document.querySelectorAll(".not_selected");
        all_nodes_selected.forEach((index) => {
            index.classList.remove("selected");
        })
        all_nodes_not_selected.forEach((index) => {
            index.classList.remove("not_selected");
        })


        array_of_defaults[0].classList.add("not_selected");
        array_of_defaults[1].classList.add("selected");
        array_of_defaults[2].classList.add("not_selected");

        let options_container = document.querySelector(".options_container");
        options_container.innerHTML = "";
        for (let index = 0; index < array_of_defaults.length; index++) {
            options_container.appendChild(array_of_defaults[index]);
        }

        switch(document.querySelector(".selected").innerHTML){
            case "Hard boiled":
                document.querySelector(".timer_show").innerHTML = "11:00";
                document.querySelector("input").value = 1100;
            break;
            case "Default boiled":
                document.querySelector(".timer_show").innerHTML = "6:00";
                document.querySelector("input").value = 600;
            break;
            case "Soft boiled":
                document.querySelector(".timer_show").innerHTML = "2:00";
                document.querySelector("input").value = 200;
            break;
        }
    })


    document.querySelector(".front_arrow").addEventListener("click", () =>{
        let temp1 = array_of_defaults[0];
        let temp2 = array_of_defaults[1];
        let temp3 = array_of_defaults[2];
        array_of_defaults[0] = temp3;
        array_of_defaults[1] =  temp1;
        array_of_defaults[2] = temp2;
        
        let all_nodes_selected = document.querySelectorAll(".selected");
        let all_nodes_not_selected = document.querySelectorAll(".not_selected");
        all_nodes_selected.forEach((index) => {
            index.classList.remove("selected");
        })
        all_nodes_not_selected.forEach((index) => {
            index.classList.remove("not_selected");
        })


        array_of_defaults[0].classList.add("not_selected");
        array_of_defaults[1].classList.add("selected");
        array_of_defaults[2].classList.add("not_selected");

        let options_container = document.querySelector(".options_container");
        options_container.innerHTML = "";
        for (let index = 0; index < array_of_defaults.length; index++) {
            options_container.appendChild(array_of_defaults[index]);
        }

        switch(document.querySelector(".selected").innerHTML){
            case "Hard boiled":
                document.querySelector(".timer_show").innerHTML = "11:00";
                document.querySelector("input").value = 1100;
            break;
            case "Default boiled":
                document.querySelector(".timer_show").innerHTML = "6:00";
                document.querySelector("input").value = 600;
            break;
            case "Soft boiled":
                document.querySelector(".timer_show").innerHTML = "2:00";
                document.querySelector("input").value = 200;
            break;
        }
    })
}