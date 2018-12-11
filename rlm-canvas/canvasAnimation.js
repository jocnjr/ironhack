const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,150);

let x = 0;
function updateCanvas(){
  ctx.clearRect(0,0,800,200);
  ctx.fillRect(x,0,150,150);
  
  x += 1
}

setInterval(updateCanvas, 10)