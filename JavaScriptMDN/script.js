
      // JavaScript goes here
      function createParagraph() {
        var para = document.createElement('p');
        para.textContent = 'You clicked a button!' + '  Number of buttons: ' +buttons.length;
        document.body.appendChild(para);
      }
/*
  1. Get references to all the buttons on the page and sort them in an array.
  2. Loop through all the buttons and add a click event listener to each one.

  When any button is pressed, the createParagraph() function will be run.
*/
      var buttons = document.querySelectorAll('button');

      for (var i = 0; i <buttons.length ; i++) {
        buttons[i].addEventListener('click', createParagraph);
      }
