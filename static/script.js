let i = 0;
const ROTATION_INCREMENT = 5;
const lines = document.getElementsByClassName('line');
const body = document.querySelector('.body');
const total = lines.length - 1;

let rotation = 0;
loop();
function loop() {
  window.requestAnimationFrame(loop);
  const line = lines[i];
  line.style = `transform: rotateZ(${rotation}deg)`;
  

  if (i === total) {
    i = 0;
  } else {
    i++;
  }
  rotation += ROTATION_INCREMENT;
}
