/**
 * CONFIG PARAMS
 */
const TOTAL_LINES = 200;
const ROTATION_INCREMENT = 5;
const COLORS = [
  "#B1DDF1",
  "#0080FF",
  "#008ECC",
  "#0E4D92",
  "#008081"
];

/**
 * ELEMENTS
 */
const body = document.querySelector('.body');
const circle = document.querySelector('.circle');


/**
 * CREATE ELEMENTS
 */
for (let l = 0; l < TOTAL_LINES; l++ ) {
  const element = document.createElement('div');
  element.classList.add('line');
  circle.appendChild(element);
}

const lines = document.getElementsByClassName('line');
const total = lines.length - 1;
let i = 0;
let rotation = 0;

loop();
function loop() {
  window.requestAnimationFrame(loop);
  const line = lines[i];
  const totalTurns = Math.floor(rotation / 360);
  const colorIndex = Math.floor(totalTurns % COLORS.length);
  line.style = `transform: rotateZ(${rotation}deg); background-color: ${COLORS[colorIndex]};`;
  


  if (i === total) {
    i = 0;
  } else {
    i++;
  }
  rotation += ROTATION_INCREMENT;
}
