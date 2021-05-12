const canvas = document.getElementById("board");
const context = canvas.getContext("2d");

const board = Array.from({ length: 15 }, () => new Array(15).fill(0));

let color = 1

const createBoard = () => {
    context.beginPath();
    context.lineWidth = "1";
    context.moveTo(40, 40);
    context.lineTo(40, 600);
    context.lineTo(600, 600);
    context.lineTo(600, 40);
    context.lineTo(40, 40);
    for (let i = 1; i <= 13; i++) {
        context.moveTo(40 + 40 * i, 40);
        context.lineTo(40 + 40 * i, 600);
        context.moveTo(40, 40 + 40 * i);
        context.lineTo(600, 40 + 40 * i);
    }
    context.stroke();
    context.beginPath();
    context.arc(320, 320, 3, 0, Math.PI * 2);
    context.fill();
    context.stroke();
}

const palceStone = (x, y, color) => {
    context.beginPath();
    context.arc(x, y, 18, 0, Math.PI * 2);
    if (color === 3) {
        context.fillStyle = 'black';
    } else {
        context.fillStyle = 'white';
    }
    context.fill();
    context.stroke();
}

// canvas.addEventListener('mousemove', (event) => {
//     let { x, y } = { x: event.layerX, y: event.layerY };
//     console.log(x, y);
// });

const omokCheck = (x, y) => {
    while (0 <= x && x < 15) { }
}

canvas.addEventListener('click', (event) => {
    let [x, y] = [event.layerX * 1, event.layerY * 1];
    let modX = Math.round(x / 40);
    let modY = Math.round(y / 40);
    if (board[modX][modY]) {
        return;
    } else if (modX !== 0 && modX !== 16 && modY !== 0 && modY !== 16) {
        board[modX][modY] = color
        palceStone(modX * 40, modY * 40, color);
        color ^= 1 << 1;
    }
});

createBoard();
