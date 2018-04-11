var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

btn.onclick = darkLight;



function setMainImage(image) {
  displayedImage.setAttribute('src', image);
}

/* Looping through images */
for (i=1; i<6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i +'.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = function(event) {
    setMainImage(event.target.src);
    }
  }

/* Wiring up the Darken/Lighten button */
function darkLight() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = "rgba(0,0,0,0.5)"; //"rgba(85,132,253,0.5)" Aidan's colour!
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = "rgba(0,0,0,0.0)";
  }
}
