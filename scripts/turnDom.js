import { randomMove } from "./robot.js";

function turn(player, playerBoard, playerWinStatus) {
	let playerOneBoard = document.querySelector(".main-gameboard .player-one .gameboard");
	let playerTwoBoard = document.querySelector(".main-gameboard .player-two .gameboard");

	if (player.playerNumber === "player-one") {
		playerBoard.classList.add("blur");
		playerTwoBoard.classList.remove("blur");
	} else if (player.playerNumber === "player-two") {
		playerOneBoard.classList.remove("blur");
		playerBoard.classList.add("blur");

		if (player.board.allSunked === true) {
			turnDisabler(player, playerWinStatus);
		} else if (document.querySelector(".main-gameboard .player-two .player-informations .robot").textContent.includes("ROBOT")) {
			randomMove();
		}
	}
}

function turnDisabler(player, playerWinStatus) {
	let playerOneBoard = document.querySelector(".main-gameboard .player-one .gameboard");
	let playerTwoBoard = document.querySelector(".main-gameboard .player-two .gameboard");

	playerOneBoard.classList.remove("blur");
	playerTwoBoard.classList.remove("blur");
	playerOneBoard.classList.add("disabled");
	playerTwoBoard.classList.add("disabled");

	playerWinStatus.textContent = "You Lose! All your ships have been sunked";
	if (player.playerNumber === "player-one") {
		document.querySelector(".player-two .player-informations .win-status").textContent = "You Win! All Enemy's ships have been sunked";
	} else if (player.playerNumber === "player-two") {
		document.querySelector(".player-one .player-informations .win-status").textContent = "You Win! All Enemy's ships have been sunked";
	}
}

function justDisabler() {
	let playerOneBoard = document.querySelector(".main-gameboard .player-one .gameboard");
	let playerTwoBoard = document.querySelector(".main-gameboard .player-two .gameboard");

	playerOneBoard.classList.add("disabled");
	playerTwoBoard.classList.add("disabled");
}

function justEnabler(robotOrNot) {
	let playerOneBoard = document.querySelector(".main-gameboard .player-one .gameboard");
	let playerTwoBoard = document.querySelector(".main-gameboard .player-two .gameboard");

	if (robotOrNot) {
		playerOneBoard.classList.add("disabled");
		playerOneBoard.classList.add("blur");
		playerTwoBoard.classList.remove("disabled");
	} else {
		playerOneBoard.classList.remove("disabled");
		playerTwoBoard.classList.remove("disabled");
	}

	alert("You can play now!");
}

export { turn, turnDisabler, justDisabler, justEnabler };
