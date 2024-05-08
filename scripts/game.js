class Ship {
	constructor(length, timesHit, sunk) {
		this.length = length;
		this.timesHit = timesHit;
		this.sunk = sunk;
	}

	hit() {
		return (this.timesHit += 1);
	}

	isSunk() {
		if (this.timesHit === this.length) {
			return (this.sunk = true);
		} else {
			return (this.sunk = false);
		}
	}
}

class Gameboard {
	constructor() {
		this.board = [
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
		];
	}

	placeShip(ship, coordinateStart, coordinateEnd) {
		// Checking if it's Horizontal or Vertical
		if (coordinateStart[1] === coordinateEnd[1]) {
			for (let i = coordinateStart[0]; i < coordinateEnd[0]; i++) {
				this.board[i][coordinateStart[1]] = ship;
			}
		} else {
			for (let i = coordinateStart[1]; i < coordinateEnd[1]; i++) {
				this.board[coordinateStart[0]][i] = ship;
			}
		}
	}

	receiveAttack() {}
}

class Player {
	constructor() {}
}

export { Ship, Gameboard, Player };
