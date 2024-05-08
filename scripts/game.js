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
	constructor() {}
}

class Player {
	constructor() {}
}

export { Ship, Gameboard, Player };
