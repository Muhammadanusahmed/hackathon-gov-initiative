var skillbtn = document.querySelector("button");
var skilldat3 = document.getElementById("dat3");
skillbtn.addEventListener("click", function () {
    if (skilldat3.style.display === "none") {
        skilldat3.style.display = "block";
    }
    else {
        skilldat3.style.display = "none";
    }
});
