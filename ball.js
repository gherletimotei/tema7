import { canvas, ctx } from './canvas';
import { paddleX, paddleWidth } from './paddle';
import { lives } from './lives';

let x = canvas.width/2;
let y = canvas.height-30;
let dx = 2;
let dy = -2;
let ballRadius = 10;
export let lives_local = lives;
let paddleX_local = paddleX;

export function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

export function updateBallPosition() {
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx
    }
    if (y + dy < ballRadius) {
        dy = -dy
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy
        } else {
            lives_local--
            if (!lives_local) {
                console.log('GAME OVER')
                document.location.reload()
            } else {
                x = canvas.width / 2
                y = canvas.height - 30
                dx = 3
                dy = -3
                paddleX_local = (canvas.width - paddleWidth) / 2
            }
        }
    }

    x += dx
    y += dy
}
