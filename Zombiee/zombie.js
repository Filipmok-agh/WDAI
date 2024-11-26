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

let framesMax = 9;

const cursorImage = new Image();
cursorImage.src = 'aim.png';
cursorImage.onload = () => {
    const smallCanvas = document.createElement('canvas');
    const smallCtx = smallCanvas.getContext('2d');
    const targetSize = 64; 
    smallCanvas.width = targetSize;
    smallCanvas.height = targetSize;
    smallCtx.drawImage(cursorImage, 0, 0, targetSize, targetSize);
    canvas.style.cursor = `url(${smallCanvas.toDataURL()}), auto`;
};

class Zombie 
{
    constructor() 
    {
      this.x = canvas.width;
      this.width = 200 + Math.random() * 700 ;
      this.height = this.width * 1.5;
      this.y = canvas.height - this.height - Math.random() * 2000;
      this.speed = 20 + Math.random() * 50; 
      this.hit = false; 
      this.frameWidth = 200; 
      this.frameHeight = 312;
      this.currentFrame = 0; 
      
    }
    animation()
    {
        if (this.currentFrame >= framesMax) 
        {
            this.currentFrame = -1; 
        }
        this.currentFrame +=1;
        const cutX = this.currentFrame * this.frameWidth; 
        c.drawImage(zombieImg, cutX, 0, this.frameWidth, this.frameHeight, this.x, this.y, this.width, this.height);
    }
    update()
    {
        this.x-=this.speed;
    }
}

function drawHUD()
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

function gameEnd()
{
    zombies=[];
    gameOver=true;
    clearInterval(zombiespawn);
    popup();
}

function shot(event) 
{
    if(gameOver===false)
    {

    
    const rect = canvas.getBoundingClientRect();
    const mouseX = 75 + event.clientX - rect.left;
    const mouseY = 75 + event.clientY - rect.top;
    for (let i = 0; i < zombies.length; i++) 
    {
        const zombie = zombies[i];
        if (mouseX >= zombie.x && mouseX <= zombie.x + zombie.width && mouseY >= zombie.y &&mouseY <= zombie.y + zombie.height) 
        {
            zombies.splice(i,1);
            score+=20;
            return;
        }
    }
    if(score>=5)
    {
        score-=5;
    }
    }
}
function gameLoop()
{

    c.clearRect(0, 0, canvas.width, canvas.height);
    drawHUD();
    if(lives===0)
        {
            gameEnd();
        }
    if(gameOver===false)
    {
        for(let i = 0;i<zombies.length;i++)
        {
            if(zombies[i].x<=0)
                {
                     lives-=1;
                    zombies.splice(i,1);
                }
                else
                {
                    zombies[i].animation();
                    zombies[i].update();
                }
            }
        requestAnimationFrame(gameLoop);
    }
        
}
zombiespawn = setInterval(() => {
    let zombie = new Zombie();
    zombies.push(zombie);
}, 1000);
canvas.addEventListener('click', shot);
drawHUD();
requestAnimationFrame(gameLoop);