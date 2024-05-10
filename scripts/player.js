import { Gameboard } from "./gameboard.js";

class Player {
	constructor(/*player, */ robot) {
		// Make the name changeable
		this.player;

		this.board = new Gameboard();

		this.robot = robot;
	}
}

export { Player };
