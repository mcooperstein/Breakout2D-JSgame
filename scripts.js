var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

function drawBall() {
    //draw ball
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

//Define Drawing Loop to update the drawing of each frame
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    //Collision system - ball bouncing off the walls
    if (x + dx < 0 + ballRadius || x + dx > canvas.width - ballRadius) {
        dx = -dx;
    }
    if (y + dy < 0 + ballRadius || y + dy > canvas.height - ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}
setInterval(draw, 10);
