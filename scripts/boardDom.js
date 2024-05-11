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
					playerWinStatus.textContent = "You Lost! All ships have been sunked";
				}
			});
		}
	}

	playerName.textContent = String(player.playerName);
}

export { boardPlacer };
