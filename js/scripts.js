
var canvas = document.getElementById('myCanvas');
canvas.width = 1920;
canvas.height = 600;

var ctx = canvas.getContext('2d');

var canvasElement = document.querySelector("#myCanvas");
var ctx = canvasElement.getContext("2d");

var skyY = 100;
var skyYDirection = 1;

function drawsky() {
    //generate the sky gradient
    var sky = ctx.createLinearGradient(0, skyY, 0, 0);
    sky.addColorStop(0, "#f8ac4b");
    sky.addColorStop(1, "#cc74a0");
    sky.addColorStop(1, "#614ea6");
    
    //draw the sky
    ctx.fillStyle = sky;
    ctx.fillRect(0, 0, 960, 408);
}

function animateSky() {
    //animate the sky
    skyY += skyYDirection;
}

function drawSand() {
    //draw the ground
    ctx.fillStyle = "bisque";
    ctx.fillRect(0, 297, 960, 111);
}


function clearCanvas() {
    //clear the canvas
    ctx.clearRect(0, 0, 960, 408);
}

function drawsun(x, y) {
    //draw the sun
    ctx.beginPath();
    ctx.arc(x, y, 60, 0, 2 * Math.PI, false);
    ctx.fillStyle = "#ED5C4E";
    ctx.fill();
}

var sunX = 700;
var sunY = 50;
var xDirection = -1;
var yDirection = 0.4;

function animateSun() {
    //animate the sun
    sunX += xDirection;
    sunY += yDirection;
}

//render the scene

function render() {
    //clear canvas
    clearCanvas();

    //layer / animate objs
    drawsky();
    animateSky();
    drawsun(sunX, sunY);
    animateSun();
    drawSand();

    //loop the render process
    window.requestAnimationFrame(render);
}

render();