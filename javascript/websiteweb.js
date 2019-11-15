
var slider = document.getElementById("leestijd");
var output = document.getElementById("value");
var element = document.getElementById("dropdown")
var toggle = false
output.innerHTML = slider.value; 
slider.oninput = function() {
  output.innerHTML = this.value + " minuten";
}
function dropdown(){
    
    if (window.innerWidth >800 && toggle == false) {
       toggle = true;
       element.classList.toggle("dropdown");
    }
    
    else if(window.innerWidth >800 && toggle == true){
        return;
    }
    else{
    toggle = true;
    element.classList.toggle("dropdown");
    }
}

document.getElementById("dropdown").addEventListener("click", dropdown);


