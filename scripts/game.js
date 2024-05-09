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

		this.allSunked = false;
	}

	placeShip(ship, coordinateStart, coordinateEnd) {
		// Checking if it's Horizontal or Vertical and then placing the ship

		if (coordinateStart[1] === coordinateEnd[1]) {
			// Vertical
			for (let i = coordinateStart[0]; i <= coordinateEnd[0]; i++) {
				this.board[i][coordinateStart[1]] = ship;
			}
		} else {
			// Horizontal
			for (let i = coordinateStart[1]; i <= coordinateEnd[1]; i++) {
				this.board[coordinateStart[0]][i] = ship;
			}
		}
	}

	receiveAttack(coordinate) {
		// 1 -> Ship attacked
		// "nothing" -> Attacked and empty
		// 0 -> Not attacked and empty

		if (this.board[coordinate[0]][coordinate[1]] !== "nothing" && this.board[coordinate[0]][coordinate[1]] !== 0) {
			let temp = this.board[coordinate[0]][coordinate[1]];
			temp.hit();
			temp.isSunk();

			// Checks if all ships have been sunk after one gets sunked
			if (temp.sunk) {
				this.board[coordinate[0]][coordinate[1]] = 1;

				this.areAllSunked();
			} else {
				this.board[coordinate[0]][coordinate[1]] = 1;
			}
		} else if (this.board[coordinate[0]][coordinate[1]] === 0) {
			this.board[coordinate[0]][coordinate[1]] = "nothing";
		} else if (this.board[coordinate[0]][coordinate[1]] === "nothing") {
		}
	}

	areAllSunked() {
		this.allSunked = false;

		for (let i = 0; i < 10; i++) {
			for (let i2 = 0; i2 < 10; i2++) {
				if (this.board[i][i2] === 1) {
					this.allSunked = true;

					i = 10;
					i2 = 10;
				} else if (this.board[i][i2] !== "nothing" && this.board[i][i2] !== 0) {
					this.allSunked = false;
				}
			}
		}
	}
}

class Player {
	constructor() {
		this.player;

		this.Board = new Gameboard();

		this.robot = false;
	}
}

export { Ship, Gameboard, Player };
