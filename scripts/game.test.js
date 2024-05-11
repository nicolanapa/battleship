import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";

// Destroying a ship

describe("Carrier Test", () => {
	test("Trying to destroy a Carrier and sunking it using the Board", () => {
		let temp = new Ship(5, 0, false);

		let board = new Gameboard();

		// Vertical
		board.placeShip(temp, [1, 1], [5, 1]);
		board.receiveAttack([2, 1]);
		board.receiveAttack([3, 1]);
		board.receiveAttack([4, 1]);
		board.receiveAttack([5, 1]);
		board.receiveAttack([1, 1]);

		//board.placeShip(temp, [1, 2], [1, 7]);
		expect(temp).toHaveProperty("timesHit", 5);
		//board.board[2, 1].hit();
		expect(temp).toHaveProperty("sunk", true);
	});

	test("Checking if all ships are sunked after Carrier gets sunked", () => {
		let temp = new Ship(5, 0, false);

		let board = new Gameboard();

		// Horizontal
		board.placeShip(temp, [1, 2], [1, 6]);
		board.receiveAttack([1, 2]);
		board.receiveAttack([1, 3]);
		board.receiveAttack([1, 4]);
		board.receiveAttack([1, 5]);
		board.receiveAttack([1, 6]);
		expect(temp).toHaveProperty("timesHit", 5);
		expect(temp).toHaveProperty("sunk", true);
		expect(board).toHaveProperty("allSunked", true);
	});

	test("Checking if all ships are sunked after 'new' Carrier gets sunked", () => {
		let temp = new Ship(5, 0, false);

		let board = new Gameboard();

		// Horizontal
		board.placeShip(new Ship(5, 0, false), [1, 2], [1, 6]);
		board.receiveAttack([1, 2]);
		board.receiveAttack([1, 3]);
		board.receiveAttack([1, 4]);
		board.receiveAttack([1, 5]);
		board.receiveAttack([1, 6]);
		expect(board).toHaveProperty("allSunked", true);
	});

	test("Checking what happens when you hit a already hit ship", () => {
		let temp = new Ship(5, 0, false);

		let board = new Gameboard();

		// Horizontal
		board.placeShip(temp, [1, 2], [1, 6]);
		board.receiveAttack([1, 2]);
		board.receiveAttack([1, 3]);
		expect(temp).toHaveProperty("timesHit", 2);
		board.receiveAttack([1, 3]);
		expect(temp).toHaveProperty("timesHit", 2);
	});
});

test("Trying to destroy a Battleship", () => {
	let temp = new Ship(4, 0, false);

	temp.hit();

	expect(temp).toHaveProperty("timesHit", 1);
});

test("Trying to destroy a Cruiser", () => {
	let temp = new Ship(3, 0, false);

	temp.hit();

	expect(temp).toHaveProperty("timesHit", 1);
});

test("Trying to destroy a Submarine", () => {
	let temp = new Ship(3, 0, false);

	temp.hit();

	expect(temp).toHaveProperty("timesHit", 1);
});

test("Trying to destroy a Destroyer", () => {
	let temp = new Ship(2, 0, false);

	temp.hit();

	expect(temp).toHaveProperty("timesHit", 1);
});
