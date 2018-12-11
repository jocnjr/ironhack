const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,150);

let x = 0;
let goDir = 'right';

function updateCanvas() {
  ctx.clearRect(0,0,800,200);
  ctx.fillRect(x,0,100,100);
  
  if (x < 800) {
    goDir = 'right';
    x += 1;
  } else if (x === 800 || goDir == 'left') {
    goDir = 'left';
    x -= 1;
  }


}

setInterval(updateCanvas, 10)