function move() {

    let elem = document.getElementById("greenBar");
    let stepValue = 0;
    let id = setInterval(frame, 500);
  
    function frame() {
  
      if (stepValue >= 100) {
        clearInterval(id);
        
      } else {
        elem.style.width = (stepValue + 10) + "%";
        elem.innerHTML = (stepValue + 10) + "%";
        stepValue=(stepValue + 10);
      }
    }
  }
  