let startTime = 0;
let running = false;
let elapsedTime = 0;
let time = document.getElementById("time");

function start()
{
    if(running==false)
    {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(update,10);
        running = true;
    }
}

function update()
{
    const now = Date.now();
    elapsedTime = now - startTime;
    time.textContent = format(elapsedTime);
}

function format(miliseconds)
{
    let seconds = Math.floor((miliseconds / 1000) % 60);
    let minutes = Math.floor(((miliseconds / 1000) / 60) % 60);

    seconds = String(seconds).padStart(2,"0");
    minutes = String(minutes).padStart(2,"0");

    return `${minutes}:${seconds}`;
}

function stop()
{
    if(running == true)
    {
        clearInterval(interval);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
}

function reset()
{
    clearInterval(interval);
    elapsedTime = 0;
    startTime = 0;
    running = false;
    time.textContent = "00:00"
}

document.getElementById("1").addEventListener('click',start);
document.getElementById("2").addEventListener('click',stop);
document.getElementById("3").addEventListener('click',reset);