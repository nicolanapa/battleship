function randomMove() {
	// it should just return a pair of coordinate, then it will attack i
	// or from this function or from boardDom / turnDom
	return [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10)];
}

export { randomMove };
