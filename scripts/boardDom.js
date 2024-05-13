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
				player.board.receiveAttack([i, i2]);
				square.textContent = player.board.board[i][i2];

				if (player.board.allSunked === true) {
					playerWinStatus.textContent = "You Won! All ships have been sunked";
				}
			});
		}
	}

	playerName.textContent = String(player.playerName);

	turn(player);
}

function turn(player) {
	let playerSquares = document.querySelectorAll("." + player.playerNumber + " .gameboard .square");
	let playerOneBoard = document.querySelector(".main-gameboard .player-one .gameboard");
	let playerTwoBoard = document.querySelector(".main-gameboard .player-two .gameboard");

	for (let i = 0; i < playerSquares.length; i++) {
		playerSquares[i].addEventListener("click", () => {
			if (player.playerNumber === "player-one") {
				playerOneBoard.classList.add("blur");
				playerTwoBoard.classList.remove("blur");
			} else if (player.playerNumber === "player-two") {
				playerOneBoard.classList.remove("blur");
				playerTwoBoard.classList.add("blur");
			}
		});
	}
}

export { boardPlacer };
