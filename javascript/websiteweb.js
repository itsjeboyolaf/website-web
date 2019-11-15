
var slider = document.getElementById("leestijd");
var output = document.getElementById("value");

output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value + " minuten";
}

