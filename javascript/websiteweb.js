var slider = document.querySelector("#leestijd");
var output = document.querySelector("#value");
var element = document.querySelector("#dropdown");


output.innerHTML = slider.value;
slider.oninput = function () {
    output.innerHTML = this.value + " minuten";
}

function dropdown() {
        element.classList.toggle("dropdown");
}

document.getElementById("filter").addEventListener("click", dropdown);
