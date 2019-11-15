
var slider = document.getElementById("leestijd");
var output = document.getElementById("value");
var element = document.getElementById("dropdown")

output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value + " minuten";
}
function dropdown(){
    element.classList.toggle("dropdown");
}

document.getElementById("dropdown").addEventListener("click", dropdown);

