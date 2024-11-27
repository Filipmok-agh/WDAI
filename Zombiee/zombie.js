const canvas = document.getElementById("gameCanvas");
const c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const aim = new Image();
aim.src = 'aim.png';
const boardBG = new Image();
boardBG.src = 'board-bg.jpg';
const emptyHeart = new Image();
emptyHeart.src = 'empty_heart.png';
const fullHeart = new Image();
fullHeart.src = 'full_heart.png';
const zombieImg = new Image();
zombieImg.src = 'walkingdead.png';
const sadMusic = new Audio("sad-music.mp3");


let lives = 3;
let score = 0;
let zombies = [];
let zombiespawn;
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
    sadMusic.currentTime = 0;
    zombies=[];
    gameOver=true;
    clearInterval(zombiespawn);
    popup();
    sadMusic.play();
    canvas.addEventListener('click',button);

}
function button(event)
{
    if(gameOver ===true)
    {
        const buttonWidth = 1500;
        const buttonHeight = 500;
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left - 250;
        const mouseY = event.clientY - rect.top -128;
        const buttonX = (canvas.width-buttonWidth)/2; 
        const buttonY = (canvas.height -buttonHeight)/ 2;          

        if (mouseX >= buttonX&&mouseX <= buttonX  + buttonWidth &&mouseY >= buttonY &&mouseY <= buttonY + buttonHeight)
        {
            gameStart();
        }
    }

}
function popup()
{
    
    const buttonWidth = 1500;
    const buttonHeight = 500;
    c.fillStyle= 'green';
    c.fillRect((canvas.width-buttonWidth/2)/2,(canvas.height)/2,buttonWidth,buttonHeight);
    c.fillStyle = "white";
    c.font = "300px Arial";
    c.fillText(`Zagraj ponownie`, (canvas.width-buttonWidth/2)/2,(canvas.height)/1.7,buttonWidth,buttonHeight);
}

function shot(event) 
{
    if(gameOver===false)
    {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left-64;
    const mouseY = 128 + event.clientY - rect.top;
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
function gameStart()
{
    sadMusic.pause();
    lives = 3;
    score = 0;
    zombies = [];
    gameOver = false;
    zombiespawn = setInterval
    (() => 
        {
            let zombie = new Zombie();
            zombies.push(zombie);
        }, 1000);
    requestAnimationFrame(gameLoop);
    canvas.addEventListener('click',shot);
}
gameStart();
