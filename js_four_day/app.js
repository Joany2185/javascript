//--canvas--//

const canvas = document.querySelector('#pongCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 800, 800);

//---Render board--//

function renderBoard() {
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 800, 800);
}

//---Render ball--//

function renderBall(x = 10, y = 10) {
ctx.beginPath();
ctx.arc(x, y, 10, 0, 2 * Math.PI, false);
ctx.fillStyle = '#fff';
ctx.fill();

}

//--Setting moving Ball--//

let x = pongCanvas.width/2;
let y = pongCanvas.height - 30; //starting point

let vx = 2; 
let vy = 2; //speed

let direction;

setInterval(() => {
  renderBoard();
  x += vx;  //movement in X
  if (x === 0 || x === 800) {
    vx = -vx;
    }
  y += vy; //movement in y
  if (y === 30 || y === 800) {
    vy = -vy;
    }
    renderBall(x, y);
}, 17);

function move() {
    if (direction === 'right') {
      x += 2;
    }
    if (direction === 'left') {
      x -= 2;
    }
    return x;
}

//--bounce of the walls--//


