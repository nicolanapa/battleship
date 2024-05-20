import { justDisabler, turn, turnDisabler } from "./turnDom.js";
import { randomMove } from "./robot.js";
import { Ship } from "./ship.js";

// Will be also used when the player has to place its Ships
function checkIfBoardIsFree(player, sizeShip, randomPosition, verticalOrHorizontal, plusOrMinus) {
	if (verticalOrHorizontal === "vertical") {
		if (plusOrMinus === "minus") {
			for (let i = 0; i < sizeShip; i++) {
				if (player.board.board[randomPosition - i][randomPosition] !== 0) {
					return false;
				}
			}
		} else if (plusOrMinus === "plus") {
			for (let i = 0; i < sizeShip; i++) {
				if (player.board.board[randomPosition + i][randomPosition] !== 0) {
					return false;
				}
			}
		}
	} else if (verticalOrHorizontal === "horizontal") {
		if (plusOrMinus === "minus") {
			for (let i = 0; i < sizeShip; i++) {
				if (player.board.board[randomPosition][randomPosition - i] !== 0) {
					return false;
				}
			}
		} else if (plusOrMinus === "plus") {
			for (let i = 0; i < sizeShip; i++) {
				if (player.board.board[randomPosition][randomPosition + i] !== 0) {
					return false;
				}
			}
		}
	}

	return true;
}

function placeAllShips(player) {
	if (player.playerNumber === "player-two") {
		if (player.playerNumber === "player-two" && player.robot === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition - 3, randomPosition], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 4 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition, randomPosition - 3], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 4 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition - 2, randomPosition], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 3 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition, randomPosition - 2], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 3 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition - 2, randomPosition], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 3 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition, randomPosition - 2], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 3 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition - 1, randomPosition], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 2 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "vertical", "plus") === true) {
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
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "minus") === true) {
									player.board.placeShip(newShip, [randomPosition, randomPosition - 1], [randomPosition, randomPosition]);
									placedTheShip = true;
								} else {
									randomPosition = Math.floor(Math.random() * 10);
								}
							} else if (randomPosition + 2 <= 9) {
								if (checkIfBoardIsFree(player, sizeShip, randomPosition, "horizontal", "plus") === true) {
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

			// Maybe
			// alert(player.playerName + " has placed all its ships");
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
				let i = 0;

				while (i <= 5) {
					i += 1;
					let sizeShip = 0;
					let placedTheShip = false;

					if (i === 1) {
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
										let plusOrMinus = coordinateStart[0] < coordinateEnd[0] ? "minus" : "plus";
										if (checkIfBoardIsFree(player, sizeShip, coordinateStart, "vertical", plusOrMinus)) {
											
										} else {
										// Horizontal
									}
								}
							}
						}
					}

					placedTheShip = false;

					if (i === 2) {
						sizeShip = 4;

						while (placedTheShip === false) {
							let newShip = new Ship(sizeShip, 0, false);
						}
					}

					placedTheShip = false;

					if (i === 3) {
						sizeShip = 3;

						while (placedTheShip === false) {
							let newShip = new Ship(sizeShip, 0, false);
						}
					}

					placedTheShip = false;

					if (i === 4) {
						sizeShip = 3;

						while (placedTheShip === false) {
							let newShip = new Ship(sizeShip, 0, false);
						}
					}

					placedTheShip = false;

					if (i === 5) {
						sizeShip = 2;

						while (placedTheShip === false) {
							let newShip = new Ship(sizeShip, 0, false);
						}
					}
				}
			});

			placeShipPlayerTwo1.addEventListener("click", () => {});
		}
	} else {
		let leftSettings = document.querySelector(".settings .left");
		let placeShipPlayerOne = document.createElement("div");
		placeShipPlayerOne.textContent = "Place All Ships";

		leftSettings.appendChild(placeShipPlayerOne);

		placeShipPlayerOne.addEventListener("click", () => {});
	}
}

function nameSelection(player, playerName) {
	if (player.playerNumber === "player-two") {
		let rightSettings = document.querySelector(".settings .right");
		let smallRightSettings = document.querySelector(".small-right");

		let namePlayerTwo = document.createElement("div");
		namePlayerTwo.textContent = "Change Name";

		let namePlayerTwo1 = document.createElement("div");
		namePlayerTwo1.textContent = "Change Name";

		rightSettings.appendChild(namePlayerTwo);
		smallRightSettings.appendChild(namePlayerTwo1);

		namePlayerTwo.addEventListener("click", () => {
			let newName = prompt("Change your name", "");

			if (newName === "") {
				newName = "User" + Math.floor(Math.random() * 10000);
			}

			player.playerName = newName;
			playerName.textContent = newName;
		});

		namePlayerTwo1.addEventListener("click", () => {
			let newName = prompt("Change your name", "");

			if (newName === "") {
				newName = "User" + Math.floor(Math.random() * 10000);
			}

			player.playerName = newName;
			playerName.textContent = newName;
		});
	} else {
		let leftSettings = document.querySelector(".settings .left");
		let namePlayerOne = document.createElement("div");
		namePlayerOne.textContent = "Change Name";

		leftSettings.appendChild(namePlayerOne);

		namePlayerOne.addEventListener("click", () => {
			let newName = prompt("Change your name", "");

			if (newName === "") {
				newName = "User" + Math.floor(Math.random() * 10000);
			}

			player.playerName = newName;
			playerName.textContent = newName;
		});
	}
}

function boardPlacer(player) {
	let playerDiv = document.querySelector("." + player.playerNumber);
	let playerBoard = document.querySelector("." + player.playerNumber + " .gameboard");
	let playerName = document.querySelector("." + player.playerNumber + " .player-informations" + " .player-name");
	let playerWinStatus = document.querySelector("." + player.playerNumber + " .player-informations" + " .win-status");

	for (let i = 0; i < 10; i++) {
		for (let i2 = 0; i2 < 10; i2++) {
			let square = document.createElement("div");
			square.classList.add("square");
			square.textContent = "0";
			playerBoard.appendChild(square);

			square.addEventListener("click", () => {
				let tempSquareStatus = player.board.board[i][i2];

				player.board.receiveAttack([i, i2]);
				square.textContent = player.board.board[i][i2];

				// If the player doesn't click the same square
				if (tempSquareStatus !== player.board.board[i][i2]) {
					turn(player, playerBoard, playerWinStatus);
				}

				if (player.board.allSunked === true) {
					turnDisabler(player, playerWinStatus);
				}
			});
		}
	}

	playerName.textContent = String(player.playerName);

	if (player.playerNumber === "player-two" && player.robot === true) {
		document.querySelector("." + player.playerNumber + " .player-informations .robot").textContent = "ROBOT";
		document.querySelector(".main-gameboard .player-one .gameboard").classList.add("disabled");
		document.querySelector(".main-gameboard .player-one .gameboard").classList.add("disabled");
		/*document.querySelectorAll(".placement-right")[0].classList.add("disabled");
		document.querySelectorAll(".placement-right")[1].classList.add("disabled");*/

		// Random placement function for ships
	} else if (player.playerNumber === "player-two" && player.robot === false) {
		document.querySelector("." + player.playerNumber + " .player-informations .robot").textContent = "PLAYER";
	}

	placeAllShips(player);
	nameSelection(player, playerName);
	justDisabler();
}

export { boardPlacer };
