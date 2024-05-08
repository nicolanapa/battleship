import { Ship, Gameboard, Player } from "./game.js";

// Destroying a ship

test("Trying to destroy a Carrier", () => {
	let temp = new Ship({
		length: 5,
		timesHit: 0,
		sunk: false,
	});

	expect(temp.hit()).toHaveProperty("timesHit", 1);
});

test("Trying to destroy a Battleship", () => {
	let temp = new Ship({
		length: 4,
		timesHit: 0,
		sunk: false,
	});

	expect(temp.hit()).toHaveProperty("timesHit", 1);
});

test("Trying to destroy a Cruiser", () => {
	let temp = new Ship({
		length: 3,
		timesHit: 0,
		sunk: false,
	});

	expect(temp.hit()).toHaveProperty("timesHit", 1);
});

test("Trying to destroy a Submarine", () => {
	let temp = new Ship({
		length: 3,
		timesHit: 0,
		sunk: false,
	});

	expect(temp.hit()).toHaveProperty("timesHit", 1);
});

test("Trying to destroy a Destroyer", () => {
	let temp = new Ship({
		length: 2,
		timesHit: 0,
		sunk: false,
	});

	expect(temp.hit()).toHaveProperty("timesHit", 1);
});