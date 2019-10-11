
var slider = document.getElementById("leestijd")
var output = document.getElementById("value")
console.log(slider);

output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value + " minuten";
}