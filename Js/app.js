class LyNhatDong {
  constructor(x,y,img){
    this.x = x;
    this.y = y;
    this.imageObj = img;
    this.distance = 2;
    this.direction =3;
  }

  drawImg = function (ctx) {
    ctx.drawImage(this.imageObj,this.x,this.y,150,150);
  }
  moveDown = function () {
    this.y += this.distance;
  }
  moveUp = function () {
    this.y -= this.distance;
  }
  moveRight = function () {
    this.x += this.distance;
  }
  moveLeft = function () {
    this.x -= this.distance;
  }
}

let myCanvas = document.getElementById('myCanvas');
let myImage = document.getElementById('lynhatdong');
let ctx = myCanvas.getContext('2d');
let imageObj = new Image();
imageObj.src = myImage.src;
let lyNhatDong = new LyNhatDong(50, 50, imageObj);

window.onload = function () {
  updateNhatDong();
}
document.addEventListener('keyup', move);
const MOVERIGHT = 39;
    MOVEDOWN = 40;
    MOVELEFT = 37;
    MOVEUP = 38;
    SHIFTLEFT = 16;
    SPACE = 32;

function move(e) {
  switch (e.keyCode) {
    case MOVEDOWN:
      lyNhatDong.direction = 4;
      break;
    case MOVERIGHT:
      lyNhatDong.direction = 3;
      break;
    case MOVEUP:
      lyNhatDong.direction = 2;
      break;
    case MOVELEFT:
      lyNhatDong.direction = 1;
      break;
    case SHIFTLEFT:
      lyNhatDong.distance =4;
      break;
    case SPACE:
      lyNhatDong.distance = 2;
      break;
  }
}
function updateNhatDong() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
  lyNhatDong.drawImg(ctx);

  if (lyNhatDong.direction == 4) lyNhatDong.moveDown();
  if (lyNhatDong.direction == 3) lyNhatDong.moveRight();
  if (lyNhatDong.direction == 2) lyNhatDong.moveUp();
  if (lyNhatDong.direction == 1) lyNhatDong.moveLeft();

  requestAnimationFrame(updateNhatDong, 1000)
}