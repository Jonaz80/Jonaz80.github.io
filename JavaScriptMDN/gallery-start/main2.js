var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');
function setMainImage(image) {
  displayedImage.setAttribute('src', image);
}

/* Looping through images */
for (i=1; i<6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i +'.jpg');
  thumbBar.appendChild(newImage);
  newImage.onclick = setMainImage(event.target.src)

}
/* Wiring up the Darken/Lighten button */

