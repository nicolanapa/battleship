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

		this.AllSunked = false;
	}

	placeShip(ship, coordinateStart, coordinateEnd) {
		// Checking if it's Horizontal or Vertical and then placing the ship
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

	receiveAttack(coordinate) {
		if (this.board[coordinate[0]][coordinate[1]] !== "nothing" && this.board[coordinate[0]][coordinate[1]] !== 0) {
			let temp = this.board[coordinate[0]][coordinate[1]];
			temp.hit();
			temp.isSunk();

			// Checks if all ships have been sunk after one gets sunked
			if (temp.sunk === true) {
				this.areAllSunked();
			}

			this.board[coordinate[0]][coordinate[1]] = 1;
		} else if (this.board[coordinate[0]][coordinate[1]] === 0) {
			this.board[coordinate[0]][coordinate[1]] = "nothing";
		} else if (this.board[coordinate[0]][coordinate[1]] === "nothing") {
		}
	}

	areAllSunked() {
		// All ships can be considered sunked until proved
		this.Allsunked = true;

		for (let i = 0; i < 10; i++) {
			for (let i2 = 0; i2 < 10; i2++) {
				if (this.board[i][i2] !== "nothing" && this.board[i][i2] !== 0) {
					this.areAllSunked = false;

					i = 10;
					i2 = 10;
				}
			}
		}
	}
}

class Player {
	constructor() {}
}

export { Ship, Gameboard, Player };
