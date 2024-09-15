var button = document.querySelector("button");
var dat3 = document.getElementById("dat3");
button.addEventListener("click", function () {
    if (dat3.style.display === "none") {
        dat3.style.display = "block";
    }
    else {
        dat3.style.display = "none";
    }
});
