import { Gameboard } from "./gameboard.js";

class Player {
	constructor(playerName, playerNumber, robot) {
		this.playerName = playerName;

		// "player-one" or "player-two" and it's used to select the right player div
		this.playerNumber = playerNumber;

		this.board = new Gameboard();

		this.robot = robot;
	}
}

export { Player };
