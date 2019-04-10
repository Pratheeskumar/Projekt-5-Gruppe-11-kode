let sliderList = [];
sliderList[0] = "";
sliderList[1] = "cat-pics/cat2.jpg";
sliderList[2] = "cat-pics/cat3.jpg";
sliderList[3] = "cat-pics/cat4.jpg";

let counter = 0;
document.getElementById("sliderInfo").innerText = (counter +1) + " of " + sliderList.length;

// Event Listener ? Handler
document.getElementById("btnNext").addEventListener("click", function() {
  counter++;

  // Reset counter
  if (counter >= sliderList.length) {
    counter = 0;
  }

  document.getElementById("sliderImage").src = sliderList[counter];
  document.getElementById("sliderInfo").innerText = (counter +1) + " of " + sliderList.length;
});

document.getElementById("btnPrev").addEventListener("click", function() {
  counter--;

  // Reset counter
  if (counter <0) {
    counter = sliderList.length -1;
  }

  document.getElementById("sliderImage").src = sliderList[counter];
  document.getElementById("sliderInfo").innerText = (counter +1) + " of " + sliderList.length;
});