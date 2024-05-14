import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { randomMove } from "./robot.js";

test.skip("Testing a random move", () => {
	let playerOne = new Player("Luca", "player-one", false);
	let robot = new Player("User", "player-two", true);
	playerOne.board.placeShip(new Ship(5, 0, false), [2, 3], [2, 7]);
	playerOne.board.placeShip(new Ship(3, 0, false), [3, 1], [5, 1]);
	playerOne.board.placeShip(new Ship(2, 0, false), [1, 0], [1, 1]);
	playerOne.board.placeShip(new Ship(4, 0, false), [6, 6], [6, 9]);
	playerOne.board.placeShip(new Ship(2, 0, false), [4, 3], [5, 3]);

	let move = randomMove();

	expect(move[0]).toBeGreaterThanOrEqual(0);
	expect(move[0]).toBeLessThanOrEqual(9);
	expect(move[1]).toBeGreaterThanOrEqual(0);
	expect(move[1]).toBeLessThanOrEqual(9);
});

test.skip("Testing attacks", () => {
	let playerOne = new Player("Luca", "player-one", false);
	let robot = new Player("User", "player-two", true);
	playerOne.board.placeShip(new Ship(5, 0, false), [2, 3], [2, 7]);
	playerOne.board.placeShip(new Ship(3, 0, false), [3, 1], [5, 1]);
	playerOne.board.placeShip(new Ship(2, 0, false), [1, 0], [1, 1]);

	while (playerOne.board.allSunked !== true) {
		let move = randomMove();
		playerOne.board.receiveAttack(move);
	}

	expect(playerOne.board).toHaveProperty("allSunked", true);
});
