let button = document.querySelector("button") as HTMLButtonElement
let dat3 = document.getElementById("dat3") as HTMLElement


button.addEventListener("click", function () {
    if (dat3.style.display === "none") {
        dat3.style.display = "block";  
    } else {
        dat3.style.display = "none";  
    }
});
