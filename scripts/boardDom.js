import { turn, turnDisabler } from "./turnDom.js";
import { randomMove } from "./robot.js";

function nameSelection(player, playerName) {
	if (player.playerNumber === "player-two") {
		let rightSettings = document.querySelector(".settings .right");
		let smallRightSettings = document.querySelector(".small-right");

		let namePlayerTwo = document.createElement("div");
		namePlayerTwo.textContent = "Change Name";

		let namePlayerTwo1 = document.createElement("div");
		namePlayerTwo1.textContent = "Change Name";

		rightSettings.appendChild(namePlayerTwo);
		smallRightSettings.appendChild(namePlayerTwo1);

		namePlayerTwo.addEventListener("click", () => {
			let newName = prompt("Change your name", "");

			if (newName === "") {
				newName = "User" + Math.floor(Math.random() * 10000);
			}

			player.playerName = newName;
			playerName.textContent = newName;
		});

		namePlayerTwo1.addEventListener("click", () => {
			let newName = prompt("Change your name", "");

			if (newName === "") {
				newName = "User" + Math.floor(Math.random() * 10000);
			}

			player.playerName = newName;
			playerName.textContent = newName;
		});
	} else {
		let leftSettings = document.querySelector(".settings .left");
		let namePlayerOne = document.createElement("div");
		namePlayerOne.textContent = "Change Name";

		leftSettings.appendChild(namePlayerOne);

		namePlayerOne.addEventListener("click", () => {
			let newName = prompt("Change your name", "");

			if (newName === "") {
				newName = "User" + Math.floor(Math.random() * 10000);
			}

			player.playerName = newName;
			playerName.textContent = newName;
		});
	}
}

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
		document.querySelector(".main-gameboard .player-one .gameboard").classList.add("disabled");
		/*document.querySelectorAll(".placement-right")[0].classList.add("disabled");
		document.querySelectorAll(".placement-right")[1].classList.add("disabled");*/

		// Random placement function for ships
	} else if (player.playerNumber === "player-two" && player.robot === false) {
		document.querySelector("." + player.playerNumber + " .player-informations .robot").textContent = "PLAYER";
	}

	nameSelection(player, playerName);
}

export { boardPlacer };
