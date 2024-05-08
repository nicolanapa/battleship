import { Ship, Gameboard, Player } from "./game.js";

// Destroying a ship

test("Trying to destroy a Carrier", () => {
	let temp = new Ship(5, 0, false);

	temp.hit();

	//expect(temp.timesHit).toBe(1);
	expect(temp).toHaveProperty("timesHit", 1);
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
