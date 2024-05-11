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

// Need to be moved to a single module
function boardPlacer(player) {
	let playerDiv = document.querySelector("." + player.playerNumber);
	let playerBoard = document.querySelector("." + player.playerNumber + " .gameboard");
	let playerName = document.querySelector("." + player.playerNumber + " .player-informations" + " .player-name");
	console.log(playerName);

	for (let i = 0; i < 10; i++) {
		for (let i2 = 0; i2 < 10; i2++) {
			let square = document.createElement("div");
			square.classList.add("square");
			square.textContent = "0";
			playerBoard.appendChild(square);

			square.addEventListener("click", () => {
				player.board.receiveAttack([i, i2]);
				square.textContent = player.board.board[i][i2];
			});
		}
	}

	playerName.textContent = String(player.playerName);
}

boardPlacer(playerOne);
boardPlacer(playerTwo);
