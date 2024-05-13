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

				turn(player, playerBoard);

				if (player.board.allSunked === true) {
					playerWinStatus.textContent = "You Won! All ships have been sunked";
				}
			});
		}
	}

	playerName.textContent = String(player.playerName);
}

function turn(player, playerBoard) {
	let playerOneBoard = document.querySelector(".main-gameboard .player-one .gameboard");
	let playerTwoBoard = document.querySelector(".main-gameboard .player-two .gameboard");

	if (player.playerNumber === "player-one") {
		playerBoard.classList.add("blur");
		playerTwoBoard.classList.remove("blur");
	} else if (player.playerNumber === "player-two") {
		playerOneBoard.classList.remove("blur");
		playerBoard.classList.add("blur");
	}
}

export { boardPlacer };
