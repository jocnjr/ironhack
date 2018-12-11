var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "#FF0000";
var y1 = 0;
var y2 = 0;
var y3 = 0;

function clearCanvas() {
  ctx.clearRect(0,0,700,450);
}

function updateCanvas(){
  y1 += 1;
  y2 += 2;
  y3 += 3;
  clearCanvas();
  ctx.fillRect( 50,y1,50,50);
  ctx.fillRect(150,y2,50,50);
  ctx.fillRect(250,y3,50,50);  
  window.requestAnimationFrame(updateCanvas);
}

window.requestAnimationFrame(updateCanvas);
