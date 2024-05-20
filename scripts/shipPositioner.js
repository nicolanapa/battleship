import { checkIfBoardIsFree, checkIfBoardIsRandomlyFree } from "./boardChecker.js";
import { Ship } from "./ship.js";
import { justEnabler } from "./turnDom.js";

let shipsPlayerOne = false;
let shipsPlayerTwo = false;
let robot = false;

function playerPlacing(player) {
	let sizeShip = 0;
	let placedTheShip = false;

	sizeShip = 5;

	let newShip = new Ship(sizeShip, 0, false);

	while (placedTheShip === false) {
		let newShip = new Ship(sizeShip, 0, false);

		let coordinateStart = prompt(
			"Write your start coordinate, you are currently placing the Carrier, size 5. A coordinate is written in this format: [vertical position, horizontal position]",
			"[,]"
		);

		let coordinateEnd = prompt("Write your end coordinate, you are currently placing the Carrier, size 5", "[,]");

		coordinateStart = JSON.parse(coordinateStart);
		coordinateEnd = JSON.parse(coordinateEnd);

		if (coordinateStart[0] >= 0 && coordinateStart[0] <= 9 && coordinateStart[1] >= 0 && coordinateStart[1] <= 9) {
			if (coordinateEnd[0] >= 0 && coordinateEnd[0] <= 9 && coordinateEnd[1] >= 0 && coordinateEnd[1] <= 9) {
				if (coordinateStart[1] === coordinateEnd[1]) {
					// Vertical
					if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "vertical")) {
						player.board.placeShip(newShip, coordinateStart, coordinateEnd);
						placedTheShip = true;
					} else {
						alert("Wrong coordinate please retry");
					}
				} else {
					// Horizontal
					if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "horizontal")) {
						player.board.placeShip(newShip, coordinateStart, coordinateEnd);
						placedTheShip = true;
					} else {
						alert("Wrong coordinates please retry");
					}
				}
			}
		}

		placedTheShip = false;

		sizeShip = 4;

		while (placedTheShip === false) {
			let newShip = new Ship(sizeShip, 0, false);

			let coordinateStart = prompt("Write your start coordinate, you are currently placing the Battleship, size 4", "[,]");

			let coordinateEnd = prompt("Write your end coordinate, you are currently placing the Battleship, size 4", "[,]");

			coordinateStart = JSON.parse(coordinateStart);
			coordinateEnd = JSON.parse(coordinateEnd);

			if (coordinateStart[0] >= 0 && coordinateStart[0] <= 9 && coordinateStart[1] >= 0 && coordinateStart[1] <= 9) {
				if (coordinateEnd[0] >= 0 && coordinateEnd[0] <= 9 && coordinateEnd[1] >= 0 && coordinateEnd[1] <= 9) {
					if (coordinateStart[1] === coordinateEnd[1]) {
						// Vertical
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "vertical")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinate please retry");
						}
					} else {
						// Horizontal
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "horizontal")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinates please retry");
						}
					}
				}
			}
		}

		placedTheShip = false;

		sizeShip = 3;

		while (placedTheShip === false) {
			let newShip = new Ship(sizeShip, 0, false);

			let coordinateStart = prompt("Write your start coordinate, you are currently placing the Cruiser, size 3", "[,]");

			let coordinateEnd = prompt("Write your end coordinate, you are currently placing the Cruiser, size 3", "[,]");

			coordinateStart = JSON.parse(coordinateStart);
			coordinateEnd = JSON.parse(coordinateEnd);

			if (coordinateStart[0] >= 0 && coordinateStart[0] <= 9 && coordinateStart[1] >= 0 && coordinateStart[1] <= 9) {
				if (coordinateEnd[0] >= 0 && coordinateEnd[0] <= 9 && coordinateEnd[1] >= 0 && coordinateEnd[1] <= 9) {
					if (coordinateStart[1] === coordinateEnd[1]) {
						// Vertical
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "vertical")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinate please retry");
						}
					} else {
						// Horizontal
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "horizontal")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinates please retry");
						}
					}
				}
			}
		}

		placedTheShip = false;

		sizeShip = 3;

		while (placedTheShip === false) {
			let newShip = new Ship(sizeShip, 0, false);

			let coordinateStart = prompt("Write your start coordinate, you are currently placing the Submarine, size 3", "[,]");

			let coordinateEnd = prompt("Write your end coordinate, you are currently placing the Submarine, size 3", "[,]");

			coordinateStart = JSON.parse(coordinateStart);
			coordinateEnd = JSON.parse(coordinateEnd);

			if (coordinateStart[0] >= 0 && coordinateStart[0] <= 9 && coordinateStart[1] >= 0 && coordinateStart[1] <= 9) {
				if (coordinateEnd[0] >= 0 && coordinateEnd[0] <= 9 && coordinateEnd[1] >= 0 && coordinateEnd[1] <= 9) {
					if (coordinateStart[1] === coordinateEnd[1]) {
						// Vertical
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "vertical")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinate please retry");
						}
					} else {
						// Horizontal
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "horizontal")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinates please retry");
						}
					}
				}
			}
		}

		placedTheShip = false;

		sizeShip = 2;

		while (placedTheShip === false) {
			let newShip = new Ship(sizeShip, 0, false);

			let coordinateStart = prompt("Write your start coordinate, you are currently placing the Destroyer, size 2", "[,]");

			let coordinateEnd = prompt("Write your end coordinate, you are currently placing the Destroyer, size 2", "[,]");

			coordinateStart = JSON.parse(coordinateStart);
			coordinateEnd = JSON.parse(coordinateEnd);

			if (coordinateStart[0] >= 0 && coordinateStart[0] <= 9 && coordinateStart[1] >= 0 && coordinateStart[1] <= 9) {
				if (coordinateEnd[0] >= 0 && coordinateEnd[0] <= 9 && coordinateEnd[1] >= 0 && coordinateEnd[1] <= 9) {
					if (coordinateStart[1] === coordinateEnd[1]) {
						// Vertical
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "vertical")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinate please retry");
						}
					} else {
						// Horizontal
						if (checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, "horizontal")) {
							player.board.placeShip(newShip, coordinateStart, coordinateEnd);
							placedTheShip = true;
						} else {
							alert("Wrong coordinates please retry");
						}
					}
				}
			}
		}

		console.table(player.board.board);
	}
}

function randomPlacing(player) {
	let i = 0;
	while (i <= 5) {
		i += 1;
		let sizeShip = 0;
		let randomPosition = Math.floor(Math.random() * 10);
		let placedTheShip = false;

		if (i === 1) {
			sizeShip = 5;

			let newShip = new Ship(sizeShip, 0, false);

			if (Math.floor(Math.random() * 1000) % 2 === 0) {
				// Top to bottom
				if (randomPosition - 5 >= 0) {
					player.board.placeShip(newShip, [randomPosition - 4, randomPosition], [randomPosition, randomPosition]);
				} else if (randomPosition + 4 <= 9) {
					player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition + 4, randomPosition]);
				} else {
					new Error("Out of range");
				}
			} else {
				// Left to right
				if (randomPosition - 5 >= 0) {
					player.board.placeShip(newShip, [randomPosition, randomPosition - 4], [randomPosition, randomPosition]);
				} else if (randomPosition + 4 <= 9) {
					player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition, randomPosition + 4]);
				} else {
					new Error("Out of range");
				}
			}
		}

		if (i === 2) {
			sizeShip = 4;

			while (placedTheShip === false) {
				let newShip = new Ship(sizeShip, 0, false);

				if (Math.floor(Math.random() * 1000) % 2 === 0) {
					// Top to bottom
					if (randomPosition - 4 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition - 3, randomPosition], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 4 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition + 3, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				} else {
					// Left to right
					if (randomPosition - 4 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition - 3], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 4 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition, randomPosition + 3]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				}
			}
		}

		placedTheShip = false;

		if (i === 3) {
			sizeShip = 3;

			while (placedTheShip === false) {
				let newShip = new Ship(sizeShip, 0, false);

				if (Math.floor(Math.random() * 1000) % 2 === 0) {
					// Top to bottom
					if (randomPosition - 3 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition - 2, randomPosition], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 3 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition + 2, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				} else {
					// Left to right
					if (randomPosition - 3 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition - 2], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 3 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition, randomPosition + 2]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				}
			}
		}

		placedTheShip = false;

		if (i === 4) {
			sizeShip = 3;

			while (placedTheShip === false) {
				let newShip = new Ship(sizeShip, 0, false);

				if (Math.floor(Math.random() * 1000) % 2 === 0) {
					// Top to bottom
					if (randomPosition - 3 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition - 2, randomPosition], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 3 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition + 2, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				} else {
					// Left to right
					if (randomPosition - 3 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition - 2], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 3 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition, randomPosition + 2]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				}
			}
		}

		placedTheShip = false;

		if (i === 5) {
			sizeShip = 2;

			while (placedTheShip === false) {
				let newShip = new Ship(sizeShip, 0, false);

				if (Math.floor(Math.random() * 1000) % 2 === 0) {
					// Top to bottom
					if (randomPosition - 2 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition - 1, randomPosition], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 2 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition + 1, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				} else {
					// Left to right
					if (randomPosition - 2 >= 0) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition - 1], [randomPosition, randomPosition]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else if (randomPosition + 2 <= 9) {
						if (checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
							player.board.placeShip(newShip, [randomPosition, randomPosition], [randomPosition, randomPosition + 1]);
							placedTheShip = true;
						} else {
							randomPosition = Math.floor(Math.random() * 10);
						}
					} else {
						new Error("Out of range");
					}
				}
			}
		}
	}
}

function placeAllShips(player) {
	if (player.playerNumber === "player-two") {
		if (player.playerNumber === "player-two" && player.robot === true) {
			randomPlacing(player);

			shipsPlayerTwo = true;

			if (shipsPlayerOne && shipsPlayerTwo) {
				robot = true;
				justEnabler(robot);
			}
		} else if (player.playerNumber === "player-two" && player.robot === false) {
			let rightSettings = document.querySelector(".settings .right");
			let smallRightSettings = document.querySelector(".small-right");

			let placeShipPlayerTwo = document.createElement("div");
			placeShipPlayerTwo.textContent = "Place All Ships";

			let placeShipPlayerTwo1 = document.createElement("div");
			placeShipPlayerTwo1.textContent = "Place All Ships";

			rightSettings.appendChild(placeShipPlayerTwo);
			smallRightSettings.appendChild(placeShipPlayerTwo1);

			placeShipPlayerTwo.addEventListener("click", () => {
				playerPlacing(player);
				shipsPlayerTwo = true;

				if (shipsPlayerOne && shipsPlayerTwo) {
					robot = false;
					justEnabler(robot);
				}
			});

			placeShipPlayerTwo1.addEventListener("click", () => {
				playerPlacing(player);
				shipsPlayerTwo = true;

				if (shipsPlayerOne && shipsPlayerTwo) {
					justEnabler(robot);
				}
			});
		}
	} else {
		let leftSettings = document.querySelector(".settings .left");
		let placeShipPlayerOne = document.createElement("div");
		placeShipPlayerOne.textContent = "Place All Ships";

		leftSettings.appendChild(placeShipPlayerOne);

		placeShipPlayerOne.addEventListener("click", () => {
			playerPlacing(player);
			shipsPlayerOne = true;

			if (shipsPlayerOne && shipsPlayerTwo) {
				justEnabler(robot);
			}
		});
	}
}

export { placeAllShips };
