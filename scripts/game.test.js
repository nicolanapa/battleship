import { Ship, Gameboard, Player } from "./game.js";

// Destroying a ship

test.only("Trying to destroy a Carrier and sunking it", () => {
	let temp = new Ship(5, 0, false);

	temp.hit();

	//expect(temp.timesHit).toBe(1);
	expect(temp).toHaveProperty("timesHit", 1);

	for (let i = 1; i < 4; i++) {
		temp.hit();
	}

	let Gameboards = new Gameboard();

	Gameboards.placeShip(temp, [0, 1], [5, 1]);
	//Gameboards.placeShip(temp, [1, 2], [1, 7]);
	Gameboards.receiveAttack([2, 1]);

	expect(temp).toHaveProperty("sunk", true);
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
