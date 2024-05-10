import { Gameboard } from "./gameboard.js";

class Player {
	constructor(player, playerNumber, robot) {
		this.player = player;

		// "player-one" or "player-two" and it's used to select the right player div
		this.playerNumber = playerNumber;

		this.board = new Gameboard();

		this.robot = robot;
	}
}

export { Player };
