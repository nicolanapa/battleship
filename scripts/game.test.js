import { Ship, Gameboard, Player } from "./game.js";

// Destroying a ship

describe("Carrier Test", () => {
	test("Trying to destroy a Carrier and sunking it using the Board", () => {
		let temp = new Ship(5, 0, false);

		temp.hit();

		//expect(temp.timesHit).toBe(1);
		expect(temp).toHaveProperty("timesHit", 1);

		let Board = new Gameboard();

		Board.placeShip(temp, [1, 1], [5, 1]);

		Board.receiveAttack([2, 1]);
		Board.receiveAttack([3, 1]);
		Board.receiveAttack([4, 1]);
		Board.receiveAttack([5, 1]);
		Board.receiveAttack([1, 1]);

		//Board.placeShip(temp, [1, 2], [1, 7]);
		expect(temp).toHaveProperty("timesHit", 5);
		//Board.board[2, 1].hit();
		expect(temp).toHaveProperty("sunk", true);
	});

	test("Checking if all ships are sunked after Carrier gets sunked", () => {
		let temp = new Ship(5, 4, false);

		let Board = new Gameboard();

		Board.placeShip(temp, [1, 1], [5, 1]);
		//Board.placeShip(temp, [1, 2], [1, 7]);
		Board.receiveAttack([2, 1]);
		expect(temp).toHaveProperty("timesHit", 5);
		//Board.board[2, 1].hit();
		expect(temp).toHaveProperty("sunk", true);
		expect(Board).toHaveProperty("allSunked", true);
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
