function randomMove() {
	setTimeout(() => {
		let move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
		let allSquares = document.querySelectorAll(".main-gameboard .player-one .gameboard .square");
		let tempSquareStatus = allSquares[move[0] * 10 + move[1]];
		console.log(move);
		//console.log(allSquares[move[0] * 10 + move[1]]);

		let uniqueMove = 0;
		while (uniqueMove === 0) {
			if (allSquares[move[0] * 10 + move[1]].textContent.includes("0")) {
				allSquares[move[0] * 10 + move[1]].click();
				uniqueMove = 1;
			} else if (
				!allSquares[move[0] * 10 + move[1]].textContent.includes("") &&
				!allSquares[move[0] * 10 + move[1]].textContent.includes("1")
			) {
				allSquares[move[0] * 10 + move[1]].click();
				uniqueMove = 1;
			} else if (
				allSquares[move[0] * 10 + move[1]].textContent.includes("") ||
				allSquares[move[0] * 10 + move[1]].textContent.includes("1")
			) {
				move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
				uniqueMove = 0;
			}
		}

		return move;
	}, 650);
}

export { randomMove };
