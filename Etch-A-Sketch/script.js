const butt = document.getElementById("btn");
const container = document.getElementById("container")

let divs_in_row = 16;

butt.addEventListener("click", (e) =>{
    container.textContent = "";
    divs_in_row = prompt("Enter nom of squares");
    if(divs_in_row < 0 || divs_in_row > 100) divs_in_row = 16

    for(let j = 1; j <= divs_in_row; j++){
    const new_div = document.createElement("div")
    new_div.setAttribute("style","height: auto;  width: 15px;  box-sizing: border-box; display: flex; flex-direction: column; justify-content: space-between; ")
    container.appendChild(new_div);
        for(let i = 1; i <= divs_in_row; i++ ){
            console.log("inner second loop");
            const new_child_div = document.createElement("div")
            new_child_div.classList.add("sub-div");
            new_div.appendChild(new_child_div);
        }

    }

});


document.body.addEventListener("mouseover", (e) => {
    if(e.target.classList.contains("sub-div")){
        e.target.style.backgroundColor = "green";
    }
})

document.body.addEventListener("mouseout", (e) => {
    if(e.target.classList.contains("sub-div")){
        e.target.style.backgroundColor = "gray";
    }
})


