import { turn, turnDisabler } from "./turnDom.js";
import { randomMove } from "./robot.js";

function boardPlacer(player) {
	let playerDiv = document.querySelector("." + player.playerNumber);
	let playerBoard = document.querySelector("." + player.playerNumber + " .gameboard");
	let playerName = document.querySelector("." + player.playerNumber + " .player-informations" + " .player-name");
	let playerWinStatus = document.querySelector("." + player.playerNumber + " .player-informations" + " .win-status");

	for (let i = 0; i < 10; i++) {
		for (let i2 = 0; i2 < 10; i2++) {
			let square = document.createElement("div");
			square.classList.add("square");
			square.textContent = "0";
			playerBoard.appendChild(square);

			square.addEventListener("click", () => {
				let tempSquareStatus = player.board.board[i][i2];

				player.board.receiveAttack([i, i2]);
				square.textContent = player.board.board[i][i2];

				// If the player doesn't click the same square
				if (tempSquareStatus !== player.board.board[i][i2]) {
					turn(player, playerBoard, playerWinStatus);
				}

				if (player.board.allSunked === true) {
					turnDisabler(player, playerWinStatus);
				}
			});
		}
	}

	playerName.textContent = String(player.playerName);

	if (player.playerNumber === "player-two" && player.robot === true) {
		document.querySelector("." + player.playerNumber + " .player-informations .robot").textContent = "ROBOT";
		document.querySelector(".main-gameboard .player-one .gameboard").classList.add("disabled");
	} else if (player.playerNumber === "player-two" && player.robot === false) {
		document.querySelector("." + player.playerNumber + " .player-informations .robot").textContent = "PLAYER";
	}
}

function nameSelection() {
	let playerInformations = document.querySelector(".main-gameboard .player-one .player-informations");
	let namePlayerOne = document.createElement("button");
	namePlayerOne.textContent = "Change Name";
}

export { boardPlacer };
