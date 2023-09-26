function drag_dot(){
    let the_dot = document.querySelector(".scroll_dot")
    the_dot.addEventListener("drag", (event) => {
        console.log(event.clientX)
        console.log(event.clientY)
    })
    the_dot.addEventListener("dragend", (event) => {
        
    })
}
drag_dot()