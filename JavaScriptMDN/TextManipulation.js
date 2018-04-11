var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here   
  var code = input.slice(0,3); //first 3 chars (final argument is upto (not including))
  var station = input.slice(input.indexOf(';')+1); // slice 2nd argument optional - takes rest of string if ommitted

  var result = code.toUpperCase() + ': ' + station; // toUpper not necesary in example
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}