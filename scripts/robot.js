function randomMove() {
	setTimeout(() => {
		let move = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
		let allSquares = document.querySelectorAll(".main-gameboard .player-one .gameboard .square");
		//console.log(move);
		//console.log(allSquares[move[0] * 10 + move[1]]);
		allSquares[move[0] * 10 + move[1]].click();
		return move;
	}, 500/*1000*/);
}

export { randomMove };
