import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { randomMove } from "./robot.js";

test("Testing a random move", () => {
	let playerOne = new Player("Luca", "player-one", false);
	let robot = new Player("User", "player-two", true);
	playerOne.board.placeShip(new Ship(5, 0, false), [2, 3], [2, 7]);
	playerOne.board.placeShip(new Ship(3, 0, false), [3, 1], [5, 1]);
	playerOne.board.placeShip(new Ship(2, 0, false), [1, 0], [1, 1]);
	playerOne.board.placeShip(new Ship(4, 0, false), [6, 6], [6, 9]);
	playerOne.board.placeShip(new Ship(2, 0, false), [4, 3], [5, 3]);

	let move = randomMove();

	expect(move).toBeGreaterThanOrEqual(0);
	expect(move).toBeLessThanOrEqual(9);
});