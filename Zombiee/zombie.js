const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let aim = new Image();
aim.src = 'aim.png';
let boardBG = new Image();
boardBG.src = 'board-bg.jpg';
let emptyHeart = new Image();
emptyHeart.src = 'empty_heart.png';
let fullHeart = new Image();
fullHeart.src = 'full_heart.png';
let zombieImg = new Image();
zombieImg.src = 'walkingdead.png';

let lives = 3;
let score = 0;
let zombies = [];
let gameOver = false;

let currentFrame = 0; 
let framesMax = 9;

class Zombie 
{
    constructor() 
    {
      this.x = canvas.width-1000;
      this.y = 1000+ Math.random() * (100);; 
      this.width = 1000 ;
      this.height = this.width * 1.5;
      this.speed = 20 + Math.random() * 30; 
      this.hit = false; 
      this.frameWidth = 200; 
      this.frameHeight = 312; 
      
    }
    animation()
    {
        if (currentFrame >= framesMax) 
        {
            currentFrame = -1; 
        }
        currentFrame +=1;
        const cutX = currentFrame * this.frameWidth; 
        c.drawImage(zombieImg, cutX, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);
    }
    update()
    {
        this.x-=this.speed;
    }
}

function drawboard()
{
    for(let i=0; i<3;i++)
    {
        if(i<lives)
        {
            c.drawImage(fullHeart,200+i*500,100,400,400);
        }
        else
        {
            c.drawImage(emptyHeart,200+i*500,100,400,400);
        }
    }
    c.fillStyle = "white";
    c.font = "300px Arial";
    c.fillText(`${score}`, canvas.width - 1000, 400);
}
function gameLoop()
{
    c.clearRect(0, 0, canvas.width, canvas.height);
    drawboard();
    zombie.animation();
    zombie.update();
    requestAnimationFrame(gameLoop);
}

let zombie = new Zombie();
drawboard();
requestAnimationFrame(gameLoop);