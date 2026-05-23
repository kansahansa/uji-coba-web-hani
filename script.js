<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HBD Bwabwa</title>
  <style>
    body { margin: 0; background: #000510; overflow: hidden; }
    canvas { display: block; }
  </style>
</head>
<body>
<canvas id="c"></canvas>
<script>
const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const arr = chars.split("");
const fontSize = 14;
const cols = Math.floor(canvas.width / fontSize);
const drops = Array(cols).fill(0).map(() => Math.random() * -100);

let lastTime = 0;
const speed = 55;

function drawMatrix(ts){
  if(ts - lastTime < speed){ requestAnimationFrame(drawMatrix); return; }
  lastTime = ts;

  ctx.fillStyle = "rgba(0,5,16,0.18)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = fontSize + "px monospace";

  for(let i = 0; i < drops.length; i++){
    const ch = arr[Math.floor(Math.random() * arr.length)];
    const bright = Math.random() > 0.85;
    ctx.fillStyle = bright ? "#80cfff" : "#0055cc";
    ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
    if(drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i] += 0.55;
  }

  drawText();
  requestAnimationFrame(drawMatrix);
}

function drawText(){
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  ctx.save();
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const fs = Math.min(canvas.width / 8, 72);
  ctx.font = "900 " + fs + "px Arial Black, Impact, sans-serif";

  ctx.shadowColor = "#00cc44";
  ctx.shadowBlur = 10;
  ctx.fillStyle = "#00ee44";
  ctx.fillText("HBD BWABWA FOR", cx, cy - fs * 0.6);
  ctx.fillText("16 YEARS OLD YEAYY", cx, cy + fs * 0.6);

  ctx.shadowBlur = 0;
  ctx.restore();
}

requestAnimationFrame(drawMatrix);

window.addEventListener("resize", ()=>{
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
</script>
</body>
</html>
