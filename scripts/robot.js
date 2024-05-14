function randomMove() {
	// it should just return a pair of coordinate, then it will attack i
	// or from this function or from boardDom / turnDom
	setTimeout(() => {
		let move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
		let allSquares = document.querySelectorAll(".main-gameboard .player-one .gameboard .square");
		console.log(move);
		console.log(allSquares[move[0], move[1]]);
		allSquares[move[0], move[1]].click();
		return move;
	}, 1000);
}

export { randomMove };
