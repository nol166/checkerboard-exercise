// Your JS goes here
//show map
window.onLoad = function() {
  myCode()
}

// for (var column = 0; column < map.columns; column++) {
//   for (var row = 0; row < map.rows; row++) {
//     var tile = map.getTile(column, row);
//     var x = column * map.tileSize;
//     var y = row * map.tileSize;
//     drawTile(tile, x, y);
//   }
// }

function myCode() {
  console.log('booyah')
}

// create element
let container = document.getElementsByTagName('body')[0];

let colorsOne = [0,0,0];
let colorsTwo = [33,33,100];


for (var i = 0; i < 63; i++) {
  let square = document.createElement('div');

  if (i % 2 === 0) {
    decorateSquare(square, colorFade(colorsOne));
    setInterval(function() {
      console.log('test');
      square.style.backgroundColor = getRandomColor(); //() to execute the function!
    }, 1000);
  } else {
    decorateSquare(square, colorFade(colorsTwo));
  }

  container.append(square);
}


function colorFade(colors) {
  for (var i = 0; i < colors.length; i++) {
    colors[i] += 3;
  }
  return `rgb(${colors[0]},${colors[1]},${colors[2]})`
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function decorateSquare(sq, color) {
  sq.style.width = "11.1%"
  sq.style.paddingBottom = "11.1%"
  sq.style.backgroundColor = color
  // sq.style.border = "1px solid white"
  sq.style.float = "left"
}

// square.addEventListener('click', function(ev){

// })


//
// square.addEventListener('click', function(ev){
//   console.log(ev.target)
//   console.log("Hey i was clicked")
//   console.log(square)
// })
