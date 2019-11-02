const lines = Array.from(document.getElementsByClassName('line'))
const duration = 10000
loop()
function loop() {
  window.requestAnimationFrame(loop)
  const p = (Date.now() % duration) / duration
  lines.forEach(function (line, i) {
    const r1 = i / lines.length
    const r2 = Math.sin(p * 2 * Math.PI) * 360
    const r = r1 * r2
    line.style = `transform: rotate(${r}deg)`
  })
}