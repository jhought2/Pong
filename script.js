const gameArea = document.getElementById('gameArea');
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');

let paddle1Y = 160;
let paddle2Y = 160;
let ballX = 392.5;
let ballY = 192.5;
let ballSpeedX = 3;
let ballSpeedY = 3;

document.addEventListener('keydown', (e) => {
    if (e.key === 'w' && paddle1Y > 0) {
        paddle1Y -= 20;
    }
    if (e.key === 's' && paddle1Y < 320) {
        paddle1Y += 20;
    }
    if (e.key === 'ArrowUp' && paddle2Y > 0) {
        paddle2Y -= 20;
    }
    if (e.key === 'ArrowDown' && paddle2Y < 320) {
        paddle2Y += 20;
    }
    paddle1.style.top = paddle1Y + 'px';
    paddle2.style.top = paddle2Y + 'px';
});

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballY <= 0 || ballY >= 385) {
        ballSpeedY = -ballSpeedY;
    }

    if (
        (ballX <= 10 && ballY >= paddle1Y && ballY <= paddle1Y + 80) ||
        (ballX >= 875 && ballY >= paddle2Y && ballY <= paddle2Y + 80)
    ) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballX <= 0 || ballX >= 885) {
        ballX = 392.5;
        ballY = 192.5;
    }

    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';
}

setInterval(moveBall, 16);