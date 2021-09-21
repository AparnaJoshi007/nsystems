let canvas;
let canvasContext;

window.onload = () => {
    canvas = document.getElementById("myCanvas");
    canvasContext = canvas.getContext("2d");
    requestAnimationFrame(animate);
}


//create te container that will hold the boincing balls.
let container = {
  x: 0,
  y: 0,
  width: '600',
  height: '400'
};
//create the array of circles that will be animated
let circle = {
  x: 50,
  y: 100,
  r: 10,
  vx: 6,
  vy: 5,
  color: 125
};

const animate = () => {
    canvasContext.fillStyle = "#000000";
    canvasContext.fillRect(container.x, container.y, container.width, container.height);

    canvasContext.fillStyle = 'hsl(' + circle.color++ + ', 100%, 50%)';
    canvasContext.beginPath();
    canvasContext.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
    canvasContext.fill()

    //time to animate our circles ladies and gentlemen.
    if (circle.x - circle.r + circle.vx < container.x || circle.x + circle.r + circle.vx > container.x + container.width) {
        circle.vx = -circle.vx;
    }

    if (circle.y + circle.r + circle.vy > container.y + container.height || circle.y - circle.r + circle.vy < container.y) {
        circle.vy = -circle.vy;
    }

    circle.x += circle.vx
    circle.y += circle.vy

  requestAnimationFrame(animate);
}
