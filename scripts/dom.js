import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { boardPlacer } from "./boardDom.js";

let playerOne = new Player("User" + Math.floor(Math.random() * 10000), "player-one", false);
let playerTwo = new Player("User" + Math.floor(Math.random() * 10000), "player-two", true);

boardPlacer(playerOne);
boardPlacer(playerTwo);

let playersMode = document.querySelector(".two-players-mode");
let smallPlayersMode = document.querySelector(".small-two-players-mode");

playersMode.addEventListener("click", () => {
	if (playerTwo.robot === false) {
		playerTwo.robot = true;

		playersMode.textContent = "2-Players Mode -> YES";
	} else {
		playerTwo.robot = false;

		playersMode.textContent = "2-Players Mode -> NO";
	}

	//boardPlacer(playerTwo);
});

smallPlayersMode.addEventListener("click", () => {
	if (playerTwo.robot === false) {
		playerTwo.robot = true;

		smallPlayersMode.textContent = "2-Players Mode -> YES";
	} else {
		playerTwo.robot = false;

		smallPlayersMode.textContent = "2-Players Mode -> NO";
	}

	//boardPlacer(playerTwo);
});
