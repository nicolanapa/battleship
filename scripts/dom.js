import { Ship } from "./ship.js";
import { Gameboard } from "./gameboard.js";
import { Player } from "./player.js";
import { boardPlacer } from "./boardDom.js";

let playerOne = new Player("Aldo", "player-one", false);
//let playerTwo = new Player("Moro", "player-two", false);
let playerTwo = new Player("Moro", "player-two", true);

playerOne.board.placeShip(new Ship(5, 0, false), [2, 3], [2, 7]);
playerOne.board.placeShip(new Ship(3, 0, false), [3, 1], [5, 1]);
playerOne.board.placeShip(new Ship(2, 0, false), [1, 0], [1, 1]);
playerOne.board.placeShip(new Ship(4, 0, false), [6, 6], [6, 9]);
playerOne.board.placeShip(new Ship(2, 0, false), [4, 3], [5, 3]);

playerTwo.board.placeShip(new Ship(5, 0, false), [2, 3], [2, 7]);
/*playerTwo.board.placeShip(new Ship(3, 0, false), [3, 1], [5, 1]);
playerTwo.board.placeShip(new Ship(2, 0, false), [1, 0], [1, 1]);
playerTwo.board.placeShip(new Ship(4, 0, false), [6, 6], [6, 9]);*/

boardPlacer(playerOne);
boardPlacer(playerTwo);
