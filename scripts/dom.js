import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

let playerOne = new Player("Aldo", "player-one", false);
let playerTwo = new Player("Moro", "player-two", false);

playerOne.board.placeShip(new Ship(5, 0, false), [2, 3], [2, 7]);
playerOne.board.placeShip(new Ship(3, 0, false), [3, 1], [5, 1]);
playerOne.board.placeShip(new Ship(2, 0, false), [1, 0], [1, 1]);
playerOne.board.placeShip(new Ship(4, 0, false), [6, 6], [6, 9]);
playerOne.board.placeShip(new Ship(2, 0, false), [4, 3], [5, 3]);

playerTwo.board.placeShip(new Ship(5, 0, false), [2, 3], [2, 7]);
playerTwo.board.placeShip(new Ship(3, 0, false), [3, 1], [5, 1]);
playerTwo.board.placeShip(new Ship(2, 0, false), [1, 0], [1, 1]);
playerTwo.board.placeShip(new Ship(4, 0, false), [6, 6], [6, 9]);

function boardPlacer(player) {
	let playerDiv = document.querySelector("." + player.playerNumber);
    let playerBoard = document.querySelector("." + player.playerNumber + " .gameboard");
    console.log(playerBoard);

    for (let i = 0; i < 10; i++) {
        for (let i2 = 0; i2 < 10; i2++) {
            //if (player.board.board[i][i2] !== "nothing" && player.board.board[i][i2] !== 0) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.textContent = "0";
                playerBoard.appendChild(square);
            /*} else {
                let square = document.createElement("div");
                square.classList.add("square");
                square.textContent = "0";
                playerBoard.appendChild(square);
            }*/
        }
    }
}

boardPlacer(playerOne);
boardPlacer(playerTwo);
