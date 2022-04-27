let img = new Image();
img.src = "https://outlet-studios.github.io/OutletStudios/pixil-frame-0.png";     //needs to be changed to link to our sprite
img.onload = function() {
  window.requestAnimationFrame(gameLoop);
};

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const SCALE = 2;
const WIDTH = 16;
const HEIGHT = 18;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

const CYCLE_LOOP = [0, 1, 0, 2];
let currentLoopIndex = 0;
let frameCount = 0;
let currentDirection = 0;
let keyPresses = {};

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;
}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

const MOVEMENT_SPEED = 1;
let positionX = 0;
let positionY = 0;

function gameLoop() {
  if (keyPresses.w) {
    positionY -= MOVEMENT_SPEED;
  } else if (keyPresses.s) {
    positionY += MOVEMENT_SPEED;
  }
  if (keyPresses.a) {
    positionX -= MOVEMENT_SPEED;
  } else if (keyPresses.d) {
    positionX += MOVEMENT_SPEED;
  }
  drawFrame(0, 0, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}
//canvas drawing
document.addEventListener('DOMContentLoaded', function() {
  ctx.fillStyle = "green"; 
  ctx.fillRect(0, 0, 1300, 540); 
});
//player stats
var playerHealth = 100
var playerMana = 100
var playerDamage = 10
var playerClassInt = 0

//class selection

if (playerClassStr == "Paladin" == "paladin")
  playerClassInt = 1;
  playerClassStr = "Paladin";
  playerHealth =+ 100;

if (playerClassStr == "Mage" == "mage")
  playerClassInt = 2;
  playerClassStr = "Mage";
  playerMana =+ 100;
if (playerClassStr == "Warrior" == "warrior")
  playerClassInt = 3;
  playerClassStr = "Warrior";
  playerDamage =+ 20;
  
//canvas
