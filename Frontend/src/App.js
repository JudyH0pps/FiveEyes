export default class App {

    constructor() {
        // Board
        const board = document.querySelector(".board");
        board.addEventListener("click", (event) => {
            const stone = `<div class="stone"></div>`;
            console.log(event.target);
            event.target.innerHTML = stone;
        });
    }

    render() {

    }

}
