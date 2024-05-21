import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { boardPlacer } from "./boardDom.js";

let playerOne = new Player("User" + Math.floor(Math.random() * 10000), "player-one", false);
let playerTwo = new Player(
	"User" + Math.floor(Math.random() * 10000),
	"player-two",
	JSON.parse(localStorage.getItem("isPlayerTwoRobot")) === true ? true : false
);

boardPlacer(playerOne);
boardPlacer(playerTwo);

let playersMode = document.querySelector(".two-players-mode");
let smallPlayersMode = document.querySelector(".small-two-players-mode");

if (playerTwo.robot) {
	playersMode.textContent = "2-Players Mode -> NO";
	smallPlayersMode.textContent = "2-Players Mode -> NO";
} else {
	playersMode.textContent = "2-Players Mode -> YES";
	smallPlayersMode.textContent = "2-Players Mode -> YES";
}

playersMode.addEventListener("click", () => {
	if (playerTwo.robot === false) {
		localStorage.setItem("isPlayerTwoRobot", true);

		location.reload();
	} else {
		localStorage.setItem("isPlayerTwoRobot", false);

		location.reload();
	}
});

smallPlayersMode.addEventListener("click", () => {
	if (playerTwo.robot === false) {
		localStorage.setItem("isPlayerTwoRobot", true);

		location.reload();
	} else {
		localStorage.setItem("isPlayerTwoRobot", false);

		location.reload();
	}

	//boardPlacer(playerTwo);
});
