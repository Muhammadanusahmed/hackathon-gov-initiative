let skillbtn = document.querySelector("button") as HTMLButtonElement
let skilldat3 = document.getElementById("dat3") as HTMLElement


skillbtn.addEventListener("click", function () {
    if (skilldat3.style.display === "none") {
        skilldat3.style.display = "block";  
    } else {
        skilldat3.style.display = "none";  
    }
});
