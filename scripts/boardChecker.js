// Will be also used when the player has to place its Ships
function checkIfBoardIsFree(player, sizeShip, coordinateStart, coordinateEnd, verticalOrHorizontal) {
	let i2 = 0;

	if (verticalOrHorizontal === "vertical") {
		for (let i = coordinateStart[0]; i <= coordinateEnd[0]; i++) {
			i2 += 1;
			if (player.board.board[i][coordinateStart[1]] !== 0) {
				return false;
			}
		}
	} else if (verticalOrHorizontal === "horizontal") {
		for (let i = coordinateStart[1]; i <= coordinateEnd[1]; i++) {
			i2 += 1;
			if (player.board.board[coordinateStart[0]][i] !== 0) {
				return false;
			}
		}
	}

	if (i2 === sizeShip) {
		return true;
	} else {
		return false;
	}
}

function checkIfBoardIsRandomlyFree(player, sizeShip, randomPosition, verticalOrHorizontal, plusOrMinus) {
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

export { checkIfBoardIsFree, checkIfBoardIsRandomlyFree };
